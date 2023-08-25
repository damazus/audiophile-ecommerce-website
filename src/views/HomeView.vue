<script lang="ts">
import {defineComponent} from 'vue'
import ButtonComponent, {BUTTON_THEMES} from "@/components/ButtonComponent.vue";
import Categories from "@/components/Categories.vue";
import About from "@/components/About.vue";

export default defineComponent({
   name: 'HomeView',
   components: {
      ButtonComponent,
      Categories,
      About,
   },
   data() {
      return {
         BUTTON_THEMES,
      }
   },
   methods: {
      productLink(slug: string){
         return {name: 'products', params:{slug}}
      }
   }
})
</script>

<template>
   <div class="home-view">
      <div class="home-view__hero">
         <div class="home-view__hero-container container">
            <div class="home-view__hero-main">
               <p class="home-view__hero-new">NEW PRODUCT</p>
               <h1 class="home-view__hero-title">XX99 Mark II Headphones</h1>
               <p class="home-view__hero-content">Experience natural, lifelike audio and exceptional build quality made for the passionate music
                  enthusiast.</p>
               <ButtonComponent :link="productLink('xx99-mark-two-headphones')" class="home-view__hero-button">See Product</ButtonComponent>
            </div>
         </div>
      </div>
      <div class="home-view__main">
         <div class="home-view__categories ">
            <Categories/>
         </div>
         <div class="home-view__features">
            <div class="home-view__features-container container">
               <div class="home-view__feature-one">
                  <div class="home-view__feature-one-img-container">
                     <img
                        src="/assets/home/desktop/image-speaker-zx9.png"
                        alt="..."
                        class="home-view__feature-one-img"
                     />
                  </div>
                  <div class="home-view__feature-one-body">
                     <h1 class="home-view__feature-one-title">ZX9 SPEAKER</h1>
                     <p class="home-view__feature-one-description">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                     <ButtonComponent
                        class="home-view__feature-one-button"
                        :link="productLink('zx9-speaker')"
                        :theme="BUTTON_THEMES.secondaryInvert">
                        See Product
                     </ButtonComponent>
                  </div>
               </div>
               <div class="home-view__feature-two">
                  <h2 class="home-view__feature-two-title">ZX7 SPEAKER</h2>
                  <ButtonComponent
                     class="home-view__feature-two-button"
                     :link="productLink('zx7-speaker')"
                     :theme="BUTTON_THEMES.secondary">
                     See Product
                  </ButtonComponent>
               </div>
               <div class="home-view__feature-three-img-container"></div>
               <div class="home-view__feature-three-body">
                  <h2 class="home-view__feature-three-title">YX1 EARPHONES</h2>
                  <ButtonComponent
                     class="home-view__feature-three-button"
                     :link="productLink('yx1-earphones')"
                     :theme="BUTTON_THEMES.secondary">
                     See Product
                  </ButtonComponent>
               </div>
            </div>
         </div>
         <div class="home-view__about">
            <About/>
         </div>
      </div>
   </div>
</template>

<style lang="scss">
@use '@/assets/scss/mixins';

.home-view {
   margin-bottom: 160px;

   &__hero {
      display: flex;
      height: 635px;
      color: var(--color-white);
      background-color: #191919;
      background-image: url("/assets/home/desktop/image-hero.jpg");
      background-position-x: center;
      background-repeat: no-repeat;
      background-size: contain;
   }

   &__hero-container{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
   }

   &__hero-new{
      font-size: 14px;
      line-height: normal;
      letter-spacing: 10px;
      margin-bottom: 24px;
      opacity: 0.5;
   }

   &__hero-title{
      max-width: 700px;
      margin-bottom: 24px;
   }

   &__hero-content{
      @include mixins.text-muted;
      max-width: 350px;
      margin-bottom: 40px;
   }

   &__main{
      display: flex;
      flex-direction: column;
      gap: 160px;
   }

   &__categories{
      padding-top: 160px;
      margin-top: 120px;
   }

   &__features-container{
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 560px 320px 320px;
      grid-template-areas:
         "feature-one feature-one"
         "feature-two feature-two"
         "feature-three-img-container feature-three-body";
      gap: 48px;
   }

   &__feature-one{
      grid-area: feature-one;
      display: flex;
      color: var(--color-white);
      background-color: var(--color-primary);
      background-image: url("/assets/home/desktop/pattern-circles.svg");
      background-repeat: no-repeat;
      background-position: -148px -40px;
      border-radius: 8px;
   }

   &__feature-one-img-container{
      position: relative;
      overflow: hidden;
      width: 60%;
   }

   &__feature-one-img{
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: -15px;
      width: 410px;
   }

   &__feature-one-body{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      width: 40%;
      max-width: 360px;
   }

   &__feature-one-title{
      margin-bottom: 24px;
   }

   &__feature-one-description{
      @include mixins.text-muted;
      margin-bottom: 40px;
   }

   &__feature-two{
      grid-area: feature-two;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding: 0 112px;
      border-radius: 8px;
      background-image: url("/assets/home/desktop/image-speaker-zx7.jpg");
      background-position-x: center;
      background-repeat: no-repeat;
      background-size: contain;
   }

   &__feature-two-title{
      margin-bottom: 32px;
   }

   &__feature-three-img-container{
      grid-area: feature-three-img-container;
      background-image: url("/assets/home/desktop/image-earphones-yx1.jpg");
      background-repeat: no-repeat;
      border-radius: 8px;
   }

   &__feature-three-img,
   &__feature-three-body{
      border-radius: 8px;
   }

   &__feature-three-title{
      margin-bottom: 32px;
   }

   &__feature-three-body{
      grid-area: feature-three-body;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding-left: 96px;
      background: var(--color-light);
   }
}
</style>
