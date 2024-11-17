import { Button } from "../ui/button";

const About = () => {
  return (
    <section className="px-4 py-4">
      <div className="flex items-center justify-center space-x-2 mt-2">
        <div className="h-8 w-8 rounded-full bg-red-600"></div>
        <h1 className="text-xl font-primary font-semibold">Cyber Punk</h1>
      </div>

      <div className="flex flex-col">
        <div className="relative overflow-hidden mt-4">
          <img
            src="../../../src/assets/ch1.png"
            alt="profile"
            className="object-cover h-[205px] w-full rounded-xl"
          />
        </div>
        <p className="text-xs text-gray-300 mt-2">
          Get Inspired by Futuristic Aesthetics <br />
          Enter the Cyberpunk Universe
        </p>
        <Button className="bg-black-1 rounded-full mt-4">Explore</Button>
      </div>
    </section>
  );
};

export default About;
