
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-transparent z-10">
      <div className="flex items-center justify-center h-16 px-4 md:px-6">
        <div className="flex-1 flex justify-center">
          <Link to="/" className="font-quicksand font-bold text-2xl tracking-wider text-foreground relative">
            {/* Logo removed from navbar as it will be displayed below search bar */}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
