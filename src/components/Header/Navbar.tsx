import { leftMenu, rightMenu } from "@/data/menu";
import Logo from "./Logo";
import Navlink from "./Navlink";
import Sidebar from "./Sidebar";

export default function Navbar() {
  return (
    <>
      <div className="w-full h-nav bg-white text-black sticky top-0 z-10">
        <nav className="container h-full flex justify-between items-center">
          <div className="gap-6 items-center flex-1 hidden lg:flex">
            {leftMenu.map(({ text, href }) => (
              <Navlink href={href} text={text} key={href} />
            ))}
          </div>

          <Logo />

          <div className="gap-6 justify-end items-center flex-1 hidden lg:flex">
            {rightMenu.map(({ text, href }) => (
              <Navlink href={href} text={text} key={href} />
            ))}
          </div>

          <Sidebar />
        </nav>
      </div>
    </>
  );
}
