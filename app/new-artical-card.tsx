import Link from "next/link";

interface IProps {
  title: string;
  subtitle: string;
}

export default function NewArticalCard({ title, subtitle }: IProps) {
  return (
    <div className="space-y-2">
      <Link
        href="#"
        className="transition-colors duration-75 hover:text-soft-orange"
      >
        <h3 className="text-xl font-bold">{title}</h3>
      </Link>
      <p className="text-grayish-blue">{subtitle}</p>
    </div>
  );
}
