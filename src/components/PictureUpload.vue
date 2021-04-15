<template>
  <div>
    <v-form v-on:submit.prevent="upload()">
      <div class="input-area">
        <input
          id="file-input"
          type="file"
          accept="image/png, image/jpeg"
          @change="handleFileChange($event)"
          ref="fileInput"
        />

        <v-btn
          class="icon-iput"
          @click="$refs.fileInput.click()"
          fab
          dark
          small
          color="primary"
        >
          <v-icon> mdi-camera </v-icon>
        </v-btn>

        <v-btn
          small
          color="primary"
          class="ma-2 white--text"
          fab
          type="submit"
          :disabled="filesSelected < 1"
          :loading="loading"
        >
          <v-icon dark> mdi-cloud-upload </v-icon>
        </v-btn>
      </div>
    </v-form>

    <section v-if="results && results.secure_url">
      <img :src="results.secure_url" :alt="results.public_id" />
    </section>

  </div>
</template>

<script lang="ts">
import axios from 'axios';
import Vue from 'vue';

export default Vue.extend({
  name: 'PictureUpload',
  data() {
    return {
      results: null,
      errors: [],
      file: null,
      filesSelected: 0,
      cloudName: '',
      preset: 'hjgobnx5',
      tags: 'browser-upload',
      fileContents: null,
      formData: null,
      loading: false,
    };
  },
  methods: {
    handleFileChange(event) {
      this.file = event.target.files[0];
      this.filesSelected = event.target.files.length;
    },
    prepareFormData() {
      this.formData = new FormData();
      console.log(this.formData);
      this.formData.append('upload_preset', this.preset);
      this.formData.append('tags', this.tags);
      this.formData.append('file', this.fileContents);
    },
    upload() {
      this.loading = true;
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        this.fileContents = reader.result;
        this.prepareFormData();

        const cloudinaryUploadURL = 'https://api.cloudinary.com/v1_1/dvgd9ejis/image/upload';
        const requestData = {
          url: cloudinaryUploadURL,
          method: 'POST',
          data: this.formData,
        };
        axios(requestData)
          .then((response) => {
            this.results = response.data;
            this.loading = false;
          })
          .catch((error) => {
            this.errorHandler();
            console.log(error);
          });
      });
      if (this.file && this.file.name) {
        reader.readAsDataURL(this.file);
      }
    },
    errorHandler() {
      alert('Ops, algo deu errado. Tente atualizar a página!');
    },
  },
});
</script>

<style>
.input-area {
  display: flex;
  align-items: center;
  margin: 15px 0;
}
#file-input {
  display: none;
}
</style>
