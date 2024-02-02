"use client";

import { useState } from "react";
import { VscChromeClose, VscThreeBars } from "react-icons/vsc";
import Navlink from "./Navlink";

export default function Sidebar({ leftMenu, rightMenu }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {isSidebarOpen ? (
        <VscChromeClose
          className="text-4xl lg:hidden"
          onClick={toggleSidebar}
        />
      ) : (
        <VscThreeBars className="text-4xl lg:hidden" onClick={toggleSidebar} />
      )}

      <div
        className={`bg-black text-white flex flex-col gap-6 absolute top-0 left-0 h-screen w-72 p-5  transition-transform duration-100 ease-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {leftMenu.map(({ text, href }) => (
          <Navlink href={href} text={text} key={href} />
        ))}

        {rightMenu.map(({ text, href }) => (
          <Navlink href={href} text={text} key={href} />
        ))}
      </div>
    </div>
  );
}
