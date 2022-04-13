window.console.log(window.innerHeight);
window.console.log(window.innerWidth);


window.console.log(screen.width);
window.console.log(screen.height);


function Open(){
    window.open();
}

function Close() {
    window.close();
}

function Reload() {
    document.body.style.backgroundColor = 'red';
    setTimeout(() => {
        location.reload();
    }, 2000);
}

if(user.agree==true) {
    CollectData();
}
else{
    CollectData();
}

// go()
// back() -> go(-1)
// forward() -> go(1)


keydown / keyup / keypress


let count = document.getElementById('count');
let div = document.getElementById('first');
let times = 0;

document.body.onkeyup = function(e){
    if(e.keyCode === 32) {
        times++;
        count.innerHTML = times;
    }
    if(e.keyCode === 39) {
        div.style.marginLeft += "200px";
    }
}


let dino = document.getElementById('dino');
document.body.onkeyup = function(e) {
    if(e.keyCode === 32){
        dino.style.bottom = '20%';
        setTimeout(() => {
            dino.style.bottom = '0%';
        }, 500);
    }
    if(e.keyCode === 39) {
        dino.style.left = "5%";
    }
}


let menu = document.querySelector('#menu');
let close = document.querySelector('#close');

let sidebar = document.querySelector('.sidenav');
menu.addEventListener('click',() => {
    sidebar.classList.add('active');
})

close.addEventListener('click',() => {
    sidebar.classList.remove('active');
})


document.getElementById('dp').onclick = function() {
    document.getElementById('dp-c').classList.toggle('active')
    document.getElementById('icon').classList.toggle('icon')
}