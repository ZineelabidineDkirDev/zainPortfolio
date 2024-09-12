import Link from 'next/link'
import React from 'react'
import Nav from './Nav'
import { Button } from './ui/button'
import MobileNav from './MobileNav'
import Image from 'next/image'


const Header = () => {
  return (<hedear className="px-8 xl:mx-32 xl:py-12 text-white">
     <div className="container mx-auto flex justify-between items-center">
      <Link href="/">
      <Image src="/images/hlogo.png" width={60} height={60} 
                className="object-contain p-2"/>
      </Link>
      <div className="sm:hidden xl:flex items-center gap-8">
        <Nav />
        <Link href="/contact">
          <Button className="px-5 uppercase duration-500 ease-in-out py-2 m-2 rounded-xl hover:bg-indigo-950 bg-accent">Hire Me</Button>
        </Link>
      </div>

      <div className="xl:hidden">
        <MobileNav />
      </div>
     </div>
  </hedear>
  )
  
}

export default Header