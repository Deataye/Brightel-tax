import React from "react";

const Navbar = () => {
  const links = ["Home", "About", "Services", "Resources", "Contact"];

  return (
    <nav className="fixed top-0 w-full bg-white  py-4 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold text-[#4338ca] text-accent">Brightel Tax</h1>
        <ul className="flex text-slate-700 space-x-6">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-accent transition"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
