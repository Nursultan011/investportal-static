const burgerIcon = document.querySelector(".burger-icon");
const xIcon = document.querySelector(".x-icon");
const logoutdropDownMenu = document.querySelector(".logout-dropdown-lang");
const logoutlangSelect = document.querySelector(".logout-list-lang");
const logindropDownMenu = document.querySelector(".login-dropdown-lang");
const loginlangSelect = document.querySelector(".login-lang-list");

function handleBurgerIcons(showIcon, hideIcon) {
	showIcon.style.display = "block";
	hideIcon.style.display = "none";
}

burgerIcon.addEventListener("click", () => {
	document.querySelector("body").style.overflow = "hidden";
	document
		.querySelector(".header__menu__list.logout-menu-list")
		.classList.add("show");
	handleBurgerIcons(xIcon, burgerIcon);
});

xIcon.addEventListener("click", () => {
	document.querySelector("body").style.overflow = "visible";
	document
		.querySelector(".header__menu__list.logout-menu-list")
		.classList.remove("show");
	handleBurgerIcons(burgerIcon, xIcon);
});

logoutlangSelect.addEventListener("click", () => {
	logoutdropDownMenu.classList.toggle("show");
});

loginlangSelect.addEventListener("click", () => {
	logindropDownMenu.classList.toggle("show");
});
