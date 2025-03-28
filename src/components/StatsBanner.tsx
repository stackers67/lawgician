
import React from 'react';

const stats = [
  {
    value: '60%',
    label: 'Time saved on document analysis',
  },
  {
    value: '1000+',
    label: 'UK legal professionals using Lawthority',
  },
  {
    value: '250,000+',
    label: 'Documents analyzed',
  },
  {
    value: '98%',
    label: 'Client satisfaction rate',
  },
];

export function StatsBanner() {
  return (
    <section className="py-12 bg-primary text-primary-foreground">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl font-serif font-bold mb-2">{stat.value}</p>
              <p className="text-primary-foreground/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
