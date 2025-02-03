import { generateColors, hexToCss, isHex } from "./modules/utils";
import { Color } from "./modules/Color";
import * as convert from "color-convert";

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const colorInput = e.target.firstElementChild.value;

    try{
        if(!isHex(colorInput)){
            throw new Error(`${colorInput} n'est pas un code hexadeciaml valide`);
        }
    } catch(err) {
        console.log(err);
    }
    
    const colorsPalette = generateColors(colorInput);
    displayColors(colorInput, colorsPalette);
    
})

const displayColors = (input, colorsPalette) => {
    const header = document.querySelector("header");
    header.classList.add("minimized");

    const main = document.querySelector("main");
    main.innerHTML = "";

    document.documentElement.style.setProperty(
        "--shadow-color",
        hexToCss(input)
    );

    //

    const gradientColors = [
        0,
        Math.round(colorsPalette.length / 2),
        colorsPalette.length - 1
      ].map((index) => `#${convert.hsl.hex(colorsPalette[index])}`);

      document.body.style.background = `linear-gradient(-45deg, ${gradientColors.join(
        ","
      )}`;

      document.body.style.backgroundSize = `400% 400%`;

    //  

    
    document.body.style.backgroundSize = `400% 400%`;

    colorsPalette.map((hsl) => new Color(hsl).display(main));

}
