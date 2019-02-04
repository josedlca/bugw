var ashow = document.querySelector('.seeme');
var theul = document.getElementById('ul');

ashow.addEventListener('click',function(){
    theul.classList.toggle("showon");
});