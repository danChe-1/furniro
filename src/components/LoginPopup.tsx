import { Dispatch, SetStateAction, useContext, useState } from "react";
import { MdClose } from "react-icons/md";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import {
  useClearCart,
  useSignInAccount,
} from "@/lib/react-query/QueriesAndMutations";
import { toast } from "react-toastify";
import { AuthContext } from "@/context/AuthContext";
import { useCartStore } from "@/context/StoreCart";
import useFromStore from "@/context/StoreFrom";
import { addToCart } from "@/lib/api";
interface Props {
  setShowLogin: Dispatch<SetStateAction<boolean>>;
}
const LoginPopup = ({ setShowLogin }: Props) => {
  const { setToken } = useContext(AuthContext);
  const { mutateAsync: signInAccount } = useSignInAccount();

  const [currentState, setCurrentState] = useState("Login");
  const cart = useFromStore(useCartStore, (state) => state.cart);

  const getCart = useCartStore((state) => state.fetchCart);
  const { mutateAsync: clearCart } = useClearCart();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  const onLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await signInAccount(data);
    if (!res) return toast.error("Error");

    if (res.data.success === true) {
      localStorage.setItem("token", res.data.data);
      setToken(res.data.data);
      setShowLogin(false);
      toast.success("Welcome");

      if (cart === undefined || cart?.length < 1) {
        await getCart();
      } else {
        await clearCart();

        cart.forEach(async (e) => {
          await addToCart(e.baseItem._id, e.color, e.size, e.amount);
        });
        console.log(cart);
      }
    } else {
      toast.error(res.data.message);
    }
  };
  return (
    <div className="inset fixed z-50 grid h-screen w-full overscroll-none bg-black bg-opacity-10">
      <div className="flex h-[400px] flex-col justify-between gap-6 place-self-center rounded-lg bg-white py-10 lg:w-1/4">
        <div className="mx-auto flex w-2/3 justify-between">
          <h2 className="text-2xl font-semibold">{currentState}</h2>
          <button onClick={() => setShowLogin(false)}>
            <MdClose className="text-3xl" />
          </button>
        </div>
        <form onSubmit={onLogin} className="">
          <div className="mx-auto flex w-2/3 flex-col gap-4">
            <Label>Email</Label>
            <Input
              onChange={onChangeHandler}
              type="email"
              placeholder="name@email.com"
              required
              className="rounded-sm"
              name="email"
            />
            <Label>Password</Label>
            <Input
              onChange={onChangeHandler}
              className="rounded-sm"
              type="password"
              placeholder="Password"
              name="password"
              required
            />
            {currentState === "Login" ? (
              ""
            ) : (
              <div className="flex items-start gap-2 text-xs">
                <input type="checkbox" required />
                <p>
                  By continuing, I agree to the terms of use and privacy policy
                </p>
              </div>
            )}
            <Button
              className="mt-3 w-full rounded-sm bg-sandDark text-white"
              type="submit"
            >
              {currentState === "Sign Up" ? "Create Account" : "Log In"}
            </Button>

            {currentState === "Login" ? (
              <p className="text-sm text-secondaryGray">
                Dont have an account?{" "}
                <span
                  className="cursor-pointer text-sandDark"
                  onClick={() => setCurrentState("Sign Up")}
                >
                  Create a new one
                </span>
              </p>
            ) : (
              <p className="text-sm text-secondaryGray">
                Already have an account?{" "}
                <span
                  className="cursor-pointer text-sandDark"
                  onClick={() => setCurrentState("Login")}
                >
                  Log In{" "}
                </span>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPopup;
