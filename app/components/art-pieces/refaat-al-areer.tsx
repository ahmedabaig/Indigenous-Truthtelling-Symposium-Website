import Image from "next/image";
import DownloadImage from "../download-image";
import ArtPieces from "./art-pieces";

function RefaatAlAreer() {
  const paragraphs = [
    "Thousands of photographs of martyred educators, writers, artists and poets in Gaza murdered in the ongoing Israeli scholasticide comprise the image of martyred Shakespear scholar, writer, and poet, Dr Refaat Alareer, whose portrait has been reproduced with the permission of his wife."
  ];
  return (
    <ArtPieces name={"Refaat Al Areer"} paragraphs={paragraphs}>
      <DownloadImage fileName="refaat1.jpg" downloadPath="/raw-refaat1.jpg">
        <Image
          src="/refaat/refaat1.png"
          alt="Refaat Al Areer"
          width={1262}
          height={841}
        />
      </DownloadImage>
    </ArtPieces>
  )
}

export default RefaatAlAreer;