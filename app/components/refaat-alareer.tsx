import Image from "next/image";
import Paragraphs from "./paragraphs";

function RefaatAlareer() {
  const refaatParagraphs = [
    "Refaat Alareer was our mentor and big brother. He was always there for us, whether it was traching us a class, treating us to dessert, writing us a recommendation letter, offering us a free creative writing course, or encouraging us to be the best versions of ourselves. \"You have a story that deserves to be told,\" he would remind us. Sometimes, he encouraged us to be critical, even of our own beliefs. He felt triumph when we chose Shylock over Antonio in The Merchant of Venice.",
    "While in Gaza, Refaat trained hundreds of young writers in storytelling. In 2013, he edited Gaza Writes Back. Refaat was proud to include the voices of fifteen young people in the collection, twelve of whom were women. When asked how he defined \"young,\" he told his publisher and long-time friend, Helena Cobban, \"My age or younger.\" Refaat's dark sense of humor meant that we would always laugh and learn when we were with him.",
    "Refaat was young when he began his teaching career at age 23 as a teaching assistant at the Islamic University of Gaza. He edited Gaza Writes Back at the age of 33. He became a grandfather at 44, but he didn't live long enough to see his first grandchild, Abdulrahman. Israel murdered Refaat two months prior to the birth of Abdulrahman, on December 6, 2023. Refaat wrote If I Must Die for his daughter, Shaymaa, who inspired him to edit Gaza Writes Back too. Israel also murdered Shaymaa, her son Abdulrahman, and her husband in April 2024.",
    "Refaat first wrote the poem If I Must Die in November 2011 and pinned it to his X account in November 2023 when smear campaigns against him began, led by people like Bari Weiss. The poem speaks to all of us, serving as Refaat's will to his daughter, who has also passed away. It is a call to action, urging us to tell Refaat's story and continue discussing Gaza and Palestine. Refaat's story is Gaza's story. It is everyone's responsibility to share it and turn it into an immortal tale of a people's quest for freedom.",
    "Today, Refaat's legacy lives on through his students — an army of young writers who continue to tell Gaza's story. Hundreds of his students have become writers, professionals, and academics around the world. Whenever I speak about Gaza, someone who knew Refaat or took a class with him is usually in the audience. I have never come across a poem as globally famous as \"If I Must Die.\" With 250 translations and millions of readers, it has become the most famous poem of the 21st century.",
    "Here is Refaat again, \"rising above others,\" as someone who wrote a review of Gaza Writes Back once described him. Refaat would joke about \"rising above others\" with me and Rawan when we toured the U.S. in 2014 to discuss the book. I can't think of a better way to describe the reaction to the poem after Refaat was murdered by an Israeli missile that also killed his brother, sister, and four nephews and nieces, Refaat's rising above people who wanted him dead.",
    "Refaat loved Malcolm X and would often quote him. Like Malcolm X, Refaat was our prince, Gaza's prince par excellence. He loved his homeland more than anyone else, staying in Gaza to tell its tale. The tales of Gaza and Refaat merged into one: a tale of legacy, love, and resistance against a brutal, genocidal war that aimed to erase Gaza and Refaat. But the opposite happened. Gaza became a symbol of global resistance against tyranny, and Refaat became an immortal figure who refuses to be silenced."
  ];

  return (
    <div id="refaat-alareer" className="flex flex-col mx-10 md:mx-30 md:mt-20 mt-10 items-center mb-20">
      <h3 className="text-green-300 italic text-4xl/relaxed md:text-7xl/relaxed mb-10">Refaat Alareer: The Legacy of Gaza&apos;s Grand Storytellers</h3>
      <div className="relative mb-20">
        <Image
          src="/image1.png"
          alt="Refaat Alareer"
          width={1594}
          height={1074}
          className="relative rounded-4xl overflow-hidden md:w-[977] md:h-[658] object-cover z-1"
        />
        <div className="hidden md:block absolute inset-0 rounded-4xl -translate-x-4 translate-y-4 bg-green-300" />
      </div>
      <div className="mb-10 md:mb-20 mb:mt-20">
        <Paragraphs paragraphs={refaatParagraphs} />
      </div>
      <div className="flex flex-col font-bold italic text-green-300 text-center text-2xl/loose mb-10 md:mb-20">
        <p>If I must die,</p>
        <p>You must live</p>
        <p>To tell my story</p>
      </div>
      <p className="italic text-2xl/loose text-white">A student of Refaat and the editor of If I Must Die: Poetry and Prose</p>
    </div>
  );
}

export default RefaatAlareer;