import { useState, useEffect } from "react";
import React from "react";

interface Props {
  setSearch: any;
  search: string;
}

const Navbar: React.FC<Props> = ({ setSearch, search }: Props) => {
  const [slidebar, setSlidebar] = useState<boolean>(false);
  const [windowSize, setWindowSize] = useState(getWindowSize());
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      {/* Main Container */}
      <div
        className={` flex flex-row items-center justify-between ${
          slidebar ? " bg-black " : " "
        } duration-500`}
      >
        {/* hamburger menu */}
        <div
          className={`flex flex-row space-r-2 md:space-x-10 text-white items-center md:bg-neutral-900`}
        >
          {windowSize.innerWidth <= 640 ? (
            <div
              className="p-2 flex space-y-1 flex-col"
              onClick={() => setSlidebar(!slidebar)}
            >
              <div className="border-b-4 border-white w-8"></div>
              <div className="border-b-4 border-white w-8"></div>
              <div className="border-b-4 border-white w-8"></div>
            </div>
          ) : (
            <></>
          )}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="50"
              width="100"
              viewBox="-153.6 -69.1855 1331.2 415.113"
            >
              <path
                fill="#d81f26"
                d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676L44.051 119.724v151.073C28.647 272.418 14.594 274.58 0 276.742V0h41.08l56.212 157.021V0h43.511zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461V0h119.724v43.241h-76.482zm237.284-58.104h-44.862V242.15c-14.594 0-29.188 0-43.239.539V43.242h-44.862V0H463.22zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433V0h120.808v43.241h-78.375zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676V0h43.24zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242V0h-42.43zM1024 0l-54.863 131.615L1024 276.742c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75L871.576 0h46.482l28.377 72.699L976.705 0z"
              />
            </svg>
          </div>

          <div className="hidden md:block text-lg hover:underline cursor-pointer hover:font-bold">
            About
          </div>
          <div className="hidden md:block text-lg hover:underline cursor-pointer hover:font-bold">
            Services
          </div>
          <div className="hidden md:block text-lg hover:underline cursor-pointer hover:font-bold">
            Client
          </div>
          <div className="hidden md:block text-lg hover:underline cursor-pointer hover:font-bold">
            Contact
          </div>
        </div>
        <div className="ml-4">
          <input
            className="overflow-hidden text-white text-xl px-6 py-[0.25rem] w-[150px] lg:w-[300px] md:w-[250px] border-2 border-gray-900 bg-black placeholder:text-center outline-red "
            type="text"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div
        className={`md:hidden absolute opacity-100 flex flex-col group text-white bg-black shadow-lg shadow-black space-y-4 ${
          slidebar ? ` w-[100%] p-2  pt-8 opacity-90  ` : ` w-[0%]  `
        } duration-500 z-10`}
      >
        <div className="text-lg hover:underline cursor-pointer hover:font-bold">
          {slidebar ? <>About</> : <></>}
        </div>
        <div className="text-lg hover:underline cursor-pointer hover:font-bold">
          {slidebar ? <>Services</> : <></>}
        </div>
        <div className="text-lg hover:underline cursor-pointer hover:font-bold">
          {slidebar ? <>Client</> : <></>}
        </div>
        <div className="text-lg hover:underline cursor-pointer hover:font-bold">
          {slidebar ? <>Contact</> : <></>}
        </div>
      </div>
    </>
  );
};

export default Navbar;
