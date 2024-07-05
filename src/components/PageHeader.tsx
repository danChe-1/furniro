import assets from "@/assets/assets";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
type Props = {
  pageName: string;
};
const PageHeader = ({ pageName }: Props) => {
  return (
    <div className="bg-shop-bg h-96 flex flex-col justify-center items-center bg-center bg-cover w-full gap-4">
      <img
        src={assets.assets.logo}
        alt="logo"
        className="w-16 h-12"
      />
      <h1 className="text-7xl font-medium">{pageName}</h1>
      <div className="flex gap-3 mt-5 items-center text-xl">
        <Link to="/">
          <p className="font-medium">Home</p>
        </Link>
        <MdKeyboardArrowRight className="" />
        <p>{pageName}</p>
      </div>
    </div>
  );
};

export default PageHeader;

