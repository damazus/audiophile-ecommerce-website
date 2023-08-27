<script lang="ts">
import {defineComponent} from 'vue'
import type {PropType} from 'vue'

interface InputStepperTheme {
   key: string
}

interface InputStepperThemes {
   [key: string]: InputStepperTheme
}

export const INPUT_STEPPER_THEMES: InputStepperThemes = {
   medium: {
      key: 'medium'
   },
   small: {
      key: 'small'
   }
}

export default defineComponent({
   props: {
      theme: {
         type: Object as PropType<InputStepperTheme>,
         default: () => INPUT_STEPPER_THEMES.medium,
         validator(value: InputStepperTheme) {
            return Boolean(INPUT_STEPPER_THEMES[value?.key])
         }
      },
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
         set(value: number){
            this.$emit('input', value)
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
   <div class="input-stepper" :class="[`input-stepper--${theme.key}`]">
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

      &:hover{
         color: var(--color-primary);
         background-color: var(--color-light-hover);
      }
   }

   &__input{
      display: flex;
      width: var(--button-size);
      height: var(--button-size);
      padding: 0 8px;
      text-align: center;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 1px;
      background-color: var(--color-light);
      border: none;
   }

   &--medium{
      --button-size: 48px
   }

   &--small{
      --button-size: 32px
   }
}
</style>