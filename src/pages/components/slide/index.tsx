import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import img1 from "../../../assets/img/img1.jpg";
import img2 from "../../../assets/img/img2.jpg";
import img3 from "../../../assets/img/img3.jpg";
import img4 from "../../../assets/img/img4.jpg";

const Slide = () => {
  const handleClickLeft = (): void => {
    const listSlide = document.querySelector(".list-slide");
    const items = document.querySelectorAll(".item-slide");
    listSlide?.append(items[0]);
  };

  const handleClickRight = (): void => {
    const listSlide = document.querySelector(".list-slide");
    const items = document.querySelectorAll(".item-slide");
    listSlide?.prepend(items[items.length - 1]);
  };
  return (
    <div className="relative slide_discover">
      <div className="overflow-hidden flex gap-[2.3%] list-slide select-none">
        <Image
          src={img1}
          alt="img"
          priority
          className="w-[32%] rounded-md item-slide transition-all"
        ></Image>
        <Image
          src={img2}
          alt="img"
          priority
          className="w-[32%]  rounded-md item-slide transition-all"
        ></Image>
        <Image
          src={img3}
          alt="img"
          priority
          className="w-[32%] rounded-md item-slide transition-all"
        ></Image>
        <Image
          src={img4}
          alt="img"
          priority
          className="w-[31%] rounded-md item-slide transition-all"
        ></Image>
      </div>
      <div
        className="absolute items-center justify-center -translate-y-1/2 rounded-full cursor-pointer btn-left bg-lightGray left-2 top-1/2 w-14 h-14"
        onClick={handleClickLeft}
      >
        <AiOutlineLeft className="text-xl text-white" />
      </div>
      <div
        className="absolute items-center justify-center -translate-y-1/2 rounded-full cursor-pointer btn-right bg-lightGray right-2 top-1/2 w-14 h-14"
        onClick={handleClickRight}
      >
        <AiOutlineRight className="text-xl text-white" />
      </div>
    </div>
  );
};

export default Slide;
