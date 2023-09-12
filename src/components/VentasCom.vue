<template>
  <v-container>
    <h1>Insertar Datos a Firebase</h1>
    <v-data-table :headers="headers" :items="desserts" :sort-by="[{ key: 'id', order: 'asc' }]" class="elevation-1">
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>My CRUD</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ props }">
              <v-btn color="primary" dark class="mb-2" v-bind="props">
                New Item
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.name" label="Dessert name"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.id" label="id"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.usuario" label="usuario"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.nombre" label="nombre"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.contraseña" label="contraseña"></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text" @click="close">
                  Cancel
                </v-btn>
                <v-btn color="blue-darken-1" variant="text" @click="save">
                  Añadir Nuevo Usuario
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Cancel</v-btn>
                <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon size="small" class="me-2" @click="editItem(item.raw)">
          mdi-pencil
        </v-icon>
        <v-icon size="small" @click="deleteItem(item.raw)">
          mdi-delete
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">
          Reset
        </v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>
  

<script>

import db from '../firebase/init.js'
import { collection, getDocs, query, addDoc } from 'firebase/firestore'

export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        title: 'Dessert (100g serving)',
        align: 'start',
        sortable: false,
        key: 'name',
      },
      { title: 'Id', key: 'id' },
      { title: 'Usuario', key: 'usuario' },
      { title: 'Nombre', key: 'nombre' },
      { title: 'Contraseña', key: 'contraseña' },
      { title: 'Actions', key: 'actions', sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      id: 0,
      usuarios: 0,
      nombre: 0,
      contraseña: 0,
    },
    defaultItem: {
      name: '',
      id: 0,
      usuario: 0,
      nombre: 0,
      contraseña: 0,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
  },


  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    },
  },

  created() {
    this.listarUsuarios()
  },

  methods: {

    async createUsuario() {
      const colRef = collection(db, 'user')
      console.log(this.editedItem.name,this.editedItem.id,this.editedItem.usuarios,this.editedItem.nombre, this.editedItem.contraseña,)
      const dataObj = {
        name: this.editedItem.name,
        id: this.editedItem.id,
        usuario: this.editedItem.usuarios,
        nombre: this.editedItem.nombre,
        contraseña: this.editedItem.contraseña,

      }
      const docRef = await addDoc(colRef, dataObj);
      console.log("Creo el usuario con nombre", docRef.id)
    },

    async listarUsuarios() {

      const q = query(collection(db, "user"));
      const resul = await getDocs(q);
      resul.forEach((doc) => {

        console.log("datos", doc.data());
        this.desserts.push(doc.data())

      })

    },

    initialize() {
      this.desserts = [
        {
          name: 'Administrador',
          id: 2,
          usuario: "SaToPi",
          nombre: 24,
          contraseña: "olis",
        },
        {
          name: 'Vendedor',
          id: 3,
          usuario: "YK2",
          nombre: "Carlos Jimenez",
          contraseña: "12345",
        },
        /* {
          name: 'Eclair',
          id: 262,
          usuario: 16.0,
          nombre: 23,
          contraseña: 6.0,
        },
        {
          name: 'Cupcake',
          id: 305,
          usuario: 3.7,
          nombre: 67,
          contraseña: 4.3,
        },
        {
          name: 'Gingerbread',
          id: 356,
          usuario: 16.0,
          nombre: 49,
          contraseña: 3.9,
        },
        {
          name: 'Jelly bean',
          id: 375,
          usuario: 0.0,
          nombre: 94,
          contraseña: 0.0,
        },
        {
          name: 'Lollipop',
          id: 392,
          usuario: 0.2,
          nombre: 98,
          contraseña: 0,
        },
        {
          name: 'Honeycomb',
          id: 408,
          usuario: 3.2,
          nombre: 87,
          contraseña: 6.5,
        },
        {
          name: 'Donut',
          id: 452,
          usuario: 25.0,
          nombre: 51,
          contraseña: 4.9,
        },
        {
          name: 'KitKat',
          id: 518,
          usuario: 26.0,
          nombre: 65,
          contraseña: 7,
        }, */
      ]
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        this.desserts.push(this.editedItem)
        this.createUsuario()
      }
      this.close()

    },
  },

}
</script>
  