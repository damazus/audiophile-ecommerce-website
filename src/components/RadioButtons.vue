<script lang="ts">
import {defineComponent} from 'vue'
import type {PropType} from 'vue'

export interface RadioButtonOption{
   label: string,
   value: string,
}

export default defineComponent({
   name: 'RadioButtons',
   model: {
      event: 'change',
   },
   props: {
      options: {
         type: Array as PropType<RadioButtonOption[]>,
         required: true,
      },
      value: {
         type: String,
         default: null
      }
   },
   emits: {
      change(payload: string){
         return payload
      }
   },
   methods: {
      onChange(e: Event){
         const target = (e.target as HTMLInputElement)

         this.$emit('change', target.value)
      },
   }
})
</script>

<template>
  <div class="radio-buttons">
    <label
        v-for="option in options"
        :key="option.value"
        class="radio-buttons__item"
        :class="{'radio-buttons__item--checked': option.value === value}"
    >
      <input
          class="radio-buttons__input"
          type="radio"
          :value="option.value"
          :checked="option.value === value"
          @change="onChange"
      />
      <span class="radio-buttons__input-circle">
        <span class="radio-buttons__input-circle-dot"></span>
      </span>
      <span>{{option.label}}</span>
    </label>
  </div>
</template>

<style lang="scss">
.radio-buttons{
  --circle-size: 20px;
  --item-border-color: var(--color-gray);
  --input-circle-dot-background: var(--color-white);

  display: flex;
  flex-direction: column;
  gap: 15px;

  &__item{
    display: flex;
    align-items: center;
    gap: 14px;
    min-height: var(--field-height);
    padding: 0 18px;
    border: 1px solid var(--item-border-color);
    border-radius: 8px;
    cursor: pointer;
  }

  &__input{
    position: absolute;
    width: 0;
    height: 0;
    visibility: hidden;
    pointer-events: none;
  }

  &__input-circle{
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--circle-size);
    height: var(--circle-size);
    border: 1px solid var(--color-gray);
    border-radius: 50%;
  }

  &__input-circle-dot{
    --size: 10px;

    display: block;
    width: calc(var(--circle-size) / 2);
    height: calc(var(--circle-size) / 2);
    background: var(--input-circle-dot-background);
    border-radius: 50%;
  }

  &__item.radio-buttons__item--checked{
    --input-circle-dot-background: var(--color-primary);
    --item-border-color: var(--color-primary);
  }
}
</style>