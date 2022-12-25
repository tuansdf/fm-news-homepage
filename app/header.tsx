import Image from "next/image";
import iconMenu from "/public/icon-menu.svg";
import logo from "/public/logo.svg";

export default function Header() {
  return (
    <nav className="flex items-center justify-between p-4 xl:p-8">
      <Image src={logo} alt="" className="w-12" />
      <Image src={iconMenu} alt="" className="w-12" />
    </nav>
  );
}
