<script lang="ts">
import {defineComponent} from 'vue'
import ButtonComponent, { BUTTON_THEMES } from '@/components/ButtonComponent.vue'
import type {CategoryConstant} from '@/constants'
import type {PropType} from "vue";

export default defineComponent({
   name: 'CategoryItem',
   components: {
      ButtonComponent
   },
   props: {
      category: {
         type: Object as PropType<CategoryConstant>,
         required: true
      }
   },
   data(){
      return{
         BUTTON_THEMES,
      }
   },
})
</script>

<template>
   <div class="category-item">
      <div class="category-item__img-container">
         <img :src="category.thumbnail" class="category-item__img" alt="..."/>
      </div>
      <div class="category-item__body">
         <h4 class="category-item__title">{{ category.key }}</h4>
         <ButtonComponent :link="{name: 'categories', params: {slug: category.key}}" :theme="BUTTON_THEMES.link">shop</ButtonComponent>
      </div>
   </div>
</template>

<style lang="scss">
.category-item{
   position: relative;

   &__img{
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, -50%);
   }

   &__body{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: var(--color-light);
      border-radius: 8px;
      padding: 120px 15px 30px;
   }

   &__title{
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 1.286px;
      margin-bottom: 20px;
   }
}
</style>