/* Fonction Popup*/

var jaune = document.getElementById('jaune');
var overlay = document.getElementById('overlay');
jaune.addEventListener('click',openMoadl);
function openMoadl() {
overlay.style.display='block';
}

var btnClose = document.getElementById('btnClose');
btnClose.addEventListener('click',closeModal);
function closeModal(){
	overlay.style.display='none';
}


/* Eyes Tracking*/

var balls = document.getElementsByClassName("ball-noah");
        var balls1 = document.getElementsByClassName("ball-florian");
        var balls2 = document.getElementsByClassName("ball-chantal");
        var balls3 = document.getElementsByClassName("ball-adam");
        document.onmousemove = function(){
          var x = event.clientX * 100 / window.innerWidth + "%";
          var y = event.clientY * 100 / window.innerHeight + "%";


          for(var i=0;i<2;i++){
            balls[i].style.left = x;
            balls[i].style.top = y;
            balls[i].style.transform = "translate(-"+x+",-"+y+")";
            balls1[i].style.left = x;
            balls1[i].style.top = y;
            balls1[i].style.transform = "translate(-"+x+",-"+y+")";
            balls2[i].style.left = x;
            balls2[i].style.top = y;
            balls2[i].style.transform = "translate(-"+x+",-"+y+")";
            balls3[i].style.left = x;
            balls3[i].style.top = y;
            balls3[i].style.transform = "translate(-"+x+",-"+y+")";
          }
        }