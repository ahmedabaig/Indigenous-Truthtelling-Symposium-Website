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
    <main className="text-center flex flex-col min-h-screen bg-background items-center">
      <p className="m-10 mt-30 pt-12 md:m-30 mt:mt-30 md:mt-24 md:pt-24 text-3xl/relaxed text-creme">An educational art project, providing resources to students, activists, educators and community. Promoting resilience, resistance, and support for indigenous communities.</p>
      <div className="flex w-full justify-around mb-20">
        <LabeledImage caption="Poppies in Palestine Series by Monah Kadah">
          <Image
            src="/image3.png"
            alt="Poppies in Palestine Series by Monah Kadah"
            width={727}
            height={549}
            className="w-[727px] h-[549px] object-cover" // Image maintains same aspect ratio.
          />
        </LabeledImage>
        <LabeledImage caption="Blossoming Under Seige by Mona Kadah">
          <Image
            src="/image2.webp"
            alt="Blossoming Under Seige by Mona Kadah"
            width={727}
            height={549}
            className="w-[727px] h-[549px] object-cover"
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
