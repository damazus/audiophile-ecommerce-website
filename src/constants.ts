export interface CategoryConstant {
   key: string,
   thumbnail: string,
}

export interface CategoriesConstant{
   [key: string]: CategoryConstant,
}

export const CATEGORIES: CategoriesConstant = {
   headphones: {
      key: "headphones",
      thumbnail: '/assets/shared/desktop/image-category-thumbnail-headphones.png'
   },
   speakers: {
      key: 'speakers',
      thumbnail: '/assets/shared/desktop/image-category-thumbnail-speakers.png'
   },
   earphones: {
      key: "earphones",
      thumbnail: '/assets/shared/desktop/image-category-thumbnail-earphones.png'
   },
}

export function formatPrice(price: number): string{
   const language = navigator.language

   return Intl.NumberFormat(language).format(price)
}