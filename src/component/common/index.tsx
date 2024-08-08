import { Outlet } from "react-router-dom";
import Navbar from "./features/mainLayou/Navbar";

const Mainlayout = () => {
  return (
    <div className= " w-full flex flex-col gap-5">
      <h2 className="text-center font-bold md:text-3xl">Portafolio Noemi Guzman</h2>
      <div className="lg:w-1/4 w-full h-[100vh] hidden sm:block">
        <Navbar />
      </div>
      <div className=" lg:w-3/4 w-full">
        {/* <Outlet /> */}
      </div>
      
      
    </div>
  );
};

export default Mainlayout;
