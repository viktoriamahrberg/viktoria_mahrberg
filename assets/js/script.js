var text = document.getElementById('text');
var newDom = '';
var animationDelay = 5;

for (let i = 0; i < text.innerText.length; i++) {
    newDom += '<div class="text-block">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i]) + '</div>';
}

text.innerHTML = newDom;
var length = text.children.length;

for (let i = 0; i < length; i++) {
    text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
}

jQuery(document).ready(function () {
    $('section').mousemove(function (e) {
        var rXP = (e.pageX - this.offsetLeft - $(this).width() / 2);
        var rYP = (e.pageY - this.offsetTop - $(this).height() / 2);
        $('section').css('text-shadow', +rYP / 10 + 'px ' + rXP / 80 + 'px rgba(227,6,19,.8), ' + rYP / 8 + 'px ' + rXP / 60 + 'px rgba(255,237,0,1), ' + rXP / 70 + 'px ' + rYP / 12 + 'px rgba(0,159,227,.7)');
    });
    
});





window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('resize', handleWindowResize);

const spansSlow = document.querySelectorAll('.spanSlow');
const spansFast = document.querySelectorAll('.spanFast');

let width = window.innerWidth;

function handleMouseMove(e) {
  let normalizedPosition = e.pageX / (width/2) - 1;
  let speedSlow = 100 * normalizedPosition;
  let speedFast = 200 * normalizedPosition;
  spansSlow.forEach((span) => {
    span.style.transform = `translate(${speedSlow}px)`;
  });
  spansFast.forEach((span) => {
    span.style.transform = `translate(${speedFast}px)`
  })
}
//we need to recalculate width when the window is resized
function handleWindowResize() {
  width = window.innerWidth;
}