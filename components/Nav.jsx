'use client';


import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { path: "/", label: "home" },
  { path: "/services", label: "services" },
  { path: "/resume", label: "resume" },
  { path: "/work", label: "work" },
  { path: "/contact", label: "contact" },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {
        links.map((links, index) => {
            return <Link href={links.path} key={index}
            className={`${
                links.path === pathname && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent-hover transition-all`}
            >
                {links.label}
                </Link>
        })
      }
    </nav>
  );
};

export default Nav;
