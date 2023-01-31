import React from "react";
import facebook from "../../../img/facebook.svg";
import instagram from "../../../img/instagram.svg";
import twitter from "../../../img/twitter.svg";
import youtube from "../../../img/youtube.svg";

const IconsMenu = () => {
  return (
    <aside className="flex flex-col w-6 gap-6 absolute left-16 top-[250px]">
      <a href="#">
        <img src={facebook} alt="facebook" className="h-6" />
      </a>
      <a href="#">
        <img src={instagram} alt="instagram" />
      </a>
      <a href="#">
        <img src={twitter} alt="twitter" />
      </a>
      <a href="#">
        <img src={youtube} alt="youtube" />
      </a>
    </aside>
  );
};

export default IconsMenu;
