import Image from "next/image";
import LabeledImage from "./components/labeled-image";
import Divider from "./components/divider";
import RefaatAlareer from "./components/refaat-alareer";
import WeshoyotAlvitre from "./components/weshoyot-alvitre";
import MonaKadah from "./components/mona-kadah";
import Paragraphs from "./components/paragraphs";

export default function Home() {
  const paragraphs = [
    "Indigenous Truthtelling brings together past and ongoing legacies of resistance to colonialism to educate about Indigenous resistance movements - with distinct homelands, languages and cultures – including Indigenous residents of Turtle Island and the Palestinian shatat, diaspora, as well as their co-strugglers.",
    "Recognizing the ongoing anti-colonial struggles of Indigenous people around the world, we envision this as one step toward a shared liberated horizon.",
    "We hope that teachers, educators, students, laity, community members and people of conscience will share and educate others with these artistic pieces, poems and mosaics."
  ];

  return (
    <main className="text-center flex flex-col min-h-screen bg-background items-center pt-32 md:pt-36">
        <LabeledImage caption="Blooming Under Siege by Mona Kadah">
          <Image
            src="/image2.webp"
            alt="Blooming Under Siege by Mona Kadah"
            width={727}
            height={549}
          />
        </LabeledImage>
        <div className="mx-10 md:mx-15 my-15 md:my-20">
          <h2 className="text-yellow-300 italic text-4xl/relaxed mb-10 md:text-7xl/relaxed">Indigenous Truthtelling Project</h2>
          <p className="text-creme text-xl/relaxed font-semibold">Grounded in a commitment to Indigenous knowledge keeping, our project brings together movements in solidarity against colonial oppression, ethnic cleansing, scholasticide, and genocide. Engaging both virtual and physical landscapes, our project honors and memorializes Palestinian and Indigenous knowledge keepers – journalists, educators, writers, culture workers, and poets – those resisting and martyred in their Indigenous homelands.</p>
        </div>
        <LabeledImage caption="Poppies in Palestine, a series, by Monah Kadah">
          <Image
            src="/image4.png"
            alt="Poppies in Palestine, a series, by Monah Kadah"
            width={722}
            height={604}
          />
        </LabeledImage>
      </div>
      <h2 className="text-green-300 text-3xl/relaxed md:text-6xl/relaxed italic m-10 md:mx-30">About the Indigenous Truthtelling Project</h2>
      <Divider color1="#7B9F49"></Divider>
      <div className="my-12 md:my-24 mx-10 md:mx-30">
        <Paragraphs paragraphs={paragraphs}></Paragraphs>
      </div>
      <Divider color1="#7B9F49"></Divider>
      <MonaKadah />
      <WeshoyotAlvitre />
      <RefaatAlareer />
    </main>
  );
}
