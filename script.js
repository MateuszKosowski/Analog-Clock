let h = document.getElementsByClassName('hr')[0];
let m = document.getElementsByClassName('mn')[0];
let s = document.getElementsByClassName('ss')[0];


function show_time(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let sound = new Audio('sound2.mp3');
    h.style.transform = `rotate(${30*hours+minutes/2}deg)`; // inside a string we can put variables using: `${variable}`
    m.style.transform = `rotate(${6*minutes}deg)`;
    s.style.transform = `rotate(${6*seconds}deg)`;
    sound.play();
}


setInterval(show_time, 1000);
//The setInterval() method continues calling the function until clearInterval() is called, or the window is closed.
