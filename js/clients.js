document.addEventListener("DOMContentLoaded", function () {
	let slidesData = [
		{
			img: "client-1.png",
			name: "Асель Баймуратова",
			comment:
				"Спасибо, Investport за то, что помогли найти идеальную недвижимость для инвестиций. Это отличный вариант если хотите получить пассивный доход",
		},
		{
			img: "client-2.png",
			name: "Марат Хасанов",
			comment:
				"Я не знал как правильно работать с вложением. Инвестиции в недвижимость - лучший способ вкладывать деньги! Спасибо, Investport.",
		},
		{
			img: "client-3.png",
			name: "Аскар Узабеков",
			comment:
				"Я нашел для себя Investport и работаю теперь только с ним. С их помощью я начал инвестировать напрямую в недвижимость ",
		},
		{
			img: "client-1.png",
			name: "Асель Баймуратова",
			comment:
				"Спасибо, Investport за то, что помогли найти идеальную недвижимость для инвестиций. Это отличный вариант если хотите получить пассивный доход",
		},
	];

	let swiperWrapper = document.querySelector(".swiper-wrapper");

	slidesData.forEach(function (slide) {
		let slideEl = document.createElement("div");
		slideEl.className = "swiper-slide slide-item";
		slideEl.innerHTML = `
      <img src="./images/${slide.img}" alt="${slide.name}" />
      <span>${slide.name}</span>
      <p>${slide.comment}</p>
    `;
		swiperWrapper.appendChild(slideEl);
	});

	// 	var swiper = new Swiper(".swiper", {
	// 		loop: true,
	// 		speed: 700,
	// 		slidesPerView: 3,
	// 		autoplay: {
	// 			delay: 2500,
	// 			disableOnInteraction: false,
	// 		},
	// 		// pagination: {
	// 		// 	el: ".swiper-pagination",
	// 		// 	clickable: true,
	// 		// },
	// 		// navigation: {
	// 		// 	nextEl: ".swiper-button-next",
	// 		// 	prevEl: ".swiper-button-prev",
	// 		// },
	// 		breakpoints: {
	// 			580: {
	// 				slidesPerView: 1,
	// 				spaceBetween: 10,
	// 			},
	// 		},
	// 	});
	$(".swiper-wrapper").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
		responsive: [
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		],
	});
});
