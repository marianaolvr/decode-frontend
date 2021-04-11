<template>
  <v-app id="app">
    <v-main class="grey lighten-3">
      <v-container>
        <v-app-bar clipped-left app>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-toolbar-title>Delve</v-toolbar-title>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" clipped app>
          <v-sheet rounded="lg">
            <SideBar />
          </v-sheet>
        </v-navigation-drawer>
        <v-row>
          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
              class="d-flex justify-center align-center flex-row mb-6">
              <router-link to="/user">Perfil</router-link> |
              <router-link to="/edit">Editar Perfil</router-link>
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
