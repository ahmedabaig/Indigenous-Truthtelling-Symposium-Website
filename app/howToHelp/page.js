import Link from "next/link";

const Page = () => {

  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center pt-112 sm:pt-122 pb-112 gap-14">
        <div className = "text-yellow-300 text-4xl italic sm:text-8xl ">
            What You Can Do
        </div>
        <div className = "flex flex-col w-4/6 pb-24 pt-24 gap-8 items-center justify-center bg-black-200 rounded-2xl">
            <Link href="https://bdsmovement.net/" className="text-pink-300 text-4xl italic sm:text-6xl ">
                BDS
            </Link>
            <Link href="https://www.boycat.io/" className="text-green-300 text-4xl italic sm:text-6xl ">
                Boycat App
            </Link>
            <Link href="https://palestinianfeministcollective.org/" className=" text-yellow-300 text-center text-4xl italic sm:text-6xl ">
                Palestinian Feminine Collective
            </Link>
        </div>
    </div>
  );
 
};

export default Page;