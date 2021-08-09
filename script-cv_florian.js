// Fonction popup pour le cv de Florian

var btnflorian = document.getElementById('btnflorian');
var overlayflorian = document.getElementById('overlayflorian');
btnflorian.addEventListener('click',openMoadl);
function openMoadl() {
  overlayflorian.style.display='block';
}

var btnCloseflorian = document.getElementById('btnCloseflorian');
btnCloseflorian.addEventListener('click',closeModal);
function closeModal(){
  overlayflorian.style.display='none';
}