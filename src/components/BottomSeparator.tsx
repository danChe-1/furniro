import { FaTruckLoading } from "react-icons/fa";
import { GoTrophy, GoVerified } from "react-icons/go";

import { MdSupportAgent } from "react-icons/md";

const BottomSeparator = () => {
  return (
    <div className="mt-20 flex w-full flex-col items-start justify-between gap-10 bg-beigeDark px-12 py-8 lg:h-72 lg:flex-row lg:items-center">
      <div className="flex items-center gap-3">
        <GoTrophy className="text-6xl" />

        <div>
          <h4 className="text-2xl font-medium">High Quality</h4>
          <p className="text-secondaryGray">Crafted from top materials</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <GoVerified className="text-6xl" />

        <div>
          <h4 className="text-2xl font-medium">Warranity Protection</h4>
          <p className="text-secondaryGray">Over 2 years</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <FaTruckLoading className="text-6xl" />

        <div>
          <h4 className="text-2xl font-medium">Free Shipping</h4>
          <p className="text-secondaryGray">Order over 150$</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <MdSupportAgent className="text-6xl" />

        <div>
          <h4 className="text-2xl font-medium">24/7 Support</h4>
          <p className="text-secondaryGray">Dedicated support</p>
        </div>
      </div>
    </div>
  );
};

export default BottomSeparator;
