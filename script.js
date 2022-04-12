let kotak = document.getElementById('kotak');
document.onmousemove = (event) => {
    kotak.style.left = event.clientX - (kotak.clientWidth/2) + 'px'; 
    kotak.style.top  = event.clientY - (kotak.clientHeight/2)+ 'px';
}