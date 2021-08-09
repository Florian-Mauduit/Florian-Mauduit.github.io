// Fonction popup pour le cv de Adam

var btnadam = document.getElementById('btnadam');
var overlayadam = document.getElementById('overlayadam');
btnadam.addEventListener('click',openMoadl);
function openMoadl() {
  overlayadam.style.display='block';
}

var btnCloseadam = document.getElementById('btnCloseadam');
btnCloseadam.addEventListener('click',closeModal);
function closeModal(){
  overlayadam.style.display='none';
}