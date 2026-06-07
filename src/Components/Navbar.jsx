import { useState } from "react";

function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["home", "about", "skills", "projects", "contact"];

  const handleClick = (item) => {
    setActive(item);
    setMenuOpen(false);

    // ✅ works for both div & section + fallback safety
    const section =
      document.getElementById(item) ||
      document.querySelector(`#${item}`);

    if (section) {
      const offset = 80; // navbar height fix

      const top =
        section.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-[#0A0D14] z-50 border-b border-[#1F2937]">
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">

        {/* ===== LOGO ===== */}
        <div className="flex flex-col">
          <h1 className="text-xl md:text-2xl font-semibold text-[#E5E7EB]">
            Sonali <span className="text-[#22D3EE]">Khose</span>
          </h1>
          <span className="text-[11px] tracking-[5px] text-[#60A5FA] uppercase mt-1">
            Software Engineer
          </span>
        </div>

        {/* ===== HAMBURGER ===== */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
        </button>

        {/* ===== DESKTOP MENU ===== */}
        <div className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              className={`relative px-6 py-2 rounded-xl text-sm font-medium transition-all duration-300
                ${
                  active === item
                    ? "text-white bg-gradient-to-r from-[#22D3EE] to-[#60A5FA] shadow-lg shadow-cyan-500/20"
                    : "text-[#94A3B8] hover:text-white"
                }
              `}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}

              {active === item && (
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#22D3EE] to-[#60A5FA] opacity-30 blur-md -z-10"></span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ===== MOBILE MENU ===== */}
      {menuOpen && (
        <div className="md:hidden bg-[#0A0D14] border-t border-[#1F2937] px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              className={`text-left py-2 text-sm font-medium transition-all
                ${
                  active === item
                    ? "text-[#22D3EE]"
                    : "text-[#94A3B8] hover:text-white"
                }
              `}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;