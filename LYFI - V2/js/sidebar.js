const toggleSideBar = document.querySelector('li.activate-sidebar');
const quit = document.querySelector('nav.side-nav li.quit');
const sideBar = document.querySelector('nav.side-nav');

toggleSideBar.addEventListener('click', showSideBar);
quit.addEventListener('click', exitSideBar);
sideBar.style = "display:none;"

function showSideBar(){
    sideBar.style = "display:block;"
}

function exitSideBar(){
    sideBar.style = "animation:slide-right 0.3s;transfrom:translateX(-8vw)"
    setTimeout(none, 300);
}

function none(){
    sideBar.style = "display:none"
}