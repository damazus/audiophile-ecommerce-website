<script lang="ts">
import {defineComponent} from 'vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default defineComponent({
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  },
})
</script>

<template>
   <div id="app" class="app">
      <HeaderComponent/>
      <div class="main">
         <router-view/>
      </div>
      <FooterComponent/>
   </div>
</template>



