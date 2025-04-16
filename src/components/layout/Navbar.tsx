
import React from "react";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import { Link } from "react-router-dom";

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar = ({ onMenuClick }: NavbarProps) => {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-black/10 shadow-sm z-10">
      <div className="flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center space-x-4">
          {/* Simplified navbar without logo */}
        </div>
        
        <div className="flex-1 flex justify-center">
          <Link to="/" className="font-medium text-xl">
            storm
          </Link>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" asChild className="rounded-xl">
            <Link to="/settings">
              <Settings className="h-5 w-5 text-foreground" />
              <span className="sr-only">Settings</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
