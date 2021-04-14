<template>
  <v-form ref="form">
    <v-text-field
      autocomplete="off"
      append-icon
      v-model="project"
      label="Projetos nos quais trabalhei"
      chips
    ></v-text-field>
    <v-btn
      color="primary"
      class="mb-2"
      small
      rounded
      :disabled="isDisable(projectsList)"
      @click="save()"
      >Adicionar Projeto</v-btn
    >
    <v-chip-group column>
      <v-chip
        v-for="(projectName, index) in projectsList"
        :key="projectName"
        close
        @click:close="remove(index)"
      >
        {{ projectName }}
      </v-chip>
    </v-chip-group>
  </v-form>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Projects',
  data() {
    return {
      project: '',
      projectsList: [],
    };
  },
  computed: {
    form(): Vue & { validate: () => boolean, reset: () => boolean } {
      return this.$refs.form as Vue & { validate: () => boolean, reset: () => boolean };
    },
  },
  mounted() {
    if (localStorage.getItem('projectsList')) {
      try {
        this.projectsList = JSON.parse(localStorage.getItem('projectsList') || '{}');
      } catch (e) {
        localStorage.removeItem('projectsList');
      }
    }
  },
  methods: {
    isDisable(projectsList: []) {
      return projectsList.length < 0;
    },
    save() {
      if (this.form.validate()) {
        this.projectsList.push(this.project);
        this.form.reset();
        this.saveStorage();
      }
    },
    remove(index: number) {
      this.projectsList.splice(index, 1);
      this.saveStorage();
    },
    saveStorage() {
      const parsed = JSON.stringify(this.projectsList);
      localStorage.setItem('projectsList', parsed);
    },
  },
});
</script>
