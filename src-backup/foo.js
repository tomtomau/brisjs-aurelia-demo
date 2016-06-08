export class Foo {
    inputEl = null;
    items = [];
    heading = "This is not a heading!";
    newItemText = "milk";

    addItem() {
        if (this.newItemText.length > 0) {
            this.items.push(this.newItemText);
            this.newItemText = "";
        }
    }

    attached() {
        this.inputEl.addEventListener('keyup', evt => {
            if (evt.which == 13) {
                this.addItem();
            }
        });
    }
}