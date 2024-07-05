import { Skeleton } from "./ui/skeleton";

const ProductCardSkeleton = () => {
  return (
    <div className="flex w-72 flex-col space-y-3">
      <div className="flex h-96 flex-col justify-between">
        <Skeleton className="h-96 w-full rounded-t-xl lg:h-72" />
        <div className="flex h-1/3 w-full flex-col justify-between space-y-2 p-3">
          <Skeleton className="h-6 w-full rounded-lg" />

          <div className="flex justify-between">
            <Skeleton className="h-3 w-1/6 rounded-lg" />
            <Skeleton className="h-3 w-1/6 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
