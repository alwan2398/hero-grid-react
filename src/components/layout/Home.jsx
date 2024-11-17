import About from "../views/About";
import Equipment from "../views/Equipment";
import Information from "../views/Information";
import Navbar from "../views/Navbar";
import Profile from "../views/Profile";

const Home = () => {
  return (
    <section className="max-w-7xl mx-auto py-8 px-4 md:px-6 lg:px-12">
      <div className="relative grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-5">
        <div className="md:row-span-3 rounded-xl bg-black-2">
          <About />
        </div>
        <div className="md:row-span-2 md:col-start-1 md:row-start-4 rounded-xl bg-black-2">
          <Equipment />
        </div>
        <div className="md:col-span-2 md:row-span-1 md:col-start-2 rounded-xl bg-black-2">
          <Navbar />
        </div>
        <div className="md:col-span-2 md:row-span-4 md:col-start-2 md:row-start-2 rounded-xl bg-black-2">
          <Profile />
        </div>
        <div className="md:row-span-5 md:col-start-4 md:row-start-1 rounded-lg bg-black-2">
          <Information />
        </div>
      </div>
    </section>
  );
};

export default Home;
