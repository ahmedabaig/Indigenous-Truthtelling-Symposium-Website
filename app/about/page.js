import AboutBox from "../components/AboutBox";
import MoreCard from "../components/MoreCard";

const Page = () => {

  return (
    <div className = "flex flex-col w-screen h-1/2 items-center justify-center gap-16 pt-40 pb-40">
        <div className = "text-white text-6xl italic sm:text-8xl ">
            About Us
        </div>
        <AboutBox bgColor="bg-green-300" description="We are a collective of educators, students, activists, and organizers who seek to uplift the voice of the marginalized and commemorate those who colonization seeks to erase." />
        <AboutBox bgColor="bg-pink-300" description= "The Indigenous Truthtelling Project was initiated by a group of faculty, students, Native American/Indigenous and Palestinian artists and Palestinian alumni working together on an art-based education project to deepen our understanding of intertwined histories of colonization. Illuminating the power of Indigenous storytelling and art from Turtle Island to Gaza."/>
        <AboutBox bgColor="bg-yellow-300" description= "Our launch event on December 2, 2025 will be a one-day symposium with roundtables and panels of scholars, artists, writers and human rights and advocates from across California and the U.S. who will discuss the significance of the exhibit."/>
        <div className = "text-white text-6xl italic sm:text-8xl ">
            Our Team 
        </div>
        <MoreCard 
            borderColor= "border-yellow-300" 
            names={[
                "Shaheen Nassar",
                "Mark Minch De Leon",
                "Rana Sharif",
                "Setsu Shigematsu",
                "Jenna Wilson"
            ]}
        />
    </div>
  );
 
};

export default Page;