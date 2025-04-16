
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { ArrowLeft, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarHovered, setSidebarHovered] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-zen-mist misty-bg relative">
      {/* Subtle pattern background overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="h-full w-full grid-pattern"></div>
        <div className="h-full w-full absolute top-0 left-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i}
              className="data-point absolute"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <Navbar />
      
      <div className="flex flex-1 overflow-hidden">
        <div 
          className={cn(
            "fixed inset-y-0 left-0 z-20 transition-all duration-500 ease-in-out",
            sidebarOpen || sidebarHovered ? "translate-x-0" : "-translate-x-full"
          )}
          onMouseEnter={() => setSidebarHovered(true)}
          onMouseLeave={() => setSidebarHovered(false)}
        >
          <Sidebar open={sidebarOpen || sidebarHovered} setOpen={setSidebarOpen} />
          
          {/* Sidebar reveal tab */}
          <div 
            className={cn(
              "absolute top-20 -right-8 w-8 h-16 bg-white/50 backdrop-blur-sm border border-black/10 rounded-r-xl flex items-center justify-center cursor-pointer transition-opacity duration-500",
              (sidebarOpen || sidebarHovered) ? "opacity-0" : "opacity-100"
            )}
            onClick={() => setSidebarOpen(true)}
          >
            <ArrowLeft className="h-4 w-4 text-primary" />
          </div>
        </div>
        
        <main className={cn(
          "flex-1 overflow-auto p-4 md:p-6 pt-4 z-10 transition-all duration-500",
          sidebarOpen || sidebarHovered ? "ml-64" : "ml-0"
        )}>
          {children}
        </main>
      </div>

      {/* Settings button centered at bottom */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-30">
        <Button 
          variant="ghost" 
          size="icon" 
          asChild 
          className="h-10 w-10 rounded-full bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300"
        >
          <Link to="/settings">
            <Settings className="h-5 w-5 text-foreground" />
            <span className="sr-only">Settings</span>
          </Link>
        </Button>
      </div>

      <Toaster />
    </div>
  );
};

export default MainLayout;
