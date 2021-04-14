import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        background: colors.shades.white,
        text: colors.grey.darken3,
        subtitles: colors.blue.darken1,
        header: colors.blueGrey.darken4,
        icons: colors.blue.darken4,
        anchor: colors.grey.darken3,
      },
    },
  },
});

export default vuetify;
