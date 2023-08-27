<script lang="ts">
import {defineComponent} from 'vue'
import TextField from "@/components/TextField.vue";
import RadioButtons from "@/components/RadioButtons.vue";
import Cart from "@/components/Cart.vue";
import ButtonGoBack from "@/components/ButtonGoBack.vue";
import { ValidationProvider, ValidationObserver } from 'vee-validate';

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
   components: {
      TextField,
      RadioButtons,
      Cart,
      ButtonGoBack,
      ValidationProvider,
      ValidationObserver,
   },
   data() {
      return {
         form: {
            name: '',
            email: '',
            phone: '',
            address: '',
            postal_code: '',
            city: '',
            country: '',
            payment_method: PAYMENT_METHODS.eMoney.key,
            eMoneyNumber: '',
            eMoneyPin: '',
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
      <div class="checkout-view__container">
         <ButtonGoBack class="checkout-view__go-back"/>

         <ValidationObserver class="checkout-view__main">
            <div class="checkout-view__form">
               <h3 class="checkout-view__title">CHECKOUT</h3>
               <div class="checkout-view__sections">
                  <div class="checkout-view__section">
                     <h4 class="checkout-view__section-title">Billing Details</h4>
                     <div class="checkout-view__section-body">
                        <ValidationProvider
                           rules="required"
                           v-slot="{ errors }"
                        >
                           <TextField
                              v-model="form.name"
                              :errors="errors"
                              class="checkout-view__field"
                              label="Name"
                              placeholder="Alexei Ward"
                           />
                        </ValidationProvider>
                        <ValidationProvider
                           rules="required|email"
                           v-slot="{ errors }"
                        >
                           <TextField
                              v-model="form.email"
                              :errors="errors"
                              class="checkout-view__field"
                              label="Email Address"
                              placeholder="alexei@mail.com"
                           />
                        </ValidationProvider>

                        <ValidationProvider
                           rules="required"
                           v-slot="{ errors }"
                        >
                           <TextField
                              v-model="form.phone"
                              :errors="errors"
                              class="checkout-view__field"
                              label="Phone Number"
                              placeholder="+1 202-555-0136"
                           />
                        </ValidationProvider>
                     </div>
                  </div>
                  <div class="checkout-view__section">
                     <h4 class="checkout-view__section-title">shipping info</h4>
                     <div class="checkout-view__section-body">
                        <ValidationProvider
                           rules="required"
                           v-slot="{ errors }"
                        >
                           <TextField
                              v-model="form.address"
                              :errors="errors"
                              class="checkout-view__field"
                              label="Address"
                              placeholder="1137 Williams Avenue"
                           />
                        </ValidationProvider>
                        <ValidationProvider
                           rules="required"
                           v-slot="{ errors }"
                        >
                           <TextField
                              v-model="form.postal_code"
                              :errors="errors"
                              class="checkout-view__field"
                              label="ZIP Code"
                              placeholder="10001"
                           />
                        </ValidationProvider>
                        <ValidationProvider
                           rules="required"
                           v-slot="{ errors }"
                        >
                           <TextField
                              v-model="form.city"
                              :errors="errors"
                              class="checkout-view__field"
                              label="City"
                              placeholder="New York"
                           />
                        </ValidationProvider>
                        <ValidationProvider
                           rules="required"
                           v-slot="{ errors }"
                        >
                           <TextField
                              v-model="form.country"
                              :errors="errors"
                              class="checkout-view__field"
                              label="Country"
                              placeholder="United States"
                           />
                        </ValidationProvider>
                     </div>
                  </div>
                  <div class="checkout-view__section">
                     <h4 class="checkout-view__section-title">payment details</h4>
                     <ValidationProvider rules="required">
                        <RadioButtons
                           v-model="form.payment_method"
                           :options="radioButtonOptions"
                           label="Payment Method"
                           class="checkout-view__payment-method"
                        />
                     </ValidationProvider>
                     <div class="checkout-view__section-body">
                        <ValidationProvider
                           rules="required|integer"
                           v-slot="{ errors }"
                        >
                           <TextField
                              v-model="form.eMoneyNumber"
                              :errors="errors"
                              class="checkout-view__field"
                              label="e-Money Number"
                              placeholder="238521993"
                           />
                        </ValidationProvider>
                        <ValidationProvider
                           rules="required|integer"
                           v-slot="{ errors }"
                        >
                           <TextField
                              v-model="form.eMoneyPin"
                              :errors="errors"
                              class="checkout-view__field"
                              label="e-Money PIN"
                              placeholder="6891"
                           />
                        </ValidationProvider>
                     </div>
                  </div>
               </div>
            </div>
            <div class="checkout-view__sidebar">
               <Cart :readonly="true"></Cart>
            </div>
         </ValidationObserver>
      </div>
   </div>
</template>

<style lang="scss">
@use '@/assets/scss/mixins';

.checkout-view {
   --field-gap: 24px;

   padding-top: 80px;
   padding-bottom: 140px;
   background-color: var(--color-light);

   &__container{
      @include mixins.container;
   }

   &__go-back{
      margin-bottom: 38px;
   }

   &__main{
      display: grid;
      grid-template-columns: 1fr 350px;
      gap: 30px;
   }

   &__form{
      display: flex;
      flex-direction: column;
      border-radius: 8px;
      background-color: var(--color-white);
      padding: 54px 48px 48px;
   }

   &__title{
      margin-bottom: 41px;
   }

   &__sections{
      display: flex;
      flex-direction: column;
      gap: 54px;
   }

   &__section-title {
      font-size: 13px;
      line-height: 25px;
      letter-spacing: 0.93px;
      color: var(--color-primary);
      margin-bottom: 16px;
   }

   &__section-body {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--field-gap);
   }

   &__payment-method{
      margin-bottom: var(--field-gap);
   }
}
</style>