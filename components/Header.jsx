import Link from 'next/link';
import React from 'react';
import Nav from './Nav';
import { Button } from './ui/button';
import MobileNav from './MobileNav';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="px-8 xl:mx-32 xl:py-7 text-white bg-transparent mx-2 max-sm:overflow-x-hidden">
      <div className="container xl:mx-auto ml-0 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image src="/images/hlogo.png" alt="logo" width={60} height={60} className="object-contain p-2 " />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="max-sm:hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button className="px-5 uppercase duration-500 ease-in-out py-2 m-2 rounded-xl hover:bg-indigo-950 bg-accent">
              Hire Me
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="block xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
