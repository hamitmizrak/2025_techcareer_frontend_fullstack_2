$(document).ready(function () {
  // Field
  let isUpdating = false;
  let updateId = null;
  const maxCharacters = 2000; // Blog Content Max Characters

  /////////////////////////////////////////////////////////////////////////////////
  // FUNCTIONS
  // ERROR
  // Hata mesajlarını Temizleme Fonksiyonu
  const clearErrors = () => {
    $(".error-message, .valid-message").remove();
  };

  // Hata Mesajlarını Gösterme Fonksiyonu
  const showError = (element, message) => {
    $(element).next(".error-message, .valid-message").remove();
    $(element).after(
      `<small class="text-warning error-message">${message}</small>`
    );
  };

  //Hata mesajlarında Ekleme Fonksiyonu
  const showValid = (element, message) => {
    $(element).next(".error-message, .valid-message").remove();
    $(element).after(
      `<small class="text-success valid-message">${message}</small>`
    );
  };

  /////////////////////////////////////////////////////////////////////////////////
  // Content Length Control
  // Blog içerik harf sınırı kontrolü eden fonksiyon
  const updateCharCount = () => {
    const content = $("#content").val(); // Blog Formunda ki Content(İçerik) alanını al
    const charCount = content.length; // Content(İçerik) alanındaki karakter sayısını al
    const remaingContentChars = maxCharacters - charCount; //Kalan harf sayısı göster
    $("#char-count").text(`Kalan Harf sayısınız: ${remaingContentChars}`); // Kalan harf sayısını labelde göster

    // Kalan Harf sayısı 0'dan küçükse,Karakter sınırını aştınız
    if (remaingContentChars < 0) {
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

  // Kullanıcı Blog Content(İçerik) alanına yazdıkça geriye kalan karakter sayısını güncelleyen Fonksiyon
  $("#content").on("input", function () {
    updateCharCount();
  });

  /////////////////////////////////////////////////////////////////////////////////
  // VALIDATION
  // Blog Form Kontrol Doğrulama(Validation)
  const validateForm = () => {
    clearErrors(); // Hata mesajlarını temizle
    let isValid = true; // Form doğrulama kontrolü
    const header = $("#header").val().trim(); // Blog Formunda ki Content(İçerik) alanını al
    const content = $("#content").val().trim(); // Blog Formunda ki Content(İçerik) alanını al
    const charCount = content.length; // Content(İçerik) alanındaki karakter sayısını al
    const author = $("#author").val().trim(); // Blog Formunda ki author(Yazar) alanını al
    const tags = $("#tags").val().trim(); // Blog Formunda ki tags(Etiket) alanını al

    // HEADER
    if (header === "") {
      showError("#header", "Başlık alanı boş bırakılamaz.");
      isValid = false;
    } else {
      showValid("#header", "Başlık alanı geçerli.");
    }

    // CONTENT
    if (content === "") {
      showError("#content", "İçerik alanı boş bırakılamaz.");
      isValid = false;
    } else if (charCount > maxCharacters) {
      showError("#content", "İçerik alanı 2000 karakter fazla olamaz.");
      isValid = false;
    } else {
      showValid("#content", "İçerik alanı geçerli.");
    }

    // AUTHOR
    if (author === "") {
      showError("#author", "Yazar alanı boş bırakılamaz.");
      isValid = false;
    } else {
      showValid("#author", "Yazar alanı geçerli.");
    }

    // TAGS
    if (tags === "") {
      showError("#tags", "Blog Etiket alanı boş bırakılamaz.");
      isValid = false;
    } else {
      showValid("#tags", "Blog Etiket alanı geçerli.");
    }
    return isValid;
  };

  /////////////////////////////////////////////////////////////////////////////////
  // Kullanıcı İnput değerine veri girdiğinde hatalar yoksa hata mesajını göstermesin
  $("#header, #content, #author, #tags").on("input", function () {
    //clearErrors();
    const inputField = $(this);
    const inputFieldValue = inputField.val().trim();
    if (inputFieldValue === "") {
      showError("#tags", "Bu alanı boş bırakılamaz.");
    } else {
      showValid(inputField, "Geçerli");
    }
  });

  // Formu içeriklerini Temizleme(Sıfırlama)
  const resetForm = () => {
    $("#blog-form")[0].reset();
    isUpdating = false;
    updateId = null;
    //
    clearErrors();
    updateCharCount();
  };

  /////////////////////////////////////////////////////////////////////////////////
  // Hata Yönetimi Fonksiyonu
  const handleError = (xhr, status, error) => {
    //console.error("İşlem başarısız:",error);
    console.error(`İşlem başarısız: ${error}`);
    alert(
      "Beklenmeyen bir hata meydana gelmiştir, Lütfen sonra tekrar deneyiniz."
    );
  };

  /////////////////////////////////////////////////////////////////////////////////
  // CRUD
  // Blog Ekleme/Update
  $("#blog-form").on("submit", function (event) {
    // Browser sen dur ben biliyorum ne yapacağımı
    event.preventDefault();
    // Form Doğrulama
    if (!validateForm()) {
      return;
    }

    // Data
    const blogData = {
      header: $("#header").val(),
      content: $("#content").val(),
      author: $("#author"),
      tags: $("#tags").val(),
      _csrf: $("input[name='_csrf']").val(),
    };

    // Update
    if (isUpdating && updateId) {
      $.ajax({
        url: `/blog/api/${updateId}`,
        method: "PUT",
        data: blogData,
        success: function (data) {
          console.log("Güncelleme işlemi başarılı", data);
          fetchBlogList();
          resetForm();
        },
        error: handleError,
      });
    } else {
      // Create
      $.ajax({
        url: "/blog/api/",
        method: "POST",
        data: blogData,
        success: function (data) {
          console.log("Blog Ekleme işlemi başarılı", data);
          fetchBlogList();
          resetForm();
        },
        error: handleError,
      });
    } //end else
  }); //end Blog Ekleme

  // Html tablosundaki ("#blog-table tbody") satırı Düzenle butonuna tıkladığımızda
  // Formu doldursun
  $("#blog-table tbody").on("click", ".edit-btn", function () {
    const row = $(this).closest("tr");
    const id = row.data("id");
    $("#header").val(row.find("td:eq(1)").text());
    $("#content").val(row.find("td:eq(2)").text());
    $("#author").val(row.find("td:eq(3)").text());
    $("#tags").val(row.find("td:eq(4)").text());

    isUpdating = true;
    // 1.YOL
    updateId = id;
    // 2.YOL (Local Storage)
    $("#submit-btn").text("Güncelle");
  });

  // Blog List
  const fetchBlogList = () => {
    $.ajax({
      url: "/blog/api/",
      method: "GET",
      success: function (data) {
        const $tbody = $("#blog-table tbody").empty();
        data.forEach((item) => {
          $tbody.append(`
            <tr data-id="${item._id}">
              <td>${item._id}</td>
              <td>${item.header}</td>
              <td>${item.content}</td>
              <td>${item.author}</td>
              <td>${item.tags}</td>
              <td>${item.views}</td>
              <td>${item.status}</td>
              <td>${item.dateInformation}</td>
              <td>
                <button class="btn btn-warning btn-sm edit-btn" data-id="${blog._id}">Düzenle</button>
                <button class="btn btn-danger btn-sm delete-btn" data-id="${blog._id}">Sil</button>
              </td>
            </tr>
          `); //end append
        }); // end forEach
      },
      error: handleError,
    });
  }; // end fetchBlogList

  // Blog Bulma
  
  // Blog Silme
  $("#blog-table tbody").on("click", ".delete-btn", function () {
    const deleteId = $(this).closest("tr").data("id");
    if (!confirm(`${deleteId} numaralı ID Silmek istediğinizden emin misiniz?`)) 
      return;
    
    $.ajax({
      url: `/blog/api/${deleteId}`,
      method: "DELETE",
      //success:  fetchBlogList()
      success: function (data) {
        console.log("Silme işlemi başarılı", data);
        fetchBlogList();
      },
      error: handleError,
    }); //end ajax
  }); //end confirm

  fetchBlogList();
  updateCharCount(); //Başlangıçta karakter sayısını güncelle
}); // end document.ready
