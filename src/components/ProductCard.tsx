import { ProductType } from "@/types";
import { FaShareAlt } from "react-icons/fa";
import { GoArrowSwitch } from "react-icons/go";
import { IoIosHeartEmpty } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
type ProductProps = {
  product: ProductType;
};
const ProductCard = ({ product }: ProductProps) => {
  const navigate = useNavigate();
  const copyLink = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    navigator.clipboard
      .writeText(`http://localhost:5173/shop/${product._id}`)
      .then(function () {
        toast.success("Link copied to your clipboard!");
      });
  };
  function handleClick() {
    navigate(`/shop/${product._id}`);
  }
  return (
    <div className="group relative flex cursor-pointer flex-col rounded-xl border text-start lg:w-72">
      <div className="relative">
        <img
          className="h-96 w-full rounded-t-xl object-cover lg:h-72"
          src={product.images[0]}
          alt={product.name}
        />
        {product.discount > 0 && (
          <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-redish text-white">
            -{product.discount}%
          </div>
        )}
        {product.isNewProduct && (
          <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-greenish text-white">
            New
          </div>
        )}
      </div>

      <div className="flex h-full flex-col items-start gap-2 overflow-hidden rounded-b-xl bg-lightGray p-3">
        <h5 className="text-2xl font-semibold">{product.name}</h5>
        <p className="truncate text-start text-gray-500">
          {product.short_description.split(" ").slice(0, 5).join(" ")}...
        </p>
        <div className="flex w-full justify-between">
          <p className="texl-xl font-semibold">
            $
            {(
              parseFloat(product.price) -
              parseFloat(product.price) * (product.discount / 100)
            ).toFixed(2)}
          </p>
          {product.discount > 0 && (
            <p className="text-md text-gray-500 line-through">
              ${product.price}
            </p>
          )}
        </div>
      </div>
      <div className="absolute hidden h-full w-full rounded-xl bg-gray-500 opacity-80 group-hover:flex" />

      <div
        onClick={handleClick}
        className="absolute hidden h-full w-full text-white transition group-hover:block"
      >
        <button className="absolute left-8 top-1/3 w-3/4 border bg-white py-3 text-sandDark">
          Add to cart
        </button>
        <div className="absolute bottom-7 flex w-full flex-row justify-center gap-5">
          <button
            onClick={copyLink}
            className="flex cursor-pointer items-center gap-1 hover:text-beigeDark"
          >
            <FaShareAlt /> Share
          </button>
          <button className="flex cursor-pointer items-center gap-1 hover:text-beigeDark">
            <GoArrowSwitch />
            Compare
          </button>
          <button className="flex cursor-pointer items-center gap-1 hover:text-beigeDark">
            <IoIosHeartEmpty />
            Like
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
