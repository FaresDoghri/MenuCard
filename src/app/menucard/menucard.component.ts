import { Component, OnInit } from '@angular/core';
import { MenuService } from '../Services/menu.service';

@Component({
	selector: 'menucard',
	templateUrl: './menucard.component.html',
	styleUrls: ['./menucard.component.css']
})
export class MenucardComponent implements OnInit {

	private drinks: any[] = [];
	private sandwiches: any[] = [];
	private snacks: any[] = [];
	private cart: any[] = [];
	private toPay: number = 0;

	constructor(
		private menuService: MenuService) {
	}

	ngOnInit() {
		this.menuService.getMenu().subscribe(
			data => {
				this.initDrinks(data.categories[0]);
				this.initSandwiches(data.categories[1]);
				this.initSnacks(data.categories[2]);
			},
			error => {
				console.error(error)
			});
	}

	initDrinks(data) {
		for (var i in data.products) {
			this.drinks.push({
				categoryName: {
					name: data.name,
					tva: data.products[0].tva
				},
				products: {
					id: data.products[i].id,
					name: data.products[i].name,
					image: data.products[i].image,
					price: data.products[i].price
				}
			});
		}
	}

	initSandwiches(data) {
		for (var i in data.products) {
			this.sandwiches.push({
				categoryName: {
					name: data.name,
					tva: data.products[0].tva
				},
				products: {
					id: data.products[i].id,
					name: data.products[i].name,
					image: data.products[i].image,
					price: data.products[i].price
				}
			});
		}
	}

	initSnacks(data) {
		for (var i in data.products) {
			this.snacks.push({
				categoryName: {
					name: data.name,
					tva: data.products[0].tva || 0
				},
				products: {
					id: data.products[i].id,
					name: data.products[i].name,
					image: data.products[i].image,
					price: data.products[i].price
				}
			});
		}
	}

	counter_add(cart) {
		cart.count++;
		this.toPay += cart.initprice;
		cart.price = cart.initprice * cart.count;
	}

	counter_minus(cart, index) {
		cart.count--;
		this.toPay -= cart.initprice;
		if (cart.count == 0) {
			this.cart.splice(index, 1)
		}
		else
			cart.price = cart.initprice * cart.count;
	}

	addToCart(objectname, price: number, id) {
		var exists;
		for (var i in this.cart) {
			if (this.cart[i].id == id)
				exists = i;
		}
		if (!exists) {
			this.cart.push({
				name: objectname,
				count: 1,
				price: price,
				initprice: price,
				id: id
			});
			this.toPay += price;
		} else {
			this.cart[exists].count++;
			this.toPay += this.cart[exists].initprice;
			this.cart[exists].price = this.cart[exists].initprice * this.cart[exists].count;
		}
	}
}
