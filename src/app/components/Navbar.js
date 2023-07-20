'use client'

import Link from 'next/link';
import React, { useState } from 'react';
import logo from '../../../public/img/logo1.png'



import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
const Navbar = () => {
  const [open , sehrefpen]=useState(false);
    const hrefggleNav=()=>{
        sehrefpen(!open)
    }
    return (
      <nav className="bg-emerald-500 flex justify-between ">
      <div className="flex gap-5 px-3">
         <Link href={'/'}>
         
       <Image src={logo}
      alt="Picture of the author"
      width={60}
      height={30}/>
         </Link>
         <h2 className="mt-4 font-bold">Tanvir</h2>
      </div>
      {/* for computer  */}
      <div className="hidden md:block mt-4 px-3">
         <ul className="flex gap-5 font-bold">
             <li>
                 <Link href={'/'}>
                 Home
                 </Link>
             </li>
             <li>
                 <Link href={'/about'}>
                 About
                 </Link>
             </li>
             <li>
                 <Link href={'/contact'}>
                 Contact
                 </Link>
             </li>
         </ul>
      </div>
      {/* for mobile  */}

      <div onClick={hrefggleNav} className="md:hidden mt-4 pr-2 ">
         {
             open ? <FaTimes /> : <FaBars />
         }

      </div>
      {
         open && 

         <div className="absolute w-[250px] h-full bg-green-500 p-5 md:hidden" >
                <div className='px-10 '>
                <div className='py-10'>
                <Link href={'/'}>
         
         <Image src={logo}
        alt="Picture of the author"
        width={150}
        height={50}/>
           </Link>
                </div>
                <ul className=" gap-5 font-bold px-2">
                        <li>
                            <Link href={'/'}>
                            Home
                            </Link>
                        </li>
                        <li>
                            <Link href={'/about'}>
                            About
                            </Link>
                        </li>
                        <li>
                            <Link href={'/contact'}>
                            Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                 </div>
      }

     
     </nav>
     
    );
};

export default Navbar;