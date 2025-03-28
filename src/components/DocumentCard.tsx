
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Eye, Download } from 'lucide-react';

export type Document = {
  id: string;
  title: string;
  type: string;
  uploadedAt: string;
  tags: string[];
  status: 'analyzed' | 'analyzing' | 'pending';
};

interface DocumentCardProps {
  document: Document;
}

export function DocumentCard({ document }: DocumentCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-secondary" />
            <CardTitle className="text-base">{document.title}</CardTitle>
          </div>
          {document.status === 'analyzed' && (
            <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-100">
              Analyzed
            </Badge>
          )}
          {document.status === 'analyzing' && (
            <Badge variant="outline" className="bg-amber-50 text-amber-700 hover:bg-amber-100">
              Analyzing
            </Badge>
          )}
          {document.status === 'pending' && (
            <Badge variant="outline" className="bg-gray-50 text-gray-700 hover:bg-gray-100">
              Pending
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="pb-3">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{document.type}</span>
            <span>Uploaded {document.uploadedAt}</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {document.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t bg-muted/50 px-4 py-2">
        <div className="flex w-full justify-between">
          <Button variant="ghost" size="sm" className="text-xs h-8 gap-1">
            <Eye className="h-3.5 w-3.5" />
            View
          </Button>
          <Button variant="ghost" size="sm" className="text-xs h-8 gap-1">
            <Download className="h-3.5 w-3.5" />
            Download
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
