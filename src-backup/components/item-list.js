import {bindable, bindingMode} from 'aurelia-framework';

export class ItemList {
    @bindable({ defaultBindingMode: bindingMode.twoWay }) items = [];

    deleteItem(item) {
        // Find the location of item in the array of items

        let index = this.items.indexOf(item);

        if (-1 !== index) {
            this.items.splice(index, 1);
        }
    }
}