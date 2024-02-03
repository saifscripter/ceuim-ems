import Logo from "./Logo";
import Navlink from "./Navlink";
import Sidebar from "./Sidebar";

const leftMenu = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Admission Info",
    href: "/admission-info",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Academic",
    href: "/academic",
  },
];

const rightMenu = [
  {
    text: "Contact Us",
    href: "/contact-us",
  },
  {
    text: "Gallery",
    href: "/gallery",
  },
  {
    text: "Blogs",
    href: "/blogs",
  },
  {
    text: "Other Information",
    href: "/other-information",
  },
];

export default function Navbar() {
  return (
    <div className="w-full h-nav bg-white text-black sticky top-0">
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

        <Sidebar leftMenu={leftMenu} rightMenu={rightMenu} />
      </nav>
    </div>
  );
}
