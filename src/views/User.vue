<template>
  <div class="container">
    <div class="top" v-for="user of userProfile" :key="user.id">
      <v-avatar size="80" style="position: absolute; top: -35px; left: 45px;">
        <img v-bind:src="user.picture.medium" :alt="user.name.first" />
      </v-avatar>
      <div class="name-header">
        <h2>
          {{ user.name.first }}
          <strong>
            <v-icon>
              mdi-chevron-right
            </v-icon>
            Meu Perfil
          </strong>
        </h2>
      </div>
    </div>

    <div class="content">
      <div class="title">
        <a class="text-decoration-none" href="#contact"
          ><strong>
            Informações de Contato
          </strong></a
        >
      </div>
      <v-divider
        vertical
      ></v-divider>
      <div class="content-card">
        <v-card elevation="0" id="contact" v-for="user of userProfile" :key="user.id">
          <div class="d-flex align-center">
            <v-avatar size="40" color="primary" class="mr-2">
              <v-icon color="white"
                >mdi-account</v-icon
              >
            </v-avatar>
            <h2 class="font-weight-thin">Informações de Contato</h2>
          </div>
          <div class="user-infos">
            <div class="personal-infos">
              <h3 class="subtitle-1 my-3">
                Informações pessoais
              </h3>
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
              <h3 class="subtitle-1 my-3">
                Entrar em contato comigo
              </h3>
              <p><v-icon>mdi-email</v-icon> {{ user.email }}</p>
              <p><v-icon>mdi-cellphone</v-icon> {{ user.cell }}</p>
              <p><v-icon>mdi-message</v-icon> @{{ user.login.username }}</p>
            </div>
          </div>
        </v-card>
      </div>
    </div>
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
    mainUser
      .getUser()
      .then((response) => {
        this.userProfile = response.data.results;
      })
      .catch((error) => {
        console.log(error);
      });
  },
});
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 25px
}
.content{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.title, .content-card {
  padding: 0 10px;
}

.content-card {
  display: flex;
}

.user-infos {
  margin-left: 15px;
}

.user-infos h3 {
  color: #1E88E5;
}

.name-header{
  margin-top: 20px;
}

.name-header h2 {
  color: #1E88E5;
  font-weight: normal;
}

</style>
