
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-transparent z-10">
      <div className="flex items-center justify-center h-16 px-4 md:px-6">
        <div className="flex-1 flex justify-center">
          <Link to="/" className="font-quicksand font-bold text-2xl tracking-wider text-foreground relative">
            <span className="relative inline-block px-1 transform scale-x-110">
              <span className="bg-gradient-to-r from-primary/90 to-zen-aquaDark/80 bg-clip-text text-transparent">
                storm
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/50 to-zen-aquaDark/40 transform scale-x-75"></span>
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/50 to-zen-aquaDark/40 transform scale-x-75 blur-sm"></span>
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
