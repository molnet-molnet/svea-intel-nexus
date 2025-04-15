
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import DashboardSummary from "@/components/dashboard/DashboardSummary";
import SearchFeatures from "@/components/dashboard/SearchFeatures";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col items-center text-center py-10 space-y-4">
          <div className="flex items-center mb-2">
            <Search className="h-8 w-8 text-osint-purple mr-2" />
            <h1 className="text-3xl font-bold">SVEA Intel Nexus</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A comprehensive OSINT tool for gathering and analyzing information about individuals,
            companies, and social media profiles with a Swedish focus.
          </p>
          <div className="flex flex-wrap gap-4 mt-4 justify-center">
            <Button asChild size="lg">
              <Link to="/search/person">
                Start Searching
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Search Features</h2>
            <SearchFeatures />
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
            <DashboardSummary />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
