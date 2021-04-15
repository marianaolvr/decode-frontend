<template>
  <v-form ref="form" class="mb-10">
    <label for="about">
      Um pouco sobre mim
    </label>

    <v-textarea
        solo
        name="about"
        class="mt-5 about"
        v-model="about"
        :rules="aboutRules"
    ></v-textarea>
    <v-btn
      :v-if="alert"
      color="primary"
      class="mb-2"
      small
      rounded
      @click="save()"
      >Salvar</v-btn
    >

    <v-alert
      v-model="alert"
      dismissible
      text
     type="success"
    >Perfil salvo com sucesso!
    </v-alert>

  </v-form>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'About',
  data() {
    return {
      alert: false,
      about: '',
      aboutRules: [(v: '') => !!v || 'Você não adicionou nenhuma habilidade!'],
    };
  },
  computed: {
    form(): Vue & { validate: () => boolean } {
      return this.$refs.form as Vue & { validate: () => boolean };
    },
  },
  mounted() {
    if (localStorage.about) {
      this.about = localStorage.about;
    }
  },
  methods: {
    save() {
      if (this.form.validate()) {
        localStorage.about = this.about;
        this.alert = true;
      }
    },
  },
});
</script>

<style scoped>
.hobby {
  margin-bottom: 5px;
}
</style>
