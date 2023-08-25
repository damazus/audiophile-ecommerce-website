export interface ImageFormat {
   mobile: string,
   tablet: string,
   desktop: string,
}

export interface Include{
   quantity: number,
   item: string,
}

export interface OtherItem{
   slug: string,
   name: string,
   image: ImageFormat,
}

export interface Category{
   name: string,
   image: ImageFormat
}

export interface Product{
   id: number,
   slug: string,
   name: string,
   image: ImageFormat
   category: string,
   categoryImage: ImageFormat,
   new: boolean,
   price: number,
   description: string,
   features: string,
   includes: Include[],
   gallery: {
      first: ImageFormat,
      second: ImageFormat,
      third: ImageFormat,
   },
   others: OtherItem[]
}