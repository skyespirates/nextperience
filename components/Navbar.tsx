"use client";
import { signIn } from "next-auth/react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunFill } from "react-icons/ri";

import { useSelector, useDispatch } from "react-redux";
import { open, close } from "../slices/sidebarSlice";
import { RootState } from "../store";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);

  const state = useSelector((state) => (state as any).sidebar) as RootState;

  const dispatch = useDispatch();

  const handleClick = () => {
    (state as any).isShow ? dispatch(close()) : dispatch(open());
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <RiSunFill
          className="cursor-pointer"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <RiMoonFill
          className="cursor-pointer"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <div className="fixed z-10 top-0 left-0 w-full bg-blue-500 dark:bg-slate-800 px-6 flex justify-between items-center">
      <span
        onClick={handleClick}
        className="py-3 inline-block text-2xl text-white font-semibold cursor-pointer"
      >
        Sycho
      </span>
      <div className="flex justify-center items-center gap-2">
        <button
          onClick={() => signIn()}
          className="px-4 py-1 rounded bg-blue-600 hover:bg-blue-700 text-white"
        >
          Login
        </button>
        <span className="flex text-2xl text-white dark:text-gray-400">
          {renderThemeChanger()}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
