import { Outlet } from "react-router-dom";
import Navbar from "./features/mainLayou/Navbar";

const Mainlayout = () => {
  return (
    <div className= "xl:flex  w-full">
      <div className="lg:w-1/4 w-full bg-success h-[100vh]">
        <Navbar />
      </div>
      <div className=" lg:w-3/4 w-full">
        <Outlet />
      </div>
      
      
    </div>
  );
};

export default Mainlayout;
