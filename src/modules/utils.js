import * as convert from "color-convert";

export const generateColors = (hex) => {
    const colors = [];
    const [h, s] = convert.hex.hsl(hex);

    for (let i = 0; i <= 100; i += 10){
        colors.push([h, s, i]);
    }

    return colors;
}

export const isHex = (input) => {
    return /^#[0-9A-F]{6}$/i.test(input);
}

export const hexToCss = (hex) => {
    const hsl = convert.hex.hsl(hex);
    return `hsl(${hsl[0]}deg ${hsl[1]}% ${hsl[2]}%)`;
}