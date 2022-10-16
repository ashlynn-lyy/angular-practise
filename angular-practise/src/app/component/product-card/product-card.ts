import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DetailPage} from '../detail-page/detail-page'
import * as data from 'src/app/data.json';

interface Product {
  name?: String;
  code?: String;
  images?: any;
  price?: Price;
  description?: String;
  stock?: any;
}

interface Price {
  currencyIso?: String;
  formattedValue?: String;
}

@Component({
  selector: 'product-card',
  templateUrl: 'product-card.html',
  styleUrls: ['product-card.css'],
})

export class ProductCard {

  products: Product[] = (data as any).default?.products;
  selected: Boolean[] = [];
  preview: Boolean[] = [];

  constructor(public dialog: MatDialog){
    for (let i = 0; i < this.products.length; i++) {
      this.selected.push(false);
      this.preview.push(false);
    }
    console.log(this.products);
  }

  clearAll() {
    for (let i = 0; i < this.products.length; i++) {
      this.selected[i] = false;
    }
  }

  showPreview(i: number) {
    this.preview[i] = !this.preview[i];
  }

  showDetail(i: number) {
    this.dialog.open(DetailPage, {
      data: {
        name: this.products[i].name,
        price: this.products[i].price?.formattedValue,
        image: this.products[i].images ? this.products[i].images[0].url : '',
        description: this.products[i].description,
        status: this.products[i].stock.stockLevelStatus.code,
      },
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      panelClass: 'full-screen-modal',
    });
  }

}