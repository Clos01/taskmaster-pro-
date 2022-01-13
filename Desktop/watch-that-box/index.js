
let Box = document.getElementById('box');

let growBtn = document.getElementById('growBtn');
let blueBtn = document.getElementById('blueBtn');
let fadeBtn = document.getElementById('fadeBtn');
let resetBtn = document.getElementById('resetBtn');


// growBtn.onclick = function() {
//     Box.style.height = "250px";
// }

growBtn.addEventListener("click", function(){
    Box.style.height ="500px"
});

blueBtn.addEventListener("click", function(){
    Box.style.backgroundColor = 'blue';
});
fadeBtn.addEventListener("click", function(){
    Box.style.opacity = 0.5
});

resetBtn.addEventListener("click",function(){
    Box.style.height="150px", Box.style.backgroundColor="orange", Box.style.opacity= 20
});
