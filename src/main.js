import { createApp, component } from 'vue'
import App from '@/App.vue'
import store from '@/store'
import CustomInput from '@/components/ui/CustomInput.vue'
import CustomArea from '@/components/ui/CustomArea.vue'

createApp(App)
  .use(store)

  .component('CustomInput', CustomInput)
  .component('CustomArea', CustomArea)

  .mount('#app')