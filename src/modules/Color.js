import * as convert from "color-convert";

export class Color {
    #hsl;
    #hex;
    #htmlElement;

    constructor(hsl){
        this.#hsl = hsl;
        this.#hex = convert.hsl.hex(hsl);
        this.#htmlElement = this.#generateHtmlElement();
    }

    #generateHtmlElement() {
        const colorElement = document.createElement("div");
        colorElement.classList.add("color");
        colorElement.dataset.color = this.#hex;
        colorElement.style.backgroundColor = this.#hex;

        const colorTextElement = document.createElement("p");
        colorTextElement.textContent = this.#hex;
        colorTextElement.style.color = this.#hsl[2];

        colorElement.appendChild(colorTextElement);

        return colorElement;
    }

    display(parentHtmlElement){
        parentHtmlElement.appendChild(this.#htmlElement);
    }
}