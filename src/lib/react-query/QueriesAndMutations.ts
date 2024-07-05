import { useMutation, useQuery } from "@tanstack/react-query";
import {
  addLiked,
  checkIsLiked,
  clearCart,
  getCart,
  getInfinitePosts,
  getLiked,
  getProductById,
  getUserDetails,
  signInAccount,
  signOutAccount,
  updateUser,
} from "../api";
import { ProductType } from "@/types";

export const useGetPosts = (query: string) => {
  return useQuery({
    queryKey: [query],
    queryFn: () => getInfinitePosts(query),
  });
};

export const useGetProductById = (productId: string) => {
  return useQuery({
    queryKey: ["getProduct", productId],
    queryFn: () => getProductById(productId),
    enabled: !!productId,
  });
};

export const useSignInAccount = () => {
  return useMutation({
    mutationFn: (user: { email: string; password: string }) =>
      signInAccount(user),
  });
};
export const useSignOutAccount = () => {
  return useMutation({
    mutationFn: () => signOutAccount(),
  });
};
export const useGetUserDetails = () => {
  return useQuery({
    queryKey: ["getDetails"],
    queryFn: () => getUserDetails(),
  });
};

export const useUpdateUser = () => {
  return useMutation({
    mutationFn: (user: {
      firstName: string;
      lastName: string;
      email: string;
      phoneNumber: string;
      password: string;
    }) => updateUser(user),
    onError: (err) => console.log(err),
  });
};
export const useGetCart = () => {
  return useQuery({
    queryKey: ["getCart"],
    queryFn: () => getCart(),
  });
};
export const useClearCart = () => {
  return useMutation({
    mutationFn: () => clearCart(),
  });
};
export const useGetLiked = () => {
  return useQuery({
    queryKey: ["getLiked"],
    queryFn: () => getLiked(),
  });
};
export const useAddLiked = () => {
  return useMutation({
    mutationFn: (likedProduct: ProductType) => addLiked(likedProduct),
  });
};

export const useCheckIsLiked = (productId: string) => {
  return useQuery({
    queryKey: ["check-liked", productId],
    queryFn: () => checkIsLiked(productId),
  });
};
