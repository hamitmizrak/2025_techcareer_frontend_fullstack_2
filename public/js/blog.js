// Sayfa Yüklendiğinde Çalışan Kod
// Bu satır sayfa tamamen yüklendikten sonra kodun çalışmasını sağlar.
// Yani sayfa yüklenmedn önce Javascript çalışmaz ve böylikle hata alınmaz
$(document).ready(function () {
  // Global Varaible
  // Eğer blog güncelleniyorsa true olur eğer yeni blog ekliyorsa false
  let isUpdating = false;

  // Güncellenen blogun blog ID'sini tutar
  let updateId = null;

  // Blog içeriği için maksimum karakter sınırını belirler
  const maxCharacters = 2000;

  ///////////////////////////////////////////////////
  // Formu Temizleyen Fonksiyon
  const resetForm = () => {
    $("#header").val("");
    $("#content").val("");
    $("#char-count").text(`Kalan Harf sayısı: ${maxCharacters}`);
    $("#author").val("");
    $("#tags").val("");
    $("#category").val("Seçiniz");
    isUpdating = false;
    updateId = null;
  };
  ///////////////////////////////////////////////////
  // Hataları Temizle
  // Bu fonksiyon ile önceki hata ve başarılı mesajları ortadan kaldırır.
  const clearErrors = () => {
    $(".error-message, .valid-message").remove();
  };

  ///////////////////////////////////////////////////
  // Hataları Gösterme
  // Eğer kullancıı formda bir hata yaparsa (boş bırakma, karakter sınırı aşma vb)
  // gibi durumlarda hata mesajını eklemeye yarar
  const showError = (element, message) => {
    $(element).next(".error-message, .valid-message").remove();
    $(element).after(
      `<small class="text-warning error-message">${message}</small>`
    );
  };

  ///////////////////////////////////////////////////
  // Başarılı Mesaj Gösterme
  // Eğer kullanıcı doğru bir şekilde veri girdiyse başarılı yazısını yazsın
  const showValid = (element, message) => {
    $(element).next(".error-message, .valid-message").remove();
    $(element).after(
      `<small class="text-success valid-message">${message}</small>`
    );
  };

  ///////////////////////////////////////////////////
  // Blog Kategorisi(Manuel ekleme)
  const categories = ["Seçiniz","Teknoloji", "Spor", "Sağlık", "Eğlence", "Eğitim"];
  categories.forEach((category) => {
    $("#category").append(`<option value="${category}">${category}</option>`);
  });

  ///////////////////////////////////////////////////
  // Dark mode
  //const darkModeToggle=$('<')

  // Kullanıcı Önceki seçimin göstersin
  if(localStorage.getItem("darkMode") ==="enabled"){
    $("body").addClass("dark-mode");
  }

  // Dark mode aç/kapat
  $("#dark-mode-toggle").on("click", function(){
     $("body").toggleClass("dark-mode");

     // Kullanıcı tercihini Kaydet
     if($("body").hasClass("dark-mode")){
      localStorage.setItem("darkMode", "enabled");
     }else{
      localStorage.setItem("darkMode", "disabled");
     }
    });


  ///////////////////////////////////////////////////
  // Blog Beğenisi
  // Like
  $("#blog-table tbody").on("click", ".like-btn", function () {
    const blogId = $(this).closest("tr").data("id");
    updateLikeDislike(blogId, "like");
  });

  // Dislike
  $("#blog-table tbody").on("click", ".dislike-btn", function () {
    const blogId = $(this).closest("tr").data("id");
    updateLikeDislike(blogId, "dislike");
  });

  // updateLikeDislike function
  const updateLikeDislike = (id, type) => {
    $.ajax({
      url: `/blog/api/${id}/${type}`,
      method: "POST",
      success: function () {},
    });
  };

  ///////////////////////////////////////////////////
  // Content(İçerik) için 2000 karakter sınırını kontrol eder.
  // Eğer kullanıcı 2000 karakteri aşarsa hata mesajını döndersin
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

  ///////////////////////////////////////////////////
  $("#content").on("input", function () {
    updateCharCount();
  });

  ///////////////////////////////////////////////////
  // Giriş alanlarına yazıldığında hata mesajalarını kaldır
  $("#header,#content, #author, #tags").on("input", function () {
    $(this).next(".error-message").remove();
  });

  ///////////////////////////////////////////////////
  // Form Doğrula
  // Blog gönderilmeden önce boş alanların olup olmadığını kontrol eder
  // Exam: Header, Content, tags, author boş olmaması gerekiyor
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

  ///////////////////////////////////////////////////
  // Blog Ekleme veya Güncelleme
  // Blog eklerken POST, güncellenirken PUT isteği gönderir
  // Ajax isteği başarılı olursa blog listesi güncellenir ve form sıfırlanır
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
      category: $("#category").val(), // **Kategori Alanına Eklendi
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

  // EDIT
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
    // 🔴 KATEGORİ GÜNCELLEMESİNİ DÜZELT
    let selectedCategory = row.find("td:eq(5)").text().trim(); // Trim ile gereksiz boşlukları temizle
    $("#category option").each(function () {
      if ($(this).text().trim() === selectedCategory) {
        $(this).prop("selected", true);
      }
    });
    isUpdating = true;
    $("#submit-btn").text("Güncelle");

    console.log("Güncellenen ID:", updateId);
  });

  ///////////////////////////////////////////////////
  // Blog Silme ve uyarı
  $("#blog-table tbody").on("click", ".delete-btn", function () {
    const deleteId = $(this).closest("tr").data("id");

    if (!deleteId) {
      alert("Silinecek blog ID’si bulunamadı!");
      return;
    }

    if (
      !confirm(`${deleteId} numaralı ID'yi silmek istediğinize emin misiniz?`)
    ) {
      return;
    } else {
    }

    $.ajax({
      url: `/blog/api/${deleteId}`,
      method: "DELETE",
      success: function (data) {
        console.log("Silme işlemi başarılı", data);
        // Silme işleminden sonra formu temizle
        resetForm();
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
              <td>${item.category || "Bilinmiyor"}</td>
              <td>${item.like || 0} <button class="like-btn btn-primary">😉</button></td>
              <td>${item.dislike || 0} <button class="dislike-btn btn-primary">😡</button></td>
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

  // Eklenen veya Güncellenen veriyi listlesin.
  fetchBlogList();
  updateCharCount();
});
