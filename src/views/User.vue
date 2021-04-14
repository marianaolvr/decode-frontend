<template>
    <div>
      <div class="top" v-for="user of userProfile" :key="user.id">
        <v-avatar size="80" style="position: absolute; top: -35px; left: 45px;">
          <img v-bind:src="user.picture.medium" alt="user profile pic" />
        </v-avatar>
        <h2 class="font-weight-light pt-13 pb-10 px-8"
        :style="{ color: $vuetify.theme.themes.light.subtitles }"
        >{{ user.name.first }} <strong> > Meu Perfil </strong></h2>
      </div>
      <v-row class="d-flex">
        <v-col md="4" class="nav d-flex justify-end">
          <v-navigation-drawer>
            <v-navigation-content>
              <v-list class="text-right">
                <v-list-item-group color="primary">
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>
                        <a class="text-decoration-none"
                        href="#contact"><strong>Informações de Contato</strong></a>
                        </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>

                </v-list-item-group>
              </v-list>
            </v-navigation-content>
          </v-navigation-drawer>
        </v-col>

        <v-col md="6" class="content">

          <v-card elevation="0" id="contact" v-for="user of userProfile" :key="user.id">
            <div class="d-flex align-center">
              <v-avatar size="40" color="primary" class="mr-2">
                <v-icon
                  :style="{ color: $vuetify.theme.themes.light.background }"
                >mdi-account</v-icon>
              </v-avatar>
              <h2 class="font-weight-thin">Informações de Contato</h2>
            </div>
            <div class="d-flex justify-space-around">
              <div class="infos">
                <h4 class="subtitle-1 my-3"
                :style="{ color: $vuetify.theme.themes.light.subtitles }"
                >Informações pessoais</h4>
                <p class="subtitle-2">
                  {{ user.name.title }}
                  {{ user.name.first }}
                  {{ user.name.last }}
                </p>
                <p class="subtitle-2">{{ user.email }}</p>
                <p class="font-italic subtitle-2">
                  <v-icon>mdi-map-marker</v-icon>
                  {{ user.location.country }}
                </p>
              </div>
              <v-divider vertical></v-divider>
              <div class="contato">
                <h3 class="subtitle-1 my-3"
          :style="{ color: $vuetify.theme.themes.light.subtitles }">Entrar em contato comigo</h3>
                <p><v-icon>mdi-email</v-icon> {{ user.email }}</p>
                <p><v-icon>mdi-cellphone</v-icon> {{ user.cell }}</p>
                <p><v-icon>mdi-message</v-icon> @{{ user.login.username }}</p>
              </div>
              </div>
            </v-card>

            <v-divider class="my-2"></v-divider>

            <v-card elevation="0" id="about" class="mb-16">
              <div class="d-flex infos align-center">
                <v-avatar size="40" color="primary" class="mr-2">
                  <v-icon :style="{ color: $vuetify.theme.themes.light.background }">
                    mdi-format-quote-close
                  </v-icon>
                </v-avatar>
                <h2 class="font-weight-thin">Sobre mim</h2>
              </div>
              <div class="my-5">
                <p :style="{ color: $vuetify.theme.themes.light.text }">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Similique sed blanditiis excepturi harum. Expedita nulla odio fugit nam,
                  perspiciatis obcaecati impedit facere nihil repudiandae nesciunt
                  consectetur ipsam sed commodi consequatur.
                </p>
              </div>
            </v-card>
        </v-col>
      </v-row>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import mainUser from '../services/mainUser';

export default Vue.extend({
  name: 'User',
  data() {
    return {
      userProfile: [],
    };
  },
  mounted() {
    mainUser.getUser().then((response) => {
      this.userProfile = response.data.results;
    }).catch((error) => {
      console.log(error);
    });
  },
});
</script>
