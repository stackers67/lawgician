
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

export function CTASection() {
  return (
    <section className="py-16 bg-secondary/10">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Ready to Transform Your Legal Practice?
          </h2>
          <p className="text-lg mb-8 text-muted-foreground">
            Join hundreds of UK solicitors who are saving time and delivering
            better results for their clients with Lawthority.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/dashboard">
              <Button size="lg" className="w-full sm:w-auto">
                Start Free Trial
              </Button>
            </Link>
            <Link to="/demo">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Schedule a Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
