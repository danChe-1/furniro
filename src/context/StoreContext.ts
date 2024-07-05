import { ProductType } from "@/types";

import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface CartItem extends ProductType {
  count: number;
  selectedSize: string;
  selectedColor: string;
}
type CartStore = {
  cart: CartItem[];
  count: () => number;
  add: (
    product: ProductType,
    amount: number,
    selectedSize: string,
    selectedColor: string,
  ) => void;
  setAmount: (idProduct: string, amount: number) => void;
  getSubtotal: () => number;
};

export const useCartStore = create<CartStore>()(
  devtools(
    persist(
      (set, get) => ({
        cart: [],
        count: () => {
          const { cart } = get();
          if (cart.length)
            return cart
              .map((item) => item.count)
              .reduce((prev, curr) => prev + curr);
          return 0;
        },
        add: (
          product: ProductType,
          amount: number,
          selectedSize: string,
          selectedColor: string,
        ) => {
          const { cart } = get();
          const updatedCart = updateCart(
            product,
            cart,
            amount,
            selectedSize,
            selectedColor,
          );
          set({ cart: updatedCart });
        },
        setAmount: (idProduct: string, amount: number) => {
          const { cart } = get();
          const updatedCart = setAmountCart(idProduct, amount, cart);
          set({ cart: updatedCart });
        },
        getSubtotal: () => {
          const { cart } = get();
          if (cart.length)
            return cart
              .map((item) => getPriceAfterDiscount(item) * item.count)
              .reduce((prev, curr) => prev + curr);
          return 0;
        },
      }),
      { name: "cart-storage" },
    ),
  ),
);

function updateCart(
  product: ProductType,
  cart: CartItem[],
  amount: number,
  selectedSize: string,
  selectedColor: string,
): CartItem[] {
  const cartItem = {
    ...product,
    count: amount,
    selectedSize,
    selectedColor,
  } as CartItem;

  const productOnCart = cart.map((item) => item._id).includes(product._id);

  if (!productOnCart) cart.push(cartItem);
  else {
    return cart.map((item) => {
      if (item._id === product._id)
        return { ...item, count: item.count + amount } as CartItem;
      return item;
    });
  }
  return cart;
}
function setAmountCart(
  idProduct: string,
  amount: number,
  cart: CartItem[],
): CartItem[] {
  return cart
    .map((item) => {
      if (item._id === idProduct) return { ...item, count: amount };
      return item;
    })
    .filter((item) => {
      return item.count;
    });
}

const getPriceAfterDiscount = (product: ProductType) => {
  return (
    parseFloat(product.price) -
    parseFloat(product.price) * (product.discount / 100)
  );
};
