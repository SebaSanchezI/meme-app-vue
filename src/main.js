import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.directive('font-size-70', {
  
  beforeMount: (el, binding) => {
    el.style.fontSize = "70px"
  }
})

app.directive('custom-size', {
  // siempre recibe 2 parametros 'el' y 'binding'
  beforeMount: (el, binding) => {
    let size = '10px'
    switch (binding.arg) {
      case 'sm':
        size = '10px'
        break
      case 'md':
        size = '18px'
        break
      case 'lg':
        size = '24px'
        break
      case 'xl':
        size = '42px'
        break
      case 'xxl':
        size = '84px'
        break
    }
    el.style.fontSize = size
  }
})

app.mount('#app')
