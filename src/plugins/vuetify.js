// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'
import {
  VDataTable,
  VDataTableServer,
  VDataTableVirtual,
} from "vuetify/labs/VDataTable";


export default createVuetify({
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides


theme: {
  themes: {
    light: {
      dark: false,
      colors: { primary: "#0D47A1", // #E53935
        secondary: "#64B5F6" // #FFCDD2
        
      }
    },
  },
},
components: {
  VDataTable,
  VDataTableServer,
  VDataTableVirtual,
},
})