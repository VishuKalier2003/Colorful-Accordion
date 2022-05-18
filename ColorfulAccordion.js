const pressed = document.getElementById('bt1');
const background = document.getElementById('background');
pressed.addEventListener('mouseenter', function() {
    background.style.backgroundImage = 'linear-gradient(to top left, rgb(182, 32, 32), rgb(203,36,36), rgb(254,46,46), rgb(254, 87, 87), rgb(254, 129, 129))';
});

pressed.addEventListener('mouseleave', function() {
    background.style.backgroundImage = 'linear-gradient(to top left, rgb(0, 204, 51), rgb(139, 208, 90), rgb(31, 141, 46), rgb(55, 133, 10), rgb(34, 100, 0))';
});

const pressed1 = document.getElementById('bt2');
pressed1.addEventListener('mouseenter', function() {
    background.style.backgroundImage = 'linear-gradient(to top left, rgb(233, 201, 236), rgb(228, 170, 233), rgb(198, 115, 191), rgb(146, 78, 143), rgb(103, 64, 100))';
});

pressed.addEventListener('mouseleave', function() {
    background.style.backgroundImage = 'linear-gradient(to top left, rgb(0, 204, 51), rgb(139, 208, 90), rgb(31, 141, 46), rgb(55, 133, 10), rgb(34, 100, 0))';
});

const pressed2 = document.getElementById('bt3');
pressed2.addEventListener('mouseenter', function() {
    background.style.backgroundImage = 'linear-gradient(to top left, rgb(238, 154, 0), rgb(250, 184, 80), rgb(251, 236, 93), rgb(255, 227, 3), rgb(250, 184, 80))';
});

pressed2.addEventListener('mouseleave', function() {
    background.style.backgroundImage = 'linear-gradient(to top left, rgb(0, 204, 51), rgb(139, 208, 90), rgb(31, 141, 46), rgb(55, 133, 10), rgb(34, 100, 0))';
});

var check = false;
const qu1 = document.getElementById('qu1');
const an1 = document.getElementById('an1');
pressed.addEventListener('click', function() {
    if (check == false) {
        qu1.style.transform = 'translateX(0px)';
        qu1.style.transitionDuration = '2s';
        qu1.style.color = 'rgba(255, 255, 255, 0.6)';
        an1.style.color = 'rgba(255, 0, 0, 0.7)';
        pressed1.textContent = '+';
        pressed2.textContent = '+';
        check = true;
    } else {
        qu1.style.transform = 'translateX(-700px)';
        qu1.style.transitionDuration = '2s';
        pressed1.textContent = '';
        pressed2.textContent = '';
        check = false;
    }
});

var check1 = false;
const qu2 = document.getElementById('qu2');
const an2 = document.getElementById('an2');
pressed1.addEventListener('click', function() {
    if (check == false) {
        qu2.style.transform = 'translateX(0px)';
        qu2.style.transitionDuration = '2s';
        qu2.style.color = 'rgba(255, 255, 255, 0.6)';
        an2.style.color = 'rgb(198, 115, 191)';
        pressed.textContent = '+';
        pressed2.textContent = '+';
        check = true;
    } else {
        qu2.style.transform = 'translateX(-700px)';
        qu2.style.transitionDuration = '2s';
        pressed.textContent = '';
        pressed2.textContent = '';
    }
});

var check2 = false;
const qu3 = document.getElementById('qu3');
const an3 = document.getElementById('an3');
pressed2.addEventListener('click', function() {
    if (check == false) {
        qu3.style.transform = 'translateX(0px)';
        qu3.style.transitionDuration = '2s';
        qu3.style.color = 'rgba(255, 255, 255, 0.6)';
        an3.style.color = 'rgb(251, 236, 93)';
        pressed1.textContent = '+';
        pressed.textContent = '+';
        check = true;
    } else {
        qu3.style.transform = 'translateX(-700px)';
        qu3.style.transitionDuration = '2s';
        pressed1.textContent = '';
        pressed.textContent = '';
    }
});