import { Component } from '@angular/core';
import { product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'openkart';
  selectLink: string = 'home';
  selectedProduct: product;

  onAppHeaderClick(sLink: string){
    this.selectLink = sLink;

  }
  onSelectedProduct(product:product){
    this.selectedProduct = product;
  }
}