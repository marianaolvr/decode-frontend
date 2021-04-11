/* eslint-disable import/no-extraneous-dependencies */
import '@fortawesome/fontawesome-free/css/all.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'md' || 'fa',
  },
  theme: {
    themes: {
      light: {
        background: colors.shades.white,
        text: colors.grey.darken3,
        subtitles: colors.blue.darken1,
        header: colors.blueGrey.darken4,
        icons: colors.blue.darken4,
        anchor: colors.blue.darken1,
      },
    },
  },
});
