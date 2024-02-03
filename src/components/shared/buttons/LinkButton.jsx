import cn from "@/lib/cn";
import Link from "next/link";

export default function LinkButton({
  href,
  className,
  children,
  ...restProps
}) {
  return (
    <Link
      href={href}
      className={cn(
        "px-4 py-2 bg-primary text-white hover:bg-black hover:border-black font-semibold inline-block",
        className
      )}
      restProps
    >
      {children}
    </Link>
  );
}
