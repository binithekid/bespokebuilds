import Checkatrade from "../../public/checkatradelogo.png";
import NPTA from "../../public/nptalogo.jpeg";
import Safe from "../../public/safecontrcatorlogo.png";
import Satisfaction from "../../public/satsfactionlogo.png";
import Image from "next/image";

const Badges = () => {
  return (
    <div className="w-full hidden bg-white md:flex py-10 items-center justify-center gap-[3rem] flex-row">
      <Image
        src={Checkatrade}
        alt="checkatrade"
        className="w-[15rem] object-cover"
      />
      <Image src={NPTA} alt="NPTA" className="w-[10rem] object-cover" />
      <Image src={Safe} alt="Safe" className="w-[6rem] object-cover" />
      <Image
        src={Satisfaction}
        alt="Satisfaction"
        className="w-[7rem] object-cover"
      />
    </div>
  );
};

export default Badges;
