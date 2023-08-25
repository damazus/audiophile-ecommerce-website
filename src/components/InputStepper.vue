<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
   props: {
      value: {
         type: Number,
         required: true
      }
   },
   computed: {
      modelValue:{
         get(): number{
            return this.value
         },
         set(value: string){
            this.$emit('input', parseInt(value))
         }
      }
   },
   methods: {
      minus(){
         if(this.modelValue > 1){
            this.modelValue = this.modelValue - 1
         }
      },
      plus(){
         this.modelValue = this.modelValue + 1
      }
   }
})
</script>

<template>
   <div class="input-stepper">
      <button class="input-stepper__button" @click="minus">-</button>
      <input type="text" class="input-stepper__input" v-model="modelValue"/>
      <button class="input-stepper__button" @click="plus">+</button>
   </div>
</template>

<style lang="scss">
.input-stepper{
   --button-size: 48px;
   display: flex;
   align-items: flex-start;
   justify-content: flex-start;
   background-color: var(--color-light);

   &__button{
      display: flex;
      justify-content: center;
      align-items: center;
      width: var(--button-size);
      height: var(--button-size);
      border: none;
      cursor: pointer;
   }

   &__input{
      display: flex;
      width: var(--button-size);
      height: var(--button-size);
      padding: 0 10px;
      text-align: center;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 1px;
      background-color: var(--color-light);
      border: none;
   }
}
</style>