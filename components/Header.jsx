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
      className={`fixed top-0 left-0 xl:w-full max-sm:hidden xl:flex items-center gap-8 px-6 xl:py-5 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-accent text-white shadow-md' : 'bg-transparent text-white'
      }`}
    >
      <div className="container xl:mx-auto ml-0 flex justify-between items-center mx-40">
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
