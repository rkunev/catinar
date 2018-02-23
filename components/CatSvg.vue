<template>
    <svg @click="updatePartColor" class="cat-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11706 11706" :aria-label="name || 'Cat'">
        <circle :class="bg" data-part="bg" cx="5853" cy="5853" r="5853"/>
        <path :class="main" data-part="main" d="M7762 2854l-181-1583-1004 1003z"/>
        <path :class="main" data-part="main" d="M3943 2854l182-1583 1003 1003z"/>
        <path class="init" data-part="ear2right" d="M3990 2443l135-1172 481 788c-221 103-428 232-616 384z"/>
        <path class="init" data-part="ear2left" d="M7715 2443l-134-1172-482 788c222 103 429 232 616 384z"/>
        <circle :class="main" data-part="main" cx="5853" cy="4736" r="2948"/>
        <path :class="hair" data-part="hair" d="M5853 1788c187 0 371 18 549 51-76 272-325 470-621 470-285 0-527-185-612-441 219-52 448-80 684-80z"/>
        <ellipse :class="eyes" data-part="eyes" cx="4838" cy="3270" rx="300" ry="218"/>
        <ellipse :class="eyes" data-part="eyes" cx="6820" cy="3270" rx="300" ry="218"/>
        <rect :class="main" data-part="main" x="2905" y="7480" width="968" height="2634" rx="484" ry="484"/>
        <path :class="pawright" data-part="pawright" d="M3873 9578v52c0 266-218 484-484 484s-484-218-484-484v-52h968z"/>
        <rect :class="main" data-part="main" x="4271" y="7480" width="968" height="2634" rx="484" ry="484"/>
        <path :class="pawbackright" data-part="pawbackright" d="M5239 9578v52c0 266-218 484-484 484s-484-218-484-484v-52h968z"/>
        <rect :class="main" data-part="main" x="7833" y="7480" width="968" height="2634" rx="484" ry="484"/>
        <path :class="pawbackleft" data-part="pawbackleft" d="M7833 9578v52c0 266 217 484 484 484 266 0 484-218 484-484v-52h-968z"/>
        <rect :class="main" data-part="main" x="6466" y="7480" width="968" height="2634" rx="484" ry="484"/>
        <path :class="pawleft" data-part="pawleft" d="M6466 9578v52c0 266 218 484 484 484s484-218 484-484v-52h-968z"/>
        <path :class="main" data-part="main" d="M7442 8127c0 266 217 484 484 484h1454c563 0 1041-406 1041-982V6140c0-266-218-484-484-484s-484 218-484 484v1385l-1 3v6l-1 3v3l-1 3v3l-1 3-1 3-1 3-1 3-1 3-1 3-1 3-1 2-1 3-2 3-1 2-2 3-1 3-2 2-1 3-2 2-2 3-2 2-2 2-2 3-2 2-2 2-2 2-2 2-2 2-2 2-2 2h-1l-2 2-2 2-3 2-2 1-3 2-2 2-3 1-2 2-3 1-3 1-2 2-3 1-3 1-3 1-3 1-3 1-3 1-2 1h-3l-3 1-4 1h-3l-3 1h-6l-3 1H7926c-267 0-484 217-484 484z"/>
        <path class="init" data-part="legrightshadow" d="M4271 8611h968v483h-968v-15z"/>
        <path class="init" data-part="tailshadow" d="M8801 7643h218v968h-218z"/>
        <path :class="main" data-part="main" d="M2905 4748h5896v3862H2905z"/>
        <path :class="chest" data-part="chest" d="M6466 8611H3873V7282c0-713 583-1296 1297-1296 713 0 1296 583 1296 1296v1329z"/>
        <path :class="collar" data-part="collar" d="M2905 4748h5896v278H2905z"/>
        <path :class="tailtop" data-part="tailtop" d="M9453 6192v-52c0-266 218-484 484-484s484 218 484 484v52h-968z"/>
        <ellipse :class="mouth" data-part="mouth" cx="5853" cy="4141" rx="947" ry="686"/>
        <path :class="noseAndLips" data-part="noseAndLips" d="M6782 3863c26-43 82-56 125-29 42 26 55 82 29 125-75 119-163 205-260 262-107 62-223 89-344 87-17 0-31-1-42-1l-3-1c-145-12-278-74-374-177-22-24-42-50-60-78-18 28-38 54-60 78-97 103-230 165-375 177l-2 1c-11 0-25 1-42 1-121 2-238-25-344-87-98-57-186-143-260-262-27-43-14-99 29-125 42-27 98-14 125 29 57 93 125 159 197 201 78 45 162 65 250 63 7 0 17 0 30-1h1c101-9 193-51 258-121 55-59 92-138 102-235-2-22-2-43-2-66 0-18 1-34 2-48v-5h1v-6l1-1v-4l1-2v-2l1-1v-2l1-1v-2l1-1v-1l1-1v-2l2-4 1-2 1-1v-1l1-1 2-4 1-1v-1c1-2 3-4 4-5l1-1v-1l1-1 1-1h1v-1l1-1 1-1 1-1 1-1 2-2 1-1 1-1 1-1h1v-1l1-1h1c2-2 4-3 5-4l1-1h1l4-3h1l1-1 2-1h1l1-1 4-1 1-1h1l1-1h2l1-1h2l2-1h2v-1h4l1-1h4l2-1h23l2 1h5v1h4l1 1h2l1 1h2l1 1h2l2 1 2 1 4 1 1 1h1l2 1v1h1l4 3h1l1 1c2 1 4 2 5 4h1l1 1 1 1h1l1 1v1l1 1h1l2 2v1l2 1 1 1v1l1 1h1v1l1 1 1 1v1c2 1 3 3 4 5l1 1v1l3 4v1l1 1 1 1v2h1l2 4v3l1 1v1l1 1v2l1 1v2l1 1v3l1 2v5l1 2v7c1 14 2 30 2 48 1 23 0 44-1 66 10 97 47 176 101 235 66 70 157 112 258 121h2c13 1 23 1 30 1 87 2 172-18 249-63 73-42 140-108 198-201z"/>
        <ellipse :class="noseAndLips" data-part="noseAndLips" cx="5853" cy="3660" rx="218" ry="158"/>
    </svg>
</template>

<script>
    export default {
        name: 'cat-svg',
        props: [
            'update', 'name', 'editable', 'bg', 'chest', 'collar', 'eyes', 'hair', 'main', 'mouth',
            'noseAndLips', 'pawright', 'pawbackright', 'pawbackleft', 'pawleft', 'tailtop',
        ],
        methods: {
            updatePartColor({ target }) {
                if (!this.editable || this.$el === target) {
                    return;
                }

                this.update({
                    color: target.getAttribute('class'),
                    type: target.getAttribute('data-part'),
                });
            },
        },
    };
</script>

<style lang="scss">
    @import '~@/assets/scss/_palette';

    .cat-svg {
        width: 100%;
        vertical-align: bottom;

        %white-fill { fill: #fff }
        %light-blue-fill { fill: #01a8f5 }
        %dark-blue-fill { fill: #16274a }
        %skin-tone-fill { fill: #ef9a9a }
        %shadow-overlay { opacity: .2 }

        .init[data-part=bg]             { fill: #ffd500            }
        .init[data-part=main]           { @extend %light-blue-fill }
        .init[data-part=chest]          { @extend %white-fill      }
        .init[data-part=collar]         { @extend %dark-blue-fill  }
        .init[data-part=ear2left]       { @extend %skin-tone-fill  }
        .init[data-part=ear2right]      { @extend %skin-tone-fill  }
        .init[data-part=eyes]           { @extend %dark-blue-fill  }
        .init[data-part=hair]           { @extend %dark-blue-fill  }
        .init[data-part=legrightshadow] { @extend %shadow-overlay  }
        .init[data-part=mouth]          { @extend %white-fill      }
        .init[data-part=lipsAndNose]    { @extend %dark-blue-fill  }
        .init[data-part=pawbackleft]    { @extend %white-fill      }
        .init[data-part=pawbackright]   { @extend %white-fill      }
        .init[data-part=pawleft]        { @extend %white-fill      }
        .init[data-part=pawright]       { @extend %white-fill      }
        .init[data-part=tailshadow]     { @extend %shadow-overlay  }
        .init[data-part=tailtop]        { @extend %white-fill      }

        .md-none        { fill: transparent     }
        .md-white       { fill: $md-white       }
        .md-white-c     { fill: $md-white-c     }
        .md-black       { fill: $md-black       }
        .md-black-c     { fill: $md-black-c     }
        .md-red         { fill: $md-red         }
        .md-red-c       { fill: $md-red-c       }
        .md-pink        { fill: $md-pink        }
        .md-pink-c      { fill: $md-pink-c      }
        .md-purple      { fill: $md-purple      }
        .md-purple-c    { fill: $md-purple-c    }
        .md-d-purple    { fill: $md-d-purple    }
        .md-d-purple-c  { fill: $md-d-purple-c  }
        .md-indigo      { fill: $md-indigo      }
        .md-indigo-c    { fill: $md-indigo-c    }
        .md-blue        { fill: $md-blue        }
        .md-blue-c      { fill: $md-blue-c      }
        .md-l-blue      { fill: $md-l-blue      }
        .md-l-blue-c    { fill: $md-l-blue-c    }
        .md-cyan        { fill: $md-cyan        }
        .md-cyan-c      { fill: $md-cyan-c      }
        .md-teal        { fill: $md-teal        }
        .md-teal-c      { fill: $md-teal-c      }
        .md-green       { fill: $md-green       }
        .md-green-c     { fill: $md-green-c     }
        .md-l-green     { fill: $md-l-green     }
        .md-l-green-c   { fill: $md-l-green-c   }
        .md-lime        { fill: $md-lime        }
        .md-lime-c      { fill: $md-lime-c      }
        .md-yellow      { fill: $md-yellow      }
        .md-yellow-c    { fill: $md-yellow-c    }
        .md-amber       { fill: $md-amber       }
        .md-amber-c     { fill: $md-amber-c     }
        .md-orange      { fill: $md-orange      }
        .md-orange-c    { fill: $md-orange-c    }
        .md-d-orange    { fill: $md-d-orange    }
        .md-d-orange-c  { fill: $md-d-orange-c  }
        .md-brown       { fill: $md-brown       }
        .md-brown-c     { fill: $md-brown-c     }
        .md-grey        { fill: $md-grey        }
        .md-grey-c      { fill: $md-grey-c      }
        .md-blue-grey   { fill: $md-blue-grey   }
        .md-blue-grey-c { fill: $md-blue-grey-c }
    }
</style>
