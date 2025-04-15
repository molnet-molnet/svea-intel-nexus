
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  User, 
  Briefcase, 
  Phone, 
  Globe,
  Mail,
  MapPin,
  Calendar,
  ExternalLink,
  MoreHorizontal
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

export interface ResultData {
  id: string;
  type: "person" | "company" | "phone" | "social";
  name?: string;
  title?: string;
  description?: string;
  email?: string;
  phone?: string;
  location?: string;
  date?: string;
  url?: string;
  image?: string;
  confidence?: number;
  tags?: string[];
}

interface ResultCardProps {
  data: ResultData;
  onSave?: (id: string) => void;
  onExport?: (id: string) => void;
}

const ResultCard = ({ data, onSave, onExport }: ResultCardProps) => {
  const getIcon = () => {
    switch (data.type) {
      case "person":
        return <User className="h-5 w-5 text-osint-blue" />;
      case "company":
        return <Briefcase className="h-5 w-5 text-osint-purple" />;
      case "phone":
        return <Phone className="h-5 w-5 text-osint-oceanBlue" />;
      case "social":
        return <Globe className="h-5 w-5 text-green-500" />;
      default:
        return <User className="h-5 w-5 text-osint-blue" />;
    }
  };

  const getTitle = () => {
    return data.name || "Unknown";
  };

  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-md">
      <CardHeader className="p-4 pb-0 flex flex-row items-center justify-between">
        <div className="flex items-center">
          {getIcon()}
          <CardTitle className="ml-2 text-base">{getTitle()}</CardTitle>
          {data.title && (
            <span className="ml-2 text-sm text-muted-foreground">
              {data.title}
            </span>
          )}
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">More options</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Options</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => onSave?.(data.id)}>
              Save result
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onExport?.(data.id)}>
              Export data
            </DropdownMenuItem>
            {data.url && (
              <DropdownMenuItem>
                <Link to={data.url} target="_blank" rel="noopener noreferrer" className="flex w-full">
                  View original
                </Link>
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent className="p-4">
        {data.description && (
          <p className="text-sm text-muted-foreground mb-3">{data.description}</p>
        )}

        <div className="space-y-2">
          {data.email && (
            <div className="flex items-center text-sm">
              <Mail className="h-3.5 w-3.5 mr-2 text-muted-foreground" />
              <span>{data.email}</span>
            </div>
          )}
          {data.phone && (
            <div className="flex items-center text-sm">
              <Phone className="h-3.5 w-3.5 mr-2 text-muted-foreground" />
              <span>{data.phone}</span>
            </div>
          )}
          {data.location && (
            <div className="flex items-center text-sm">
              <MapPin className="h-3.5 w-3.5 mr-2 text-muted-foreground" />
              <span>{data.location}</span>
            </div>
          )}
          {data.date && (
            <div className="flex items-center text-sm">
              <Calendar className="h-3.5 w-3.5 mr-2 text-muted-foreground" />
              <span>{data.date}</span>
            </div>
          )}
        </div>

        {data.tags && data.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1">
            {data.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {data.confidence !== undefined && (
          <div className="mt-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Confidence</span>
              <span className="font-medium">{data.confidence}%</span>
            </div>
            <div className="mt-1 h-1 w-full bg-muted overflow-hidden rounded-full">
              <div 
                className="h-full bg-osint-purple" 
                style={{ width: `${data.confidence}%` }}
              ></div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ResultCard;
