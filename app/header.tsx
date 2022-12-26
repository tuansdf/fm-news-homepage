"use client";

import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import iconClose from "/public/icon-menu-close.svg";
import iconMenu from "/public/icon-menu.svg";
import logo from "/public/logo.svg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="mx-auto flex max-w-sm items-center justify-between p-8 xl:relative xl:max-w-screen-xl">
        <Image src={logo} alt="" className="w-12" />
        <button onClick={openMenu} className="xl:hidden">
          <Image src={iconMenu} alt="" className="w-12" />
        </button>
        <div
          className={clsx(
            { hidden: !menuOpen },
            "absolute right-0 top-0 bottom-0 z-20 flex w-96 items-center bg-white p-8 text-start xl:relative xl:z-auto xl:block xl:w-auto xl:p-0"
          )}
        >
          <ul className="mb-60 flex flex-col gap-8 text-2xl xl:mb-0 xl:flex-row xl:items-center xl:gap-12 xl:text-base xl:text-gray-500">
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categories</li>
          </ul>

          <button
            onClick={closeMenu}
            className="absolute top-0 right-0 m-8 xl:hidden"
          >
            <Image src={iconClose} alt="" />
          </button>
        </div>
      </nav>

      {menuOpen ? (
        <div
          onClick={closeMenu}
          className="absolute inset-0 z-10 bg-black/50 xl:hidden"
        ></div>
      ) : null}
    </>
  );
}
