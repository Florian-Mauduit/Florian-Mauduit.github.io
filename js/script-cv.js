// Fonction popup pour le cv de Chantal

var btnchantal = document.getElementById('btnchantal');
var overlaychantal = document.getElementById('overlaychantal');
btnchantal.addEventListener('click',openMoadl);
function openMoadl() {
  overlaychantal.style.display='block';
}

var btnClosechantal = document.getElementById('btnClosechantal');
btnClosechantal.addEventListener('click',closeModal);
function closeModal(){
  overlaychantal.style.display='none';
}