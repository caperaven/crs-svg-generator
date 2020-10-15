import {BaseComponent} from "../base-component.js";

export class TitleCard extends BaseComponent {
    get html() {
        return import.meta.url.replace(".js", ".html");
    }
}