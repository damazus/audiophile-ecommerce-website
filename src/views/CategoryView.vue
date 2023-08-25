<script lang="ts">
import {defineComponent} from 'vue'
import About from '@/components/About.vue'
import Categories from '@/components/Categories.vue'
import ProductItem from '@/components/ProductItem.vue'
import data from "@/data.json";
import type {Product} from "@/types";

export default defineComponent({
   name: 'CategoryView',
   components: {
      Categories,
      About,
      ProductItem,
   },
   computed: {
      slug(): string{
         return this.$route.params.slug
      },
      products(): Product[]{
         return data.filter((item) => item.category === this.slug).reverse()
      }
   },
})
</script>

<template>
  <div class="category-view">
     <div class="category-view__header">
        <h2 class="category-view__header-title">{{ slug }}</h2>
     </div>
    <div class="category-view__main">
       <ProductItem
          v-for="(product, index) in products"
          :inverse="index % 2 !== 0"
          :product="product"
          :key="product.id"
       />
       <Categories class="category-view__categories"/>
       <About class="category-view__about"/>
    </div>
  </div>
</template>

<style lang="scss">
@use '@/assets/scss/mixins';

.category-view{
   --gap: 160px;

   &__header{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 240px;
      color: var(--color-white);
      background-color: var(--color-black-medium);
   }

   &__header-title{
      text-transform: uppercase;
   }

   &__main{
      @include mixins.container;

      display: flex;
      flex-direction: column;
      gap: var(--gap);
      margin: var(--gap) auto;
   }

   &__categories{
      margin-top: var(--gap);
   }
}
</style>
