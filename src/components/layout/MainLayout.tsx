
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarHovered, setSidebarHovered] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-zen-mist misty-bg">
      <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex flex-1 overflow-hidden">
        <div 
          className={cn(
            "fixed inset-y-0 left-0 z-20 transition-all duration-300 ease-in-out",
            sidebarOpen || sidebarHovered ? "translate-x-0" : "-translate-x-full"
          )}
          onMouseEnter={() => setSidebarHovered(true)}
          onMouseLeave={() => setSidebarHovered(false)}
        >
          <Sidebar open={sidebarOpen || sidebarHovered} setOpen={setSidebarOpen} />
          
          {/* Sidebar reveal tab */}
          <div 
            className={cn(
              "absolute top-20 -right-8 w-8 h-16 bg-white/50 backdrop-blur-sm border border-black/10 rounded-r-xl flex items-center justify-center cursor-pointer transition-opacity duration-300",
              (sidebarOpen || sidebarHovered) ? "opacity-0" : "opacity-100"
            )}
            onClick={() => setSidebarOpen(true)}
          >
            <ArrowLeft className="h-4 w-4 text-primary" />
          </div>
        </div>
        
        <main className={cn(
          "flex-1 overflow-auto p-4 md:p-6 pt-4 z-10 transition-all duration-300",
          sidebarOpen || sidebarHovered ? "ml-64" : "ml-0"
        )}>
          {children}
        </main>
      </div>
      <Toaster />
    </div>
  );
};

export default MainLayout;
