export type ProductType = {
  _id: string;
  name: string;
  price: string;
  short_description: string;
  sizes: string[];
  colors: Color[];
  sku: string;
  category: string;
  images: string[];
  full_description: string;
  discount: number;
  isNewProduct: boolean;
  material: string[];
  collectionName: string;
};
export type UserType = {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
};

export type Color = {
  name: string;
  bgHex: string;
};

export type Review = {
  name: string;
  rating: number;
  review: string;
};
