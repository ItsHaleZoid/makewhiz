import { FaTwitter, FaGithub, FaDiscord } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-800 via-purple-700 to-purple-900 text-white py-8 px-4 border-t-4 border-yellow-300 shadow-2xl">
      <div className="max-w-6xl mx-auto flex flex-row flex-wrap items-center justify-between gap-6">
        {/* Logo and Copyright */}
        <div className="flex flex-row items-center gap-6">
          <span className="text-2xl font-extrabold text-yellow-300 font-heading tracking-tight drop-shadow-lg flex items-center">
            <span className="mr-2">✨</span>MakeWhiz
          </span>
         
        </div>
        {/* Social Icons */}
       
        {/* Navigation Links */}
        <nav className="flex flex-row flex-wrap gap-6 text-purple-100 text-sm font-semibold">
          <a
            href="#"
            className="hover:text-yellow-300 transition-colors underline-offset-4 hover:underline"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-yellow-300 transition-colors underline-offset-4 hover:underline"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="hover:text-yellow-300 transition-colors underline-offset-4 hover:underline"
          >
            Contact
          </a>
        </nav>
        {/* Built With */}
        <div className="text-xs text-purple-200 opacity-80 text-center">
          Built with <span className="text-yellow-300">♥</span> by the MakeWhiz team. Have feedback?{" "}
          <a href="#" className="underline hover:text-yellow-300 text-xs">Let us know!</a>
          <span className="font-medium text-purple-100 text-sm pl-118 opacity-80">
            © {new Date().getFullYear()} MakeWhiz. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
