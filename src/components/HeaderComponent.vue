<script lang="ts">
import {defineComponent} from 'vue'
import {useCartStore} from '@/stores/cart'
import {mapState} from "pinia";
import MenuComponent from "@/components/MenuComponent.vue";
import CartDropdown from "@/components/CartDropdown.vue";
import ButtonComponent, { BUTTON_THEMES }from "@/components/ButtonComponent.vue";

export default defineComponent({
   name: 'HeaderComponent',
   components: {
      MenuComponent,
      CartDropdown,
      ButtonComponent,
   },
   data(){
      return{
         BUTTON_THEMES,
         showCart: false
      }
   },
   computed: {
      ...mapState(useCartStore, ['totalQuantity'])
   }
})
</script>

<template>
   <header class="header">
      <div class="header__container">
         <a href="/" class="header__brand">
            <img src="/assets/shared/desktop/logo.svg" class="header__brand-img" alt="..."/>
         </a>
         <MenuComponent class="header__menu"/>
         <ButtonComponent
            class="header__basket"
            :theme="BUTTON_THEMES.link"
            :show-icon="false"
            @click="showCart = !showCart"
         >
            <SvgIcon
               class="header__basket-icon"
               name="shared-desktop-icon-cart"
            />
            <span class="header__basket-count" v-if="totalQuantity">{{ totalQuantity }}</span>
         </ButtonComponent>
      </div>
      <CartDropdown
         v-if="showCart"
         v-model="showCart"
      />
   </header>
</template>

<style lang="scss">
@use '@/assets/scss/mixins';

.header {
   background-color: var(--color-black-medium);

   &__container {
      @include mixins.container;

      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
   }

   &__brand {
      display: flex;
      align-items: center;
   }

   .menu-link{
      padding: calc(48px - var(--line-height-half)) 10px;
   }

   &__basket{
      --size: 40px;

      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: var(--size);
      height: var(--size);
      color: var(--color-white);
   }

   &__basket-icon.svg-icon{
      width: 24px;
   }

   &__basket-count{
      --size: 25px;

      position: absolute;
      right: 0;
      top: 0;
      transform: translate(30%, -30%);
      display: flex;
      justify-content: center;
      align-items: center;
      width: var(--size);
      height: var(--size);
      color: var(--color-white);
      background-color: var(--color-primary);
      font-size: 13px;
      font-weight: 700;
      border-radius: 50%;
   }
}
</style>