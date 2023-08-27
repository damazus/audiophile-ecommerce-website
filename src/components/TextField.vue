<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

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
      errors: {
         type: Array as PropType<string[]>,
         default: () => []
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
   <div class="text-field" :class="{'text-field--error': Boolean(errors.length)}">
      <label class="text-field__main">
         <span class="text-field__infos">
           <span class="text-field__label">{{ label }}</span>
           <span class="text-field__error" v-if="errors.length">{{ errors[0] }}</span>
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
   --input-border-color: var(--color-gray);
   --label-color: inherit;

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
      color: var(--label-color);
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
      border: 1px solid var(--input-border-color);
      border-radius: var(--field-border-radius);

      &:active {
         border-color: var(--color-primary);
      }
   }

   &--error {
      --input-border-color: var(--color-danger);
      --label-color: var(--color-danger);

      .text-field__input {
         border-width: 2px;
         //border: 2px solid var(--color-danger);
      }
   }
}
</style>