import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

export default function Navbar() {
  const menu = [
    { name: "Tentang Pegadaian Digital", to: "#hero" },
    { name: "Keunggulan", to: "#superior" },
    { name: "Fitur", to: "#feature" },
    { name: "FAQ", to: "#faq" },
  ];

  // Handle Mobile Menu
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  // Handle Scroll Smooth
  const handleScroll = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu();
  };

  return (
    <header className="flex justify-center">
      <nav className="fixed z-20 w-full md:w-10/12 bg-white shadow-md rounded-b-none md:rounded-b-xl">
        <div className="flex flex-wrap items-center justify-between gap-6 py-3 md:py-5 md:gap-0 px-6 md:px-12">
          <div className="w-full flex justify-between lg:w-auto items-center">
            <img
              src="/images/sahabat-pegadaian.png"
              className="h-8 w-auto"
              alt="img"
            />
            <div className="lg:hidden" onClick={handleClick}>
              {click ? (
                <>
                  <FaTimes className="text-grey" />
                  <div className="absolute mt-5 right-0 px-8 py-8 bg-white w-full flex flex-col gap-3">
                    {menu.map((item, idx) => (
                      <ul key={idx} className="font-light text-md">
                        <a
                          href={item.to}
                          onClick={(e) => {
                            e.preventDefault();
                            handleScroll(item.to);
                          }}
                        >
                          <span>{item.name}</span>
                        </a>
                      </ul>
                    ))}
                  </div>
                </>
              ) : (
                <FaBars className="text-grey" />
              )}
            </div>
          </div>
          <div className=" hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none lg:border-0 gap-5">
            {menu.map((item, idx) => (
              <ul key={idx}>
                <a
                  href={item.to}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(item.to);
                  }}
                >
                  <span>{item.name}</span>
                </a>
              </ul>
            ))}
            <img
              src="/images/pegadaian-1.png"
              className="h-7 w-auto"
              alt="img"
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
