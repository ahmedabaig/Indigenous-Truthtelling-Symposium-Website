type ButtonProps = {
  borderColor: string;
  text: string;        
};

const Button: React.FC<ButtonProps> = ({ borderColor, text}) => {
  return (
    <div className={`flex items-center justify-center p-4 border-4 rounded-4xl sm:rounded-full w-1/3 sm:w-1/8 text-xl sm:text-2xl ${borderColor} bg-black-200`}>
        {text}
    </div>
  );
};

export default Button;