import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <hr className="w-full" />
      <div className="container flex flex-col justify-between py-10 text-lg lg:h-72 lg:w-full lg:flex-row">
        <div className="flex flex-col gap-9">
          <h2 className="text-4xl font-bold">Furniro.</h2>
          <p className="font-light text-secondaryGray">
            400 Univarsity Drive Suite 200 Coral Gables, <br />
            FL 33134 USA
          </p>
        </div>
        <div className="my-10 flex flex-col lg:my-0 lg:gap-8">
          <p className="font-medium text-secondaryGray">Links</p>
          <ul className="flex gap-6 lg:flex-col">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/home">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="mb-10 flex flex-col lg:my-0 lg:gap-8">
          <p className="font-medium text-secondaryGray">Help</p>
          <ul className="flex gap-6 lg:flex-col">
            <li>
              <Link to="/home">Payment Options</Link>
            </li>
            <li>
              <Link to="/home">Returns</Link>
            </li>
            <li>
              <Link to="/home">Privacy Policies</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start lg:gap-4">
          <p className="font-medium text-secondaryGray">Newsletter</p>
          <div>
            <input
              className="border-b border-black px-1 py-2 focus:border-b-2 focus:outline-none"
              type="email"
              placeholder="Enter your email"
            />
            <button className="ms-4 border-b border-black pb-2 text-xl font-semibold transition hover:border-0 hover:border-b-2">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
      <div className="container mt-8 border-t py-8">
        <p className="text-xl">2024 furino. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
