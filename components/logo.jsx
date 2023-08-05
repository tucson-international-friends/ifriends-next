import Image from "next/image";
import React from "react";
import logo from "../public/logos/logo.png";

const Logo = ({ size, className }) => {
  let logoSize = 2;
  if (size === "sm" || size === "small" || size === 1) {
    logoSize = 1.5;
  }
  return (
    <div
      className={className}
      style={{
        height: logoSize + "em",
        width: logoSize * 6 + "em",
        position: "relative",
      }}
    >
      <Image src={logo} alt="logo" layout="fill" objectFit="contain" />
    </div>
  );
};

export default Logo;
