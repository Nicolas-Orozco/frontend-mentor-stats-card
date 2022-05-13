import React from "react";

function Header() {
  return (
    <header className="w-full md:w-1/2">
      <img
        role="presentation"
        className="w-full h-full rounded-t-md md:rounded-tr-md md:rounded-br-md object-cover object-left-top bg-pink content-[url('/src/assets/image-header-mobile.jpg')] md:content-[url('/src/assets/image-header-desktop.jpg')]"
      />
    </header>
  );
}

export default Header;
