type MoreCardProps = {
  borderColor: string;   
  names: string[];       
};

const MoreCard: React.FC<MoreCardProps> = ({ borderColor, names }) => {
  return (
    <div className={`inline-flex flex-col items-center justify-center gap-2 p-4 border-8 pt-16 pb-16 sm:p-12 sm:pt-32 sm:pb-32 ${borderColor} bg-black-200`}>
      {names.map((name, i) => (
        <p key={i} className="text-white text-2xl sm:text-3xl">{name}</p>
      ))}
    </div>
  );
};

export default MoreCard;

