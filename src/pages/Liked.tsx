import PageHeader from "@/components/PageHeader";
import ProductCard from "@/components/ProductCard";

import { useGetLiked } from "@/lib/react-query/QueriesAndMutations";
import { ProductType } from "@/types";

const Liked = () => {
  const { data: likedList, isLoading } = useGetLiked();
  if (isLoading) return <p>Loading</p>;

  return (
    <>
      <PageHeader pageName="Liked" />

      <div className="container my-10">
        {likedList.liked.length < 1 ? (
          <h1 className="mt-16 text-center text-3xl">
            You dont have liked items
          </h1>
        ) : (
          <>
            <h1 className="my-5 text-3xl font-medium">Your liked items:</h1>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {likedList.liked.map((i: ProductType) => (
                <ProductCard product={i} key={i._id} />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Liked;
