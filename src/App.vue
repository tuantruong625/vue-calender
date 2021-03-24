<template>
  <v-app class="container">
    <v-content>
      <h1 class="header">Basketball 🏀</h1>
      <Calender />
    </v-content>
  </v-app>
</template>

<script>
import Calender from './components/Calender';

export default {
  name: 'App',
  components: {
    Calender,
  },
  data: () => ({
    //
  }),
};
</script>


<style scoped>
.header {
  color: ##495057;
}
</style>