import { Directive, HostBinding, HostListener } from "@angular/core";


@Directive({

    selector: '[appManage]'  //attribute directive where to do


})

export class ManageDirective{


    constructor(){

    }

    @HostBinding('class.open') isOpen: boolean = false;      //what to do

    @HostListener('click') manageButtonOpen(){  //when to do
        this.isOpen = ! this.isOpen;
    }
}