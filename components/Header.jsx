'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import { Button } from './ui/button';
import MobileNav from './MobileNav';
import Image from 'next/image';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`xl:fixed lg:items-center top-0 left-0 xl:w-full max-sm:w-full max-lg:w-full max-sm:py-11 xl:flex items-center gap-8 px-6 max-lg:py-7 xl:py-5 z-50 transition-colors duration-300 ${
        scrolled ? 'xl:bg-[#352093] xl:text-[#e7e2ff]  xl:py-1 transition-all duration-300 shadow-md' : 'bg-transparent text-white'
      }`}
    >
      <div className="container xl:mx-28 ml-0 max-lg:w-full  flex justify-between items-center lg:mx-10 mx-40 ">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/hlogo.png"
            alt="logo"
            width={60}
            height={60}
            className="object-contain p-2"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="max-sm:hidden xl:flex items-center gap-8 lg:flex md:flex lg:items-center">
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
