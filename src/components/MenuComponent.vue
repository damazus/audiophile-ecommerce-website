<script lang="ts">
import {defineComponent} from 'vue'
import {CATEGORIES} from "@/constants";

export default defineComponent({
   computed: {
      finalCategories(){
         return Object.values(CATEGORIES)
      }
   }
})
</script>

<template>
   <ul class="menu">
      <li class="menu-item">
         <router-link to="/" class="menu-link">Home</router-link>
      </li>
      <li class="menu-item" v-for="category in finalCategories" :key="category.key">
         <router-link :to="{name: 'categories', params: {slug: category.key}}" class="menu-link">
            {{ category.key }}
         </router-link>
      </li>
   </ul>
</template>

<style lang="scss">
.menu{
   display: flex;
   align-items: center;
   gap: calc(10em / 16);
}

.menu-link {
   --line-height-half: calc(var(--line-height) / 2);

   font-size: 13px;
   font-weight: 700;
   padding: 10px 15px;
   letter-spacing: 1.5px;
   text-transform: uppercase;
   color: var(--color-white);

   &.router-link-exact-active,
   &:hover{
      color: var(--color-primary);
   }
}
</style>