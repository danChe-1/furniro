import { ProductType } from "@/types";
import axios from "axios";

const url = "http://localhost:3000";

export async function getInfinitePosts(query: string) {
  try {
    const res = await axios.get(url + `/api/product/get${query}`);
    if (!res) throw Error;
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}
export async function getProductById(productId: string) {
  try {
    const res = await axios.get(url + "/api/product/get/" + productId);
    if (!res) throw Error;

    return res.data;
  } catch (error) {
    console.log(error);
  }
}
export async function signInAccount(user: { email: string; password: string }) {
  try {
    const res = await axios.post(url + "/api/user/signin", user, {
      withCredentials: true,
    });

    return res;
  } catch (error) {
    console.log(error);
  }
}
export async function signOutAccount() {
  try {
    const res = axios.get(url + "/api/user/signout", {
      withCredentials: true,
    });

    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function getUserDetails() {
  try {
    const res = await axios.get(url + "/api/user/getDetails/", {
      withCredentials: true,
    });
    if (!res) throw Error;

    return res.data.data;
  } catch (error) {
    console.log(error);
  }
}
export async function updateUser(user: {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
}) {
  try {
    const res = await axios.post(url + "/api/user/update", user, {
      withCredentials: true,
    });

    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function addToCart(
  itemId: string,
  color: string,
  size: string,
  amount: number,
) {
  const cartItem = {
    itemId: itemId,
    color: color,
    size: size,
    amount: amount,
  };
  try {
    const res = await axios.post(url + "/api/cart/add", cartItem, {
      withCredentials: true,
    });
    if (!res) throw Error;

    return res.data;
  } catch (error) {
    console.log(error);
  }
}
export async function removeFromCart(itemId: string) {
  const item = {
    itemId: itemId,
  };
  try {
    const res = await axios.post(url + "/api/cart/remove/", item, {
      withCredentials: true,
    });

    if (!res || res.data.success === false) throw Error;
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
export async function updateAmount(itemId: string, newAmount: number) {
  const item = {
    itemId: itemId,
    newAmount: newAmount,
  };
  try {
    const res = await axios.post(url + "/api/cart/updateAmount", item, {
      withCredentials: true,
    });
    if (!res || res.data.success === false) throw Error;
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
export async function getCart() {
  try {
    const res = await axios.get(url + "/api/cart/get", {
      withCredentials: true,
    });
    if (res.data.success === true) return res.data.cartData;
  } catch (error) {
    console.log(error);
  }
}
export async function clearCart() {
  try {
    const res = await axios.get(url + "/api/cart/clear", {
      withCredentials: true,
    });
    console.log(res);

    if (res.data.success === true) return res.data.success;
  } catch (error) {
    console.log(error);
  }
}
export async function getLiked() {
  try {
    const res = await axios.get(url + "/api/user/get-liked", {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
export async function addLiked(likedItem: ProductType) {
  try {
    const qwe = {
      product: likedItem,
    };
    const res = await axios.post(url + "/api/user/add-liked", qwe, {
      withCredentials: true,
    });
    if (!res || res.data.success === "false") throw Error;
  } catch (error) {
    console.log(error);
  }
}

export async function checkIsLiked(productId: string) {
  try {
    const res = await axios.get(
      url + "/api/user/check-liked?productId=" + productId,
      { withCredentials: true },
    );
    if (res.data.success === true) return res.data;
  } catch (error) {
    console.log(error);
  }
}
