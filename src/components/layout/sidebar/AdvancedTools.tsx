
import React from "react";
import { ChevronRight, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface AdvancedToolsProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AdvancedTools = ({ open, onOpenChange }: AdvancedToolsProps) => {
  return (
    <div className="mt-4 pt-4 border-t border-[#143f6b]/20">
      <Collapsible 
        open={open}
        onOpenChange={onOpenChange}
        className="w-full"
      >
        <CollapsibleTrigger className="flex w-full items-center px-3 py-2 rounded-md text-sm font-medium text-[#002244] hover:bg-[#143f6b]/10 transition-colors">
          <ChevronRight 
            className={cn(
              "mr-3 h-4 w-4 transition-transform",
              open && "rotate-90"
            )}
          />
          Advanced Tools
        </CollapsibleTrigger>
        <CollapsibleContent className="pl-4 pr-2 py-2 space-y-4">
          <Card className="border border-[#143f6b]/20 bg-white/90">
            <CardContent className="pt-4 pb-2">
              <h3 className="font-medium mb-2 text-sm text-[#002244]">Notes</h3>
              <div className="flex justify-end">
                <Button size="sm" className="rounded-xl bg-[#143f6b] text-white">
                  <FileText className="mr-2 h-3 w-3" />
                  Open Notes
                </Button>
              </div>
            </CardContent>
          </Card>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};
