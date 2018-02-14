import { getRandomElFromArray, without } from '@/services/utils';

const faceAwareParts = ['noseAndLips', 'eyes', 'main', 'bg'];
const bgAwareParts = ['hair', 'main', 'bg', 'pawright', 'pawbackright', 'pawbackleft', 'pawleft', 'chest', 'tailtop'];

const complementaryColorSuffix = '-c';
const black = 'md-black';
const white = 'md-white';
const colors = [white, black, 'md-red', 'md-pink', 'md-purple', 'md-d-purple', 'md-indigo', 'md-blue', 'md-l-blue', 'md-cyan', 'md-teal', 'md-green', 'md-l-green', 'md-lime', 'md-yellow', 'md-amber', 'md-orange', 'md-d-orange', 'md-brown', 'md-grey', 'md-blue-grey'];

const pickEyeColor = color => color === black ? white : black;
const pickMouthColor = color => {
    let choices = [
        white,
        color === black ? black : 'md-none',
    ];

    return getRandomElFromArray(choices);
};
const pickNoseAndLipsColor = mouthColor => mouthColor === black ? white : black;
const pickChestColor = color => getRandomElFromArray([color, white]);
const pickFromMonochromeOrColor = color => getRandomElFromArray([color, white, black]);

export const generateRandomCat = () => {
    const main = getRandomElFromArray(colors);
    const mouth = pickMouthColor(main);

    return {
        bg: main + complementaryColorSuffix,
        chest: pickChestColor(main),
        collar: pickFromMonochromeOrColor(main),
        eyes: pickEyeColor(main),
        hair: pickFromMonochromeOrColor(main),
        main, mouth,
        noseAndLips: pickNoseAndLipsColor(mouth),
        pawright: pickFromMonochromeOrColor(main),
        pawbackright: pickFromMonochromeOrColor(main),
        pawbackleft: pickFromMonochromeOrColor(main),
        pawleft: pickFromMonochromeOrColor(main),
        tailtop: pickFromMonochromeOrColor(main),
    };
};

export const getPermittedColorsForPart = ({ part, color, allParts }) => {
    let restrictedColors = [];

    const isFaceAwarePart = faceAwareParts.includes(part);
    const isBgAwarePart = bgAwareParts.includes(part);


    if (isFaceAwarePart) {
        restrictedColors = [allParts.noseAndLips, allParts.eyes, allParts.main];
    } else if (isBgAwarePart) {
        restrictedColors = [
            allParts.main, allParts.tailtop,
            allParts.chest,
            allParts.pawright, allParts.pawbackright, allParts.pawbackleft, allParts.pawleft,
        ];
    } else {
        restrictedColors = [];
    }

    return without(colors, restrictedColors);
};
