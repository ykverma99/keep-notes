import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";
// import Menu from "./components/Menu";
import Navbar from "./Header/Navbar";
import Main from "./Main/Main";
import Sidebar from "./sidebar/Sidebar";

const App = () => {
  const {togglemenu} = useContext(GlobalContext)
  return (
    <div>
      <Navbar />
      <main className={`flex ${!togglemenu ? 'space-x-72': 'space-x-28'}`}>
        <Sidebar />
        <Main />
      </main>
    </div>
  );
};

export default App;
