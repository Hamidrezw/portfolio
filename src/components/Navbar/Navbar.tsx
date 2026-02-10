"use client";
import { MouseEvent } from "react";

const icons = [
  {
    href: "#",
    svg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 2C2.44772 2 2 2.44772 2 3V10C2 10.5523 2.44772 11 3 11H10C10.5523 11 11 10.5523 11 10V3C11 2.44772 10.5523 2 10 2H3ZM4 9V4H9V9H4Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14 2C13.4477 2 13 2.44772 13 3V10C13 10.5523 13.4477 11 14 11H21C21.5523 11 22 10.5523 22 10V3C22 2.44772 21.5523 2 21 2H14ZM15 9V4H20V9H15Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13 14C13 13.4477 13.4477 13 14 13H21C21.5523 13 22 13.4477 22 14V21C22 21.5523 21.5523 22 21 22H14C13.4477 22 13 21.5523 13 21V14ZM15 15V20H20V15H15Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 13C2.44772 13 2 13.4477 2 14V21C2 21.5523 2.44772 22 3 22H10C10.5523 22 11 21.5523 11 21V14C11 13.4477 10.5523 13 10 13H3ZM4 20V15H9V20H4Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    href: "#AboutMe",
    svg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2ZM9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7Z"
          fill="currentColor"
        />
        <path
          d="M8 14C6.67392 14 5.40215 14.5268 4.46447 15.4645C3.52678 16.4021 3 17.6739 3 19V21C3 21.5523 3.44772 22 4 22C4.55228 22 5 21.5523 5 21V19C5 18.2043 5.31607 17.4413 5.87868 16.8787C6.44129 16.3161 7.20435 16 8 16H16C16.7956 16 17.5587 16.3161 18.1213 16.8787C18.6839 17.4413 19 18.2044 19 19V21C19 21.5523 19.4477 22 20 22C20.5523 22 21 21.5523 21 21V19C21 17.6739 20.4732 16.4021 19.5355 15.4645C18.5979 14.5268 17.3261 14 16 14H8Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    href: "#Skills",
    svg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M8.70711 6.70711C9.09763 6.31658 9.09763 5.68342 8.70711 5.29289C8.31658 4.90237 7.68342 4.90237 7.29289 5.29289L1.29289 11.2929C0.902369 11.6834 0.902369 12.3166 1.29289 12.7071L7.29289 18.7071C7.68342 19.0976 8.31658 19.0976 8.70711 18.7071C9.09763 18.3166 9.09763 17.6834 8.70711 17.2929L3.41421 12L8.70711 6.70711Z"
          fill="currentColor"
        />
        <path
          d="M16.7071 5.29289C16.3166 4.90237 15.6834 4.90237 15.2929 5.29289C14.9024 5.68342 14.9024 6.31658 15.2929 6.70711L20.5858 12L15.2929 17.2929C14.9024 17.6834 14.9024 18.3166 15.2929 18.7071C15.6834 19.0976 16.3166 19.0976 16.7071 18.7071L22.7071 12.7071C23.0976 12.3166 23.0976 11.6834 22.7071 11.2929L16.7071 5.29289Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    href: "#Works",
    svg: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21 26H28C29.6569 26 31 24.6569 31 23V13C31 11.3431 29.6569 10 28 10H12C10.3431 10 9 11.3431 9 13V23C9 24.6569 10.3431 26 12 26H19V28H16C15.4477 28 15 28.4477 15 29C15 29.5523 15.4477 30 16 30H24C24.5523 30 25 29.5523 25 29C25 28.4477 24.5523 28 24 28H21V26ZM12 12C11.4477 12 11 12.4477 11 13V23C11 23.5523 11.4477 24 12 24H28C28.5523 24 29 23.5523 29 23V13C29 12.4477 28.5523 12 28 12H12Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

const Navbar = () => {
  const style =
    "w-12 h-12 rounded-[40px] transition-all duration-300 hover:bg-white text-white hover:text-background flex items-center justify-center";

  const handleScroll = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hidden lg:block">
      <div className="fixed top-40 left-8 rounded-[40px] flex flex-col gap-y-6 p-2 bg-foreground border-2 border-white">
        {icons.map((icon, index) => (
          <a
            key={index}
            href={icon.href}
            className={style}
            onClick={(e) => handleScroll(e, icon.href)}
          >
            {icon.svg}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
