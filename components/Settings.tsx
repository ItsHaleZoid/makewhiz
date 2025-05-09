"use client";
import React, { useState } from "react";
import { FaMoon, FaBell, FaSave, FaSun, FaRegBellSlash, FaRegSave } from "react-icons/fa";

const defaultSettings = {
  darkMode: false,
  notifications: true,
  autoSave: true,
};

const settingOptions = [
  {
    key: "darkMode",
    label: "Dark Mode",
    iconOn: <FaMoon className="text-purple-600" />,
    iconOff: <FaSun className="text-yellow-400" />,
    color: "purple",
    desc: "Reduce eye strain with a dark interface.",
  },
  {
    key: "notifications",
    label: "Enable Notifications",
    iconOn: <FaBell className="text-yellow-400" />,
    iconOff: <FaRegBellSlash className="text-gray-400" />,
    color: "yellow",
    desc: "Stay up to date with important alerts.",
  },
  {
    key: "autoSave",
    label: "Auto Save",
    iconOn: <FaSave className="text-indigo-500" />,
    iconOff: <FaRegSave className="text-gray-400" />,
    color: "indigo",
    desc: "Automatically save your progress.",
  },
];

function getSwitchBg(color: string, on: boolean) {
  if (!on) return "bg-gray-300";
  switch (color) {
    case "purple":
      return "bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-700";
    case "yellow":
      return "bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500";
    case "indigo":
      return "bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-700";
    default:
      return "bg-gray-300";
  }
}

export default function Settings() {
  const [settings, setSettings] = useState(defaultSettings);
  const [saved, setSaved] = useState(false);

  const handleToggle = (key: keyof typeof defaultSettings) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
    setSaved(false);
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 1800);
  };

  return (
    <main className="max-w-2xl mx-auto mt-16 p-10 bg-gradient-to-br from-white via-yellow-50 to-purple-50 rounded-3xl shadow-[0_8px_40px_0_rgba(80,0,120,0.12)] border-4 border-yellow-200 font-sans relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-200 opacity-30 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-yellow-100 opacity-40 rounded-full blur-2xl pointer-events-none" />
      <h1 className="text-4xl font-black text-purple-800 mb-10 font-heading flex items-center gap-3 drop-shadow-lg">
        <span className="bg-gradient-to-r from-yellow-400 via-fuchsia-400 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
          <svg width="36" height="36" viewBox="0 0 36 36" className="inline-block mr-2 -mt-1">
            <circle cx="18" cy="18" r="16" fill="url(#grad1)" />
            <defs>
              <linearGradient id="grad1" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                <stop stopColor="#facc15" />
                <stop offset="0.5" stopColor="#e879f9" />
                <stop offset="1" stopColor="#a21caf" />
              </linearGradient>
            </defs>
          </svg>
        </span>
        Settings
      </h1>
      <div className="space-y-8">
        {settingOptions.map((opt) => (
          <div
            key={opt.key}
            className="flex items-center justify-between bg-white/80 rounded-2xl px-6 py-5 shadow-md border border-gray-100 hover:shadow-lg transition-all group"
          >
            <div className="flex items-center gap-4">
              <span className="text-2xl">{settings[opt.key as keyof typeof settings] ? opt.iconOn : opt.iconOff}</span>
              <div>
                <span className="text-lg font-bold text-gray-800 group-hover:text-purple-700 transition-colors">
                  {opt.label}
                </span>
                <div className="text-xs text-gray-500 mt-1">{opt.desc}</div>
              </div>
            </div>
            <button
              onClick={() => handleToggle(opt.key as keyof typeof defaultSettings)}
              className={`w-16 h-9 flex items-center rounded-full p-1 transition-all duration-300 shadow-inner border-2 border-gray-200 relative focus:outline-none focus:ring-2 focus:ring-${opt.color}-400 ${getSwitchBg(opt.color, settings[opt.key as keyof typeof settings])}`}
              aria-pressed={settings[opt.key as keyof typeof settings]}
              aria-label={`Toggle ${opt.label}`}
              type="button"
            >
              <span
                className={`h-7 w-7 bg-white rounded-full shadow-lg transform transition-transform duration-300 border-2 border-gray-200 flex items-center justify-center text-xl ${
                  settings[opt.key as keyof typeof settings] ? "translate-x-7" : ""
                }`}
              >
                {settings[opt.key as keyof typeof settings] ? opt.iconOn : opt.iconOff}
              </span>
              <span
                className={`absolute left-2 top-1/2 -translate-y-1/2 text-xs font-bold transition-opacity ${
                  settings[opt.key as keyof typeof settings] ? "opacity-100 text-purple-700" : "opacity-0"
                }`}
              >
                
              </span>
              <span
                className={`absolute right-2 top-1/2 -translate-y-1/2 text-xs font-bold transition-opacity ${
                  !settings[opt.key as keyof typeof settings] ? "opacity-100 text-gray-400" : "opacity-0"
                }`}
              >
               
              </span>
            </button>
          </div>
        ))}
      </div>
      <div className="mt-12 text-right">
        <button
          className="bg-gradient-to-r from-purple-700 via-fuchsia-600 to-yellow-400 hover:from-purple-800 hover:to-yellow-500 text-white font-extrabold px-8 py-3 rounded-2xl shadow-lg transition-all border-2 border-purple-900 text-lg tracking-wide flex items-center gap-3 float-right"
          onClick={handleSave}
          type="button"
        >
          <FaSave className="inline-block text-2xl drop-shadow" />
          Save Changes
        </button>
        {saved && (
          <div className="absolute right-10 bottom-24 flex items-center gap-2 bg-green-100 border border-green-300 text-green-800 px-5 py-2 rounded-xl shadow animate-fade-in-up">
            <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Settings saved!
          </div>
        )}
      </div>
      <style jsx global>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 4s ease-in-out infinite;
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px);}
          100% { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s cubic-bezier(.4,0,.2,1) both;
        }
      `}</style>
    </main>
  );
}
