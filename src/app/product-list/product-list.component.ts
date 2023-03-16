import { Component, EventEmitter, Output } from '@angular/core';
import { ProductListService } from '../product-list.service';
import { product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {  //controller

  products: product[];

  @Output() productSelectedParent = new EventEmitter<product>;
   

  constructor(private productListService: ProductListService){

  }

  ngOnInit(){
    this.products = this.productListService.getProducts();

  }
onItemSelected(product: product){
  this.productSelectedParent.emit(product);
}
}
