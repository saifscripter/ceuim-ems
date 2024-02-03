import LinkButton from "../shared/buttons/LinkButton";
import Clock from "./Clock";

const mobile = "01712345678";

export default function TopBar() {
  return (
    <div className="w-full h-nav bg-primary text-white hidden lg:block">
      <div className="container mx-auto px-4 h-full grid grid-cols-3 items-center">
        <p>Hotline: {mobile}</p>

        <Clock />

        <div className="flex justify-end">
          <LinkButton href="/dashboard" className="border-2 border-white">
            Dashboard
          </LinkButton>
        </div>
      </div>
    </div>
  );
}
