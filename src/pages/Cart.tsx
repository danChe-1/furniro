import { Link } from "react-router-dom";
import { CartItem, getFinalPrice, useCartStore } from "@/context/StoreCart";
import { MdDelete } from "react-icons/md";
import PageHeader from "@/components/PageHeader";
import useFromStore from "@/context/StoreFrom";
import { toast } from "react-toastify";
// import { useClearCart } from "@/lib/react-query/QueriesAndMutations";

const Cart = () => {
  const cart = useFromStore(useCartStore, (state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const totalPrice = useCartStore((state) => state.totalPrice);
  const updateAmount = useCartStore((state) => state.updateAmount);
  const handleChangeAmount = (item: CartItem, newAmount: number) => {
    updateAmount(item, newAmount);
  };
  // const { mutateAsync: clearCart } = useClearCart();

  if (cart === undefined) return <p>Error</p>;
  console.log(cart);

  return (
    <>
      <PageHeader pageName="Cart" />
      <div className="mx-3 my-10 flex flex-col justify-between lg:flex-row lg:px-10">
        <div className="flex min-h-96 flex-col gap-10 lg:w-8/12">
          <div className="flex h-20 w-full items-center justify-around rounded bg-beigeDark lg:pr-24">
            <p className="w-1/3 text-center">Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>
          <div>
            {cart?.length < 1 ? (
              <p className="mt-6 flex justify-center text-2xl">
                Your cart is empty
              </p>
            ) : (
              <></>
            )}
            {cart?.map((item, index) => (
              <div
                key={index}
                className="my-20 flex h-24 w-full items-center justify-around text-secondaryGray lg:my-0"
              >
                <Link to={`/shop/${item.baseItem._id}`}>
                  <div className="flex flex-col items-center gap-4 md:flex-row md:gap-10">
                    <img
                      src={item.baseItem.images[0]}
                      alt={item.baseItem.name}
                      className="max-h-20 w-32 rounded-xl object-cover"
                    />
                    <p>
                      {item.baseItem.name} ({item.color}, {item.size})
                    </p>
                  </div>
                </Link>
                <p>${getFinalPrice(item) / item.amount}</p>

                <select
                  onChange={(e) =>
                    handleChangeAmount(item, parseFloat(e.target.value))
                  }
                  defaultValue={item.amount}
                  className="rounded-lg border px-2 py-2"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>

                <p>${getFinalPrice(item)}</p>
                <button
                  onClick={() => {
                    removeFromCart(item);
                    toast.error("Item removed");
                  }}
                  className="text-sandDark"
                >
                  <MdDelete className="text-3xl" />
                </button>
              </div>
            ))}
          </div>
          {/* <button onClick={() => clearCart()}>Clear cart</button> */}
        </div>
        <div className="flex flex-1 flex-col items-center rounded bg-beigeDark px-5 py-8 md:ml-8 lg:px-20">
          <h2 className="mb-10 text-4xl font-medium">Cart Totals</h2>

          <div className="mb-8 flex w-full justify-between">
            <p className="text-xl font-medium">Subtotal</p>
            <p className="text-xl text-secondaryGray">
              ${totalPrice.toFixed(2)}
            </p>
          </div>
          <div className="flex w-full justify-between">
            <p className="text-xl font-medium">Total</p>
            <p className="text-2xl text-sandDark">${totalPrice.toFixed(2)}</p>
          </div>
          <Link to="/checkout">
            <button
              disabled={cart?.length < 1}
              className="mt-10 rounded-xl border border-black px-16 py-4 text-2xl font-light disabled:opacity-20"
            >
              Check Out
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cart;
