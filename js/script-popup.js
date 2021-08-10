var bleu = document.getElementById('bleu');
var overlaybleu = document.getElementById('overlaybleu');
bleu.addEventListener('click',openMoadl);
function openMoadl() {
overlaybleu.style.display='block';
}

var btnClosebleu = document.getElementById('btnClosebleu');
btnClosebleu.addEventListener('click',closeModal);
function closeModal(){
  overlaybleu.style.display='none';
}