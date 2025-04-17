
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { Settings, MoreVertical } from "lucide-react";
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
            "fixed inset-y-0 left-0 z-20 transition-all duration-2000 ease-in-out", // Slowed down animation further
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
          
          {/* Zen menu toggle button - redesigned as a side tab with three dots in triangle formation */}
          <div 
            className={cn(
              "absolute top-36 -right-12 h-24 w-12 flex items-center justify-center cursor-pointer transition-all duration-2000 ease-in-out",
              sidebarOpen ? "translate-x-64" : "translate-x-0" // Button follows the menu
            )}
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <div className="w-10 h-20 bg-[#143f6b] rounded-r-xl border-r border-t border-b border-[#9A7D2E]/60 flex flex-col items-center justify-center">
              <div className="flex flex-col items-center gap-1">
                <div className="flex gap-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#9A7D2E]"></div>
                  <div className="h-1.5 w-1.5 rounded-full bg-[#9A7D2E]"></div>
                </div>
                <div className="h-1.5 w-1.5 rounded-full bg-[#9A7D2E]"></div>
              </div>
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
