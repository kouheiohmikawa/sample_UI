// src/theme.js
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#41B883',
          primaryDark: '#2D8F6F',
          secondary: '#35495E',
          accent: '#9EFFC2',
          background: '#F0FAF5',
        },
      },
    },
  },
})
