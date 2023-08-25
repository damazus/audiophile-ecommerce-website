<script lang="ts">
import {defineComponent} from 'vue'
import SvgIcon from "@/components/SvgIcon.vue";
import MenuComponent from "@/components/MenuComponent.vue";

export default defineComponent({
   components: {
      SvgIcon,
      MenuComponent,
   }
})
</script>

<template>
   <footer class="footer">
      <div class="footer__container">
         <div class="footer__main">
            <a href="/" class="footer__brand">
               <img src="/assets/shared/desktop/logo.svg" class="footer__brand-img" alt="..."/>
            </a>
            <p class="footer__content">Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound
               specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo
               facility - we’re open 7 days a week.</p>
            <p class="footer__copyright">Copyright 2021. All Rights Reserved</p>
         </div>
         <div class="footer__navigation">
            <MenuComponent class="footer__menu"/>
            <ul class="footer__socials">
               <li class="footer__social">
                  <a href="/" class="footer__social-link">
                     <SvgIcon name="shared-desktop-icon-facebook" class="footer__social-icon"/>
                  </a>
               </li>
               <li class="footer__social">
                  <a href="/" class="footer__social-link">
                     <SvgIcon name="shared-desktop-icon-twitter" class="footer__social-icon"/>
                  </a>
               </li>
               <li class="footer__social">
                  <a href="/" class="footer__social-link">
                     <SvgIcon name="shared-desktop-icon-instagram" class="footer__social-icon"/>
                  </a>
               </li>
            </ul>
         </div>
      </div>
   </footer>
</template>

<style lang="scss">
@use '@/assets/scss/mixins';

.footer {
   color: var(--color-white);
   background-color: var(--color-black-medium);

   &__container{
      @include mixins.container;
      position: relative;
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding: 75px 0 48px;


      &::before{
         content: '';
         position: absolute;
         top: 0;
         left: 0;
         display: block;
         width: 101px;
         height: 4px;
         background-color: var(--color-primary);
      }
   }

   &__brand{
      margin-bottom: 36px;
   }

   &__content,
   &__copyright{
      opacity: 0.5;
   }

   &__content{
      margin-bottom: 56px;
   }

   &__copyright{
      font-weight: 700;
   }

   &__navigation{
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-end;
   }

   &__menu{
      margin-top: -10px;
      margin-bottom: 85px;
   }

   &__socials{
      display: flex;
      gap: 10px;
   }

   &__social-icon{
      width: 24px;
   }
}
</style>