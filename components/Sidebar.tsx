"use client";
import React, { useState } from "react";
import MakewhizWhite from "./ui/makewhiz-white";
import { FaFolderOpen, FaCog, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

// Navigation items
const navItems = [
  
  {
    label: "Dashboard",
    icon: FaFolderOpen,
    href: "#",
    key: "my-projects",
  },
  {
    label: "UI Generator",
    icon: FaCode,
    href: "#",
    key: "ui-generator",
  },
  {
    label: "Settings",
    icon: FaCog,
    href: "#",
    key: "settings",
  },
];

// Styles for unselected state
const oldUnselectedClasses =
  "flex items-center gap-3 px-4 py-2 rounded-lg text-white hover:bg-indigo-900/60 transition-colors font-black cursor-pointer";
const oldUnselectedIconClass =
  "text-lg text-white opacity-80 group-hover:text-yellow-300";

// Move SidebarNavKey to be a local type
type SidebarNavKey = "ui-generator" | "my-projects" | "settings";

// New: Props for controlling selected index and handling nav selection
type SidebarProps = {
  selectedIndex?: number;
  onSelect?: (index: number, key: SidebarNavKey) => void;
};

export default function Sidebar({
  selectedIndex,
  onSelect,
}: SidebarProps = {}) {
  // If parent controls selectedIndex, use it; otherwise, manage locally
  const [internalSelected, setInternalSelected] = useState(0);
  const isControlled = typeof selectedIndex === "number";
  const selected = isControlled ? selectedIndex! : internalSelected;

  // Selected nav item classes (neumorphic style)
  const selectedClasses =
    "flex items-center gap-3 px-5 py-3 rounded-xl font-semibold transition-all group cursor-pointer text-indigo-800 bg-gradient-to-br from-white via-gray-100 to-gray-200 border-2 border-black shadow-[8px_8px_0px_0px_#000] hover:bg-gray-100 hover:scale-[1.03]";

  // Icon class for selected state
  const selectedIconClass = "text-xl text-indigo-800 transition";

  return (
    <aside className="h-screen w-72 bg-gradient-to-b from-indigo-700 via-indigo-600 to-indigo-800 border-r-4 border-yellow-200 shadow-2xl flex flex-col p-7 sticky top-0">
      <div className="flex items-center mb-12 -ml-5">
        <div className="drop-shadow-lg">
          <MakewhizWhite size={110} />
        </div>
        <span className="text-3xl font-extrabold text-white font-heading drop-shadow-lg -ml-7 tracking-tight">
          MakeWhiz
        </span>
      </div>
      <nav className="flex flex-col gap-8 -ml-2">
        {navItems.map((item, idx) => {
          const Icon = item.icon;
          const isSelected = selected === idx;

          return (
            <motion.button
              key={item.label}
              type="button"
              className={
                (isSelected
                  ? selectedClasses
                  : oldUnselectedClasses + " group") +
                " relative w-full text-left"
              }
              tabIndex={0}
              aria-current={isSelected ? "page" : undefined}
              onClick={() => {
                if (!isControlled) setInternalSelected(idx);
                if (onSelect) onSelect(idx, item.key as SidebarNavKey);
                // No navigation for now
              }}
              onKeyDown={event => {
                if (event.key === "Enter" || event.key === " ") {
                  if (!isControlled) setInternalSelected(idx);
                  if (onSelect) onSelect(idx, item.key as SidebarNavKey);
                  event.preventDefault();
                }
              }}
              layout
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 40,
                duration: 0.3,
              }}
              whileHover={isSelected ? { scale: 1.03 } : { scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-3">
                <Icon
                  className={
                    isSelected ? selectedIconClass : oldUnselectedIconClass
                  }
                />
                <span
                  className={
                    isSelected
                      ? "font-extrabold text-indigo-800 text-xl"
                      : undefined
                  }
                >
                  {item.label}
                </span>
              </span>
            </motion.button>
          );
        })}
      </nav>
      <div className="mt-auto pt-10">
        <div className="bg-gradient-to-r from-yellow-100 via-purple-100 to-yellow-50 rounded-2xl p-5 text-purple-900 shadow-xl text-base flex items-center gap-3">
          <span className="inline-block bg-yellow-300 text-yellow-900 rounded-full px-2 py-1 font-bold text-xs shadow mr-2">
            Tip
          </span>
          <span>
            Use the sidebar to navigate your{" "}
            <span className="font-semibold text-indigo-700">
              AI-generated UIs
            </span>
            !
          </span>
        </div>
      </div>
    </aside>
  );
}
