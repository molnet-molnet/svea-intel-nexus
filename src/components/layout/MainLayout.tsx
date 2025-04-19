import React from "react";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { Settings, MoreVertical, Settings2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
            "fixed inset-y-0 left-0 z-20 transition-all duration-2000 ease-in-out",
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
          
          {/* Updated Zen menu toggle button with circle design */}
          <div 
            className={cn(
              "absolute top-36 -right-12 h-24 w-12 flex items-center justify-center cursor-pointer transition-all duration-2000 ease-in-out",
              sidebarOpen ? "translate-x-64" : "translate-x-0"
            )}
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <div className="w-10 h-10 bg-[#143f6b] rounded-full border border-[#9A7D2E]/60 flex items-center justify-center">
              <Settings2 className="h-5 w-5 text-[#9A7D2E]" />
            </div>
          </div>
        </div>
        
        <main className={cn(
          "flex-1 overflow-auto p-4 md:p-6 pt-4 z-10 transition-all duration-2000", // Slowed down animation
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
