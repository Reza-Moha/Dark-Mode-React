import { RxDesktop } from "react-icons/rx";
import { BsFillMoonFill, BsMoonStars } from "react-icons/bs";
import intagram from "../assets/Instagram.svg";
import { useEffect, useState } from "react";

export default function Header() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  darkQuery.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    }
  });

  const onWindowMatch = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  };

  onWindowMatch();

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "lightMode":
        element.classList.remove("dark");
        localStorage.setItem("theme", "lightMode");
        break;
      default:
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
  }, [theme]);

  const svgInfo = [
    {
      id: 1,
      title: "system",
      svg: <RxDesktop className="w-full h-full dark:text-slate-50 " />,
      infoText: "System",
      parentClass: "system",
      childClass: "pSystem",
    },
    {
      id: 2,
      title: "lightMode",
      svg: <BsFillMoonFill className="w-full h-full text-yellow-500" />,
      infoText: "Light Mode",
      childClass: "pLightMode",
    },
    {
      id: 3,
      title: "darkk",
      svg: <BsMoonStars className="w-full h-full dark:text-slate-50" />,
      infoText: "Dark Mode",
      childClass: "pdarkMode",
    },
  ];

  return (
    <header className="h-16 w-full backdrop-blur-2xl fixed top-0 left-0 shadow-lg dark:border-b dark:border-white/30 dark:shadow-slate-800">
      <div className="container max-w-screen-sm h-full flex justify-between items-center text-center ">
        <div className="flex items-center gap-x-2">
          <h1 className="dark:text-slate-50">Mhmdzdeh.reza</h1>
          <img src={intagram} alt="intagram" width={25} />
        </div>
        <div className="flex items-center justify-center text-center gap-x-5 ">
          {svgInfo.map((svg) => (
            <span
              onClick={() => setTheme(svg.title)}
              key={svg.id}
              className={`svgIconParents dark:!border-slate-600 ${svg.title} ${
                theme === svg.title && "bg-sky-500"
              }`}
            >
              {svg.svg}
              <p className={`${svg.childClass} infoSvgs select-none`}>
                {svg.infoText}
              </p>
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
