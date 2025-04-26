import React from "react";

import { Shadows_Into_Light } from "next/font/google";

const shadows = Shadows_Into_Light({
  variable: "--font-shadows-into-light",
  weight: "400",
  subsets: ["latin"],
});

const Logo = ({
  color,
  spanColor,
  borderColor,
  size
}: {
  color: string;
  borderColor: string;
    spanColor: string;
  size?: string
}) => {
  return (
    <h2
      className={` ${shadows.className} uppercase text-xl md:text-4xl`}
      style={{ color: `${color.includes("#") ? color : `#${color}`}`, fontSize: size }}
    >
      Preper
      <span
        className="text-[#8F87F1] font-extrabold"
        style={{
          color: `${spanColor.includes("#") ? spanColor : `#${spanColor}`}`,
          textShadow: `-1px 0 ${borderColor}, 0 1px ${borderColor}, 1px 0 ${borderColor}, 0 -1px ${borderColor}`,
        }}
      >
        s
      </span>
    </h2>
  );
};

export default Logo;
