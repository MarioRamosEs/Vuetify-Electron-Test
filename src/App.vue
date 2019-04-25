<template>
  <v-app>
    <v-toolbar dense dark color="primary" primary app>
      <v-toolbar-title class="headline text-uppercase">
        <span>DONPIZZA</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat to="/produccion"> <span class="mr-2">Producción</span> </v-btn>
      <v-btn flat to="/"> <span class="mr-2">Recepcion</span> </v-btn>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      //
    }
  }
}
</script>
