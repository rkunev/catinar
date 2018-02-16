import { getRandomElFromArray, without } from '@/services/utils';

const faceAwareParts = ['noseAndLips', 'eyes', 'main', 'bg'];
const bgAwareParts = ['hair', 'main', 'bg', 'pawright', 'pawbackright', 'pawbackleft', 'pawleft', 'chest', 'tailtop'];

const complementaryColorSuffix = '-c';
const black = 'md-black';
const white = 'md-white';

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

export const colors = [white, black, 'md-red', 'md-pink', 'md-purple', 'md-d-purple', 'md-indigo', 'md-blue', 'md-l-blue', 'md-cyan', 'md-teal', 'md-green', 'md-l-green', 'md-lime', 'md-yellow', 'md-amber', 'md-orange', 'md-d-orange', 'md-brown', 'md-grey', 'md-blue-grey'];

export const allColors = [
    white, white + complementaryColorSuffix,
    black, black + complementaryColorSuffix,
    'md-red', 'md-red' + complementaryColorSuffix,
    'md-pink', 'md-pink' + complementaryColorSuffix,
    'md-purple', 'md-purple' + complementaryColorSuffix,
    'md-d-purple', 'md-d-purple' + complementaryColorSuffix,
    'md-indigo', 'md-indigo' + complementaryColorSuffix,
    'md-blue', 'md-blue' + complementaryColorSuffix,
    'md-l-blue', 'md-l-blue' + complementaryColorSuffix,
    'md-cyan', 'md-cyan' + complementaryColorSuffix,
    'md-teal', 'md-teal' + complementaryColorSuffix,
    'md-green', 'md-green' + complementaryColorSuffix,
    'md-l-green', 'md-l-green' + complementaryColorSuffix,
    'md-lime', 'md-lime' + complementaryColorSuffix,
    'md-yellow', 'md-yellow' + complementaryColorSuffix,
    'md-amber', 'md-amber' + complementaryColorSuffix,
    'md-orange', 'md-orange' + complementaryColorSuffix,
    'md-d-orange', 'md-d-orange' + complementaryColorSuffix,
    'md-brown', 'md-brown' + complementaryColorSuffix,
    'md-grey', 'md-grey' + complementaryColorSuffix,
    'md-blue-grey', 'md-blue-grey' + complementaryColorSuffix,
];

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
