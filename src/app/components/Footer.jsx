import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container px-12 flex justify-between">
        <Image src="/images/LoloLabs_Logo.png" width={220} height={150} alt="logo" className="h-[150px]" />
        <p className="text-slate-600 mt-10">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
