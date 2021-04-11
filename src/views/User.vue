<template>
  <div class="user">
    <HelloWorld msg="Olá, mundão!"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'User',
  components: {
    HelloWorld,
  },
});
</script>
