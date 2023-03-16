import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() onHeaderClickEvent = new EventEmitter<string>;


  onHeaderClick(selectedlink: string){
    this.onHeaderClickEvent.emit(selectedlink);

  }

}
