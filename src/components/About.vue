<template>
   <div class="about">
      <div class="about__body">
         <h2 class="about__title">Bringing you the <span class="highlighted">best</span> audio gear</h2>
         <p class="about__content">Located at the heart of New York City, Audiophile is the premier store for high end headphones,
            earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you
            to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make
            Audiophile the best place to buy your portable audio equipment.</p>
      </div>
      <div class="about__img-container">
         <img
            src="/assets/shared/desktop/image-best-gear.jpg"
            class="about__img"
            alt="..."
         />
      </div>
   </div>
</template>

<style lang="scss">
@use '@/assets/scss/mixins';

.about{
   @include mixins.container;
   display: grid;
   grid-template-columns: 1fr 1fr;
   align-items: center;
   gap: 40px;

   &__img{
      border-radius: 8px;
   }

   &__body{
      max-width: 445px;
   }

   &__title{
      margin-bottom: 32px;
   }

   &__content{
      opacity: 0.5;
   }
}
</style>