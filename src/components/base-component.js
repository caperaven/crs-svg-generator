export class BaseComponent {
    get html() {
        return "";
    }

    constructor(attributes, children) {
        this._items = children;
        this._parseAttributes(attributes);
    }

    dispose() {
        this._items.forEach(item => item.dispose());
        this._items.length = 0;
    }

    async getMarkup() {
        const result = await fetch(this.html).then(result => result.text());

        if (this._items == null) {
            return result;
        }

        const content = [];
        for (let item of this._items) {
            content.push(await item.getMarkup());
        }

        return result.split("<slot></slot>").join(content.join("\n"));
    }

    _parseAttributes(attributes) {
        attributes.forEach(attr => {
            this[attr.name] = attr.value;
        })
    }
}