export class SVGGenerator {
    constructor() {
        this._components = new Map();
    }

    dispose() {
        this._components.clear();
    }

    register(tag, content) {
        this._components.set(tag, content);
    }

    async parseTemplate(template, context) {
        const instance = template.content.cloneNode(true);
        return await this.parseElement(instance.children[0]);
    }

    async parseElement(element) {
        const key = element.tagName.toLowerCase();

        const children = element.children.length == 0 ? null : await this.parseElements(element.children);
        const type = this._components.get(key);
        const instance = new type(Array.from(element.attributes), children);

        return instance;
    }

    async parseElements(elements) {
        const children = [];

        for (let element of elements) {
            children.push(await this.parseElement(element));
        }

        return children;
    }
}