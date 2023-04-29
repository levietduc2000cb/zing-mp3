import React from "react";
import { Lilita_One } from "next/font/google";

const lilita = Lilita_One({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--lilita-font",
});

const Logo = () => {
  return (
    <div className="flex items-end gap-2">
      <div className={`text-4xl font-extrabold ${lilita.className}`}>
        <span className="text-[#009DDC] strokeText">Z</span>
        <span className="text-[#49A942] strokeText hidden md:inline">i</span>
        <span className="text-[#F47B20] strokeText hidden md:inline">n</span>
        <span className="text-[#EE2B74] strokeText hidden md:inline">g</span>
      </div>
      <div className="hidden text-xl text-white md:inline">mp3</div>
    </div>
  );
};

export default Logo;
