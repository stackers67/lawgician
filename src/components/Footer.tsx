
import React from 'react';
import { Gavel } from "lucide-react";
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t bg-muted">
      <div className="container py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Gavel className="h-5 w-5 text-secondary" />
              <span className="font-serif text-lg font-bold">Lawthority</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Transforming legal workflows for UK solicitors' firms
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-2">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/features" className="text-muted-foreground hover:text-foreground">Features</Link></li>
              <li><Link to="/pricing" className="text-muted-foreground hover:text-foreground">Pricing</Link></li>
              <li><Link to="/demo" className="text-muted-foreground hover:text-foreground">Request Demo</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-2">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground">About</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
              <li><Link to="/careers" className="text-muted-foreground hover:text-foreground">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-2">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-muted-foreground hover:text-foreground">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t pt-6 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Lawthority. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
