import React from 'react';

const Navbar = () => {
  return (
    <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-auto  flex gap-2 p-2 rounded-2xl bg-[#3f3e3f] z-20">
      <div className="flex text-xs text-gray-100 justify-center items-center border border-[#464747] hover:border-[#b5ad72] rounded-2xl px-2">
        <img src='/logo.png' alt="Logo" className="w-10 h-10" />
      </div>
      <div className="flex text-xs text-gray-100 items-center justify-center border border-[#464747] hover:border-[#b5ad72] rounded-2xl px-2">
        Project
      </div>
      <div className="flex text-xs text-gray-100 items-center justify-center border border-[#464747] hover:border-[#b5ad72] rounded-2xl px-2">
        Pricing
      </div>
      <div className="flex text-xs text-gray-100 items-center justify-center border border-[#464747] hover:border-[#b5ad72] rounded-2xl px-2">
        Contact
      </div>
    </div>
  );
}

export default Navbar;
