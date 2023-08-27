<script lang="ts">
import {defineComponent} from 'vue'
import type {PropType} from 'vue'
import type {CartItem} from "@/types";
import {formatPrice} from "@/constants";
import InputStepper, { INPUT_STEPPER_THEMES } from "@/components/InputStepper.vue";

export default defineComponent({
   name: 'CardItem',
   components:{
      InputStepper
   },
   props: {
      item: {
         type: Object as PropType<CartItem>,
         required: true
      },
      readonly: {
         type: Boolean,
         default: false
      }
   },
   data(){
      return{
         INPUT_STEPPER_THEMES
      }
   },
   emit: {
      changeQuantity(payload: CartItem) {
         return payload
      }
   },
   computed: {
      image(): string{
         return `/assets/cart/image-${this.item.product.slug}.jpg`
      }
   },
   methods: {
      formatPrice,
      onQuantityChange(quantity: number){
         this.$emit('changeQuantity', {product: this.item.product, quantity})
      }
   },
})
</script>

<template>
   <div class="card-item" :class="{'card-item--readonly': readonly}">
      <img :src="image" class="card-item__img" alt="..."/>
      <div class="card-item__main">
         <div class="card-item__info">
            <div class="card-item__title">{{ item.product.name }}</div>
            <p class="card-item__price">{{ formatPrice(item.product.price) }}</p>
         </div>
         <div v-if="readonly" class="card-item__quantity">x{{ item.quantity }}</div>
         <InputStepper
            v-else
            class="card-item__stepper"
            :theme="INPUT_STEPPER_THEMES.small"
            :value="item.quantity"
            @input="onQuantityChange"
         />
      </div>
   </div>
</template>

<style lang="scss">
.card-item{
   display: flex;
   align-items: center;
   gap: 16px;

   &__main{
      flex: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
   }

   &__title{
      font-weight: 700;
      line-height: 1.1;
   }

   &__price{
      font-size: 14px;
      font-weight: 700;
      opacity: 0.5;
   }

   &__img{
      --size: 64px;

      display: block;
      width: var(--size);
      height: var(--size);
      border-radius: 8px;
   }

   &__quantity{
      opacity: 0.5;
      line-height: 1.2;
   }

   &--readonly{
      .card-item__main{
         align-items: flex-start;
      }
   }
}
</style>