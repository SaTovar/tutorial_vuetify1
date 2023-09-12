<template>
  <v-app>
    <v-main>
      <router-link to="/">compras</router-link>
      <router-link to="/ventas">ventas</router-link>
      <v-card max-width="100%" class="mx-auto" color="secondary">
        <v-layout>
          <v-app-bar color="teal-darken-4" image="https://picsum.photos/1920/1080?random">
            <template v-slot:image>
              <v-img gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"></v-img>
            </template>

            <template v-slot:prepend>
              <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg" title="Distrtibuciones Rey"
                nav>
                <template v-slot:append>
                  <v-btn variant="text" icon="mdi-chevron-left" @click.stop="rail = !rail"></v-btn>
                </template>
              </v-list-item>
            </template>

            <v-app-bar-title>Home</v-app-bar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </v-app-bar>
          <v-main>
            <v-container fluid>
              <v-row dense>
                <v-col>
                  <h1>Hola</h1>
                </v-col>
              </v-row>
            </v-container>
          </v-main>
          <v-navigation-drawer v-model="drawer" :rail="rail" permanent @click="rail = false">

            <v-divider></v-divider>

            <v-list density="compact" nav>
              <v-list-item prepend-icon="mdi mdi-shopping-outline" title="Home" value="home" ></v-list-item>
              <v-list-item prepend-icon="mdi mdi-shopping-outline" title="Compras" value="compras" to="/"></v-list-item>
              <v-list-item prepend-icon="mdi-account-group-outline" title="Ventas" value="Firebase" to="/ventas">  </v-list-item>
              <v-list-item prepend-icon="mdi-account-group-outline" title="Usuarios" value="usuarios" to="/usuarios"> </v-list-item>
              <v-list-item prepend-icon="mdi-account-group-outline" title="Productos" value="productos" to="/productos"> </v-list-item>

              <v-list-item prepend-icon="mdi mdi-shopping-outline" title="Crear Usuarios" value="crearusuarios" to="/crearusuarios"></v-list-item>
            </v-list>
          </v-navigation-drawer>
          <v-main style="height: 250px"></v-main>
          
          
        </v-layout>
      </v-card>
      <router-view></router-view>
      <!--  <HelloWorld /> -->
    </v-main>
    

  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',

  components: {
    //HelloWorld,
  },

  data() {
    return {
      drawer: true,
      rail: true,
    }
  },
}
</script>

