// Fonction popup pour le cv de Noah

var btnnoah = document.getElementById('btnnoah');
var overlaynoah = document.getElementById('overlaynoah');
btnnoah.addEventListener('click',openMoadl);
function openMoadl() {
  overlaynoah.style.display='block';
}

var btnClosenoah = document.getElementById('btnClosenoah');
btnClosenoah.addEventListener('click',closeModal);
function closeModal(){
  overlaynoah.style.display='none';
}