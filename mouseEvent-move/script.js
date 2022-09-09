const move = (e) => {
    document.querySelector('div.x p span').innerHTML = e.x;
    document.querySelector('div.y p span').innerHTML = e.y;
    document.querySelector('div.clientX p span').innerHTML = e.clientX;
    document.querySelector('div.clientY p span').innerHTML = e.clientY;
    document.querySelector('div.screenX p span').innerHTML = e.screenX;
    document.querySelector('div.screenY p span').innerHTML = e.screenY;
    document.querySelector('div.pageX p span').innerHTML = e.pageX;
    document.querySelector('div.pageY p span').innerHTML = e.pageY;
}
console.log(MouseEvent)
window.addEventListener('mousemove', move)

const clear = (c) => {
    document.querySelector('div.x p span').innerHTML = "0";
    document.querySelector('div.y p span').innerHTML = "0";
    document.querySelector('div.clientX p span').innerHTML = "0";
    document.querySelector('div.clientY p span').innerHTML = "0";
    document.querySelector('div.screenX p span').innerHTML = "0";
    document.querySelector('div.screenY p span').innerHTML = "0";
    document.querySelector('div.pageX p span').innerHTML = "0";
    document.querySelector('div.pageY p span').innerHTML = "0";
}
window.addEventListener('click', clear)