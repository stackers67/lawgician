
import React from 'react';
import { BookOpen, FileText, Gavel, Search, Settings, Key } from 'lucide-react';

const features = [
  {
    title: 'Document Analysis',
    description: 'Analyze legal documents with NLP to extract key information and generate detailed summaries.',
    icon: FileText,
  },
  {
    title: 'Legal Research',
    description: 'Find relevant case law and legislation from free legal resources to strengthen your arguments.',
    icon: Search,
  },
  {
    title: 'Document Drafting',
    description: 'Draft legal documents quickly using smart templates and AI-powered suggestions.',
    icon: BookOpen,
  },
  {
    title: 'Barrister & Judiciary Tracking',
    description: 'Track relevant barristers and judiciary members for your cases.',
    icon: Gavel,
  },
  {
    title: 'Strategy Reports',
    description: 'Generate comprehensive legal strategy reports and skeleton arguments.',
    icon: Settings,
  },
  {
    title: 'Secure & Compliant',
    description: 'All data is encrypted and processed in compliance with UK legal standards.',
    icon: Key,
  },
];

export function FeatureSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Streamline Your Legal Work
          </h2>
          <p className="text-muted-foreground">
            Lawthority offers a comprehensive suite of tools to help UK solicitors' firms 
            work more efficiently and effectively.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
