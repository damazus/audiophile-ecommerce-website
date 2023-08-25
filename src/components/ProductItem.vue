<script lang="ts">
import {defineComponent} from 'vue'
import type {PropType} from 'vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import type {Product} from "@/types";

export default defineComponent({
   components: {
      ButtonComponent
   },
   props: {
      product: {
         type: Object as PropType<Product>,
         required: true
      },
      inverse: {
         type: Boolean,
         default: false
      }
   },
})
</script>

<template>
   <div class="product-item" :class="{'product-item--inverse': inverse}">
      <div class="product-item__img-container">
         <img
            :src="product.image.desktop"
            class="product-item__img"
            alt="..."
         />
      </div>
      <div class="product-item__main">
         <p class="product-item__new" v-if="product.new">NEW PRODUCT</p>
         <h2 class="product-item__title">{{product.name}}</h2>
         <p class="product-item__description">{{ product.description }}</p>
         <div class="product-item__footer">
            <slot name="footer">
               <ButtonComponent :link="{name: 'products', params: {slug: product.slug}}">See Product</ButtonComponent>
            </slot>
         </div>
      </div>
   </div>
</template>

<style lang="scss">
.product-item {
   display: flex;

   &__img-container,
   &__main{
      width: 50%;
   }

   &__main {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      padding-left: 125px;
   }

   &__new {
      font-size: 14px;
      letter-spacing: 10px;
      margin-bottom: 16px;
      color: var(--color-primary);
   }

   &__title {
      margin-bottom: 32px;
   }

   &__description {
      margin-bottom: 40px;
      opacity: 0.5;
   }

   &--inverse{
      flex-direction: row-reverse;

      .product-item__main{
         padding-left: 0;
         padding-right: 125px;
      }
   }
}
</style>