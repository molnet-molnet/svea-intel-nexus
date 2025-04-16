
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-transparent z-10">
      <div className="flex items-center justify-center h-16 px-4 md:px-6">
        <div className="flex-1 flex justify-center">
          <Link to="/" className="font-quicksand font-semibold text-2xl tracking-wider text-foreground relative">
            <span className="relative inline-block">
              storm
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary/30 transform scale-x-75"></span>
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
