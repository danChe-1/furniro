import assets from "@/assets/assets";
import {
  MdDelete,
  MdOutlinePersonOutline,
  MdOutlineSearch,
  MdOutlineShoppingCart,
} from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dispatch, SetStateAction, useContext, useEffect } from "react";
import { Heart, ListChecks, LogOut, User } from "lucide-react";

import { toast } from "react-toastify";
import { useSignOutAccount } from "@/lib/react-query/QueriesAndMutations";
import { AuthContext } from "@/context/AuthContext";
import { getFinalPrice, useCartStore } from "@/context/StoreCart";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import useFromStore from "@/context/StoreFrom";

interface Props {
  setShowLogin: Dispatch<SetStateAction<boolean>>;
}

const Navbar = ({ setShowLogin }: Props) => {
  const cart = useFromStore(useCartStore, (state) => state.cart);

  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const totalPrice = useCartStore((state) => state.totalPrice);
  const { totalItems } = useCartStore();
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  const getCart = useCartStore((state) => state.fetchCart);

  useEffect(() => {
    getCart();
  }, [getCart]);

  const { mutate: signOut, isSuccess } = useSignOutAccount();
  const logOut = () => {
    signOut();
    localStorage.clear();
    navigate("/");
    location.reload();
    if (isSuccess) {
      toast.success("Logged out successfully");
    }
  };
  return (
    <div className="flex h-[100px] items-center">
      <div className="text-md mx-auto flex max-w-7xl flex-1 items-center justify-between px-8">
        <Link to="/">
          <div className="flex items-center gap-1">
            <img src={assets.assets.logo} alt="logo" className="h-6 w-10" />

            <span className="text-3xl font-semibold">Furniro</span>
          </div>
        </Link>
        <div className="hidden md:flex">
          <ul className="flex list-none gap-14">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/shop">
              <li>Shop</li>
            </Link>
            <Link to="/">
              <li>About</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
        <div className="flex gap-8 text-2xl md:gap-10">
          <Link to="/shop">
            <MdOutlineSearch />
          </Link>

          {token === "" ? (
            <button className="focus:outline-none">
              <MdOutlinePersonOutline
                onClick={() => setShowLogin(true)}
                className="h-full w-full"
              />
            </button>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="focus:outline-none">
                  <MdOutlinePersonOutline className="h-full w-full" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[180px]">
                <DropdownMenuLabel>Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Link to="/my-profile" className="flex items-center">
                      <User />
                      <span className="ml-2">Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/liked" className="flex items-center">
                      <Heart />
                      <span className="ml-2">Liked</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/my-orders" className="flex items-center">
                      <ListChecks />

                      <span className="ml-2">My Orders</span>
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuSeparator />

                  <DropdownMenuItem>
                    <button onClick={logOut} className="flex items-center">
                      <LogOut />
                      <span className="ml-2">Log out</span>
                    </button>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
          <Sheet>
            <SheetTrigger asChild>
              <div className="relative cursor-pointer">
                <MdOutlineShoppingCart />
                <div
                  className={`absolute -right-3 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-sand text-sm font-semibold text-white ${totalItems > 0 ? "block" : "hidden"}`}
                >
                  {totalItems}
                </div>
              </div>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="mb-4 py-4 text-3xl font-semibold">
                  Shopping Cart
                </SheetTitle>
                <hr />
              </SheetHeader>
              <div className="my-8 flex flex-col justify-between">
                <div className="no-scrollbar flex h-[50vh] flex-col gap-5 overflow-y-scroll lg:h-[65vh]">
                  {cart === undefined ||
                    (cart?.length < 1 && (
                      <p className="text-center text-xl">Cart is empty</p>
                    ))}
                  {cart?.map((item) => (
                    <div
                      className="flex w-full items-center justify-between"
                      key={item.id}
                    >
                      <div className="flex gap-5">
                        <img
                          src={item.baseItem.images[0]}
                          alt=""
                          className="content-cover max-h-20 w-24 rounded-lg"
                        />
                        <div className="flex flex-col gap-1">
                          <span className="text-lg">{item.baseItem.name}</span>
                          <div className="font-light">
                            {item.amount} x{" "}
                            <span className="text-sandDark">
                              ${getFinalPrice(item)}
                            </span>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          removeFromCart(item);
                          toast.error("Item removed");
                        }}
                        className="text-secondaryGray"
                      >
                        <MdDelete className="text-2xl" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <SheetFooter className="w-full">
                <div className="w-full">
                  <div className="my-4 flex w-full justify-between text-lg font-semibold">
                    <p>Subtotal:</p>
                    <span className="text-sandDark">${totalPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <SheetClose asChild>
                      <Link to="/cart">
                        <button className="rounded-xl border border-black px-4 font-light">
                          Go to cart
                        </button>
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link to="/checkout">
                        <button
                          disabled={totalItems < 1}
                          className="rounded-xl border border-sandDark px-4 font-light text-sandDark disabled:opacity-65"
                        >
                          Ckeckout
                        </button>
                      </Link>
                    </SheetClose>
                  </div>
                </div>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
