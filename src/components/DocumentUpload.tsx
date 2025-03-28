
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { FileText, Upload, Check } from "lucide-react";

export function DocumentUpload() {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const { toast } = useToast();

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length) {
      handleFileUpload(files);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const files = Array.from(e.target.files);
      handleFileUpload(files);
    }
  };

  const handleFileUpload = (files: File[]) => {
    setIsUploading(true);
    setUploadProgress(0);
    
    // Simulate file upload with progress
    const intervalId = setInterval(() => {
      setUploadProgress(prev => {
        const newProgress = prev + 5;
        if (newProgress >= 100) {
          clearInterval(intervalId);
          setTimeout(() => {
            setIsUploading(false);
            toast({
              title: "Documents uploaded successfully",
              description: `${files.length} document(s) have been uploaded and are being analyzed.`,
              duration: 5000,
            });
          }, 500);
          return 100;
        }
        return newProgress;
      });
    }, 150);
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Upload Legal Documents</CardTitle>
        <CardDescription>
          Drag and drop your legal documents or click to browse. 
          We support PDF, DOCX, and TXT files.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div
          className={`relative border-2 border-dashed rounded-lg p-12 text-center ${
            isDragging 
              ? "border-secondary bg-secondary/5" 
              : "border-muted-foreground/20 hover:border-muted-foreground/50"
          } transition-colors cursor-pointer`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => document.getElementById('file-upload')?.click()}
        >
          {isUploading ? (
            <div className="flex flex-col items-center gap-4">
              <FileText className="h-12 w-12 text-muted-foreground animate-pulse" />
              <div className="text-sm">Uploading and analyzing documents...</div>
              <Progress value={uploadProgress} className="w-full max-w-xs" />
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4">
              <Upload className="h-12 w-12 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Drag and drop files here, or click to select files</p>
                <p className="text-xs text-muted-foreground mt-1">PDF, DOCX, and TXT files up to 50MB</p>
              </div>
              <input
                id="file-upload"
                type="file"
                multiple
                className="hidden"
                accept=".pdf,.docx,.txt"
                onChange={handleFileSelect}
              />
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex-col space-y-2">
        <div className="flex items-start gap-2 text-xs text-muted-foreground">
          <Check className="h-4 w-4 mt-0.5 text-green-500" />
          <p>
            All documents are processed securely. Your data is encrypted and never shared with 
            third parties without your explicit consent.
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}
