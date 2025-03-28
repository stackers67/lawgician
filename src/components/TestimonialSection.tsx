
import React from 'react';

const testimonials = [
  {
    quote: "Lawthority has transformed how our firm prepares cases. We're saving hours every week on document analysis and legal research.",
    author: "Sarah Johnson",
    title: "Partner, Johnson & Associates",
  },
  {
    quote: "The document analysis tools are impressive. What used to take us days now takes minutes, and the summaries are comprehensive and accurate.",
    author: "Mark Thompson",
    title: "Senior Solicitor, Thompson Legal LLP",
  },
  {
    quote: "As a small firm, Lawthority has been a game-changer for us. It's like having an additional team member dedicated to research and document preparation.",
    author: "Emily Richards",
    title: "Founder, Richards Law Practice",
  },
];

export function TestimonialSection() {
  return (
    <section className="py-16 bg-card">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Trusted by UK Legal Professionals
          </h2>
          <p className="text-muted-foreground">
            See what solicitors across the UK are saying about Lawthority
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-background border p-6 rounded-lg shadow-sm"
            >
              <blockquote className="text-lg mb-4 italic text-card-foreground">
                "{testimonial.quote}"
              </blockquote>
              <footer>
                <p className="font-medium">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
