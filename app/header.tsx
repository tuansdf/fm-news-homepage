"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
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
      <nav className="mx-auto flex max-w-sm items-center justify-between py-8 xl:relative xl:max-w-screen-xl xl:px-8">
        <Link href="#">
          <Image src={logo} alt="" className="w-12 xl:w-16" />
        </Link>
        <button onClick={openMenu} className="xl:hidden">
          <Image src={iconMenu} alt="" className="w-12" />
        </button>
        <div
          className={clsx(
            { "-z-50 translate-x-full": !menuOpen, "translate-x-0": menuOpen },
            "absolute right-0 top-0 bottom-0 z-20 flex w-96 items-center bg-off-white p-8 text-start transition-transform xl:relative xl:right-0 xl:z-auto xl:block xl:w-auto xl:translate-x-0 xl:p-0"
          )}
        >
          <ul className="mb-72 flex w-full flex-col gap-8 text-2xl xl:mb-0 xl:flex-row xl:items-center xl:gap-12 xl:text-base xl:text-dark-grayish-blue">
            <li className="w-full cursor-pointer transition-colors duration-75 hover:text-soft-red">
              Home
            </li>
            <li className="w-full cursor-pointer transition-colors duration-75 hover:text-soft-red">
              New
            </li>
            <li className="w-full cursor-pointer transition-colors duration-75 hover:text-soft-red">
              Popular
            </li>
            <li className="w-full cursor-pointer transition-colors duration-75 hover:text-soft-red">
              Trending
            </li>
            <li className="w-full cursor-pointer transition-colors duration-75 hover:text-soft-red">
              Categories
            </li>
          </ul>

          <button
            onClick={closeMenu}
            className="absolute top-0 right-0 m-8 xl:hidden"
          >
            <Image src={iconClose} alt="" />
          </button>
        </div>
      </nav>

      <div
        onClick={closeMenu}
        className={clsx(
          { "-z-50 bg-black/0": !menuOpen, "bg-black/50": menuOpen },
          "absolute inset-0 transition-colors xl:hidden"
        )}
      ></div>
    </>
  );
}
