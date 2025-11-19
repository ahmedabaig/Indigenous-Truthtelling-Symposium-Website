import Team from "../data/Team"

const TeamBox = () => { 
    return ( 
        <div className="flex flex-col w-screen items-center justify-center gap-8">
            {Team.map((member, index) => (
                <div key={index} className="flex flex-col items-center w-full">
                    <div className="italic text-center p-4 border-4 border-b-2 rounded-full w-3/4 text-xl sm:text-2xl border-yellow-300 bg-black-200">
                        {member.name}
                    </div>
                    <div className= "p-4 border-4 border-t-2 border-yellow-300 bg-black-200 w-4/6 ">
                        {member.description}
                    </div>
                </div>
            ))}
        </div>
    ); 
};

export default TeamBox