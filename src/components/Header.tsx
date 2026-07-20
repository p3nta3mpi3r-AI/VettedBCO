import React from "react";
import { ShoppingBag, Menu, X, Coffee } from "lucide-react";

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export default function Header({ cartCount, onOpenCart, onScrollToSection }: HeaderProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { label: "Blends", id: "our-coffee" },
    { label: "Charities", id: "charity-factor" },
    { label: "FAQs", id: "faq" }
  ];

  return (
    <header className="sticky top-0 z-40 w-full flex flex-col">
      {/* Top Announcement Bar */}
      <div className="bg-coffee-dark text-coffee-cream py-1.5 px-4 text-center text-[10px] sm:text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2">
        <span className="animate-heartbeat text-coffee-accent origin-center inline-block">30%</span>
        <span>OF ALL REVENUE DONATED TO VETERAN CHARITIES</span>
      </div>
      <div className="bg-coffee-dark bg-camo backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => onScrollToSection("hero")}>
            <div className="w-8 h-8 bg-coffee-dark flex items-center justify-center shadow-md">
              <div className="w-4 h-4 border-2 border-coffee-cream rotate-45"></div>
            </div>
            <span className="font-display font-black tracking-tighter text-xl text-white uppercase leading-none">
              VETTED BREW CO.
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onScrollToSection(link.id)}
                className="text-xs font-bold uppercase tracking-widest text-white hover:text-white hover:scale-105 transition-all duration-200 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Shopping Cart button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full hover:bg-coffee-dark/5 transition-colors cursor-pointer"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5 text-white" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-coffee-cream bg-coffee-dark rounded-full transform translate-x-1 -translate-y-1 animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Order Now */}
            <button
              onClick={() => onScrollToSection("our-coffee")}
              className="px-5 py-2.5 bg-coffee-card bg-camo border border-white rounded-full text-white hover:text-white text-xs font-black uppercase tracking-widest transition-all duration-300 cursor-pointer"
            >
              Order Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full hover:bg-coffee-dark/5 transition-colors"
            >
              <ShoppingBag className="w-5 h-5 text-white" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-coffee-cream bg-coffee-dark rounded-full transform translate-x-1 -translate-y-1">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full text-white hover:bg-coffee-dark/5 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-coffee-dark bg-camo border-b border-white/10 transition-all duration-300">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onScrollToSection(link.id);
                  setIsOpen(false);
                }}
                className="block w-full text-left px-3 py-3 rounded-full text-base font-medium text-white/80 hover:text-white hover:bg-coffee-dark/5 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 pb-2 border-t border-white/10">
              <button
                onClick={() => {
                  onScrollToSection("our-coffee");
                  setIsOpen(false);
                }}
                className="w-full text-center px-4 py-3 bg-coffee-card bg-camo hover:bg-opacity-90 text-white font-bold tracking-widest text-xs uppercase rounded-full shadow-md transition-all duration-200"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
