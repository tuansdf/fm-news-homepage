import Image from "next/image";

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
        <span className="text-4xl font-bold text-gray-300">{index}</span>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
}
