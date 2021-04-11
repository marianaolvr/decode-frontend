<template>
  <div>
    <v-layout justify-center class="d-flex flex-column text-center my-10">
      <div class="mx-auto text-center">
        <v-avatar size="100">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>
        <h3>{{ user.name }}</h3>
        <h5 class="subtitle-1">{{ user.role }} at {{ user.company }}</h5>
        <h4 class="font-italic subtitle-2">{{ user.city }} | {{ user.uf }} </h4>
      </div>
      <div>
        <v-btn class="my-3"
          elevation="2"
          small
          rounded
          color="primary"
          to="/user"
          :style="{ width: '142px' }"
        >
          Meu Perfil
        </v-btn>
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

    <v-list id="other-users" color="transparent">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title :style="{ color: $vuetify.theme.themes.light.subtitles }">
            <strong>Pessoas</strong>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item v-for="n in 5" :key="n" link>
          <v-avatar size="30" class="mr-5">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-avatar>
        <v-list-item-content>
          <v-list-item-title :style="{ color: $vuetify.theme.themes.light.text }">
            Usuário {{ n }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
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
