<template>
    <svg @click="logPart" class="colorful-cat" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11706 11706">
        <circle :class="bg" data-part="bg" cx="5853" cy="5853" r="5853"/>
        <path :class="ear1left" data-part="ear1left" d="M7762 2854l-181-1583-1004 1003z"/>
        <path :class="ear1right" data-part="ear1right" d="M3943 2854l182-1583 1003 1003z"/>
        <path :class="ear2right" data-part="ear2right" d="M3990 2443l135-1172 481 788c-221 103-428 232-616 384z"/>
        <path :class="ear2left" data-part="ear2left" d="M7715 2443l-134-1172-482 788c222 103 429 232 616 384z"/>
        <circle :class="head" data-part="head" cx="5853" cy="4736" r="2948"/>
        <path :class="hair" data-part="hair" d="M5853 1788c187 0 371 18 549 51-76 272-325 470-621 470-285 0-527-185-612-441 219-52 448-80 684-80z"/>
        <ellipse :class="eyeright" data-part="eyeright" cx="4838" cy="3270" rx="300" ry="218"/>
        <ellipse :class="eyeleft" data-part="eyeleft" cx="6820" cy="3270" rx="300" ry="218"/>
        <ellipse :class="mouth" data-part="mouth" cx="5853" cy="4141" rx="947" ry="686"/>
        <path :class="lips" data-part="lips" d="M6782 3863c26-43 82-56 125-29 42 26 55 82 29 125-75 119-163 205-260 262-107 62-223 89-344 87-17 0-31-1-42-1l-3-1c-145-12-278-74-374-177-22-24-42-50-60-78-18 28-38 54-60 78-97 103-230 165-375 177l-2 1c-11 0-25 1-42 1-121 2-238-25-344-87-98-57-186-143-260-262-27-43-14-99 29-125 42-27 98-14 125 29 57 93 125 159 197 201 78 45 162 65 250 63 7 0 17 0 30-1h1c101-9 193-51 258-121 55-59 92-138 102-235-2-22-2-43-2-66 0-18 1-34 2-48v-5h1v-6l1-1v-4l1-2v-2l1-1v-2l1-1v-2l1-1v-1l1-1v-2l2-4 1-2 1-1v-1l1-1 2-4 1-1v-1c1-2 3-4 4-5l1-1v-1l1-1 1-1h1v-1l1-1 1-1 1-1 1-1 2-2 1-1 1-1 1-1h1v-1l1-1h1c2-2 4-3 5-4l1-1h1l4-3h1l1-1 2-1h1l1-1 4-1 1-1h1l1-1h2l1-1h2l2-1h2v-1h4l1-1h4l2-1h23l2 1h5v1h4l1 1h2l1 1h2l1 1h2l2 1 2 1 4 1 1 1h1l2 1v1h1l4 3h1l1 1c2 1 4 2 5 4h1l1 1 1 1h1l1 1v1l1 1h1l2 2v1l2 1 1 1v1l1 1h1v1l1 1 1 1v1c2 1 3 3 4 5l1 1v1l3 4v1l1 1 1 1v2h1l2 4v3l1 1v1l1 1v2l1 1v2l1 1v3l1 2v5l1 2v7c1 14 2 30 2 48 1 23 0 44-1 66 10 97 47 176 101 235 66 70 157 112 258 121h2c13 1 23 1 30 1 87 2 172-18 249-63 73-42 140-108 198-201z"/>
        <rect :class="legright" data-part="legright" x="2905" y="7480" width="968" height="2634" rx="484" ry="484"/>
        <path :class="pawright" data-part="pawright" d="M3873 9578v52c0 266-218 484-484 484s-484-218-484-484v-52h968z"/>
        <rect :class="legbackright" data-part="legbackright" x="4271" y="7480" width="968" height="2634" rx="484" ry="484"/>
        <path :class="pawbackright" data-part="pawbackright" d="M5239 9578v52c0 266-218 484-484 484s-484-218-484-484v-52h968z"/>
        <rect :class="legbackleft" data-part="legbackleft" x="7833" y="7480" width="968" height="2634" rx="484" ry="484"/>
        <path :class="pawbackleft" data-part="pawbackleft" d="M7833 9578v52c0 266 217 484 484 484 266 0 484-218 484-484v-52h-968z"/>
        <rect :class="legleft" data-part="legleft" x="6466" y="7480" width="968" height="2634" rx="484" ry="484"/>
        <path :class="pawleft" data-part="pawleft" d="M6466 9578v52c0 266 218 484 484 484s484-218 484-484v-52h-968z"/>
        <path :class="tail" data-part="tail" d="M7442 8127c0 266 217 484 484 484h1454c563 0 1041-406 1041-982V6140c0-266-218-484-484-484s-484 218-484 484v1385l-1 3v6l-1 3v3l-1 3v3l-1 3-1 3-1 3-1 3-1 3-1 3-1 3-1 2-1 3-2 3-1 2-2 3-1 3-2 2-1 3-2 2-2 3-2 2-2 2-2 3-2 2-2 2-2 2-2 2-2 2-2 2-2 2h-1l-2 2-2 2-3 2-2 1-3 2-2 2-3 1-2 2-3 1-3 1-2 2-3 1-3 1-3 1-3 1-3 1-3 1-2 1h-3l-3 1-4 1h-3l-3 1h-6l-3 1H7926c-267 0-484 217-484 484z"/>
        <path :class="legrightshadow" data-part="legrightshadow" d="M4271 8611h968v483h-968v-15z"/>
        <path :class="tailshadow" data-part="tailshadow" d="M8801 7643h218v968h-218z"/>
        <path :class="body" data-part="body" d="M2905 4748h5896v3862H2905z"/>
        <path :class="chest" data-part="chest" d="M6466 8611H3873V7282c0-713 583-1296 1297-1296 713 0 1296 583 1296 1296v1329z"/>
        <path :class="collar" data-part="collar" d="M2905 4748h5896v278H2905z"/>
        <path :class="tailtop" data-part="tailtop" d="M9453 6192v-52c0-266 218-484 484-484s484 218 484 484v52h-968z"/>
        <ellipse :class="nose" data-part="nose" cx="5853" cy="3660" rx="218" ry="158"/>
    </svg>
</template>

<script>
    const colors = ['md-red', 'md-pink', 'md-purple', 'md-deep-purple', 'md-indigo', 'md-blue', 'md-light-blue', 'md-cyan', 'md-teal', 'md-green', 'md-light-green', 'md-lime', 'md-yellow', 'md-amber', 'md-orange', 'md-deep-orange', 'md-brown', 'md-grey', 'md-blue-grey'];
    const faceAwareParts = ['lips', 'eyeleft', 'eyeright', 'nose', 'head'];
    const bgAwareParts = ['head', 'ear1left', 'ear1right', 'ear2left', 'ear2right', 'tail', 'tailtop', 'legright', 'pawright', 'legbackright', 'pawbackright', 'legbackleft', 'pawbackleft', 'legleft', 'pawleft', 'body', 'chest', 'bg'];

    export default {
        name: 'colorful-cat',
        props: ['editable', 'bg', 'ear1left', 'ear1right', 'ear2right', 'ear2left', 'head', 'hair', 'eyeright', 'eyeleft', 'mouth', 'lips', 'legright', 'pawright', 'legbackright', 'pawbackright', 'legbackleft', 'pawbackleft', 'legleft', 'pawleft', 'tail', 'legrightshadow', 'tailshadow', 'body', 'chest', 'collar', 'tailtop', 'nose'],
        methods: {
            logPart(event) {
                if (!this.editable) {
                    return;
                }

                const currentClass = event.target.getAttribute('class');
                const part = event.target.getAttribute('data-part');
                const isFaceAwarePart = faceAwareParts.includes(part);
                const isBgAwarePart = bgAwareParts.includes(part);
                let color = null;
                let availableColors = [];

                if (isFaceAwarePart) {
                    availableColors = this.getRestrictedColors(faceAwareParts, currentClass);
                } else if (isBgAwarePart) {
                    availableColors = this.getRestrictedColors(bgAwareParts, currentClass);
                } else {
                    availableColors = colors.slice();
                }

                if (availableColors.length) {
                    color = availableColors[Math.round(Math.random() * (availableColors.length - 1))];
                    event.target.setAttribute('class', color);
                }
            },
            getRestrictedColors(parts, currentClass) {
                const selector = parts.map(e => `[data-part=${e}]`).join(', ');
                const restrictedColors = Array.from(this.$el.querySelectorAll(selector))
                    .map(e => e.getAttribute('class'))
                    .concat(currentClass)
                    .filter(Boolean);

                return colors.filter(c => !restrictedColors.includes(c));
            }
        },
    };
</script>

<style lang="scss">
    .colorful-cat {
        width: 100%;

        %white-fill { fill: #fff }
        %light-blue-fill { fill: #01a8f5 }
        %dark-blue-fill { fill: #16274a }
        %skin-tone-fill { fill: #ef9a9a }
        %shadow-overlay { opacity: .2 }

        [data-part=bg]             { fill: #ffd500 }
        [data-part=body]           { @extend %light-blue-fill }
        [data-part=chest]          { @extend %white-fill      }
        [data-part=collar]         { @extend %dark-blue-fill  }
        [data-part=ear1left]       { @extend %light-blue-fill }
        [data-part=ear1right]      { @extend %light-blue-fill }
        [data-part=ear2left]       { @extend %skin-tone-fill  }
        [data-part=ear2right]      { @extend %skin-tone-fill  }
        [data-part=eyeleft]        { @extend %dark-blue-fill  }
        [data-part=eyeright]       { @extend %dark-blue-fill  }
        [data-part=hair]           { @extend %dark-blue-fill  }
        [data-part=head]           { @extend %light-blue-fill }
        [data-part=legbackleft]    { @extend %light-blue-fill }
        [data-part=legbackright]   { @extend %light-blue-fill }
        [data-part=legleft]        { @extend %light-blue-fill }
        [data-part=legright]       { @extend %light-blue-fill }
        [data-part=legrightshadow] { @extend %shadow-overlay  }
        [data-part=lips]           { @extend %dark-blue-fill  }
        [data-part=mouth]          { @extend %white-fill      }
        [data-part=nose]           { @extend %dark-blue-fill  }
        [data-part=pawbackleft]    { @extend %white-fill      }
        [data-part=pawbackright]   { @extend %white-fill      }
        [data-part=pawleft]        { @extend %white-fill      }
        [data-part=pawright]       { @extend %white-fill      }
        [data-part=tail]           { @extend %light-blue-fill }
        [data-part=tailshadow]     { @extend %shadow-overlay  }
        [data-part=tailtop]        { @extend %white-fill      }

        .md-red         { fill: #F44336 }
        .md-pink        { fill: #E91E63 }
        .md-purple      { fill: #6C27B0 }
        .md-deep-purple { fill: #673AB7 }
        .md-indigo      { fill: #3F51B5 }
        .md-blue        { fill: #2196F3 }
        .md-light-blue  { fill: #03A9F4 }
        .md-cyan        { fill: #00BCD4 }
        .md-teal        { fill: #009688 }
        .md-green       { fill: #4CAF50 }
        .md-light-green { fill: #8BC34A }
        .md-lime        { fill: #CDDC39 }
        .md-yellow      { fill: #FFEB3B }
        .md-amber       { fill: #FFC107 }
        .md-orange      { fill: #FF9800 }
        .md-deep-orange { fill: #FF5722 }
        .md-brown       { fill: #795548 }
        .md-grey        { fill: #9E9E9E }
        .md-blue-grey   { fill: #607D8B }
    }
</style>
