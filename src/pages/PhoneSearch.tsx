
import React, { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import SearchBox from "@/components/search/SearchBox";
import ResultCard, { ResultData } from "@/components/search/ResultCard";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info, Loader } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PhoneSearch = () => {
  const [results, setResults] = useState<ResultData[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const { toast } = useToast();

  const handleSearch = (query: string, options: Record<string, any>) => {
    setLoading(true);
    setSearched(true);
    
    // Simulate API call with a delay
    setTimeout(() => {
      // Mock data for demonstration
      if (query.includes("123") || query.includes("070")) {
        setResults([
          {
            id: "ph1",
            type: "phone",
            name: "+46 70 123 4567",
            title: "Mobile - Telia",
            description: "Registered to individual",
            location: "Stockholm, Sweden",
            date: "Registered: 2018",
            confidence: 92,
            tags: ["Mobile", "Personal", "Active"],
          }
        ]);
      } else {
        setResults([]);
      }
      setLoading(false);
    }, 1500);
  };

  const handleSaveResult = (id: string) => {
    toast({
      title: "Result saved",
      description: "The selected result has been saved to your collection.",
    });
  };

  const handleExportResult = (id: string) => {
    toast({
      title: "Result exported",
      description: "The data has been exported successfully.",
    });
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold mb-2">Phone Search</h1>
          <p className="text-muted-foreground">
            Look up details associated with phone numbers, including owner information when available.
          </p>
        </div>

        <SearchBox 
          onSearch={handleSearch} 
          placeholder="Enter phone number (e.g., +46 70 123 4567)..." 
          type="phone"
        />

        {loading ? (
          <div className="flex flex-col items-center justify-center py-12">
            <Loader className="h-8 w-8 text-primary animate-spin mb-2" />
            <p className="text-muted-foreground">Searching phone databases...</p>
          </div>
        ) : searched && results.length === 0 ? (
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>No results found</AlertTitle>
            <AlertDescription>
              Try entering a different phone number.
              <br />
              <span className="text-xs text-muted-foreground mt-1 block">
                Tip: For testing, try searching for "+46 70 123 4567" or any number containing "123" or "070".
              </span>
            </AlertDescription>
          </Alert>
        ) : (
          <div>
            {results.length > 0 && (
              <div className="mb-4">
                <p className="text-sm text-muted-foreground">
                  Showing {results.length} result{results.length !== 1 ? "s" : ""}
                </p>
              </div>
            )}
            <div className="grid gap-4 md:grid-cols-2">
              {results.map((result) => (
                <ResultCard 
                  key={result.id} 
                  data={result} 
                  onSave={handleSaveResult}
                  onExport={handleExportResult}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default PhoneSearch;
