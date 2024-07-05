import {
  addToCart,
  getCart,
  getProductById,
  removeFromCart,
  updateAmount,
} from "@/lib/api";
import { ProductType } from "@/types";
import { toast } from "react-toastify";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface CartItem {
  baseItem: ProductType;
  id: string;
  color: string;
  size: string;
  amount: number;
}
interface State {
  cart: CartItem[];
  totalItems: number;
  totalPrice: number;
}

interface Actions {
  addToCart: (Item: CartItem) => void;
  updateAmount: (Item: CartItem, newAmount: number) => void;
  removeFromCart: (Item: CartItem) => void;
  fetchCart: () => void;
}

const INITIAL_STATE: State = {
  cart: [],
  totalItems: 0,
  totalPrice: 0,
};

export const useCartStore = create(
  devtools(
    persist<State & Actions>(
      (set, get) => ({
        cart: INITIAL_STATE.cart,
        totalItems: INITIAL_STATE.totalItems,
        totalPrice: INITIAL_STATE.totalPrice,
        addToCart: async (product: CartItem) => {
          const token = localStorage.getItem("token");

          if (token && token !== "") {
            try {
              const { baseItem, ...rest } = product;
              const { _id } = baseItem;
              const res = await addToCart(
                _id,
                rest.color,
                rest.size,
                rest.amount,
              );
              if (res.success === false) throw Error;
            } catch (error) {
              console.log(error);

              return error;
            }
          }
          const cart = get().cart;
          const cartItem = cart.find((item) => item.id === product.id);
          if (cartItem) {
            const updatedCart = cart.map((item) =>
              item.id === product.id
                ? { ...item, amount: (item.amount as number) + product.amount }
                : item,
            );
            set((state) => ({
              cart: updatedCart,
              totalItems: state.totalItems + product.amount,
              totalPrice: state.totalPrice + getFinalPrice(product),
            }));
          } else {
            const updateCart = [
              ...cart,
              { ...product, amount: product.amount },
            ];
            set((state) => ({
              cart: updateCart,
              totalItems: state.totalItems + product.amount,
              totalPrice: state.totalPrice + getFinalPrice(product),
            }));
          }
        },
        updateAmount: async (product: CartItem, newAmount: number) => {
          const token = localStorage.getItem("token");

          if (token && token !== "") {
            try {
              const res = await updateAmount(product.id, newAmount);
              if (res.success === false) throw Error;
            } catch (error) {
              console.log(error);
              toast.error("Error");
            }
          }
          const { cart, totalPrice, totalItems } = get();
          const updatedCart = setAmountCart(product, newAmount, cart);

          const diff = newAmount - product.amount;
          const newTotalItems = totalItems + diff;

          const newPrice = totalPrice + diff * getPriceAfterDiscount(product);

          set({
            cart: updatedCart,
            totalPrice: newPrice,
            totalItems: newTotalItems,
          });
          toast.success("Amount changed");
        },
        removeFromCart: async (product: CartItem) => {
          const token = localStorage.getItem("token");

          if (token && token !== "") {
            try {
              const res = await removeFromCart(product.id);
              if (res.success === false) throw Error;
            } catch (error) {
              console.log(error);
              return;
            }
          }
          set((state) => ({
            cart: state.cart.filter((item) => item.id !== product.id),
            totalItems: state.totalItems - product.amount,
            totalPrice: state.totalPrice - getFinalPrice(product),
          }));
        },
        fetchCart: async () => {
          const token = localStorage.getItem("token");
          if (!token || token === "") {
            console.log("Your cart is local and not saved to cloud");

            return;
          }
          //todo: replace cart in cloud with current one
          const cart = get().cart;
          if (cart.length > 0) return;

          const newCart: CartItem[] = [];
          try {
            const res = await getCart();
            let newAmount = 0;
            let newTotal = 0;
            if (res.success || !res) throw Error;
            const converted = Object.values(res) as Array<CartItem>;
            await converted.forEach(async (e) => {
              const baseItem = await getProductById(e.id);

              const newItem = {
                baseItem,
                id: e.id + "/" + e.color + "/" + e.size,
                color: e.color,
                size: e.size,
                amount: e.amount,
              };
              newAmount += e.amount;
              newTotal += getFinalPrice(newItem);

              newCart.push(newItem);

              console.log(newCart);
              set({
                cart: newCart,
                totalItems: newAmount,
                totalPrice: newTotal,
              });
            });
          } catch (error) {
            console.log(error);
            return;
          }
        },
      }),
      {
        name: "cart-storage",
        version: 1,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        migrate: (persistedState: any, version: number) => {
          if (version === 0) {
            persistedState.totalProducts = persistedState.totalItems;
            delete persistedState.totalItems;
          }
          return persistedState as State & Actions;
        },
      },
    ),
  ),
);
function setAmountCart(
  item: CartItem,
  newAmount: number,
  cart: CartItem[],
): CartItem[] {
  return cart
    .map((i) => {
      if (item.id === i.id) return { ...i, amount: newAmount };
      return i;
    })
    .filter((i) => {
      return i.amount;
    });
}

export const getFinalPrice = (item: CartItem) => {
  return (
    item.amount *
    (parseFloat(item.baseItem.price) -
      parseFloat(item.baseItem.price) * (item.baseItem.discount / 100))
  );
};
const getPriceAfterDiscount = (item: CartItem) => {
  return (
    parseFloat(item.baseItem.price) -
    parseFloat(item.baseItem.price) * (item.baseItem.discount / 100)
  );
};
