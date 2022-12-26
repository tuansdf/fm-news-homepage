import Image from "next/image";

interface IProps {
  mobileSrc: any;
  desktopSrc: any;
}

export default function ImageSwitch({ mobileSrc, desktopSrc }: IProps) {
  return (
    <div className="w-full">
      <Image
        src={mobileSrc}
        alt=""
        className="w-full xl:hidden"
        loading="eager"
      />
      <Image
        src={desktopSrc}
        alt=""
        className="hidden w-full xl:block"
        loading="eager"
      />
    </div>
  );
}
