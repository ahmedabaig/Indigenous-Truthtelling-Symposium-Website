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
    <div className="flex flex-col mx-30">
      <div className="flex mb-30 items-center before:flex-1 after:flex-1 gap-15">
        <div className="text-red-300 text-7xl/loose italic text-right">
          <p>Weshoyot</p>
          <p>Alvitre</p>
        </div>
        <div className="relative inline-block">
          <div className="absolute inset-0 rounded-4xl translate-x-4 translate-y-4 bg-red-300" />
          <div className="relative rounded-4xl overflow-hidden bg-white">
            <Image
              src="/weshoyot.png"
              alt="Weshoyot Alvitre"
              width={381.75}
              height={444.75}
            />
          </div>
        </div>
      </div>
      <div className="mb-20">
        <Paragraphs paragraphs={paragraphs} />
      </div>
    </div >
  );
}

export default WeshoyotAlvitre;