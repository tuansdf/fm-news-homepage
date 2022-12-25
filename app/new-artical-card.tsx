interface IProps {
  title: string;
  subtitle: string;
}

export default function NewArticalCard({ title, subtitle }: IProps) {
  return (
    <div className="space-y-2">
      <h3 className="text-2xl font-bold xl:text-xl">{title}</h3>
      <p className="text-lg text-gray-400 xl:text-base">{subtitle}</p>
    </div>
  );
}
