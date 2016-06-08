import { bindable } from 'aurelia-framework';
import { inject } from 'aurelia-framework';

@inject(Element)
export class ListComponent {

    constructor(element){
        this.element = element;
    }

    @bindable items = [];
}