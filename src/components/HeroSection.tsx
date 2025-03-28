
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 animate-fade-in">
            Transform Your Legal Practice
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/80 animate-fade-in animate-delayed">
            The AI-powered legal assistant designed specifically for UK solicitors' firms
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animate-delayed">
            <Link to="/dashboard">
              <Button size="lg" className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Try Lawthority Free
              </Button>
            </Link>
            <Link to="/demo">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-primary-foreground/20 hover:bg-primary-foreground/10 text-primary-foreground">
                Book a Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTAtMTZjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTE2IDBDMSA1MC41IDEuOCA0OCA0IDQ4czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bS0xNiAxNmMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTRtLTE2IDBDLS0yIDQ5LjggMCA0OCAyLjIgNDhzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTRtLTE2IDBjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTE2LTE2YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNG0tMTYgMGMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTRtLTE2IDBjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTE2LTE2YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNG0tMTYgMGMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTRtLTE2IDBjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10" />
    </section>
  );
}
