import { Component, OnInit } from '@angular/core';
import { MenuService } from '../Services/menu.service';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

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
		private menuService: MenuService,
		private sanitizer: DomSanitizer) {
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
		console.log(this.drinks);
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
		console.log(this.sandwiches);
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
		console.log(this.snacks);
	}

	addToCart(objectname, price) {
		this.cart.push({
			name: objectname,
			price: price
		});
		this.toPay += price;
	}

	getTrustedStyle(style: string | number): SafeStyle {

		return this.sanitizer.bypassSecurityTrustStyle(style + "");
	}

}
