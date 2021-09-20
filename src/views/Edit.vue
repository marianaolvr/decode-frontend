<template>
    <div class="container">
    <div class="top" v-for="user of userProfile" :key="user.id">
      <v-avatar size="80" style="position: absolute; top: -35px; left: 45px;">
        <img v-bind:src="sourceImg ? sourceImg : user.picture.medium " alt="user profile pic" />
      </v-avatar>
      <div class="name-header">
        <h2>
          {{ user.name.first }}
          <strong>
            <v-icon>
              mdi-chevron-right
            </v-icon>
            Editar Perfil
          </strong>
        </h2>
      </div>
    </div>
<div class="content">
      <v-row class="d-flex">
        <v-col md="4" class="nav d-flex justify-end">
          <v-navigation-drawer mobile-breakpoint="0">
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
<v-card class="scroll">
          <v-card
            elevation="1"
            id="contact"
            v-for="user of userProfile"
            :key="user.id"
            class="pa-5">
            <div class="d-flex align-center">
              <v-avatar size="40" color="primary" class="mr-2">
                <v-icon
                  :style="{ color: $vuetify.theme.themes.light.background }"
                >mdi-account</v-icon>
              </v-avatar>
              <h2 class="font-weight-thin">Informações de Contato</h2>
            </div>
            <div>
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
                <new-picture :results="results" @image:update="imageUpdate" />
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

            <v-card elevation="1" id="about" class="pa-5">
              <div class="d-flex infos align-center">
                <v-avatar size="40" color="primary" class="mr-2">
                  <v-icon :style="{ color: $vuetify.theme.themes.light.background }">
                    mdi-format-quote-close
                  </v-icon>
                </v-avatar>
                <h2 class="font-weight-thin">Sobre mim</h2>
              </div>
              <About />
            </v-card>

        <v-divider class="my-2"></v-divider>

            <v-card elevation="1" id="address" class="pa-5">
              <div class="d-flex infos align-center">
                <v-avatar size="40" color="primary" class="mr-2">
                  <v-icon :style="{ color: $vuetify.theme.themes.light.background }">
                    mdi-map-marker
                  </v-icon>
                </v-avatar>
                <h2 class="font-weight-thin">Endereço</h2>
              </div>
              <Address />
            </v-card>

            <v-divider class="my-2"></v-divider>

            <v-card elevation="1" id="projects" class="pa-5">
              <div class="d-flex infos align-center">
                <v-avatar size="40" color="primary" class="mr-2">
                  <v-icon :style="{ color: $vuetify.theme.themes.light.background }">
                    mdi-notebook
                  </v-icon>
                </v-avatar>
                <h2 class="font-weight-thin">Projetos</h2>
              </div>
              <Projects />
            </v-card>

            <v-divider class="my-2"></v-divider>

            <v-card elevation="1" id="experiences" class="pa-5">
              <div class="d-flex infos align-center">
                <v-avatar size="40" color="primary" class="mr-2">
                  <v-icon :style="{ color: $vuetify.theme.themes.light.background }">
                    mdi-lightbulb
                  </v-icon>
                </v-avatar>
                <h2 class="font-weight-thin">Habilidades e experiência</h2>
              </div>
              <Skills />
            </v-card>

            <v-divider class="my-2"></v-divider>

            <v-card elevation="1" id="degree" class="pa-5">
              <div class="d-flex infos align-center">
                <v-avatar size="40" color="primary" class="mr-2">
                  <v-icon :style="{ color: $vuetify.theme.themes.light.background }">
                    mdi-school
                  </v-icon>
                </v-avatar>
                <h2 class="font-weight-thin">Universidade e formação</h2>
              </div>
              <Education />
            </v-card>

            <v-divider class="my-2"></v-divider>

            <v-card elevation="1" id="hobbies" class="pa-5">
              <div class="d-flex infos align-center">
                <v-avatar size="40" color="primary" class="mr-2">
                  <v-icon :style="{ color: $vuetify.theme.themes.light.background }">
                    mdi-music
                  </v-icon>
                </v-avatar>
                <h2 class="font-weight-thin">Interesses e hobbies</h2>
              </div>
              <Hobbies />
            </v-card>
                    </v-card>
        </v-col>

      </v-row>
      </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import mainUser from '@/services/mainUser';
import PictureUpdate from '@/components/PictureUpload.vue';
import About from '@/components/About.vue';
import Address from '@/components/Address.vue';
import Education from '@/components/Education.vue';
import Hobbies from '@/components/Hobbies.vue';
import Projects from '@/components/Projects.vue';
import Skills from '@/components/Skills.vue';

export default Vue.extend({
  name: 'Edit',
  components: {
    'new-picture': PictureUpdate,
    About,
    Address,
    Education,
    Hobbies,
    Projects,
    Skills,
  },
  data() {
    return {
      userProfile: [],
      sections: [
        { tag: '#contact', title: 'Informações de contato' },
        { tag: '#about', title: 'Sobre mim' },
        { tag: '#address', title: 'Endereço' },
        { tag: '#projects', title: 'Projetos' },
        { tag: '#experiences', title: 'Habilidades e experiência' },
        { tag: '#degree', title: 'Universidade e formação' },
        { tag: '#hobbies', title: 'Interesses e hobbies' },
      ],
      sourceImg: '',
    };
  },
  mounted() {
    this.getUser();
  },
  methods: {
    getUser() {
      mainUser.getUser().then((response) => {
        this.userProfile = response.data.results;
      }).catch((error) => {
        this.errorHandler();
        console.log(error);
      });
    },
    errorHandler() {
      // eslint-disable-next-line no-alert
      alert('Ops, algo deu errado. Tente atualizar a página!');
    },
    imageUpdate(url: string) {
      this.sourceImg = url;
    },
  },
});

</script>

<style scoped>

.scroll {
  overflow-y: scroll;
  height: 60vh;
}
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 25px
}

.name-header{
  margin-top: 20px;
}

.name-header h2 {
  color: #1E88E5;
  font-weight: normal;
}

.content{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

</style>
