import Image from "next/image";
import Paragraphs from "./paragraphs";

function MonaKadah() {
  const paragraphs = [
    "Mona Kadah is a Palestinian American watercolor artist with roots in traditional Damascene painting. Inspired-by California’s landscapes and her Palestinian cultural roots, Mona creates both vivid landscapes and abstract pieces centered on identity, beauty and memory. She has also been involved in community cultural work through the Dabkeh dance group Zaytouna in San Diego.",
    "Currently, she is developing new collections featuring abstract Arabic words and floral paintings from her garden, and architectural sites. Her work has earned numerous awards, including First Place at the 2025 Yucaipa Valley Art Association Spring & Art Festival, First Place at the Coachella Valley Watercolor Society (2021), and the Demonstrator’s Choice Award (2024). She was also juried into the 108th National Orange Show Art exhibit."
  ];

  return (
    <div className="flex flex-col mx-10 md:mx-30 md:mt-20 mt-15">
      <div className="flex flex-col md:flex-row md:mb-20 md:items-center before:flex-1 after:flex-1 mb-10">
        <div className="relative inline-block">
          <div className="hidden md:block absolute inset-0 rounded-4xl -translate-x-4 translate-y-4 bg-yellow-300" />
          <div className="relative rounded-4xl overflow-hidden bg-white">
            <Image
              src="/mona.png"
              alt="Mona Kadah"
              width={381.75}
              height={444.75}
            />
          </div>
        </div>
        <div className="flex flex-col justify-between md:ml-15 mt-5 md:mt-0 ">
          <div className="text-yellow-300 text-3xl/loose md:text-7xl/loose italic text-center md:text-left">
            <p>Mona</p>
            <p>Kadah</p>
          </div>
          <div className="text-creme text-2xl/loose md:text-left text-center">
            <a className="underline italic" href="https://monakadahart.com" target="_blank" rel="noopener noreferrer">monakadahart.com</a>
            <p>@monakadahart</p>
          </div>
        </div>
      </div>
      <div className="md:mb-20">
        <Paragraphs paragraphs={paragraphs} />
      </div>
    </div >
  );
}
export default MonaKadah;