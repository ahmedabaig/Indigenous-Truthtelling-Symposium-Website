import Image from "next/image";
import DownloadImage from "../download-image";

function ShireenAbuAkleh() {
  return (
    <div className="flex flex-col mb-16">
      <h3 className="italic font-extrabold text-center text-7xl text-creme mb-6">Shireen Abu Akleh</h3>
        <p className="text-center text-3xl/relaxed text-creme mb-12">Before her horrific murder at the hands of the Israeli military, Shireen was among Palestine’s greatest advocates and storytellers. Palestinian journalists show unmatched courage in confronting a genocidal army to give voice to that military’s victims. Shireen’s image is made up of the other 244 + Palestinian journalists who have lost their lives in the genocide.</p>
      <DownloadImage fileName="MainBefore.jpg" downloadLink="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/396e9/MainBefore.jpg">
        <Image
          src="/shireen1.png"
          alt="Shireen Abu Akleh"
          width={727}
          height={549}
        />
      </DownloadImage>
    </div>
  );
}
export default ShireenAbuAkleh;