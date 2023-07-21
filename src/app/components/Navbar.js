"use client";

import Link from "next/link";
import React, { useState } from "react";
import logo from "../../../public/img/logo1.png";

import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
const Navbar = () => {
  const [open, sehrefpen] = useState(false);
  const hrefggleNav = () => {
    sehrefpen(!open);
  };
  return (
    <nav className="bg-emerald-500 flex justify-between  md:p-3 p-7  ">
      <div className="flex gap-5 ">
        <ul className="flex absolute">
          <li className=" pb-5 relative bottom-6  right-5">
            <Link href={"/"}>
              <Image
                src={logo}
                alt="Picture of the author"
                width={100}
                height={40}
              />
            </Link>
          </li>
          {/* <li className="md:btn md:btn-ghost md:mt-3 mt-2 ">
            <Link href={"/"}>
              <h2 className=" text-white  text-font-bold md:block pl-7">Movie house</h2>
            </Link>
          </li> */}
        </ul>
      </div>
      {/* for computer  */}
      <div className="hidden md:block mt-2 px-3">
        <ul className="flex gap-5 font-bold text-white ">
          <li className="btn btn-ghost">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="btn btn-ghost">
            <Link href={"/about"}>About</Link>
          </li>
          <li className="btn btn-ghost">
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
      {/* for mobile  */}

      <div onClick={hrefggleNav} className="md:hidden mt-4 pr-2 ">
        {open ? <FaTimes /> : <FaBars />}
      </div>
      {open && (
        <div className="absolute left-0 top-0 w-[255px] h-full bg-emerald-500 p-4 md:hidden z-30">
          <div className="px-10 ">
            <div className="py-0">
              <Link href={"/"}>
                <Image
                  src={logo}
                  alt="Picture of the author"
                  width={150}
                  height={70}
                />
              </Link>
            </div>
            <ul className=" gap-10 font-bold px-8 text-white ">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li className="py-5">
                <Link href={"/about"}>About</Link>
              </li>
              <li>
                <Link href={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
