import React from "react";
import IMG from "../assets/image-header-desktop.jpg";
function Header() {
  return (
    <header className="w-full md:w-1/2 bg-violet rounded-t-md md:rounded-tr-md md:rounded-br-md">
      <img
        role="presentation"
        src={IMG}
        alt=""
        className="w-full h-full opacity-75 mix-blend-multiply object-cover object-left-top bg-pink content-[url('/src/assets/image-header-mobile.jpg')] md:content-[url('/src/assets/image-header-desktop.jpg')]"
      />
    </header>
  );
}

export default Header;
