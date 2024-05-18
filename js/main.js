'use strict'

	/** 우클릭 방지 */
document.addEventListener('mousedown', function(e) {
	if (e.button == 2) {
		e.preventDefault();
		return false;
	}
});

	/** F12 버튼 방지 */
document.addEventListener('keydown', function(e) {
	if (e.keyCode == 123) {
		e.preventDefault();
		return false;
	}
});

/** 타이핑 */
const target = document.querySelector('#dynamic');

function blink() {
	target.classList.toggle('active');
}
setInterval(blink, 500);

const str = 'Because I\'m an analog person in the deepfake world.';
const split = str.split('');

function dynamic(arr) {
	if (arr.length > 0) {
		target.textContent += arr.shift();
		setTimeout(function() {
			dynamic(arr)}, 80);
	} else {
		setTimeout(function() {
			target.textContent = '';
			dynamic(str.split(''));
		}, 10000);
	}
}
dynamic(split);

/** MAKING */
const elMaking = document.querySelector('.div-making span');
const elPage2 = document.querySelector('.div-page2');
const elVideo2 = document.querySelector('.div-page2 > video');

elMaking.addEventListener('click', () => {
	elVideo2.style.display = 'block';
	elPage2.scrollIntoView({behavior: 'smooth', block: 'center'});
});

window.addEventListener('beforeunload', () => {
	elVideo2.style.display = 'none';
	window.scroll(0, 0);
});

const eltotop = document.querySelector('.div-totop span');

eltotop.addEventListener('click', () => {
	window.scroll({
		top: 0,
		behavior: 'smooth'
	});
});
