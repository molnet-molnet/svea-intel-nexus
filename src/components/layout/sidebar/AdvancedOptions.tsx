
import React from "react";
import { Upload, Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface AdvancedOptionsProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AdvancedOptions = ({ open, onOpenChange }: AdvancedOptionsProps) => {
  return (
    <div className="mb-4 pb-4 border-b border-[#143f6b]/20">
      <Collapsible 
        open={open}
        onOpenChange={onOpenChange}
        className="w-full"
      >
        <CollapsibleTrigger className="flex w-full items-center px-3 py-2 rounded-md text-sm font-medium text-[#002244] bg-[#143f6b]/10 hover:bg-[#143f6b]/20 transition-colors">
          <Settings2 className="mr-3 h-4 w-4" />
          Advanced Options
        </CollapsibleTrigger>
        <CollapsibleContent className="pl-4 pr-2 py-2 space-y-4 animate-fade-in">
          <Card className="border border-[#143f6b]/20 bg-white/90">
            <CardContent className="pt-4 pb-2">
              <h3 className="font-medium mb-2 text-sm text-[#002244]">Search Filters</h3>
              <div className="space-y-2">
                <div className="p-3 bg-white/80 rounded-lg border border-black/5">
                  Location Filters
                </div>
                <div className="p-3 bg-white/80 rounded-lg border border-black/5">
                  Data Source Filters
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-[#143f6b]/20 bg-white/90">
            <CardContent className="pt-4 pb-2">
              <h3 className="font-medium mb-2 text-sm text-[#002244]">Image Search</h3>
              <div className="flex justify-end">
                <Button size="sm" className="rounded-xl bg-[#143f6b] text-white">
                  <Upload className="mr-2 h-3 w-3" />
                  Upload Image
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <div className="pt-2 border-t border-[#143f6b]/20">
            <h3 className="font-medium mb-2 text-xs text-[#002244]/70 px-2">OSINT Resources</h3>
            <div className="flex flex-wrap gap-2">
              <a href="https://osintframework.com" target="_blank" rel="noopener noreferrer" className="text-xs px-2 py-1 rounded-full bg-[#143f6b]/10 text-[#002244]/80 hover:bg-[#143f6b]/20 transition-colors">
                osintframework.com
              </a>
              <a href="https://intelx.io" target="_blank" rel="noopener noreferrer" className="text-xs px-2 py-1 rounded-full bg-[#143f6b]/10 text-[#002244]/80 hover:bg-[#143f6b]/20 transition-colors">
                intelx.io
              </a>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};
