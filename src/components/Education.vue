<template>
  <v-form ref="form" class="mb-10">
    <label for="education">
      Essas são as escolas que frequentei
    </label>
    <v-text-field
      class="education"
      autocomplete="off"
      append-icon
      v-model="scholl"
      chips
      :rules="schollsRules"
    ></v-text-field>
    <v-btn
      color="primary"
      class="mb-2"
      small
      rounded
      @click="save()"
      >Adicionar Escolas</v-btn
    >
    <v-chip-group column>
      <v-chip
        v-for="(schollName, index) in schollsList"
        :key="schollName"
        close
        @click:close="remove(index)"
      >
        {{ schollName }}
      </v-chip>
    </v-chip-group>
  </v-form>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Education',
  data() {
    return {
      scholl: '',
      schollsList: [],
      schollsRules: [(v: '') => !!v || 'Você não adicionou nenhuma escola!'],
    };
  },
  computed: {
    form(): Vue & { reset: () => boolean } {
      return this.$refs.form as Vue & { reset: () => boolean };
    },
  },
  mounted() {
    this.getSchollsList();
  },
  methods: {
    save() {
      if (this.scholl.length > 0) {
        this.schollsList.push(this.scholl);
        this.form.reset();
        this.saveStorage();
      }
    },
    remove(index: number) {
      this.schollsList.splice(index, 1);
      this.saveStorage();
    },
    saveStorage() {
      const parsed = JSON.stringify(this.schollsList);
      localStorage.setItem('schollsList', parsed);
    },
    getSchollsList() {
      if (localStorage.getItem('schollsList')) {
        try {
          this.schollsList = JSON.parse(localStorage.getItem('schollsList') || '{}');
        } catch (e) {
          localStorage.removeItem('schollsList');
        }
      }
    },
  },
});
</script>

<style scoped>
.scholl {
  margin-bottom: 5px;
}
</style>
