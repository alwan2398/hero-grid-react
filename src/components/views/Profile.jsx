import { GiShurikenAperture } from "react-icons/gi";

const Profile = () => {
  return (
    <div className="relative overflow-hidden">
      <img
        src="../../../src/assets/ch2.png"
        alt="profile"
        className="object-cover h-[530px] w-full rounded-xl"
      />
      <div className="absolute bottom-20 left-4 bg-[#0303031a] border-white border backdrop-blur-lg rounded-lg p-4 items-center justify-center flex gap-6">
        <h1 className="text-5xl font-primary font-bold flex flex-col">
          Cyber <span className="mt-4">Punk</span>
        </h1>
        <div className="h-12 w-12 rounded-full flex items-center justify-center bg-red-600">
          <GiShurikenAperture className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
