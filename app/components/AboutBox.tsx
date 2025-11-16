type AboutBoxProps = {
  bgColor: string;       
  description: string;   
};

const AboutBox: React.FC<AboutBoxProps>  = ({ bgColor, description }) => { 
    return ( 
    <div className = "flex items-center justify-center w-screen h-1/2">
        <div className = {`${bgColor} absolute opacity-50 w-full h-1/8 sm:h-1/6`}>

        </div>
        <div className={`relative p-4 pl-8 sm:p-12 text-white text-l w-3/4 sm:w-1/2 h-1/3 rounded-2xl flex items-center justify-center sm:text-2xl ${bgColor}`}> 
                {description} 
        </div> 
    </div>
    ); 
};

export default AboutBox;


