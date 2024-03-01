function showContent(contentId) {
    var contents = document.querySelectorAll('.content');
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
    }
    var contentToShow = document.getElementById(contentId);
    if (contentToShow) {
        contentToShow.style.display = 'block';
    }
        window.onload = function () {
        showContent('Hakkımda');
    };
}
function myFunction() {
    document.getElementById("demo").innerHTML = "Ayrıca E-Ticaret operasyonları ile ilgili eğitimlerimi tamamladım ve istanbul üniversitesinde E-Ticaret ve Pazarlama bölümü okumaktayım";
    
  }
