export class Item {
    name = "";
    complete = false;

    constructor(obj) {
        Object.assign(this, obj);
    }
}