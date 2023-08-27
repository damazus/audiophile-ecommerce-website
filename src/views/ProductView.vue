<script lang="ts">
import {defineComponent} from 'vue'
import {useCartStore} from '@/stores/cart'
import type {Product} from "@/types";
import data from "@/data.json";
import About from '@/components/About.vue'
import Categories from '@/components/Categories.vue'
import ProductItem from '@/components/ProductItem.vue'
import ButtonComponent, {BUTTON_THEMES} from "@/components/ButtonComponent.vue";
import ButtonGoBack from "@/components/ButtonGoBack.vue";
import InputStepper from "@/components/InputStepper.vue";
import {formatPrice} from "@/constants";

const store = useCartStore()

export default defineComponent({
   components: {
      ButtonComponent,
      ButtonGoBack,
      Categories,
      ProductItem,
      InputStepper,
      About,
   },
   data() {
      return {
         BUTTON_THEMES,
         quantity: 1
      }
   },
   computed: {
      slug(): string {
         return this.$route.params.slug
      },
      product(): Product | undefined {
         return data.find((item: Product) => item.slug === this.slug)
      },
      priceFormatted(): string | undefined{

         return this.product ? formatPrice(this.product?.price) : undefined
      }
   },
   methods: {
      addToCart(){
         if(this.product){
            store.add({
               product: this.product,
               quantity: this.quantity
            })
         }
      }
   }
})
</script>

<template>
   <div class="product-view" v-if="product">
      <ButtonGoBack/>

      <div class="product-view__main">
         <ProductItem :product="product" class="product-view__overview">
            <template #footer>
               <div class="product-view__overview-footer">
                  <div class="product-view__price">$ {{ priceFormatted }}</div>
                  <div class="product-view__actions">
                     <InputStepper class="product-view__stepper" v-model="quantity"/>
                     <ButtonComponent class="product-view__add-to-card" @click="addToCart">ADD TO CART</ButtonComponent>
                  </div>
               </div>
            </template>
         </ProductItem>
         <div class="product-view__features">
            <div class="product-view__features-description">
               <h3 class="product-view__features-title">FEATURES</h3>
               <p class="product-view__features-content">{{ product.features }}</p>
            </div>
            <div class="product-view__features-in-box">
               <h3 class="product-view__features-title">in the box</h3>
               <ul class="product-view__features-includes">
                  <li class="product-view__features-includes-item"
                      v-for="(include, index) in product.includes"
                      :key="index">
                     <span class="product-view__features-includes-item-quantity">{{ include.quantity }}x</span>
                     <span class="product-view__features-includes-item-name">{{ include.item }}</span>
                  </li>
               </ul>
            </div>
         </div>
         <div class="product-view__gallery">
            <div
               v-for="(item, index) in product.gallery"
               :key="index"
               class="product-view__gallery-item"
               :style="`--gallery-image-url: url('${item.desktop}')`"
            >
            </div>
         </div>
         <div class="product-view__others">
            <h3 class="product-view__others-title">you may also like</h3>
            <div class="product-view__others-main">
               <div
                  class="product-view__others-item"
                  v-for="(item, index) in product.others"
                  :key="index"
               >
                  <img :src="item.image.desktop" class="product-view__others-item-img" alt=".."/>
                  <h5 class="product-view__others-item-title">{{item.name}}</h5>
                  <ButtonComponent :link="{name: 'products', params: {slug: item.slug}}">See Product</ButtonComponent>
               </div>
            </div>
         </div>
         <Categories class="product-view__categories"/>
         <About class="product-view__about"></About>
      </div>
   </div>
</template>

<style lang="scss">
@use '@/assets/scss/mixins';

.product-view {
   --gap: 160px;

   @include mixins.container;
   margin-top: 60px;
   margin-bottom: var(--gap);

   &__button-back {
      @include mixins.text-muted;
      margin-bottom: 56px;
   }

   &__main {
      display: flex;
      flex-direction: column;
      gap: var(--gap);
   }

   &__overview-footer {
      margin-top: -10px;
   }

   &__body {
      padding-left: 125px;
   }

   &__price {
      font-size: 18px;
      font-weight: 700;
      letter-spacing: 1.3px;
      margin-bottom: 47px;
   }

   &__actions {
      display: flex;
      gap: 15px;
   }

   &__features{
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 125px;
   }

   &__features-title{
      margin-bottom: 32px;
   }

   &__features-content{
      opacity: 0.5;
      white-space: pre-line;
   }

   &__features-includes{
      display: flex;
      flex-direction: column;
      gap: 8px;
   }

   &__features-includes-item{
      display: flex;
      gap: 24px;
   }

   &__features-includes-item-quantity{
      font-weight: 700;
      color: var(--color-primary);
   }

   &__features-includes-item-name{
      opacity: 0.5;
   }

   &__gallery{
      display: grid;
      grid-template-columns: 445px 1fr;
      grid-template-rows: 280px 280px;
      grid-template-areas:
         "first third"
         "second third";
      gap: 32px;
   }

   &__gallery-item{
      border-radius: 8px;

      background-repeat: no-repeat;
   }

   &__gallery-item:nth-of-type(1){
      grid-area: first;
      background-image: var(--gallery-image-url);
   }

   &__gallery-item:nth-of-type(2){
      grid-area: second;
      background-image: var(--gallery-image-url);
   }

   &__gallery-item:nth-of-type(3){
      grid-area: third;
      background-image: var(--gallery-image-url);
      background-size: cover;
   }

   &__others{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 64px;
   }

   &__others-main{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
   }

   &__others-item{
      display: flex;
      flex-direction: column;
      align-items: center;
   }

   &__others-item-img{
      display: block;
      margin-bottom: 40px;
   }

   &__others-item-title{
      margin-bottom: 32px;
   }

   &__categories{
      margin-top: var(--gap);
   }
}
</style>