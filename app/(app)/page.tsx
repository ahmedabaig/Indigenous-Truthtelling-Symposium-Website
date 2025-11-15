import Image from "next/image";
import LabeledImage from "../components/labeled-image";
import Divider from "../components/divider";
import RefaatAlareer from "../components/refaat-alareer";
import WeshoyotAlvitre from "../components/weshoyot-alvitre";
import MonaKadah from "../components/mona-kadah";

export default function Home() {
  return (
    <main className="text-center flex flex-col min-h-screen bg-background items-center">
      <p className=" m-30 mt-42 text-3xl/relaxed text-creme">An educational art project, providing resources to students, activists, educators and community. Promoting resilience, resistance, and support for indigenous communities.</p>
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
      <h2 className="text-green-300 text-5xl/relaxed italic mb-10">About the Indigenous Truthtelling Project</h2>
      <Divider color1="#7B9F49"></Divider>
      <div className="my-25 flex flex-col gap-10 text-left text-creme text-2xl/relaxed mx-30">
        <p>
          Indigenous Truthtelling Project brings together past and ongoing legacies of resistance to colonialism and a commitment to indigenous knowledge keepers.
        </p>
        <p>
          This project seeks to educate about indigenous resistance movements that may be separated by language and geography, but are united in their struggle in the face of colonial oppression, ethnic cleansing, genocide, scholasticide and other expressions of systemic racism.
        </p>
        <p>
          We have created sites of engagement for the public to use, to commemorate, honor, memorialize and mourn our heroic martyrs: journalists, educators, writers and poets.
        </p>
        <p>
          We honor their memory through various forms of creative expression, recognizing the ongoing struggles of indigenous people around the world, including indigenous residents of Turtle Island and the Palestinian shatat, diaspora, as well as their co-strugglers.
        </p>
        <p>
          We hope that teachers, educators, students, laity, community members and people of conscience will share and educate others with these artistic pieces, poems and mosaics.
        </p>
      </div>
      <Divider color1="#7B9F49"></Divider>
      <MonaKadah />
      <WeshoyotAlvitre />
      <RefaatAlareer />
    </main>
  );
}
