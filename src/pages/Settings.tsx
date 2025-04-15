
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Settings as SettingsIcon } from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const { toast } = useToast();
  
  const handleSaveGeneralSettings = () => {
    toast({
      title: "Settings saved",
      description: "Your general settings have been updated.",
    });
  };
  
  const handleSaveAPISettings = () => {
    toast({
      title: "API settings saved",
      description: "Your API configuration has been updated.",
    });
  };
  
  const handleClearData = () => {
    toast({
      title: "Data cleared",
      description: "Your local search history has been cleared.",
      variant: "destructive",
    });
  };

  return (
    <MainLayout>
      <div className="space-y-6 max-w-3xl mx-auto">
        <div className="flex items-center space-x-3 mb-2">
          <SettingsIcon className="h-7 w-7 text-osint-purple" />
          <h1 className="text-2xl font-bold">Settings</h1>
        </div>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>General Settings</CardTitle>
            <CardDescription>
              Configure your application preferences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="save-history">Save Search History</Label>
                <p className="text-sm text-muted-foreground">
                  Keep a record of your previous searches
                </p>
              </div>
              <Switch id="save-history" defaultChecked />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="advanced-mode">Advanced Search Mode</Label>
                <p className="text-sm text-muted-foreground">
                  Enable advanced search options by default
                </p>
              </div>
              <Switch id="advanced-mode" />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="data-caching">Local Data Caching</Label>
                <p className="text-sm text-muted-foreground">
                  Store search results locally for faster access
                </p>
              </div>
              <Switch id="data-caching" defaultChecked />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handleClearData}>
              Clear Local Data
            </Button>
            <Button onClick={handleSaveGeneralSettings}>
              Save Settings
            </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>API Configuration</CardTitle>
            <CardDescription>
              Configure external APIs and data sources
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="api-key">Supabase API Key</Label>
              <Input 
                id="api-key" 
                placeholder="Enter API key" 
                type="password" 
                value="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
                readOnly
              />
              <p className="text-xs text-muted-foreground">
                API key for connecting to the Supabase backend
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="project-url">Supabase Project URL</Label>
              <Input 
                id="project-url" 
                placeholder="Enter project URL" 
                value="https://ywgvluvzftterkuswcsd.supabase.co"
                readOnly
              />
              <p className="text-xs text-muted-foreground">
                The URL for your Supabase project
              </p>
            </div>
            
            <Separator />
            
            <div className="space-y-2">
              <Label htmlFor="social-api-key">Social Media API Access</Label>
              <div className="flex items-center justify-between">
                <p className="text-sm">Connect social media APIs</p>
                <Button variant="outline" size="sm">
                  Configure
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button onClick={handleSaveAPISettings}>
              Update Configuration
            </Button>
          </CardFooter>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Settings;
