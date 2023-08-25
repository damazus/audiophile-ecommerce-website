<script lang="ts">
import {defineComponent} from 'vue'
import MenuComponent from "@/components/MenuComponent.vue";

export default defineComponent({
   name: 'HeaderComponent',
   components: {
      MenuComponent
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
         <router-link :to="{name: 'checkout'}" class="header__basket">
            <SvgIcon
               name="shared-desktop-icon-cart"
               width="23"
               height="20"
            />
         </router-link>
      </div>
   </header>
</template>

<style lang="scss">
@use '@/assets/scss/mixins';

.header {
   color: var(--color-white);
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
}
</style>