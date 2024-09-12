"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "works", path: "/works" },
  { name: "contact", path: "/contact" },
];

const Nav = () => {
  const pathname = usePathname();
  
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link 
          key={index}
          href={link.path}
          className={`capitalize font-medium hover:text-indigo-400 transition-all ${pathname === link.path ? "text-indigo-400 border-b-2 border-indigo-400" : ""}`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
