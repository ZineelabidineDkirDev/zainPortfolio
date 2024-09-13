"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";


const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "works",
    path: "/works",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  
  return (
    <Sheet className="overflow-x-hidden">
  <SheetTrigger className="flex justify-center items-center">
    <CiMenuFries className="text-[32px] text-accent" />
  </SheetTrigger>
  <SheetContent className="fixed inset-0 z-50 flex flex-col justify-center items-center gap-8 bg-black bg-opacity-90">
    <div className="mt-2 mb-20 text-center text-2xl">
      <Link href="/">
        <Image src="/images/hlogo.png" width={60} height={60} alt="logo" className="object-contain" />
      </Link>
    </div>
    <nav className="flex flex-col justify-center items-center gap-8">
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`text-xl capitalize 
            transition-all ${pathname === link.path ? 'text-accent font-semibold border-b-2 pb-1 border-accent' : ''}`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  </SheetContent>
</Sheet>

  );
};

export default MobileNav;
