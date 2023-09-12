<template>
  <v-container>
    <h1>Soy Ventas</h1>
    <v-data-table :headers="headers" :items="desserts" :sort-by="[{ key: 'codigo_prod', order: 'asc' }]" class="elevation-1">
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
                      <v-text-field v-model="editedItem.id" label="Dessert id"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.codigo_prod" label="codigo_prod"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.nombre_prod" label="nombre_prod"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.linea" label="linea"></v-text-field>
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
                  Añadir Nuevo nombre_prod
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
        key: 'id',
      },
      { title: 'Codigo Producto', key: 'codigo_prod' },
      { title: 'Nombre Producto', key: 'nombre_prod' },
      { title: 'linea', key: 'linea' },
      { title: 'Actions', key: 'actions', sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      id: '',
      codigo_prod: 0,
      nombre_prod: 0,
      linea: 0,
    },
    defaultItem: {
      id: '',
      codigo_prod: 0,
      nombre_prod: 0,
      linea: 0,
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
    this.listarProducto()
  },

  methods: {

    async createProducto() {
      const colRef = collection(db, 'productos')
      console.log(this.editedItem.id,this.editedItem.codigo_prod,this.editedItem.nombre_prod,this.editedItem.nombre, this.editedItem.linea,)
      const dataObj = {
        id: this.editedItem.id,
        codigo_prod: this.editedItem.codigo_prod,
        nombre_prod: this.editedItem.nombre_prod,
        linea: this.editedItem.linea,

      }
      const docRef = await addDoc(colRef, dataObj);
      console.log("Creo el nombre_prod con nombre", docRef.codigo_prod)
    },

    async listarProducto() {

      const q = query(collection(db, "productos"));
      const resul = await getDocs(q);
      resul.forEach((doc) => {

        console.log("datos", doc.data());
        this.desserts.push(doc.data())

      })

    },

    initialize() {
      this.desserts = [
        {
          id: 1,
          codigo_prod:"001",
          nombre_prod: "Pantaloneta Deportiva",
          linea: "Ropa Deportiva",
        },
        {
          id: 2,
          codigo_prod: "002",
          nombre_prod: "Camiseta Polo",
          linea: "Camisetas",
        },
        /* {
          id: 'Eclair',
          codigo_prod: 262,
          nombre_prod: 16.0,
         
          linea: 6.0,
        },
        {
          id: 'Cupcake',
          codigo_prod: 305,
          nombre_prod: 3.7,
         
          linea: 4.3,
        },
        {
          id: 'Gingerbread',
          codigo_prod: 356,
          nombre_prod: 16.0,
         
          linea: 3.9,
        },
        {
          id: 'Jelly bean',
          codigo_prod: 375,
          nombre_prod: 0.0,
         
          linea: 0.0,
        },
        {
          id: 'Lollipop',
          codigo_prod: 392,
          nombre_prod: 0.2,
         
          linea: 0,
        },
        {
          id: 'Honeycomb',
          codigo_prod: 408,
          nombre_prod: 3.2,
         
          linea: 6.5,
        },
        {
          id: 'Donut',
          codigo_prod: 452,
          nombre_prod: 25.0,
         
          linea: 4.9,
        },
        {
          id: 'KitKat',
          codigo_prod: 518,
          nombre_prod: 26.0,
         
          linea: 7,
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
        this.createProducto()
      }
      this.close()

    },
  },

}
</script>
  