
import React, { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "./Navbar";
import BackgroundPattern from "./BackgroundPattern";
import SidebarZen from "./SidebarZen";
import { cn } from "@/lib/utils";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-zen-mist misty-bg relative">
      <BackgroundPattern />
      <Navbar />
      
      <div className="flex flex-1 overflow-hidden">
        <SidebarZen open={sidebarOpen} setOpen={setSidebarOpen} />
        
        <main className={cn(
          "flex-1 overflow-auto p-4 md:p-6 pt-4 z-10 transition-all duration-2000",
          sidebarOpen ? "ml-64" : "ml-0"
        )}>
          {children}
        </main>
      </div>

      <Toaster />
    </div>
  );
};

export default MainLayout;
