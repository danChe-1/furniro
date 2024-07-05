import assets from "@/assets/assets";
import Gallery from "@/components/Gallery";
import ProductCard from "@/components/ProductCard";
import SwiperDivider from "@/components/SwiperDivider";
import { Button } from "@/components/ui/button";
import { ScrollBar, ScrollArea } from "@/components/ui/scroll-area";
import "./home.css";
import { useGetPosts } from "@/lib/react-query/QueriesAndMutations";
import { ProductType } from "@/types";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { data: products } = useGetPosts(" ");
  return (
    <>
      <div className="relative hidden h-auto min-h-[700px] w-full bg-header-img bg-cover bg-center bg-no-repeat md:block">
        <div className="absolute right-32 top-32 w-2/5 bg-beigeDark px-10 py-16 lg:px-16">
          <div className="flex flex-col items-start">
            <h3 className="font-light">New Arrival</h3>
            <h1 className="my-3 text-3xl font-bold text-sand lg:text-6xl">
              Discover Our New Collection
            </h1>
            <p>
              Enahnce your most sacred places with these beautifuly-crafted
              pieces of furniture
            </p>
            <Button
              variant="default"
              className="mt-5 bg-sand px-12 py-8 text-white hover:bg-sandDark"
              onClick={() => navigate(`/shop?isNewProduct=true`)}
            >
              Buy now
            </Button>
          </div>
        </div>
      </div>

      <div className="container my-12">
        <div className="flex flex-col gap-2 text-center">
          <h2 className="text-3xl font-bold">Browse The Range</h2>
          <p className="text-gray-500">
            Checl out these pre-made collections for different rooms
          </p>
        </div>
        <ScrollArea className="h-full whitespace-nowrap rounded-md py-3">
          <div className="flex w-max justify-center gap-10 space-x-4">
            {assets.rooms.map((room, index) => (
              <div
                key={index}
                className="transition-scale duration-10 mt-8 flex cursor-pointer flex-col items-center gap-5"
              >
                <img
                  className="0 h-72 w-auto rounded-xl object-cover md:h-[480px] md:w-[350px]"
                  src={room.image}
                  alt={room.name}
                />
                <h4 className="text-lg font-semibold">{room.name}</h4>
              </div>
            ))}
            <ScrollBar className="hidden" orientation="horizontal" />
          </div>
        </ScrollArea>
      </div>

      <div className="container my-12 text-center">
        <h2 className="my-8 text-4xl font-bold">Our Products</h2>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products
            ?.slice(0, 8)
            .map((product: ProductType) => (
              <ProductCard product={product} key={product._id} />
            ))}
        </div>
        <Link to="/shop">
          <button className="mt-8 rounded-lg border border-sand px-20 py-3 text-sand hover:border-sandDark hover:text-sandDark">
            Show more
          </button>
        </Link>
      </div>

      <SwiperDivider />
      <Gallery />
    </>
  );
};

export default Home;
