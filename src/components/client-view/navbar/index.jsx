"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Link as LinkScroll, scroller } from "react-scroll";

const menuItems = [
  {
    id: "home",
    label: "Home",
  },
  {
    id: "about",
    label: "About",
  },
  {
    id: "experience",
    label: "Experience",
  },
  {
    id: "project",
    label: "projects",
  },
  {
    id: "contact",
    label: "Contact",
  },
];

function CreateMenus({ activeLink, getMenuItems, setActiveLink }) {
  return getMenuItems.map((item) => (
    <LinkScroll
      activeClass="active"
      to={item.id}
      spy={true}
      smooth={true}
      duration={1000}
      onSetActive={() => setActiveLink(item.id)}
      className={`px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative
    ${
      activeLink === item.id
        ? "text-orange-600 animation-active shadow-orange-600"
        : "text-black font-bold hover:text-orange-600"
    }
    `}
    >
      {item.label}
    </LinkScroll>
  ));
}

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.screenY > 20);
    });
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-30 bg-white transition-all ${
          scrollActive ? "shadow-md pt-0" : "pt-4"
        }`}
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <div className="cursor-pointer flex gap-2 font-bold items-center text-[20px] text-orange-600">
              <div className="w-[40px] h-[40px] flex justify-center items-center p-3 rounded-[8px] border-orange-600 bg-orange-600">
                <span className="text-white text-[25px] font-bold">N</span>
              </div>
              acil
            </div>
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black items-center">
            <CreateMenus
              setActiveLink={setActiveLink}
              activeLink={activeLink}
              getMenuItems={menuItems}
            />
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-center items-center">
            <Link
              href={
                "https://api.whatsapp.com/send?phone=+6281225568420&text=Halo!%20Saya%20ingin%20memesan%20program%20khusus.%20Bisakah%20Anda%20membantu%20saya%3F%0A%0ANama%20Project%3A%20[Nama%20Project]%0AJenis%20Program%3A%20[Joki%20/%20Project%20Program]%0ABahasa%20Pemrograman%3A%20[Pilih%20Bahasa%20Pemrograman]%0APesan%20Tambahan%3A%20[Isi%20Pesan%20Anda]%0A%0ATerima%20kasih%21"
              }
            >
              <button className="py-3 px-6 border-[2px] bg-white border-orange-600 text-black font-semibold rounded-lg text-xl tracking-widest shadow-md hover:shadow-orange-600 transition-all outline-none">
                Whatsapp
              </button>
            </Link>
          </div>
        </nav>
      </header>
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t">
        <div className="bg-white sm:px-3">
          <ul className="overflow-x-auto flex w-full justify-between items-center text-black">
            <CreateMenus
              setActiveLink={setActiveLink}
              activeLink={activeLink}
              getMenuItems={menuItems}
            />
          </ul>
        </div>
      </nav>
    </>
  );
}
