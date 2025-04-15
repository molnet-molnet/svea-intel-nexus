
import React from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Briefcase, Phone, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const SearchFeatures = () => {
  const features = [
    {
      title: "Person Search",
      description: "Search for individuals using name, social security number, or other identifiers.",
      icon: <User className="h-6 w-6 text-osint-blue" />,
      href: "/search/person",
    },
    {
      title: "Company Search",
      description: "Find information about Swedish companies, their structure, and ownership.",
      icon: <Briefcase className="h-6 w-6 text-osint-purple" />,
      href: "/search/company",
    },
    {
      title: "Phone Search",
      description: "Look up details associated with phone numbers, including owner information.",
      icon: <Phone className="h-6 w-6 text-osint-oceanBlue" />,
      href: "/search/phone",
    },
    {
      title: "Social Media Search",
      description: "Discover social media profiles across multiple platforms.",
      icon: <Globe className="h-6 w-6 text-green-500" />,
      href: "/search/social",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {features.map((feature, i) => (
        <Card key={i} className="flex flex-col">
          <CardHeader className="pb-2">
            <div className="mb-3">{feature.icon}</div>
            <CardTitle>{feature.title}</CardTitle>
            <CardDescription className="line-clamp-3">
              {feature.description}
            </CardDescription>
          </CardHeader>
          <CardFooter className="pt-0 mt-auto">
            <Button asChild className="w-full">
              <Link to={feature.href}>
                Start Search
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default SearchFeatures;
