<template>
  <v-form ref="form">
    <v-text-field
      label="CEP"
      v-model="cep"
      v-on:keyup.enter="getPostalCode()"
      v-mask="'#####-###'"
      :rules="cepRules"
    ></v-text-field>
    <v-btn
      color="primary"
      small rounded
      @click="getPostalCode()">Pesquisar
    </v-btn>

    <v-text-field
      label="Rua"
      v-model="street"
      :rules="sizeRules">
    </v-text-field>

    <v-text-field
      label="Número"
      v-model="number"
      :rules="numberRules">
    </v-text-field>

    <v-text-field
      label="Cidade"
      v-model="city"
      :rules="sizeRules">
    </v-text-field>

    <v-btn
      :v-if="alert"
      color="primary"
      class="my-2"
      small
      rounded
      @click="save()">Salvar
    </v-btn>
    <v-alert
      v-model="alert"
      dismissible
      text
     type="success"
    >Endereço salvo com sucesso!
    </v-alert>

  </v-form>
</template>

<script lang="ts">
import Vue from 'vue';
import cepService from '../services/cepService';

export default Vue.extend({
  name: 'Address',
  data() {
    return {
      alert: false,
      valid: true,
      cep: '',
      cepRules: [(v: '') => v.length > 8 || 'CPF incompleto'],
      street: '',
      sizeRules: [(v: '') => !!v || 'Insira pelo menos 3 caracteres'],
      number: '',
      numberRules: [(v: '') => !!v || 'Informe o número'],
      city: '',
    };
  },
  computed: {
    form(): Vue & { validate: () => boolean } {
      return this.$refs.form as Vue & { validate: () => boolean };
    },
  },
  mounted() {
    if (localStorage.cep && localStorage.street && localStorage.number && localStorage.city) {
      this.cep = localStorage.cep;
      this.street = localStorage.street;
      this.number = localStorage.number;
      this.city = localStorage.city;
    }
  },
  methods: {
    getPostalCode() {
      const { cep } = this;
      cepService.get(`${cep}`)
        .then((response) => {
          this.street = response.data.logradouro;
          this.city = response.data.cidade;
        }).catch((error) => {
          this.errorHandler();
          console.log(error);
        });
    },
    save() {
      if (this.form.validate()) {
        localStorage.cep = this.cep;
        localStorage.street = this.street;
        localStorage.number = this.number;
        localStorage.city = this.city;
        this.alert = true;
      }
    },
    errorHandler() {
      // eslint-disable-next-line no-alert
      alert('Ops, algo deu errado. Tente atualizar a página!');
    },
  },
});
</script>
