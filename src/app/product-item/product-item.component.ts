
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { product } from '../product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: product;
  @Output() selectedItem = new EventEmitter<null>;

  onItemClicked(){
    console.log('item selected>>>>>>>>>');
    this.selectedItem.emit();
  }

}
