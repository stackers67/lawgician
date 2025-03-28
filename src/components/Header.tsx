
import React from 'react';
import { Button } from "@/components/ui/button";
import { Gavel } from "lucide-react";
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Gavel className="h-6 w-6 text-secondary" />
          <span className="font-serif text-xl font-bold">Lawthority</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/features" className="text-sm font-medium hover:text-secondary">Features</Link>
          <Link to="/pricing" className="text-sm font-medium hover:text-secondary">Pricing</Link>
          <Link to="/about" className="text-sm font-medium hover:text-secondary">About</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link to="/dashboard">
            <Button variant="outline" className="hidden sm:inline-flex">Dashboard</Button>
          </Link>
          <Link to="/login">
            <Button>Log In</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
