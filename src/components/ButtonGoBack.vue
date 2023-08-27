<script lang="ts">
import {defineComponent} from 'vue'
import ButtonComponent, {BUTTON_THEMES} from '@/components/ButtonComponent.vue'

export default defineComponent({
   components: {
      ButtonComponent
   },
   data(){
      return{
         BUTTON_THEMES
      }
   },
   methods: {
      onClick(){
         window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
      }
   }
})
</script>

<template>
   <ButtonComponent
      class="product-view__button-back"
      :theme="BUTTON_THEMES.link"
      :show-icon="false"
      @click="onClick"
   >
      <slot>Go Back</slot>
   </ButtonComponent>
</template>