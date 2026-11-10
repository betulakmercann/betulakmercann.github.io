
"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "I AM", href: "about" },
  { name: "Projects", href: "projects" },
  { name: "Medium Blogs", href: "articles" },
  { name: "Contact", href: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/[0.06] bg-white/85 backdrop-blur-xl">
      <nav className="container flex h-20 items-center justify-between">
        <button
          onClick={() => handleScroll("home")}
          className="text-lg font-bold text-[#4b4653]"
        >
          BA<span className="text-purple-600">\</span>
        </button>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleScroll(link.href)}
              className="!text-[#4b4653] text-sm transition hover:!text-purple-600"
            >
              {link.name}
            </button>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#17151d] lg:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-black/[0.06] bg-white px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleScroll(link.href)}
                className="text-left !text-[#4b4653] text-sm transition hover:!text-purple-600"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
