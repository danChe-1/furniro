import BottomSeparator from "@/components/BottomSeparator";
import PageHeader from "@/components/PageHeader";
import { Input } from "@/components/ui/input";
import useFromStore from "@/context/StoreFrom";

import { useGetUserDetails } from "@/lib/react-query/QueriesAndMutations";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getFinalPrice, useCartStore } from "@/context/StoreCart";

const Checkout = () => {
  const navigate = useNavigate();
  const cart = useFromStore(useCartStore, (state) => state.cart);
  const totalPrice = useCartStore((state) => state.totalPrice);
  const {
    data: currentUser,
    isPending,
    isError: getUserError,
    isFetchedAfterMount,
  } = useGetUserDetails();
  console.log(cart);
  if (getUserError) {
    toast.error("Log in to your account");
    navigate("/cart");
  }
  if (isPending)
    return <h1 className="mx-auto my-20 w-1/2 text-4xl">Loading cart...</h1>;
  if (isFetchedAfterMount && (cart === undefined || cart?.length < 1)) {
    navigate("/cart");
    toast.error("Empty cart");
  }
  return (
    <>
      <PageHeader pageName="Checkout" />

      <div className="container my-20 min-h-96">
        <Link to="/cart" className="text-xl text-sandDark">
          Back to cart
        </Link>
        <div className="mt-5 grid gap-20 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            <h1 className="mb-3 text-5xl font-semibold">Billing details</h1>
            <div className="flex w-full flex-row gap-5">
              <div className="flex w-1/2 flex-col gap-5">
                <label className="font-medium">First Name</label>
                <Input
                  defaultValue={currentUser.firstName}
                  type="text"
                  className="rounded-lg border py-6"
                />
              </div>
              <div className="flex w-1/2 flex-col gap-5">
                <label className="font-medium">Last Name</label>
                <Input
                  defaultValue={currentUser.lastName}
                  type="text"
                  className="rounded-lg border py-6"
                />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <label className="font-medium">Comapny Name (Optional)</label>
              <Input type="text" className="rounded-lg border py-6" />
            </div>
            <div className="flex flex-col gap-5">
              <label className="font-medium">City / Town</label>
              <Input type="text" className="rounded-lg border py-6" />
            </div>
            <div className="flex flex-col gap-5">
              <label className="font-medium">ZIP Code</label>
              <Input
                min={1}
                max={999999}
                type="number"
                className="rounded-lg border py-6"
              />
            </div>
            <div className="flex flex-col gap-5">
              <label className="font-medium">Phone</label>
              <Input
                defaultValue={currentUser.phoneNumber}
                type="tel"
                className="rounded-lg border py-6"
              />
            </div>
            <div className="flex flex-col gap-5">
              <label className="font-medium">Email address</label>
              <Input
                defaultValue={currentUser.email}
                type="email"
                className="rounded-lg border py-6"
              />
            </div>
            <div className="mt-5">
              <Input
                placeholder="Additional information"
                type="text"
                className="rounded-lg border py-6"
              />
            </div>
          </div>
          <div className="flex w-full flex-col gap-5 text-xl">
            <h2 className="text-2xl font-medium">Cart Summary:</h2>

            {cart?.map((item) => (
              <div className="flex flex-row justify-between" key={item.id}>
                <p className="text-lg font-light">
                  <span className="text-secondaryGray">
                    {item.baseItem.name}
                  </span>{" "}
                  x {item.amount}
                </p>
                <p>${getFinalPrice(item)}</p>
              </div>
            ))}
            <div className="mt-5 flex justify-between">
              <p>Total</p>
              <p className="text-2xl font-semibold text-sandDark">
                ${totalPrice}
              </p>
            </div>
            <hr className="my-5" />
          </div>
        </div>
      </div>
      <BottomSeparator />
    </>
  );
};

export default Checkout;
