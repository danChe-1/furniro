import { VscSettings } from "react-icons/vsc";
import { FaSort } from "react-icons/fa6";
import ProductCard from "@/components/ProductCard";
import BottomSeparator from "@/components/BottomSeparator";
import PageHeader from "@/components/PageHeader";
import { ProductType } from "@/types";
import ProductCardSkeleton from "@/components/ProductCardSkeleton";
import { useGetPosts } from "@/lib/react-query/QueriesAndMutations";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { BsCollection } from "react-icons/bs";
import { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
// import assets from "@/assets/assets";

const Shop = () => {
  const navigate = useNavigate();

  const [queryData, setQueryData] = useState({
    searchTerm: "",
    newProduct: "false",
    onSale: "false",
    category: "",
    collection: "",
    sort: "createdAt",
    order: "desc",
  });

  const urlParams = new URLSearchParams(location.search);
  useEffect(() => {
    const searchTermFromUrl = urlParams.get("searchTerm");
    const newFromUrl = urlParams.get("isNewProduct");
    const saleFromUrl = urlParams.get("discount");
    const categoryFromUrl = urlParams.get("category");
    const collectionFromUrl = urlParams.get("collectionName");
    const sortFromUrl = urlParams.get("sort");
    const orderFromUrl = urlParams.get("order");

    if (
      searchTermFromUrl ||
      newFromUrl ||
      saleFromUrl ||
      categoryFromUrl ||
      collectionFromUrl ||
      sortFromUrl ||
      orderFromUrl
    ) {
      setQueryData({
        searchTerm: searchTermFromUrl || "",
        newProduct: newFromUrl || "false",
        onSale: saleFromUrl || "false",
        category: categoryFromUrl || "",
        collection: collectionFromUrl || "",
        sort: sortFromUrl || "createdAt",
        order: orderFromUrl || "desc",
      });
    }
  }, [setQueryData]);
  const searchQuery = urlParams.toString();
  const { data, isError, isLoading } = useGetPosts("?" + searchQuery);
  // if(data === undefined || data === null){
  //   const dataFallback = assets.product_list;
  // }
  if (isError) {
    return (
      <div className="flex w-full items-center justify-center">
        <h1>Error</h1>
      </div>
    );
  }
  if (isLoading) {
    return (
      <>
        <PageHeader pageName="Shop" />
        <div className="container mt-10 grid min-h-96 grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
        </div>
        <BottomSeparator />
      </>
    );
  }
  const setCategory = (value: string) => {
    setQueryData({ ...queryData, category: value });
  };
  const toggleNewProduct = () => {
    setQueryData({
      ...queryData,
      newProduct: queryData.newProduct === "true" ? "false" : "true",
    });
  };
  const toggleSaleProduct = () => {
    setQueryData({
      ...queryData,
      onSale: queryData.onSale === "true" ? "false" : "true",
    });
  };
  if (data?.length < 1)
    return (
      <div className="flex min-h-[40vh] items-center justify-center text-3xl">
        No results found
      </div>
    );
  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    if (e.target.id === "sortBy") {
      const sort = e.target.value.split("_")[0] || "createdAt";
      const order = e.target.value.split("_")[1] || "desc";
      setQueryData({ ...queryData, sort, order });
    }
    if (e.target.id === "search") {
      setQueryData({ ...queryData, searchTerm: e.target.value });
    }
    console.log(queryData);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const urlParams = new URLSearchParams();
    urlParams.set("searchTerm", queryData.searchTerm);
    urlParams.set("isNewProduct", queryData.newProduct);
    urlParams.set("discount", queryData.onSale);
    urlParams.set("category", queryData.category);
    urlParams.set("collectionName", queryData.collection);
    urlParams.set("sort", queryData.sort);
    urlParams.set("order", queryData.order);
    const searchQuery = urlParams.toString();
    navigate(`/shop?${searchQuery}`);
  };
  return (
    <>
      <PageHeader pageName="Shop" />
      <form
        onSubmit={handleSubmit}
        onChange={handleChange}
        className="mb-8 flex h-auto min-h-24 flex-col items-center justify-evenly bg-beigeDark px-10 py-3 sm:flex-row"
      >
        <div className="my-3 flex items-center gap-5 text-lg">
          <div className="flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="border text-lg font-light hover:border-black">
                  <VscSettings className="mr-2" />
                  <p>Filter</p>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Filter</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                  checked={queryData.newProduct === "true"}
                  onCheckedChange={toggleNewProduct}
                >
                  New Products
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={queryData.onSale === "true"}
                  onCheckedChange={toggleSaleProduct}
                >
                  On sale
                </DropdownMenuCheckboxItem>
                <DropdownMenuSeparator />

                <DropdownMenuItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <BsCollection className="mr-2" />
                      <span>Collections</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem>
                          <span>Vintage</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <span>Contemporary</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <span>Industrial</span>
                        </DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="w-[20rem]">
            <Select value={queryData.category} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>

              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Inside</SelectLabel>
                  <SelectItem value="sofas">Sofas</SelectItem>
                  <SelectItem value="tables">Tables</SelectItem>
                  <SelectItem value="cupboards">Cupboards</SelectItem>
                  <SelectItem value="beds">Beds</SelectItem>
                  <SelectItem value="chairs">Chairs</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>Outside</SelectLabel>
                  <SelectItem value="outdoor furniture">
                    Outdoor Furniture
                  </SelectItem>
                  <SelectItem value="hammocks">Hammocks</SelectItem>
                  <SelectItem value="parasols">Parasols</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <span className="border-r-1 h-8 border border-secondaryGray" />
          <div className="flex w-full gap-4">
            <button className="rounded-lg px-4 py-1 hover:text-sandDark">
              Apply filters
            </button>
            <button
              type="button"
              className="rounded-lg px-4 py-1 hover:text-sandDark"
              onClick={() => {
                navigate("/shop");
                setQueryData({
                  searchTerm: "",
                  newProduct: "false",
                  onSale: "false",
                  category: "",
                  collection: "",
                  sort: "createdAt",
                  order: "desc",
                });
              }}
            >
              Reset
            </button>
          </div>
        </div>
        <div className="flex flex-1 gap-4">
          <div className="relative w-[20rem]">
            <input
              type="text"
              id="search"
              placeholder="Search"
              defaultValue={queryData.searchTerm}
              className="h-full w-full rounded border px-3 py-1 focus:outline-sandDark"
            />
            <button className="absolute right-2 top-2 rounded-lg" type="submit">
              <FaSearch className="text-secondaryGray hover:text-black" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <FaSort />
          <label>Sort By</label>
          <select
            defaultValue={queryData.sort + "_" + queryData.order}
            id="sortBy"
            className="px-3 py-2 focus:outline-none"
          >
            <option value="createdAt_desc">Newest</option>
            <option value="createdAt_asc">Oldest</option>
            <option value="price_asc">Cheap to expensive</option>
            <option value="price_desc">Expensive to cheap</option>
          </select>
        </div>
      </form>
      <div className="container">
        <div className="my-6">
          <p>
            Showing {data?.length} {data?.length > 1 ? "results" : "result"}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data?.map((i: ProductType) => (
            <ProductCard product={i} key={i._id} />
          ))}
        </div>
      </div>
      <BottomSeparator />
    </>
  );
};

export default Shop;
