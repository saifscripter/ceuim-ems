import Image from "next/image";
import logo from "/public/images/logo.png";

export default function Logo() {
  return (
    <div className="size-16 rounded-full">
      <Image src={logo} alt="Logo" quality={100} className="rounded-full" />
    </div>
  );
}
