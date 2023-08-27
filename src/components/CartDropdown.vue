<script lang="ts">
import {defineComponent} from 'vue'
import Cart from '@/components/Cart.vue'

export default defineComponent({
   name: 'CartDropdown',
   components: {
      Cart
   },
   props: {
      value: {
         type: Boolean,
         required: true
      }
   },
})
</script>

<template>
   <div class="cart-dropdown" :class="{'cart-dropdown--visible': value}">
      <Cart class="cart-dropdown__main"/>
   </div>
</template>

<style lang="scss">
.cart-dropdown{
   position: fixed;
   z-index: 1;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   background-color: rgba(0, 0, 0, 0.4);
   opacity: 0;
   visibility: hidden;
   pointer-events: none;

   &--visible{
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
   }

   &__main{
      position: absolute;
      z-index: 10;
      top: 130px;
      right: 164px;
      width: 427px;
      padding: 30px;
      margin-bottom: 32px;

   }
}
</style>