import {Storage} from './storage';
import {inject} from 'aurelia-framework';

@inject(Storage)
export class List {
    heading = "This is a heading";
    items = [];
    item = "something";
    myEl = null;

    constructor(storage) {
        this.storage = storage;
    }

    addItem() {
        this.items.push(this.item);
        this.item = "";
    }

    attached() {
        this.myEl.addEventListener('keypress', e => {
            if (e.which == 13) {
                this.addItem();
            }
        });
    }
}