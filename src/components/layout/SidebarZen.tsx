
import React from "react";
import Sidebar from "./Sidebar";
import SidebarTab from "./SidebarTab";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarZenProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const SidebarZen = ({ open, setOpen }: SidebarZenProps) => {
  // Sound effect on open/close
  const soundRef = React.useRef<HTMLAudioElement>(null);

  const handleTabClick = () => {
    if (soundRef.current) {
      soundRef.current.currentTime = 0;
      soundRef.current.play();
    }
    setOpen(!open);
  };

  return (
    <>
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-20 transition-all duration-700 ease-in-out flex flex-row-reverse",
          open ? "translate-x-0" : "translate-x-full"
        )}
        style={{ pointerEvents: "none" }}
      >
        <Sidebar open={open} setOpen={setOpen} />
        <SidebarTab
          open={open}
          icon={<Menu className="h-7 w-7 text-[#143f6b] group-hover:text-[#9A7D2E] transition-all" />}
          onClick={handleTabClick}
        />
      </div>
      {/* The tab sound (subtle, replace with your preferred WAV/MP3) */}
      <audio ref={soundRef} src="/lovable-uploads/tab-genie.mp3" preload="auto" />
    </>
  );
};

export default SidebarZen;
