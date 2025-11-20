import Link from "next/link";
import GetInvolved from "../components/GetInvolved";

const Page = () => {

  return (
    <div className="flex flex-col w-screen items-center justify-center pb-20 sm:pb-40 gap-6 sm:gap-14">
        <div className = "text-yellow-300 text-2xl text-center italic sm:text-4xl ">
            Get Involved, Get Activated, Get Informed: 
        </div>
        <p className = "text-xl sm:text-2xl text-center w-2/3">We believe in the power of collective power. While the list below is by no means exhaustive, we hope it will inspire you to get involved, get activated, and get informed.</p>
        <GetInvolved/>

    </div>
  );
 
};

export default Page;