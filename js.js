let contentVue = document.querySelector('.element');
let button = document.querySelector('.btn');

button.addEventListener("click", function (evt) {
	evt.preventDefault();
	contentVue.classList.toggle("element-hidden");
})