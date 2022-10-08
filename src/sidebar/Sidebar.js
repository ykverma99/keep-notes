import React, { useContext, useState } from "react";
import Menu from "../components/Menu";
import { BiBulb, BiBell, BiArchiveIn } from "react-icons/bi";
import { RiDeleteBin6Line, RiPencilLine } from "react-icons/ri";
import { GlobalContext } from "../context/GlobalContext";

const Sidebar = () => {
  const [notes, setnotes] = useState(true);
  const [Reminder, setReminder] = useState(false);
  const [label, setlabel] = useState(false);
  const [archive, setarchive] = useState(false);
  const [bin, setbin] = useState(false);

  // context state

  const { togglemenu } = useContext(GlobalContext);

  // state function
  const noteClick = () => {
    setnotes(true);
    setReminder(false);
    setarchive(false);
    setbin(false);
    setlabel(false);
  };
  const reminderClick = () => {
    setnotes(false);
    setReminder(true);
    setarchive(false);
    setbin(false);
    setlabel(false);
  };
  const labelClick = () => {
    setnotes(false);
    setReminder(false);
    setarchive(false);
    setbin(false);
    setlabel(true);
  };
  const archiveClick = () => {
    setnotes(false);
    setReminder(false);
    setarchive(true);
    setbin(false);
    setlabel(false);
  };
  const binClik = () => {
    setnotes(false);
    setReminder(false);
    setarchive(false);
    setbin(true);
    setlabel(false);
  };
  return (
    <aside className={`py-5 fixed h-screen bg-white -z-30 ${!togglemenu ? "w-72" : "px-5 w-24"}`}>
      <Menu
        onClick={noteClick}
        className={
          togglemenu
            ? "rounded-full px-3 justify-center"
            : "rounded-r-full items-center px-8 gap-6"
        }
        active={notes}
        img={<BiBulb color="#616161" size={23} />}
        name={!togglemenu && "Notes"}
      />
      <Menu
        onClick={reminderClick}
        className={
          togglemenu
            ? "rounded-full px-3 justify-center"
            : "rounded-r-full items-center px-8 gap-6"
        }
        img={<BiBell color="#616161" size={23} />}
        name={!togglemenu && "Remainders"}
        active={Reminder}
      />
      <Menu
        onClick={labelClick}
        className={
          togglemenu
            ? "rounded-full px-3 justify-center"
            : "rounded-r-full items-center px-8 gap-6"
        }
        img={<RiPencilLine color="#616161" size={23} />}
        name={!togglemenu && "Edit labels"}
        active={label}
      />
      <Menu
        onClick={archiveClick}
        className={
          togglemenu
            ? "rounded-full px-3 justify-center"
            : "rounded-r-full items-center px-8 gap-6"
        }
        active={archive}
        img={<BiArchiveIn color="#616161" size={23} />}
        name={!togglemenu && "Archive"}
      />
      <Menu
        onClick={binClik}
        className={
          togglemenu
            ? "rounded-full px-3 justify-center"
            : "rounded-r-full items-center px-8 gap-6"
        }
        active={bin}
        img={<RiDeleteBin6Line color="#616161" size={23} />}
        name={!togglemenu && "Bin"}
      />
    </aside>
  );
};

export default Sidebar;
