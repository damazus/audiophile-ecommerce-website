<script lang="ts">
import {defineComponent} from 'vue'
import type {PropType} from 'vue'
import {toKebabCase} from '@/utils'
import type {Product} from "@/types";
import type {Location, Route, RouterLinkProps} from "vue-router/types/router";

interface ButtonTheme {
   key: string
}

interface ButtonThemes {
   [key: string]: ButtonTheme
}

export const BUTTON_THEMES: ButtonThemes = {
   primary: {
      key: 'primary',
   },
   secondary: {
      key: 'secondary'
   },
   secondaryInvert: {
      key: 'secondaryInvert',
   },
   link: {
      key: 'link'
   },
}

export default defineComponent({
   name: 'ButtonComponent',
   props: {
      theme: {
         type: Object as PropType<ButtonTheme>,
         default: () => BUTTON_THEMES.primary,
         validator(value: ButtonTheme) {
            return Boolean(BUTTON_THEMES[value?.key])
         }
      },
      link: {
         type: Object as PropType<Location>,
         default: null
      },
      icon: {
         type: String,
         default: null
      },
      showIcon: {
         type: Boolean,
         default: true
      },
   },
   computed: {
      finalIcon(): string | null {
         return this.theme.key === BUTTON_THEMES.link.key ? 'shared-desktop-icon-arrow-right' : null
      },
      className(): string {
         return toKebabCase(this.theme.key)
      },
      tagName(): string{
         return this.link ? 'router-link' : 'button'
      }
   },
})
</script>

<template>
   <component
      :is="tagName"
      :to="link"
      class="button"
      :class="[`button--${className}`]"
   >
      <slot></slot>
      <SvgIcon
         v-if="showIcon && finalIcon"
         class="button__icon"
         :name="finalIcon"
         width="8"
         height="12"
      />
   </component>
</template>

<style lang="scss">
@use '@/assets/scss/mixins';

.button {
   --color: inherit;
   --background-color: inherit;
   --border-color: inherit;

   @include mixins.button-reset;
   display: inline-flex;
   justify-content: center;
   align-items: center;
   gap: 8px;
   font-weight: 500;
   font-size: 13px;
   text-transform: uppercase;
   min-height: 48px;
   padding: 0 30px;
   color: var(--color);
   background-color: var(--background-color);
   border: 1px solid var(--border-color);
   cursor: pointer;

   &--primary {
      --color: var(--color-white);
      --background-color: var(--color-primary);
      --border-color: var(--color-primary);

      &:hover {
         --background-color: var(--color-accent);
         --border-color: var(--color-accent);
      }
   }

   &--secondary {
      --color: var(--color-black);
      --background-color: transparent;
      --border-color: var(--color-black);

      &:hover {
         --color: var(--color-white);
         --background-color: var(--color-black);
         --border-color: var(--color-black);
      }
   }

   &--secondary-invert {
      --color: var(--color-white);
      --background-color: var(--color-black);
      --border-color: var(--color-black);

      &:hover {
         --color: var(--color-black);
         --background-color: var(--color-white);
         --border-color: var(--color-white);
      }
   }

   &--link {
      --color: var(--color-black);
      --border-color: transparent;
      min-height: auto;
      padding: 5px 8px;

      .button__icon {
         margin-top: -2px;
      }

      &:hover .button__icon path {
         stroke: var(--color-primary);
      }
   }

   &__icon path {
      stroke: red;
   }
}
</style>