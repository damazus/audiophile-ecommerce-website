<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
   name: 'TextField',
   model: {
      event: 'input',
      prop: 'value',
   },
   props: {
      label: {
         type: String,
         default: null
      },
      placeholder: {
         type: String,
         default: null
      },
      value: {
         type: String,
         default: null
      },
      error: {
         type: String,
         default: null
      },
   },
   computed: {
      modelValue: {
         get() {
            return this.value
         },
         set(value: string) {
            this.$emit('input', value)
         }
      }
   }
})
</script>

<template>
   <div class="text-field" :class="{'text-field--error': Boolean(error)}">
      <label class="text-field__main">
      <span class="text-field__infos">
        <span class="text-field__label">{{ label }}</span>
        <span class="text-field__error" v-if="error">{{ error }}</span>
      </span>
         <input
            type="text"
            class="text-field__input"
            :placeholder="placeholder"
            v-model="modelValue"
         />
      </label>
   </div>
</template>

<style lang="scss">
.text-field {

   &__main {
      display: flex;
      flex-direction: column;
      gap: 5px;
   }

   &__infos {
      display: flex;
      justify-content: space-between;
   }

   &__label,
   &__error {
      font-size: 12px;
   }

   &__label {
      font-weight: 700;
   }

   &__error {
      color: var(--color-danger);
   }

   &__input {
      flex: 1;
      display: block;
      font-size: 14px;
      min-height: var(--field-height);
      padding: 0 18px;
      border: 1px solid var(--color-gray);
      border-radius: var(--field-border-radius);

      &:active {
         border-color: var(--color-primary);
      }
   }

   &--error {
      .text-field__input {
         border: 2px solid var(--color-danger);
      }
   }
}
</style>