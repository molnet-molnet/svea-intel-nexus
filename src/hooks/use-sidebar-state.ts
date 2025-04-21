
import { useState } from "react";

export const useSidebarState = () => {
  const [advancedToolsOpen, setAdvancedToolsOpen] = useState(false);
  const [advancedOptionsOpen, setAdvancedOptionsOpen] = useState(false);
  
  return {
    advancedToolsOpen,
    setAdvancedToolsOpen,
    advancedOptionsOpen,
    setAdvancedOptionsOpen
  };
};
