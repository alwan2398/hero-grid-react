import { BiSolidFaceMask } from "react-icons/bi";
import { FaFire } from "react-icons/fa";
import { GiMagicPalm, GiStarShuriken } from "react-icons/gi";
import { IoWaterSharp } from "react-icons/io5";
import { MdLandscape } from "react-icons/md";
import { RiFlashlightLine } from "react-icons/ri";
import { WiSmoke } from "react-icons/wi";

const Navbar = () => {
  return (
    <div className="px-4 py-2">
      <div className="flex flex-wrap mx-auto items-center justify-around mt-6 gap-4">
        <div className="border border-white p-2">
          <RiFlashlightLine className="lg:w-8 lg:h-8 w-6 h-6" />
        </div>

        <div className="border border-white p-2 rounded-lg">
          <FaFire className="lg:w-8 lg:h-8 w-6 h-6" />
        </div>

        <div className="border border-white p-2 rounded-lg">
          <IoWaterSharp className="lg:w-8 lg:h-8 w-6 h-6" />
        </div>

        <div className="border border-white p-2 rounded-lg">
          <WiSmoke className="lg:w-8 lg:h-8 w-6 h-6" />
        </div>

        <div className="border border-white p-2 rounded-lg">
          <GiMagicPalm className="lg:w-8 lg:h-8 w-6 h-6" />
        </div>

        <div className="border border-white p-2 rounded-lg">
          <MdLandscape className="lg:w-8 lg:h-8 w-6 h-6" />
        </div>

        <div className="border border-white p-2 rounded-lg">
          <GiStarShuriken className="lg:w-8 lg:h-8 w-6 h-6" />
        </div>

        <div className="border border-white p-2 rounded-lg">
          <BiSolidFaceMask className="lg:w-8 lg:h-8 w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
