<template>
  <div id="app">
    <AppHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from './components/Header.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
  },
};
</script>

<style>
nav {
  display: flex;
  gap: 1rem;
}
</style>
