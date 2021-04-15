<template>
  <v-form ref="form" class="my-10">
    <label for="skill">
      Aqui estão algumas das minhas habilidades profissionais
    </label>
    <v-text-field
      class="skill"
      autocomplete="off"
      append-icon
      v-model="skill"
      chips
      :rules="skillsRules"
    ></v-text-field>
    <v-btn
      color="primary"
      class="mb-2"
      small
      rounded
      @click="save()"
      >Adicionar Habilidade</v-btn
    >
    <v-chip-group column>
      <v-chip
        v-for="(skillTitle, index) in skillsList"
        :key="skillTitle"
        close
        @click:close="remove(index)"
      >
        {{ skillTitle }}
      </v-chip>
    </v-chip-group>
  </v-form>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Skills',
  data() {
    return {
      skill: '',
      skillsList: [],
      skillsRules: [(v: '') => !!v || 'Você não adicionou nenhuma habilidade!'],
    };
  },
  computed: {
    form(): Vue & { reset: () => boolean } {
      return this.$refs.form as Vue & { reset: () => boolean };
    },
  },
  mounted() {
    this.getSkillsList();
  },
  methods: {
    save() {
      if (this.skill.length > 0) {
        this.skillsList.push(this.skill);
        this.form.reset();
        this.saveStorage();
      }
    },
    remove(index: number) {
      this.skillsList.splice(index, 1);
      this.saveStorage();
    },
    saveStorage() {
      const parsed = JSON.stringify(this.skillsList);
      localStorage.setItem('skillsList', parsed);
    },
    getSkillsList() {
      if (localStorage.getItem('skillsList')) {
        try {
          this.skillsList = JSON.parse(localStorage.getItem('skillsList') || '{}');
        } catch (e) {
          localStorage.removeItem('skillsList');
        }
      }
    },
  },
});
</script>

<style scoped>
.skill {
  margin-bottom: 5px;
}
</style>
