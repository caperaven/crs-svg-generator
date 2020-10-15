import {BaseComponent} from "../base-component.js";

export class ListItem extends BaseComponent {
    get html() {
        return import.meta.url.replace(".js", ".html");
    }

    async getMarkup() {
        return (await super.getMarkup())
            .split("$x").join(this.x)
            .split("$y").join(this.y)
            .split("$width").join(this.width)
            .split("$height").join(this.height)
    }
}