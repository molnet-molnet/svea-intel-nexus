
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search as SearchIcon,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AdvancedSearchOptions from "./AdvancedSearchOptions";

interface SearchBoxProps {
  onSearch: (query: string, options: Record<string, any>) => void;
  placeholder?: string;
  className?: string;
  type?: "person" | "company" | "phone" | "social";
}

const SearchBox = ({ 
  onSearch, 
  placeholder = "Search...", 
  className = "", 
  type = "person" 
}: SearchBoxProps) => {
  const [query, setQuery] = useState("");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [advancedOptions, setAdvancedOptions] = useState<Record<string, any>>({});

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query, advancedOptions);
    }
  };

  const toggleAdvanced = () => {
    setShowAdvanced(!showAdvanced);
  };

  const updateAdvancedOptions = (options: Record<string, any>) => {
    setAdvancedOptions(options);
  };

  return (
    <Card className={`border shadow-sm ${className}`}>
      <CardContent className="pt-4">
        <form onSubmit={handleSearch}>
          <div className="flex items-center space-x-2">
            <div className="relative flex-1">
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={placeholder}
                className="pr-8"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <SearchIcon className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>
            <Button type="submit">Search</Button>
          </div>
          
          <div className="mt-2">
            <Button 
              type="button" 
              variant="ghost" 
              size="sm" 
              className="text-sm text-muted-foreground flex items-center"
              onClick={toggleAdvanced}
            >
              Advanced Options
              {showAdvanced ? 
                <ChevronUp className="ml-1 h-4 w-4" /> : 
                <ChevronDown className="ml-1 h-4 w-4" />
              }
            </Button>
          </div>
          
          {showAdvanced && (
            <div className="mt-3 animate-fade-in">
              <AdvancedSearchOptions 
                type={type} 
                onChange={updateAdvancedOptions} 
              />
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
};

export default SearchBox;
