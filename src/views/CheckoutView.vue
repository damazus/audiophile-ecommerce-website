<script lang="ts">
import {defineComponent} from 'vue'
import TextField from "@/components/TextField.vue";
import RadioButtons from "@/components/RadioButtons.vue";

export const PAYMENT_METHODS = {
   eMoney: {
      key: 'eMoney'
   },
   cashOnDelivery: {
      key: 'cashOnDelivery'
   },
}

export default defineComponent({
   name: 'CheckoutView',
   components: {TextField, RadioButtons},
   data() {
      return {
         form: {
            name: 'damazus',
            email: '',
            phone: '',
            address: '',
            payment_method: PAYMENT_METHODS.eMoney.key
         },
         radioButtonOptions: [
            {
               label: 'e-Money',
               value: PAYMENT_METHODS.eMoney.key,
            },
            {
               label: 'Cash on Delivery',
               value: PAYMENT_METHODS.cashOnDelivery.key,
            }
         ]
      }
   }
})
</script>

<template>
   <div class="checkout-view">
      <div class="checkout-view__section">
         <h4 class="checkout-view__section-title">payment details</h4>
         <div class="checkout-view__section-body">
            <div class="checkout-view__field">Payment Method</div>
            <RadioButtons
               class="checkout-view__field"
               v-model="form.payment_method"
               :options="radioButtonOptions"
            />
         </div>
      </div>
      <div class="checkout-view__section">
         <h4 class="checkout-view__section-title">Billing Details</h4>
         <div class="checkout-view__section-body">
            <TextField
               class="checkout-view__field"
               v-model="form.name"
               label="Name"
               placeholder="Alexei Ward"
            />
            <TextField
               class="checkout-view__field"
               v-model="form.address"
               label="Email Address"
               error="L'adresse mail n'est pas valid"
               placeholder="alexei@mail.com"
            />
            <TextField
               class="checkout-view__field"
               v-model="form.phone"
               label="Phone Number"
               placeholder="+1 202-555-0136"
            />
         </div>
      </div>

   </div>
</template>

<style lang="scss">
@use '@/assets/scss/mixins';

.checkout-view {
   @include mixins.container;
   display: flex;
   flex-direction: column;
   gap: 35px;
   padding: 50px 0;

   &__section-title {
      font-size: 13px;
      color: var(--color-primary);
      letter-spacing: 0.93px;
   }

   &__section-body {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
   }

   &__field {
      flex: 0 0 calc(50% - 10px);
   }
}
</style>