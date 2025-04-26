import React from "react";

const Logo = ({ color, spanColor, borderColor }: { color: string; borderColor: string; spanColor: string }) => {
  return (
    <h2
      className={`uppercase text-xl md:text-4xl`}
      style={{ color: `${color.includes("#")? color : `#${color}`}` }}
    >
      Preper
      <span
        className="text-[#8F87F1] font-extrabold"
        style={{
          color: `${spanColor.includes("#")? spanColor : `#${spanColor}`}`,
          textShadow: `-1px 0 ${borderColor}, 0 1px ${borderColor}, 1px 0 ${borderColor}, 0 -1px ${borderColor}`,
        }}
      >
        s
      </span>
    </h2>
  );
};

export default Logo;
