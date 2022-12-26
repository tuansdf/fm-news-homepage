import Image from "next/image";
import Link from "next/link";

interface IProps {
  imgSrc: any;
  title: string;
  subtitle: string;
  index: string;
}

export default function ArticalCard({
  imgSrc,
  title,
  subtitle,
  index,
}: IProps) {
  return (
    <div className="flex items-center gap-6">
      <Image src={imgSrc} alt="" className="w-28" />
      <div className="space-y-2">
        <span className="text-4xl font-bold text-grayish-blue">{index}</span>
        <Link href="#" className="block">
          <h3 className="text-xl font-bold text-very-dark-blue transition-colors duration-75 hover:text-soft-red">
            {title}
          </h3>
        </Link>
        <p className="text-dark-grayish-blue">{subtitle}</p>
      </div>
    </div>
  );
}
