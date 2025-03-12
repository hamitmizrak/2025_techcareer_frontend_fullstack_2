$(document).ready(function () {
  let isUpdating = false;
  let updateId = null;
  const maxCharacters = 2000;

  const clearErrors = () => {
    $(".error-message, .valid-message").remove();
  };

  const showError = (element, message) => {
    $(element).next(".error-message, .valid-message").remove();
    $(element).after(
      `<small class="text-warning error-message">${message}</small>`
    );
  };

  const showValid = (element, message) => {
    $(element).next(".error-message, .valid-message").remove();
    $(element).after(
      `<small class="text-success valid-message">${message}</small>`
    );
  };

  const updateCharCount = () => {
    const content = $("#content").val();
    const charCount = content.length;
    const remainingChars = maxCharacters - charCount;
    $("#char-count").text(`Kalan Harf sayısı: ${remainingChars}`);

    if (remainingChars < 0) {
      $("#char-count").removeClass("text-success").addClass("text-danger");
      showError(
        "#content",
        "Karakter sınırını aştınız. En fazla 2000 karakter girebilirsiniz."
      );
    } else {
      $("#char-count").removeClass("text-danger").addClass("text-success");
      $(".error-message").remove();
    }
  };

  $("#content").on("input", function () {
    updateCharCount();
  });

  const validateForm = () => {
    clearErrors();
    let isValid = true;
    const header = $("#header").val().trim();
    const content = $("#content").val().trim();
    const author = $("#author").val().trim();
    const tags = $("#tags").val().trim();

    if (!header) {
      showError("#header", "Başlık alanı boş bırakılamaz.");
      isValid = false;
    }
    if (!content || content.length > maxCharacters) {
      showError("#content", "İçerik alanı uygun değil.");
      isValid = false;
    }
    if (!author) {
      showError("#author", "Yazar alanı boş bırakılamaz.");
      isValid = false;
    }
    if (!tags) {
      showError("#tags", "Etiket alanı boş bırakılamaz.");
      isValid = false;
    }
    return isValid;
  };

  $("#blog-form").on("submit", function (event) {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }

    const blogData = {
      header: $("#header").val(),
      content: $("#content").val(),
      author: $("#author").val(),
      tags: $("#tags").val(),
      _csrf: $("input[name='_csrf']").val(),
    };

    const ajaxOptions = {
      url: isUpdating ? `/blog/api/${updateId}` : "/blog/api/",
      method: isUpdating ? "PUT" : "POST",
      data: blogData,
      success: function (data) {
        console.log("İşlem başarılı", data);
        fetchBlogList();
        resetForm();
      },
      error: function (xhr, status, error) {
        console.error("İşlem başarısız:", error);
      },
    };

    $.ajax(ajaxOptions);
  });

$("#blog-table tbody").on("click", ".edit-btn", function () {
  const row = $(this).closest("tr");
  updateId = row.data("id");

  if (!updateId) {
    alert("Bu blog kaydının ID’si eksik, düzenleme yapılamaz!");
    return;
  }

  $("#header").val(row.find("td:eq(1)").text());
  $("#content").val(row.find("td:eq(2)").text());
  $("#author").val(row.find("td:eq(3)").text());
  $("#tags").val(row.find("td:eq(4)").text());
  isUpdating = true;
  $("#submit-btn").text("Güncelle");

  console.log("Güncellenen ID:", updateId);
});


$("#blog-table tbody").on("click", ".delete-btn", function () {
  const deleteId = $(this).closest("tr").data("id");

  if (!deleteId) {
    alert("Silinecek blog ID’si bulunamadı!");
    return;
  }

  if (!confirm(`${deleteId} numaralı ID'yi silmek istediğinize emin misiniz?`))
    return;

  $.ajax({
    url: `/blog/api/${deleteId}`,
    method: "DELETE",
    success: function (data) {
      console.log("Silme işlemi başarılı", data);
      fetchBlogList();
    },
    error: function (xhr, status, error) {
      console.error("Silme işlemi başarısız:", error);
    },
  });
});


  const fetchBlogList = () => {
    $.ajax({
      url: "/blog/api/",
      method: "GET",
      success: function (data) {
        const $tbody = $("#blog-table tbody").empty();
        data.forEach((item) => {
          $tbody.append(`
            <tr data-id="${item.id}">
              <td>${item.id}</td>
              <td>${item.header}</td>
              <td>${item.content}</td>
              <td>${item.author}</td>
              <td>${item.tags}</td>
              <td>${item.createdAt}</td>
              <td>
                <button class="btn btn-warning btn-sm edit-btn">Düzenle</button>
                <button class="btn btn-danger btn-sm delete-btn">Sil</button>
              </td>
            </tr>
          `);
        });
      },
      error: function (xhr, status, error) {
        console.error("Listeleme başarısız:", error);
      },
    });
  };

  fetchBlogList();
  updateCharCount();
});
