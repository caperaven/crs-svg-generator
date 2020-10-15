import {BaseComponent} from "../base-component.js";

export class List extends BaseComponent {
    get html() {
        return import.meta.url.replace(".js", ".html");
    }

    constructor(attributes, children) {
        super(attributes, children);

        const itemWidth = Number(this["item-width"]);
        const itemHeight = Number(this["item-height"]);
        const x = this.x || 0;
        const y = this.y || 0;

        let nextY = y;

        children.forEach(child => {
            child.width = itemWidth;
            child.height = itemHeight;
            child.y = nextY;
            child.x = 0;

            nextY += itemHeight;
        });

        this.width = itemWidth;
        this.height = itemHeight * children.length;
    }
}