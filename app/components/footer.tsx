import Image from "next/image";
import Divider from "./divider";

function Footer() {
  return (
    <footer>
      <Image
        src="/footer.png"
        alt="Blossoming Under Seige by Mona Kadah"
        width={1564}
        height={1126}
        className="w-full h-auto opacity-34"
      />
      <Divider color1="#F37E6A" color2="#F1BE4B"></Divider>
      <div className="h-24 bg-black-200"></div>
    </footer>
  );
}

export default Footer;