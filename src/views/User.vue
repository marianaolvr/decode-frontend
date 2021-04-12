<template>
    <div>
      <div class="top">
        <v-avatar size="80" style="position: absolute; top: -35px; left: 45px;">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>
        <h2 class="font-weight-light pt-13 pb-10 px-8"
        :style="{ color: $vuetify.theme.themes.light.subtitles }"
        >{{ user.name }}</h2>
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
                        href="#contact">Informações de Contato</a>
                        </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>
                      <a class="text-decoration-none"
                      href="#about" style="all: unset;">Sobre mim</a>
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>
                        <a class="text-decoration-none"
                        href="#projects" style="all: unset;">Projetos</a>
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>
                        <a class="text-decoration-none"
                        href="#experiences" style="all: unset;">Habilidades e experiência</a>
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>
                        <a class="text-decoration-none"
                        href="#degree" style="all: unset;">Universidade e formação</a>
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>
                        <a class="text-decoration-none"
                        href="#hobbies" style="all: unset;">Interesses e hobbies</a>
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-navigation-content>
          </v-navigation-drawer>
        </v-col>

        <v-col md="8" class="content" style="max-height: 300px; overflow-y: scroll">

          <v-card elevation="0" id="contact">
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
                <h4 class="subtitle-1">Informações pessoais</h4>
                <p class="subtitle-2">{{ user.name }}</p>
                <p class="subtitle-2">{{ user.role }} at {{ user.company }}</p>
                <p class="font-italic subtitle-2">{{ user.city }} | {{ user.uf }} </p>
              </div>
              <v-divider vertical></v-divider>
              <div class="contato">
                <h3 class="subtitle-1">Entrar em contato comigo</h3>
                <h3 class="subtitle-1">Links da Web</h3>
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

export default Vue.extend({
  name: 'User',
  data: () => ({
    user: {
      name: 'Mariana Oliveira',
      company: 'Sinch',
      role: 'Developer',
      city: 'São Paulo',
      uf: 'SP',
    },
  }),
});
</script>
