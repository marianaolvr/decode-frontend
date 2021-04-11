<template>
  <v-app id="app">

    <v-app-bar clipped-left app :style="{ background: $vuetify.theme.themes.light.header }">
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        :style="{ color: $vuetify.theme.themes.light.background }"
      ></v-app-bar-nav-icon>
      <v-toolbar-title :style="{ color: $vuetify.theme.themes.light.background }">
        Delve
      </v-toolbar-title>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>

        <v-navigation-drawer v-model="drawer" clipped app>
          <v-sheet rounded="lg">
            <SideBar v-model="drawer" clipped app />
          </v-sheet>
        </v-navigation-drawer>

        <v-row>
          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
              class="d-flex justify-center align-center flex-row mb-6 mt-16"
            >
              <router-view />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SideBar from '@/components/SideBar.vue';

export default {
  data: () => ({ drawer: null }),

  components: {
    SideBar,
  },
};
</script>
