<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
   name: 'NotFound'
})
</script>

<template>
   <div class="not-found">
      <div class="not-found__container container">
         <div class="not-found__main">
            <h1>404</h1>
            <p>Oups vous êtes perdu</p>
         </div>
      </div>
   </div>
</template>

<style lang="scss">
.not-found{
   &__container{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-height: 50vh;
   }

   &__main{
      max-width: 500px;
   }
}
</style>