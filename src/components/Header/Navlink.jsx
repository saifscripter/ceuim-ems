"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navlink({ href, text, ...restProps }) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`hover:text-primary ${pathname === href && "text-primary"}`}
      {...restProps}
    >
      {text}
    </Link>
  );
}
