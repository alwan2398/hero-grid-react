import { BsChat } from "react-icons/bs";
import { RiHeart2Line, RiStarLine } from "react-icons/ri";
import { Button } from "../ui/button";

const Information = () => {
  return (
    <div className="px-4 py-4 flex flex-col mt-4">
      <h2 className="text-lg font-medium">The Samurai Girl - The Legend</h2>
      <p className="text-sm text-gray-300 mt-4">
        Samurai Girl is a Japanese manga series written and illustrated It tells
        the story of a young girl.
      </p>
      <div className="flex items-center justify-center mt-6 space-x-6">
        <div className="h-10 w-10 rounded-full bg-white items-center justify-center flex">
          <RiHeart2Line className="w-8 h-8 text-black-1" />
        </div>
        <div className="h-10 w-10 rounded-full bg-white items-center justify-center flex">
          <RiStarLine className="w-8 h-8 text-black-1" />
        </div>
        <div className="h-10 w-10 rounded-full bg-white items-center justify-center flex">
          <BsChat className="w-6 h-6 text-black-1" />
        </div>
      </div>

      <div className="relative overflow-hidden mt-6">
        <img
          src="../../../src/assets/ch1.png"
          alt="profile"
          className="object-cover h-[230px] w-full rounded-xl "
        />
      </div>
      <h2 className="text-lg font-semibold mt-4">
        jump into the world of Samurai Girl - The Legend and become a Samurai
        Girl
      </h2>
      <Button className="bg-red-600 rounded-full mt-4">Read Now</Button>
    </div>
  );
};

export default Information;
