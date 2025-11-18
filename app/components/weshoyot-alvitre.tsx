import Image from "next/image";
import Paragraphs from "./paragraphs";

function WeshoyotAlvitre() {
  const paragraphs = [
    "Weshoyot Alvitre is a Tongva and Scottish comic book artist, writer and illustrator. She was born in the Santa Monica Mountains on the property of Satwiwa, a cultural center started by her father Art Alvitre. She grew up close to the land and raised with traditional knowledge that inspires the work she does today.",
    "Weshoyot has been working in the comics medium for over 15 years. Her work focuses on art and writing that visualizes historical material through an Indigenous lens. She has also contributed art response to contemporary Indigenous issues using pop-culture, sci-fi and archival research materials to spark conversations and re-frame colonial narratives.",
    "Her work has been featured in the anthologies of Moonshot Volumes 2 and 3, Deerwoman: An anthology, Imminent Cuisine the Zine, and Marvel Voices: Indigenous Voices. Alvitre has also received numerous awards for her childrens book illustrations in 'At The Mountains Base' (Kokila 2019) and 'Living Ghosts & Mischeivous Monsters' (Scholastic 2021).",
    "Alvitre’s current projects 'Toypurina: Our Lady of Sorrows' and 'Lone' focus on the re-telling of stories from her own tribal community, using historical fact, primary accounts and tribal knowledge to provide fuller representation of those from her Tongva history. Alvitre has made a conscious choice to work primarily within Native-owned publications and educational avenues, to further support a self-funded narrative on past, present and future native issues.  It is through this voice, and through her artwork, she feels she is able to communicate her unique viewpoint and continue a strong dialogue on issues that are important to her as a Native woman."
  ]

  return (
    <div className="flex flex-col mx-10 md:mx-30 md:mt-20 mt-10">
      <div className="flex flex-col md:flex-row md:mb-20 md:items-center before:flex-1 after:flex-1 mb-10">
        <div className="hidden md:flex flex-col justify-between md:mr-15 mt-5 md:mt-0 ">
          <div className="text-pink-300 text-3xl/loose md:text-7xl/loose italic text-center md:text-right">
            <p>Weshoyot</p>
            <p>Alvitre</p>
          </div>
          <div className="text-creme text-2xl/loose md:text-right text-center">
            <a className="underline italic" href="https://www.weshoyot.com" target="_blank" rel="noopener noreferrer">weshoyot.com</a>
          </div>
        </div>
        <div className="relative inline-block">
          <div className="hidden md:block absolute inset-0 rounded-4xl translate-x-4 translate-y-4 bg-red-300" />
          <Image
            src="/weshoyot.png"
            alt="Weshoyot Alvitre"
            width={381.75}
            height={444.75}
            className="relative rounded-4xl overflow-hidden bg-white"
          />
        </div>

        <div className="md:hidden text-pink-300 text-3xl/loose md:text-7xl/loose italic text-center md:text-right mt-5 md:mr-15">
          <div>
            <p>Weshoyot</p>
            <p>Alvitre</p>
          </div>
          <a className="text-creme underline italic text-2xl/loose" href="https://www.weshoyot.com" target="_blank" rel="noopener noreferrer">weshoyot.com</a>
        </div>
      </div>
      <div className="mb-10">
        <Paragraphs paragraphs={paragraphs} />
      </div>
    </div >
  );
}

export default WeshoyotAlvitre;