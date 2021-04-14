<template>
    <div>
      <div class="top" v-for="user of userProfile" :key="user.id">
        <v-avatar size="80" style="position: absolute; top: -35px; left: 45px;">
          <img v-bind:src="user.picture.medium" alt="user profile pic" />
        </v-avatar>
        <h2 class="font-weight-light pt-13 pb-10 px-8"
          :style="{ color: $vuetify.theme.themes.light.subtitles }"
        ><a text-decoration-none
        :style="{ color: $vuetify.theme.themes.light.subtitles }">
        {{ user.name.first }}
        </a><strong><v-icon>mdi-chevron-right</v-icon>Editar Perfil</strong></h2>
      </div>
      <v-row class="d-flex">
        <v-col md="4" class="nav d-flex justify-end">
          <v-navigation-drawer>
            <v-navigation-content>
              <v-list class="text-right">
                <v-list-item-group color="primary">
                  <v-list-item v-for="section of sections" :key="section.tag">
                    <v-list-item-content>
                      <v-list-item-title>
                      <a text-decoration-none
                      :href="section.tag" style="all: unset;">{{ section.title }}</a>
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

            <v-card elevation="0" id="about">
              <div class="d-flex infos align-center">
                <v-avatar size="40" color="primary" class="mr-2">
                  <v-icon :style="{ color: $vuetify.theme.themes.light.background }">
                    mdi-format-quote-close
                  </v-icon>
                </v-avatar>
                <h2 class="font-weight-thin">Sobre mim</h2>
              </div>
              <div class="my-10">
                <label :style="{ color: $vuetify.theme.themes.light.text }">
                  Um pouco sobre mim
                </label>
                <v-textarea
                    solo
                    name="about"
                    class="mt-5"
                  ></v-textarea>
                  <v-btn elevation="2" small rounded color="primary" class="mr-3">Salvar</v-btn>
                  <v-btn elevation="2" small rounded color="primary">Cancelar</v-btn>
              </div>
            </v-card>

            <v-divider class="my-2"></v-divider>

            <v-card elevation="0" id="projects">
              <div class="d-flex infos align-center">
                <v-avatar size="40" color="primary" class="mr-2">
                  <v-icon :style="{ color: $vuetify.theme.themes.light.background }">
                    mdi-notebook
                  </v-icon>
                </v-avatar>
                <h2 class="font-weight-thin">Projetos</h2>
              </div>
            </v-card>

            <v-divider class="my-2"></v-divider>

            <v-card elevation="0" id="experiences">
              <div class="d-flex infos align-center">
                <v-avatar size="40" color="primary" class="mr-2">
                  <v-icon :style="{ color: $vuetify.theme.themes.light.background }">
                    mdi-lightbulb
                  </v-icon>
                </v-avatar>
                <h2 class="font-weight-thin">Habilidades e experiência</h2>
              </div>
            </v-card>

            <v-divider class="my-2"></v-divider>

            <v-card elevation="0" id="degree">
              <div class="d-flex infos align-center">
                <v-avatar size="40" color="primary" class="mr-2">
                  <v-icon :style="{ color: $vuetify.theme.themes.light.background }">
                    mdi-school
                  </v-icon>
                </v-avatar>
                <h2 class="font-weight-thin">Universidade e formação</h2>
              </div>
            </v-card>

            <v-divider class="my-2"></v-divider>

            <v-card elevation="0" id="hobbies">
              <div class="d-flex infos align-center">
                <v-avatar size="40" color="primary" class="mr-2">
                  <v-icon :style="{ color: $vuetify.theme.themes.light.background }">
                    mdi-music
                  </v-icon>
                </v-avatar>
                <h2 class="font-weight-thin">Interesses e hobbies</h2>
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
  name: 'Edit',
  data() {
    return {
      userProfile: [],
      sections: [
        { tag: '#contact', title: 'Informações de contato' },
        { tag: '#about', title: 'Sobre mim' },
        { tag: '#projects', title: 'Projetos' },
        { tag: '#experiences', title: 'Habilidades e experiência' },
        { tag: '#degree', title: 'Universidade e formação' },
        { tag: '#hobbies', title: 'Interesses e hobbies' },
      ],
    };
  },
  mounted() {
    this.getUser();
  },
  methods: {
    getUser() {
      mainUser.getUser().then((response) => {
        this.userProfile = response.data.results;
        console.log(this.userProfile);
      }).catch((error) => {
        this.errorHandler();
        console.log(error);
      });
    },
    errorHandler() {
      alert('Ops, algo deu errado. Tente atualizar a página!');
    },
  },
});

</script>
