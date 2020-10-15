import {List} from "./src/components/list/list.js";
import {ListItem} from "./src/components/list-item/list-item.js";
import {TitleCard} from "./src/components/title-card/title-card.js";

export function initialize(generator) {
    generator.register("title-card", TitleCard);
    generator.register("list", List);
    generator.register("list-item", ListItem);

    return generator;
}