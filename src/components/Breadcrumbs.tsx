import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { ProductType } from "@/types";

type ProductProps = {
  product: ProductType;
};

const Breadcrumbs = ({ product }: ProductProps) => {
  return (
    <div className="mb-8 flex h-24 items-center bg-beigeDark px-6 lg:px-10">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link className="font-regular text-lg text-secondaryGray" to="/">
                Home
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-black" />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link
                className="font-regular text-lg text-secondaryGray"
                to="/shop"
              >
                Shop
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-black" />
          <span className="border-r-1 h-8 border border-secondaryGray" />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link
                className="pl-4 text-lg font-semibold text-black"
                to="/shop"
              >
                {product.name}
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default Breadcrumbs;
