window.addEventListener("DOMContentLoaded", function() {

// Получали элементы на странице (пытались до них "достучаться")
	let products = document.querySelectorAll('.product'),
		buttons = document.getElementsByTagName("button"),
		open = document.getElementsByClassName("open")[0];

// Функция для создания корзины
	function createCart() {
		// Создание элементов
		let cart = document.createElement("div"),
			field = document.createElement('div'),
			heading = document.createElement('h2'),
			close = document.createElement("button");
		
		// Стилизация элемнтов (добавили классы элементы)
		cart.classList.add("cart");
		field.classList.add("cart-field");
		close.classList.add("close");
		
		// Добавили текст элементам
		close.textContent = "Закрыть";
		heading.textContent = "В нашей корзине:";
		
		// Добавили элемнты на страницу
		document.body.appendChild(cart);
		cart.appendChild(heading);
		cart.appendChild(field);
		cart.appendChild(close);
	}
	createCart();

	let field = document.querySelector(".cart-field"),
		cart = document.querySelector(".cart"),
		close = document.querySelector(".close");

	for (let i = 0; i < buttons.length; i++) {
		// Вешаем обработчик событий "клика" на каждую из кнопку
		buttons[i].addEventListener('click', function() {
			// Создали копиию карточки товара
			let item = products[i].cloneNode(true);
				btn = item.querySelector('button');

			btn.remove();
			field.appendChild(item);
			products[i].remove();
		})
	}

	function openCart() {
		cart.style.display = "block"
	}

	function closeCart() {
		cart.style.display = "none"
	}

	open.addEventListener('click', openCart);
	close.addEventListener('click', closeCart);

	
});