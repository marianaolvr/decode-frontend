<template>
  <div>
    <v-list id="other-users" color="transparent">
        <v-list-item link to="/user">
          <v-avatar size="30" class="mr-5">
            <img
              :src="newProfilePicture ? newProfilePicture : profilePicture"
              :alt="userName" />
          </v-avatar>
        <v-list-item-content>
          <v-list-item-title :style="{ color: $vuetify.theme.themes.light.text }">
            Meu perfil
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

    <v-layout justify-start class=" ml-4 my-4">
      <div>
        <v-btn
          elevation="2"
          small
          rounded
          color="primary"
          to="/user/edit"
        >
          <v-icon left>mdi-pencil</v-icon>
          Editar Perfil
        </v-btn>
      </div>
    </v-layout>

      <v-divider class="my-2"></v-divider>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title :style="{ color: $vuetify.theme.themes.light.subtitles }">
            <strong>Pessoas</strong>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item v-for="user of usersList" :key="user.id" link>
          <v-avatar size="30" class="mr-5">
            <img
              :src="user.picture.medium"
              :alt="user.name.first" />
          </v-avatar>
        <v-list-item-content>
          <v-list-item-title :style="{ color: $vuetify.theme.themes.light.text }">
            {{ user.name.first }} {{ user.name.last }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import eventBus from '@/EventBus';
import usersService from '../services/usersService';
import mainUser from '../services/mainUser';

export default Vue.extend({
  name: 'User',
  data() {
    return {
      usersList: [],
      profilePicture: '',
      userName: '',
      newProfilePicture: '',
    };
  },
  created() {
    eventBus.$on('image:update', (src) => {
      this.newProfilePicture = src;
    });
  },
  mounted() {
    this.getUsers();
    this.getPicture();
  },
  methods: {
    getUsers() {
      usersService.get('/?results=5')
        .then((response) => {
          this.usersList = response.data.results;
        }).catch((error) => {
          this.errorHandler();
          console.log(error);
        });
    },
    getPicture() {
      mainUser.getUser()
        .then((response) => {
          this.profilePicture = response.data.results[0].picture.medium;
          this.userName = response.data.results[0].name.first;
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
