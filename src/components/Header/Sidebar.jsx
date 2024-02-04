"use client";

import { leftMenu, rightMenu } from "@/data/menu";
import { useEffect, useRef, useState } from "react";
import { VscChromeClose, VscThreeBars } from "react-icons/vsc";
import Navlink from "./Navlink";

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const hideSidebar = () => setIsSidebarOpen(false);

    document.body.addEventListener("click", hideSidebar);
    sidebarRef.current.addEventListener("click", (e) => e.stopPropagation());

    return () => {
      document.body.removeEventListener("click", hideSidebar);
    };
  }, []);

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
        ref={sidebarRef}
      >
        {leftMenu.map(({ text, href }) => (
          <Navlink
            href={href}
            text={text}
            key={href}
            onClick={() => setIsSidebarOpen(false)}
          />
        ))}

        {rightMenu.map(({ text, href }) => (
          <Navlink
            href={href}
            text={text}
            key={href}
            onClick={() => setIsSidebarOpen(false)}
          />
        ))}
      </div>
    </div>
  );
}
