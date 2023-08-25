<script lang="ts">
import {defineComponent} from 'vue'
import CategoryItem from "@/components/CategoryItem.vue";
import {CATEGORIES, type CategoryConstant} from "@/constants";

export default defineComponent({
   components: {CategoryItem},
   computed: {
      categories(): CategoryConstant[]{
         return Object.values(CATEGORIES)
      }
   },
})
</script>

<template>
   <div class="categories ">
      <CategoryItem
         v-for="(category, index) in categories"
         :category="category"
         :key="index"
      />
   </div>
</template>

<style lang="scss">
@use '@/assets/scss/mixins';

.categories {
   @include mixins.container;
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   gap: 20px;
}
</style>