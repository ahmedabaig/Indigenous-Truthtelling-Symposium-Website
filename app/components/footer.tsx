import Image from "next/image";
import Divider from "./divider";

function Footer() {
  return (
    <footer>
      <Image
        src="/image2.webp"
        alt="Blossoming Under Seige by Mona Kadah"
        width={1544}
        height={1166}
        className="w-full h-auto opacity-34"
        draggable="false" 
      />
      <Divider color1="#F37E6A" color2="#F1BE4B"></Divider>
    </footer>
  );
}

export default Footer;