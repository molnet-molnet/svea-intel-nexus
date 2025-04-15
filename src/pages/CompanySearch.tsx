
import React, { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import SearchBox from "@/components/search/SearchBox";
import ResultCard, { ResultData } from "@/components/search/ResultCard";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info, Loader } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CompanySearch = () => {
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
      if (query.toLowerCase().includes("tech") || query.toLowerCase().includes("ab")) {
        setResults([
          {
            id: "c1",
            type: "company",
            name: "Tech Solutions AB",
            description: "Software development and IT consulting services.",
            location: "Stockholm, Sweden",
            date: "Founded: 2010",
            confidence: 94,
            tags: ["Software", "IT Services", "Consulting"],
          },
          {
            id: "c2",
            type: "company",
            name: "Nordic Tech Innovations AB",
            description: "Research and development in emerging technologies.",
            location: "Gothenburg, Sweden",
            date: "Founded: 2015",
            confidence: 89,
            tags: ["R&D", "Innovation", "Technology"],
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
          <h1 className="text-2xl font-bold mb-2">Company Search</h1>
          <p className="text-muted-foreground">
            Find information about Swedish companies, their structure, and ownership.
          </p>
        </div>

        <SearchBox 
          onSearch={handleSearch} 
          placeholder="Enter company name, organization number, or keyword..." 
          type="company"
        />

        {loading ? (
          <div className="flex flex-col items-center justify-center py-12">
            <Loader className="h-8 w-8 text-primary animate-spin mb-2" />
            <p className="text-muted-foreground">Searching company databases...</p>
          </div>
        ) : searched && results.length === 0 ? (
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>No results found</AlertTitle>
            <AlertDescription>
              Try broadening your search or using different keywords.
              <br />
              <span className="text-xs text-muted-foreground mt-1 block">
                Tip: For testing, try searching for "Tech" or "AB".
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

export default CompanySearch;
