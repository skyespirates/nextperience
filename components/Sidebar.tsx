"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { close } from "../slices/sidebarSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";

const links = [
  { name: "Home", path: "/" },
  { name: "Posts", path: "/posts" },
  { name: "Protected", path: "/protected" },
  { name: "Games", path: "/games" },
  { name: "Blog", path: "/blog" },
  { name: "Issues", path: "/issues" },
  { name: "Components", path: "/components" },
  { name: "Templates", path: "/templates" },
  { name: "Resources", path: "/resources" },
  { name: "Showcase", path: "/showcase" },
];

const Sidebar = () => {
  const state = useSelector((state) => (state as any).sidebar);
  const dispatch = useDispatch();

  const currentRoute = usePathname();
  const handleClick = () => {
    dispatch(close());
  };
  return (
    <div
      className={`fixed z-10 top-[57px] bg-blue-500 dark:bg-slate-900 w-60 ${
        state.isShow ? "left-0" : "-translate-x-60"
      }`}
      style={{ minHeight: "calc(100vh - 57px)" }}
    >
      <ul className="flex flex-col p-2 text-white gap-1">
        {links.map((link, i) => {
          return (
            <li key={i} className="">
              <Link
                onClick={handleClick}
                href={link.path}
                className={`w-full h-full px-4 py-1 bg-blue-600 dark:bg-slate-700 dark:hover:bg-slate-600 inline-block rounded hover:bg-blue-700 ${
                  currentRoute === link.path
                    ? "bg-blue-800 dark:bg-slate-500 dark:hover:bg-slate-500"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
