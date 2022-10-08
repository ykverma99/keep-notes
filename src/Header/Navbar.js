import React, { useContext, useState } from "react";
import { IoIosMenu, IoMdSettings, IoIosRefresh } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import Logo from "../components/Logo";
import { TbLayoutGrid } from "react-icons/tb";
import { CgDisplayFlex, CgMenuGridO } from "react-icons/cg";

import Icons from "../components/Icons";
import { GlobalContext } from "../context/GlobalContext";

const Navbar = () => {
  const [refresh, setrefresh] = useState(false);
  const [grid, setgrid] = useState(false);
  const [setting, setsetting] = useState(false);
  const [app, setApp] = useState(false);
  const { settogglemenu, togglemenu } = useContext(GlobalContext);

  return (
    <nav
      onSc
      className="px-6 flex justify-between sticky top-0 shadow-lg bg-white items-center"
    >
      <div className="flex items-center  space-x-14">
        <div className="flex items-center gap-4">
          <div
            onClick={() => settogglemenu((prevstate) => !prevstate)}
            className={`p-1.5 cursor-pointer ${
              togglemenu ? "bg-slate-200 rounded-full" : ""
            }`}
          >
            <IoIosMenu size={27} />
          </div>
          <Logo />
        </div>
        <div className="flex items-center h-12 w-input py-1 gap-3 px-2 bg-gray-200 outline-none border-0 rounded-lg">
          <AiOutlineSearch />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent placeholder:text-gray-500"
          />
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center space-x-2">
          <Icons
            onMouseEnter={() => setrefresh(true)}
            onMouseLeave={() => setrefresh(false)}
            hover={refresh}
            content={"Refresh"}
            img={
              <IoIosRefresh size={20} color={refresh ? "black" : "#616161"} />
            }
          />
          <Icons
            onMouseEnter={() => setgrid(true)}
            onMouseLeave={() => setgrid(false)}
            hover={grid}
            content={"List view"}
            img={<TbLayoutGrid size={23} color={grid ? "black" : "#616161"} />}
          />
          <Icons
            onMouseEnter={() => setsetting(true)}
            onMouseLeave={() => setsetting(false)}
            hover={setting}
            content={"Setting"}
            img={
              <IoMdSettings size={23} color={setting ? "black" : "#616161"} />
            }
          />
        </div>
        <div className="flex items-center space-x-2">
          <Icons
            onMouseEnter={() => setApp(true)}
            onMouseLeave={() => setApp(false)}
            hover={app}
            content={"Google apps"}
            img={<CgMenuGridO size={22} color={app ? "black" : "#616161"} />}
          />
          <div className="bg-pink-500 h-7 w-7 flex justify-center items-center text-sm text-white font-extrabold  rounded-full">
            Y
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
