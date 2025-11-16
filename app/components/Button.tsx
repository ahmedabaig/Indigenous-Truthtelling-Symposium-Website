type ButtonProps = {
  borderColor: string;
  text: string;        
};

const Button: React.FC<ButtonProps> = ({ borderColor, text}) => {
  return (
    <div className ="flex w-1/2 h-screen items-center justify-center"> 
        <div className={`inline-block text-center p-4 border-4 rounded-full w-sm:w-1/8 text-xl sm:text-2xl ${borderColor} bg-black-200`}>
            {text}
        </div>
    </div>
  );
};

export default Button;