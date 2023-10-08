import "./Banner.css";

import banner from "../../../assets/Mesh-gradient.png";
const Banner = () => {
  return (
    <div className="">
      <div>
        <div className="flex justify-end relative">
          <div className=" w-full  font-koulen absolute left-0 top-1/4 px-10 md:px-36 lg:px-72 text-center space-y-4 md:space-y-5">
            <h2 className="text-4xl md:text-6xl font-semibold">Entertainment</h2>

            <div className="relative ">
              <div className="border-t border-white   w-full absolute"></div>
              <div className="absolute -top-3 left-1/2 text-white text-xs md:text-lg bg-black  px-4 transform -translate-x-1/2 ">
                and take part in the
              </div>
            </div>

            <h1 className="font-bold text-4xl md:text-8xl pt-3 md:pt-6 year">2023</h1>
            <p className="text-2xl md:text-5xl text-white ">
              Get your ticket
            </p>
          </div>
          <div className="hidden lg:flex">
            <img  className="banner w-screen h-[90vh]" src={banner} alt="" />
          </div>
          <div className="lg:hidden flex">
            <img className=" " src={banner} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
