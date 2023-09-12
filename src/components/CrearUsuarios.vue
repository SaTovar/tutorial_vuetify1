<template>
    <v-container>
        <h1>Soy Crear Usuarios</h1>
        <v-card
    class="mx-auto"
    max-width="344"
    title="User Registration"
  >
    <v-container>
      <v-text-field
        v-model="identificacion"
        color="primary"
        label="DNI"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="Usuario"
        color="primary"
        label="Usuario"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="Nombre"
        color="primary"
        label="Nombre"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="Direccion"
        color="primary"
        label="Direccion"
        placeholder="Enter your password"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="contraseña"
        color="primary"
        label="contraseña"
        placeholder="Enter your password"
        variant="underlined"
      ></v-text-field>

      <v-checkbox
        v-model="terms"
        color="secondary"
        label="I agree to site terms and conditions"
      ></v-checkbox>
    </v-container>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn color="success">
        Complete Registration

        <v-icon icon="mdi-chevron-right" end></v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
        <v-btn type="submit" v-on:click="createUsuario()"> Añadir Usuario </v-btn>
    </v-container>

</template>
  
<script>
import db from '../firebase/init.js'
import {collection, addDoc} from 'firebase/firestore'

export default {
    /* created(){
        this.createUsuario()
    }, */


    methods:{
        async createUsuario(){
            const colRef = collection(db, 'user')
            const doc ={
                id: '2',
                identificacion:1051067694,
                Usuario: 'SaraT',
                Nombre: 'Sara Tovar',
                Direccion: "calle 27 #32-02",
                contraseña: "1234"

            }
            const docRef = await addDoc(colRef, doc);
            console.log("Creo el usuario con nombre", docRef.id)
        }

    }

}
</script>
  
<!-- const crearUsuario = this.$el.querySelector(".añadirUsuario");
crearUsuario.addEventListener('click', this.createUsuario())
 -->