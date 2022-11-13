'use strict'

// Корзина

// const basket = {
// 	settings:{
// 		totalCount: '#basket-count',
// 		totalPrice: '#basket-price',
// 	},
// 	goods: [],
// 	countEl: null,
// 	priceEl: null,

// 	init() {
// 		document.querySelector('.clear-btn').addEventListener('click', () => {this.clearBasket();})
// 		document.querySelectorAll('.product-btn').forEach((element) => {
// 			element.addEventListener('click', (event) => this.wrapperClickHandler(event))
// 		});

// 		this.countEl = document.querySelector(this.settings.totalCount);
// 		this.priceEl = document.querySelector(this.settings.totalPrice);

// 		this.render();
// 	},

// 	render() {
// 		this.countEl.innerHTML = this.goods.length;
// 		this.priceEl.innerHTML = this.getGoodsPrice();
// 	},

// 	wrapperClickHandler(event) {
// 		const goodName = event.target.dataset?.name;
// 		const goodPrice = +event.target.dataset?.price;
// 		this.add(goodName, goodPrice);
// 	},

// 	getGoodsPrice() {
// 		return this.goods.reduce((accum, currentVal) => accum + currentVal.price, 0)
// 	},

// 	add(goodName, goodPrice) {
// 		this.goods.push({name: goodName, price: goodPrice});
// 		this.render();
// 	},

// 	clearBasket() {
// 		this.goods = [];
// 		this.render();
// 	},
// }

// basket.init();