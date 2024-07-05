import assets from "@/assets/assets";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useState } from "react";
import { MdDownloadDone } from "react-icons/md";
import { FaFacebook, FaInstagram, FaStar, FaXTwitter } from "react-icons/fa6";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "swiper/css/thumbs";
import "./product.css";
import { ScrollBar, ScrollArea } from "@/components/ui/scroll-area";
import ProductCard from "@/components/ProductCard";
import { Color, ProductType, Review } from "@/types";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import {
  useAddLiked,
  useGetPosts,
  useGetProductById,
} from "@/lib/react-query/QueriesAndMutations";
import { useNavigate, useParams } from "react-router-dom";
import { useCartStore } from "@/context/StoreCart";
import { toast } from "react-toastify";
import { checkIsLiked } from "@/lib/api";

const Product = () => {
  const addToCart = useCartStore((state) => state.addToCart);
  const navigate = useNavigate();
  const { mutateAsync: addLiked } = useAddLiked();
  const { productId } = useParams();

  const {
    data: product,
    isLoading,
    isError,
  } = useGetProductById(productId || "");

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();
  const [amount, setAmount] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedDescription, setSelectedDescription] = useState("Description");
  const [isLiked, setIsLiked] = useState(false);

  const simQuery = "?collectionName=" + product?.collectionName;
  const { data: similar } = useGetPosts(simQuery || "");
  const avgRating = (reviews: Review[]) => {
    let sum = 0;
    for (let i = 0; i < reviews.length; i++) {
      sum += reviews[i].rating;
    }
    return Math.floor(sum / reviews.length);
  };
  if (isLoading) {
    return <p>Loading</p>;
  }
  const checkLiked = async () => {
    const result = await checkIsLiked(product._id);
    setIsLiked(result.data);
  };
  checkLiked();

  if (isError) navigate("/error");
  const handleAddToCart = () => {
    const cartItem = {
      baseItem: product,
      id: product._id + "/" + selectedColor + "/" + selectedSize,
      color: selectedColor,
      size: selectedSize,
      amount,
    };
    addToCart(cartItem);
    toast.success("Item added");
  };

  const handleAddLiked = () => {
    addLiked(product);
    setIsLiked(true);
  };
  return (
    <div>
      <Breadcrumbs product={product} />
      <div className="container flex flex-col lg:flex-row">
        <div className="mb-10 flex h-[500px] flex-none gap-8 lg:mb-0 lg:mr-20 lg:w-2/5">
          <Swiper
            onSwiper={setThumbsSwiper}
            direction="vertical"
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper h-5/6 w-1/5"
          >
            {product.images.map((image: string, index: number) => (
              <SwiperSlide key={index} className="">
                <img src={image} alt="" className="cursor-pointer rounded-xl" />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            modules={[FreeMode, Navigation, Thumbs]}
            direction={"vertical"}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            className="product-swiper"
          >
            {product.images.map((image: string, index: number) => (
              <SwiperSlide key={index} className="">
                <img
                  className="cursor-grabbing rounded-xl"
                  src={image}
                  alt={index.toString()}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex flex-auto flex-col gap-5">
          <h1 className="text-6xl font-light">{product?.name}</h1>
          <p className="text-3xl font-medium text-secondaryGray">
            ${product?.price}
          </p>
          <div className="flex items-center gap-2">
            {[...Array(avgRating(assets.productReviews))].map((_, index) => (
              <FaStar className="text-sandDark" key={index} />
            ))}
            {[...Array(5 - avgRating(assets.productReviews))].map((_, i) => (
              <FaStar className="text-sandLight" key={i} />
            ))}
            <span className="h-6 border border-r border-secondaryGray" />
            <p className="text-md font-light text-secondaryGray">
              {assets.productReviews.length} Customer Reviews
            </p>
          </div>
          <p className="mt-1 text-xl capitalize text-sandDark">
            <span className="text-md text-secondaryGray">Collection: </span>
            {product.collectionName}
          </p>
          <p className="text-lg lg:w-2/3">{product?.short_description}</p>
          <div className="flex flex-col gap-4">
            <p className="text-lg text-secondaryGray">Size</p>
            <div className="flex gap-4">
              {product?.sizes.map((size: string) => (
                <button
                  onClick={() => setSelectedSize(size)}
                  key={size}
                  className={`${
                    selectedSize === size
                      ? "bg-sandDark text-white"
                      : "bg-sandLight hover:border hover:border-sandDark"
                  } flex h-8 w-auto cursor-pointer items-center justify-center rounded-[8px] p-5`}
                >
                  {size}
                </button>
              ))}
            </div>
            <p className="text-lg text-secondaryGray">Color</p>
            <div className="flex gap-4">
              {product?.colors.map((color: Color) => (
                <div
                  style={{ background: color.bgHex }}
                  onClick={() => setSelectedColor(color.name)}
                  key={color.name}
                  className={`${
                    selectedColor === color.name
                      ? "bg-opacity-65"
                      : "hover:border hover:border-sandDark"
                  } flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border`}
                >
                  {selectedColor === color.name && (
                    <MdDownloadDone className="h-1/2 w-1/2 text-secondaryGray" />
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex h-16 w-28 items-center justify-between rounded-[10px] border p-3">
                <button
                  disabled={amount === 1}
                  className="cursor-pointer disabled:cursor-not-allowed disabled:text-secondaryGray"
                  onClick={() => setAmount((prev) => prev - 1)}
                >
                  -
                </button>
                <p>{amount}</p>
                <button
                  className="cursor-pointer rounded-full"
                  onClick={() => setAmount((amount) => amount + 1)}
                >
                  +
                </button>
              </div>
              <button
                disabled={selectedColor === "" || selectedSize === ""}
                onClick={() => handleAddToCart()}
                className="h-16 w-48 rounded-[10px] border border-black p-3 text-center text-xl hover:border-sandDark hover:text-sandDark disabled:border-secondaryGray disabled:text-secondaryGray"
              >
                Add To Cart
              </button>
              <button className="h-16 w-48 rounded-[10px] border border-black p-3 text-center text-xl hover:border-sandDark hover:text-sandDark">
                + Compare
              </button>
              <button
                onClick={handleAddLiked}
                className="group h-16 w-16 rounded-[10px] border border-red-300 p-4 text-center hover:border-red-500"
              >
                {isLiked ? (
                  <IoIosHeart className="h-full w-full text-red-400 group-hover:text-red-200" />
                ) : (
                  <IoIosHeartEmpty className="h-full w-full text-red-300 group-hover:text-red-500" />
                )}
              </button>
            </div>
            <hr className="my-7 w-5/6" />

            <table className="table-fixed border-separate border-spacing-y-4 text-xl text-secondaryGray lg:w-1/3">
              <tbody>
                <tr>
                  <td>SKU</td>
                  <td className="text-center">:</td>
                  <td>{product?.sku}</td>
                </tr>
                <tr>
                  <td className="w-8">Category</td>
                  <td className="w-20 text-center">:</td>
                  <td>{product?.category}</td>
                </tr>
                <tr>
                  <td>Share</td>
                  <td className="text-center">:</td>
                  <td>
                    <div className="flex items-center gap-4 text-black">
                      <FaXTwitter />
                      <FaFacebook />
                      <FaInstagram />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <hr className="my-7 w-full" />
      <div className="container">
        <div className="flex justify-evenly gap-10 overflow-y-hidden overflow-x-scroll text-2xl text-secondaryGray sm:overflow-x-hidden">
          <button onClick={() => setSelectedDescription("Description")}>
            <h2
              className={
                selectedDescription === "Description"
                  ? "text-black"
                  : "hover:text-black"
              }
            >
              Description
            </h2>
          </button>
          <button onClick={() => setSelectedDescription("Characteristics")}>
            <h2
              className={
                selectedDescription === "Characteristics"
                  ? "text-black"
                  : "hover:text-black"
              }
            >
              Characteristics
            </h2>
          </button>
          <button onClick={() => setSelectedDescription("Reviews")}>
            <h2
              className={
                selectedDescription === "Reviews"
                  ? "text-black"
                  : "hover:text-black"
              }
            >
              Reviews
            </h2>
          </button>
        </div>
        <div
          className={
            selectedDescription === "Description" ? "mt-10 block" : "hidden"
          }
        >
          <p className="text-secondaryGray">{product?.full_description}</p>
          <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
            {product.images.map((image: string, index: number) => (
              <img src={image} alt="product image" key={index} />
            ))}
          </div>
        </div>
        <div
          className={
            selectedDescription === "Characteristics" ? "mt-10 block" : "hidden"
          }
        >
          <table className="mx-auto my-10 table-fixed border-separate border-spacing-y-4 text-xl text-secondaryGray lg:w-1/2">
            <tbody>
              <tr>
                <td>W/H/L</td>
                <td className="text-center">:</td>
                <td>120cm/180cm/200cm</td>
              </tr>
              <tr>
                <td className="w-8">Weight</td>
                <td className="w-20 text-center">:</td>
                <td>12kg</td>
              </tr>
              <tr>
                <td>Materials</td>
                <td className="text-center">:</td>
                <td>
                  <p className="capitalize">{product.material.join(", ")}</p>
                </td>
              </tr>
            </tbody>
          </table>
          <p className="text-end text-sm text-secondaryGray">
            *This section is currently partially hard-coded
          </p>
        </div>
        <div
          className={
            selectedDescription === "Reviews" ? "mt-10 block" : "hidden"
          }
        >
          <Swiper
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="reviewSwiper lg:w-1/2"
          >
            {assets.productReviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="container flex w-2/3 flex-col gap-4">
                  <h2 className="text-xl font-medium">{review.name}</h2>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar className="text-sandDark" key={i} />
                    ))}
                  </div>
                  <p className="text-secondaryGray">{review.review}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <p className="text-end text-sm text-secondaryGray">
            *This section is currently hard-coded
          </p>
        </div>
      </div>
      <hr className="mt-8 w-full" />
      <div className="container my-16">
        <h2 className="text-center text-4xl font-medium">Related Products</h2>
        <ScrollArea className="h-full whitespace-nowrap rounded-md pb-3">
          <div className="flex w-max justify-center gap-5 space-x-4">
            {similar?.slice(0, 8).map((product: ProductType) => (
              <div
                key={product._id}
                className="transition-scale duration-10 mt-8 flex cursor-pointer flex-col items-center gap-5"
              >
                <ProductCard product={product} key={product._id} />
              </div>
            ))}
            <ScrollBar orientation="horizontal" />
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default Product;
