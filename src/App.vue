<template>
  <v-app id="app">

    <v-app-bar
      clipped-left
      app
      :collapse="!collapseOnScroll"
      :collapse-on-scroll="collapseOnScroll"
      :style="{ background: $vuetify.theme.themes.light.header }">
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        :style="{ color: $vuetify.theme.themes.light.background }"
      ></v-app-bar-nav-icon>
      <v-toolbar-title :style="{ color: $vuetify.theme.themes.light.background }">
        Delve
      </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-navigation-drawer v-model="drawer" clipped app>
          <v-sheet rounded="lg">
            <SideBar v-model="drawer" clipped app />
          </v-sheet>
        </v-navigation-drawer>

        <v-row class="mt-16">
          <v-col>
            <v-sheet style="position: relative; display: block;"

              min-height="70vh"
              rounded="lg"
            >
              <router-view />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import SideBar from '@/components/SideBar.vue';

export default Vue.extend({
  data() {
    return {
      drawer: null,
      collapseOnScroll: true,
    };
  },
  components: {
    SideBar,
  },
});
</script>

<style>
main {
  background-image: url('./assets/wallpaper.png');
  background-size: cover;
}
</style>
