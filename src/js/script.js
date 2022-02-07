const goToTopBtn = document.querySelector('.icon_top');

const scrollTop = function () {
	window.scrollTo(0, 0);
};

goToTopBtn.addEventListener('click', scrollTop);
