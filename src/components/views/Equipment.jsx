import { FaHandPaper, FaLaptopCode } from "react-icons/fa";
import {
  GiCrackedMask,
  GiCrossedSwords,
  GiRobotHelmet,
  GiSaberAndPistol,
} from "react-icons/gi";
import { TbCircuitBattery } from "react-icons/tb";
import { VscTerminalLinux } from "react-icons/vsc";

const equip = [
  {
    id: 1,
    icon: GiCrackedMask,
  },
  {
    id: 2,
    icon: FaHandPaper,
  },
  {
    id: 3,
    icon: GiRobotHelmet,
  },
  {
    id: 4,
    icon: GiSaberAndPistol,
  },
  {
    id: 5,
    icon: FaLaptopCode,
  },
  {
    id: 6,
    icon: VscTerminalLinux,
  },
  {
    id: 7,
    icon: TbCircuitBattery,
  },
  {
    id: 8,
    icon: GiCrossedSwords,
  },
];

const Equipment = () => {
  return (
    <section className="px-4 py-4">
      <div className="flex flex-col space-y-2">
        <h2 className="text-lg font-semibold">Equipment</h2>
        <p>The Equipment You Need</p>
      </div>
      <div className="flex flex-wrap gap-4 mt-8">
        {equip.map((item) => (
          <div
            key={item.id}
            className="bg-white w-12 h-12 rounded-lg mx-auto items-center justify-center flex cursor-pointer
          hover:scale-110 hover:bg-red-600 duration-100 transition-all"
          >
            <item.icon className="text-slate-900 hover:text-white w-8 h-8" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Equipment;
