<template>
  <v-form ref="form" class="mb-10">
    <label for="hobby">
      O que eu gosto de fazer no meu tempo livre
    </label>
    <v-text-field
      class="hobby"
      autocomplete="off"
      append-icon
      v-model="hobby"
      chips
      :rules="hobbiesRules"
    ></v-text-field>
    <v-btn
      color="primary"
      class="mb-2"
      small
      rounded
      @click="save()"
      >Adicionar Hobby</v-btn
    >
    <v-chip-group column>
      <v-chip
        v-for="(hobby, index) in HobbiesList"
        :key="hobby"
        close
        @click:close="remove(index)"
      >
        {{ hobby }}
      </v-chip>
    </v-chip-group>
  </v-form>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Hobbies',
  data() {
    return {
      hobby: '',
      hobbiesList: [],
      hobbiesRules: [(v: '') => !!v || 'Você não adicionou nenhuma habilidade!'],
    };
  },
  computed: {
    form(): Vue & { reset: () => boolean } {
      return this.$refs.form as Vue & { reset: () => boolean };
    },
  },
  mounted() {
    this.getHobbiesList();
  },
  methods: {
    save() {
      if (this.hobby.length > 0) {
        this.hobbiesList.push(this.hobby);
        this.form.reset();
        this.saveStorage();
      }
    },
    remove(index: number) {
      this.hobbiesList.splice(index, 1);
      this.saveStorage();
    },
    saveStorage() {
      const parsed = JSON.stringify(this.hobbiesList);
      localStorage.setItem('hobbiesList', parsed);
    },
    getHobbiesList() {
      if (localStorage.getItem('hobbiesList')) {
        try {
          this.hobbiesList = JSON.parse(localStorage.getItem('hobbiesList') || '{}');
        } catch (e) {
          localStorage.removeItem('hobbiesList');
        }
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
