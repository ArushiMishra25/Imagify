import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="flex items-center justify-between gap py-3 mt-20">
      <img src={assets.logo} alt="" width={150} />

      <p className="flex-1 pl-4 text-center text-sm text-gray-500 max-sm:hidden">
        Copyright @Arushi.dev | All right reserved
      </p>

      <div className="flex gap-2.5">
        <img
          src={assets.facebook_icon}
          alt=""
          width={35}
          className="cursor-pointer"
        />
        <img
          src={assets.twitter_icon}
          alt=""
          width={35}
          className="cursor-pointer"
        />
        <img
          src={assets.instagram_icon}
          alt=""
          width={35}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Footer;
