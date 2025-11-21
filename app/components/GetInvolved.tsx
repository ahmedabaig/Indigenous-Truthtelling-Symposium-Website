import Involved from "../data/Involved"
import Link
 from "next/link";
const GetInvolved = () => {
    return (
        <div className = "flex flex-col sm:flex-row flex-wrap w-screen items-center sm:items-stretch justify-center gap-6">
            <div className = "flex flex-col text-center bg-pink-300 w-2/3 sm:w-1/3 rounded-3xl p-4">
                <p className="font-bold text-xl sm:text-2xl text-white">Activate: Current Campaigns</p>
                {Involved.slice(0,5).map((item, index) => (
                    <Link key={index} href={item.href}>
                        <p className="pt-2 hover:text-yellow-300 text-l sm:text-xl text-white"> {item.name}</p>
                    </Link>
                ))}
            </div>
             <div className = "flex flex-col text-center bg-green-300 w-2/3 sm:w-1/3  rounded-3xl p-4">
                <p className="font-bold text-xl sm:text-2xl text-white">Agitate: Palestinian Movement </p>
                {Involved.slice(5,12).map((item, index) => (
                    <Link key={index} href={item.href}>
                        <p className="pt-2 hover:text-yellow-300 text-l sm:text-xl text-white"> {item.name}</p>
                    </Link>
                ))}
            </div>
            <div className = "flex flex-col text-center bg-pink-300 sm:bg-green-300 w-2/3 sm:w-1/3  rounded-3xl p-4">
                <p className="font-bold text-xl sm:text-2xl text-white">Agitate: Indigenous Movement </p>
                {Involved.slice(12,16).map((item, index) => (
                    <Link key={index} href={item.href}>
                        <p className="pt-2 hover:text-yellow-300 text-l sm:text-xl text-white"> {item.name}</p>
                    </Link>
                ))}
            </div>
            <div className = "flex flex-col text-center bg-green-300 sm:bg-pink-300 w-2/3 sm:w-1/3  rounded-3xl p-4">
                <p className="font-bold text-xl sm:text-2xl text-white">Against Sophicide: Pedagogical Resources </p>
                {Involved.slice(16).map((item, index) => (
                    <Link key={index} href={item.href}>
                        <p className="pt-2 hover:text-yellow-300 text-l sm:text-xl text-white"> {item.name}</p>
                    </Link>
                ))}
            </div>
        </div>

    );
}
export default GetInvolved;