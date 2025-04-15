
import React, { useState, useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface AdvancedSearchOptionsProps {
  type: "person" | "company" | "phone" | "social";
  onChange: (options: Record<string, any>) => void;
}

const AdvancedSearchOptions = ({ type, onChange }: AdvancedSearchOptionsProps) => {
  const [options, setOptions] = useState<Record<string, any>>({});

  useEffect(() => {
    onChange(options);
  }, [options, onChange]);

  const updateOption = (key: string, value: any) => {
    setOptions((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const renderPersonOptions = () => (
    <div className="space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <Label htmlFor="age-range">Age Range</Label>
          <Select onValueChange={(value) => updateOption("ageRange", value)}>
            <SelectTrigger id="age-range">
              <SelectValue placeholder="Any age" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="18-30">18-30 years</SelectItem>
              <SelectItem value="31-45">31-45 years</SelectItem>
              <SelectItem value="46-65">46-65 years</SelectItem>
              <SelectItem value="66+">66+ years</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="location">Location</Label>
          <Input 
            id="location" 
            placeholder="City or region" 
            onChange={(e) => updateOption("location", e.target.value)}
          />
        </div>
      </div>
      
      <div className="flex items-start space-x-2 pt-1">
        <Checkbox 
          id="include-relatives" 
          onCheckedChange={(checked) => updateOption("includeRelatives", checked)}
        />
        <div className="grid gap-1.5 leading-none">
          <Label htmlFor="include-relatives">Include relatives in search</Label>
        </div>
      </div>
      
      <div className="flex items-start space-x-2">
        <Checkbox 
          id="include-historical" 
          onCheckedChange={(checked) => updateOption("includeHistorical", checked)}
        />
        <div className="grid gap-1.5 leading-none">
          <Label htmlFor="include-historical">Include historical data</Label>
        </div>
      </div>
    </div>
  );

  const renderCompanyOptions = () => (
    <div className="space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <Label htmlFor="industry">Industry</Label>
          <Select onValueChange={(value) => updateOption("industry", value)}>
            <SelectTrigger id="industry">
              <SelectValue placeholder="All industries" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="tech">Technology</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
              <SelectItem value="healthcare">Healthcare</SelectItem>
              <SelectItem value="retail">Retail</SelectItem>
              <SelectItem value="manufacturing">Manufacturing</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="company-size">Company Size</Label>
          <Select onValueChange={(value) => updateOption("companySize", value)}>
            <SelectTrigger id="company-size">
              <SelectValue placeholder="Any size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="small">Small (1-49)</SelectItem>
              <SelectItem value="medium">Medium (50-249)</SelectItem>
              <SelectItem value="large">Large (250+)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="flex items-start space-x-2 pt-1">
        <Checkbox 
          id="include-subsidiaries" 
          onCheckedChange={(checked) => updateOption("includeSubsidiaries", checked)}
        />
        <div className="grid gap-1.5 leading-none">
          <Label htmlFor="include-subsidiaries">Include subsidiaries</Label>
        </div>
      </div>
    </div>
  );

  const renderPhoneOptions = () => (
    <div className="space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <Label htmlFor="phone-type">Phone Type</Label>
          <Select onValueChange={(value) => updateOption("phoneType", value)}>
            <SelectTrigger id="phone-type">
              <SelectValue placeholder="Any type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mobile">Mobile</SelectItem>
              <SelectItem value="landline">Landline</SelectItem>
              <SelectItem value="voip">VOIP</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="provider">Provider</Label>
          <Select onValueChange={(value) => updateOption("provider", value)}>
            <SelectTrigger id="provider">
              <SelectValue placeholder="Any provider" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="telia">Telia</SelectItem>
              <SelectItem value="tele2">Tele2</SelectItem>
              <SelectItem value="telenor">Telenor</SelectItem>
              <SelectItem value="tre">Tre</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="flex items-start space-x-2 pt-1">
        <Checkbox 
          id="reverse-lookup" 
          onCheckedChange={(checked) => updateOption("reverseLookup", checked)}
        />
        <div className="grid gap-1.5 leading-none">
          <Label htmlFor="reverse-lookup">Perform reverse lookup</Label>
        </div>
      </div>
    </div>
  );

  const renderSocialOptions = () => (
    <div className="space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <Label htmlFor="platforms">Platforms</Label>
          <Select onValueChange={(value) => updateOption("platform", value)}>
            <SelectTrigger id="platforms">
              <SelectValue placeholder="All platforms" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="facebook">Facebook</SelectItem>
              <SelectItem value="twitter">Twitter</SelectItem>
              <SelectItem value="instagram">Instagram</SelectItem>
              <SelectItem value="linkedin">LinkedIn</SelectItem>
              <SelectItem value="youtube">YouTube</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="content-type">Content Type</Label>
          <Select onValueChange={(value) => updateOption("contentType", value)}>
            <SelectTrigger id="content-type">
              <SelectValue placeholder="All content" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="posts">Posts</SelectItem>
              <SelectItem value="photos">Photos</SelectItem>
              <SelectItem value="videos">Videos</SelectItem>
              <SelectItem value="comments">Comments</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="flex items-start space-x-2 pt-1">
        <Checkbox 
          id="include-connections" 
          onCheckedChange={(checked) => updateOption("includeConnections", checked)}
        />
        <div className="grid gap-1.5 leading-none">
          <Label htmlFor="include-connections">Include connections</Label>
        </div>
      </div>
    </div>
  );

  const optionsByType = {
    person: renderPersonOptions,
    company: renderCompanyOptions,
    phone: renderPhoneOptions,
    social: renderSocialOptions,
  };

  return (
    <div className="bg-muted/40 p-3 rounded-md">
      {optionsByType[type]()}
    </div>
  );
};

export default AdvancedSearchOptions;
