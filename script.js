let kotak = document.getElementById('kotak');
document.onmousemove = (event) => {
    kotak.style.left = event.clientX - (kotak.clientWidth/2) + 'px'; 
    kotak.style.top  = event.clientY - (kotak.clientHeight/2)+ 'px';
}

function random(number) {
    return Math.floor(Math.random()* number)
}
document.onclick  = function () { 
acakacak = "rgb("+ random(255)+","+ random(255)+","+ random(255)+")";
kotak.style.background = acakacak
}