<template>
    <v-container>
        <h1>Soy Usuarios</h1>
        <v-data-table v-model:items-per-page="itemsPerPage" :headers="headers" :items="desserts" item-value="name"
            class="elevation-1"></v-data-table>
    </v-container>
</template>
  
<script>



export default {
    data() {
        return {
            itemsPerPage: 5,
            headers: [
                {
                    title: 'Dessert (100g serving)',
                    align: 'start',
                    sortable: false,
                    key: 'name',
                },
                { title: 'Identificación', align: 'end', key: 'identificacion' },
                { title: 'Usuario', align: 'end', key: 'usuarios' },
                { title: 'Nombre', align: 'end', key: 'nombre' },
                { title: 'Dirección', align: 'end', key: 'direccion' },
                { title: 'E-mail', align: 'end', key: 'email' },
                { title: 'Rol', align: 'end', key: 'rol' },
                { title: 'Contraseña', align: 'end', key: 'contraseña' },
            ],
            desserts: [
                {
                    name: 'Frozen Yogurt',
                    identificacion: 159,
                    usuarios: 6.0,
                    nombre: 24,
                    direccion: 4.0,
                    email: '1',
                    rol: "2",
                    contraseña:"olakase"
                },
                {
                    name: 'Jelly bean',
                    identificacion: 375,
                    usuarios: 0.0,
                    nombre: 94,
                    direccion: 0.0,
                    email: '0',
                    rol: "2",
                    contraseña:"olakase"
                },
                {
                    name: 'KitKat',
                    identificacion: 518,
                    usuarios: 26.0,
                    nombre: 65,
                    direccion: 7,
                    email: '6',
                    rol: "2",
                    contraseña:"olakase"
                },
                {
                    name: 'Eclair',
                    identificacion: 262,
                    usuarios: 16.0,
                    nombre: 23,
                    direccion: 6.0,
                    email: '7',
                    rol: "2",
                    contraseña:"olakase"
                },
                {
                    name: 'Gingerbread',
                    identificacion: 356,
                    usuarios: 16.0,
                    nombre: 49,
                    direccion: 3.9,
                    email: '16',
                    rol: "2",
                    contraseña:"olakase"
                },
                {
                    name: 'Ice cream sandwich',
                    identificacion: 237,
                    usuarios: 9.0,
                    nombre: 37,
                    direccion: 4.3,
                    email: '1',
                    rol: "2",
                    contraseña:"olakase"
                },
                {
                    name: 'Lollipop',
                    identificacion: 392,
                    usuarios: 0.2,
                    nombre: 98,
                    direccion: 0,
                    email: '2',
                    rol: "2",
                    contraseña:"olakase"
                },
                {
                    name: 'Cupcake',
                    identificacion: 305,
                    usuarios: 3.7,
                    nombre: 67,
                    direccion: 4.3,
                    email: '8',
                    rol: "2",
                    contraseña:"olakase"
                },
                {
                    name: 'Honeycomb',
                    identificacion: 408,
                    usuarios: 3.2,
                    nombre: 87,
                    direccion: 6.5,
                    email: '45',
                    rol: "2",
                    contraseña:"olakase"
                },
                {
                    name: 'Donut',
                    identificacion: 452,
                    usuarios: 25.0,
                    nombre: 51,
                    direccion: 4.9,
                    email: '22',
                    rol: "2",
                    contraseña:"olakase"
                },
            ],
        }
    },
}
</script>
  