import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {

  const [open, setOpen] = useState(false);


  const menuItems = [
    { name: "Home", link: "#" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Education", link: "#education" },
    { name: "Contact", link: "#contact" },
  ];


  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">


        {/* Logo */}
        <a
          href="#"
          className="text-xl font-bold transition hover:text-green-500"
        >
          <span className="text-green-600">
            S
          </span>
          W
        </a>



        {/* Desktop Menu */}
        <div className="hidden gap-8 text-sm text-zinc-400 md:flex">

          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="transition hover:text-green-500"
            >
              {item.name}
            </a>
          ))}

        </div>



        {/* Mobile Button */}
        <button
          className="text-2xl text-zinc-300 md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>


      </div>



      {/* Mobile Menu */}
      {open && (

        <div className="border-t border-zinc-800 bg-zinc-950 px-6 py-5 md:hidden">

          <div className="flex flex-col gap-5 text-zinc-400">

            {menuItems.map((item) => (

              <a
                key={item.name}
                href={item.link}
                onClick={() => setOpen(false)}
                className="transition hover:text-green-500"
              >
                {item.name}
              </a>

            ))}

          </div>

        </div>

      )}


    </nav>
  );
}

export default Navbar;