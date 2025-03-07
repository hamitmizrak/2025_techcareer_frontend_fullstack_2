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

  /////////////////////////////////////////////////////////////////////////////////
  // VALIDATION
  // Blog Form Kontrol Doğrulama(Validation)
  const validateForm = () => {
    clearErrors(); // Hata mesajlarını temizle
    let isValid = true; // Form doğrulama kontrolü
    const header = $("#header").val().trim(); // Blog Formunda ki Content(İçerik) alanını al
    const title = $("#title").val().trim(); // Blog Formunda ki Title(Başlık) alanını al
    const content = $("#content").val().trim(); // Blog Formunda ki Content(İçerik) alanını al
    const charCount = content.length; // Content(İçerik) alanındaki karakter sayısını al

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
      showValid("#header", "İçerik alanı geçerli.");
    }

    // AUTHOR

    return isValid;
  };

  /////////////////////////////////////////////////////////////////////////////////
  // Kullanıcı Blog Content(İçerik) alanına yazdıkça geriye kalan karakter sayısını güncelleyen

  // Kullanıcı İnput değerine veri girdiğinde hatalar yoksa hata mesajını göstermesin

  // Formu içeriklerini Temizleme(Sıfırlama)

  // Hata Yönetimi Fonksiyonu

  /////////////////////////////////////////////////////////////////////////////////
  // CRUD
  // Blog Ekleme
  // Blog List
  // Blog Bulma
  // Blog Güncelleme
  // Blog Silme
}); // end document.ready
