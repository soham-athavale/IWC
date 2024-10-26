import React from "react";
import { Link } from "react-scroll"; // Ensure you have this installed
import { HiMenuAlt4 } from "react-icons/hi"; // Hamburger icon
import { AiOutlineClose } from "react-icons/ai"; // Close icon

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="bg-black shadow-md w-full flex justify-between items-center p-4">
 <div className="text-2xl font-bold text-white flex-1 ml-4"> IWC </div>
  <ul className={`flex space-x-8 md:flex hidden list-none flex-row justify-between items-center flex-initial`}>
    {["Home", "About", "Projects", "Contact"].map((item) => (
      <NavBarItem key={item} title={item} classprops="text-white" /> // Change title text color to white
    ))}
  </ul>
  <div className="flex relative">
    {!toggleMenu && (
      <HiMenuAlt4
        fontSize={28}
        className="text-white md:hidden cursor-pointer" // Change icon color to white
        onClick={() => setToggleMenu(true)}
      />
    )}
    {toggleMenu && (
      <AiOutlineClose
        fontSize={28}
        className="text-white md:hidden cursor-pointer" // Change icon color to white
        onClick={() => setToggleMenu(false)}
      />
    )}
    {toggleMenu && (
      <ul
        className="z-10 fixed top-0 right-0 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md bg-black text-white animate-slide-in" // Change background to black and text to white
      >
        <li className="text-xl w-full my-2">
          <AiOutlineClose className="text-white" onClick={() => setToggleMenu(false)} /> {/* Change icon color to white */}
        </li>
        {["Home", "About", "Projects", "Contact"].map((item) => (
          <NavBarItem key={item} title={item} classprops="my-2 text-lg" />
        ))}
      </ul>
    )}
  </div>
</nav>

  );
};

export default Navbar;



