type ButtonProps = {
  className?: string;
  borderColor: string;
  text: string;
  onClick?: () => void; 
};

const Button: React.FC<ButtonProps> = ({ borderColor, text, onClick, className="" }) => {
  return (
    <div onClick={onClick} className={`cursor-pointer text-white italic inline-block text-center p-4 border-4 rounded-full w-sm:w-1/8 text-xl sm:text-2xl ${borderColor} bg-black-200 ${className}`}>
      {text}
    </div>
  );
};

export default Button;