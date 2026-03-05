import React from 'react';

export default function DecorativeHeading({ children, subtitle, className = '' }: { children: React.ReactNode, subtitle?: string, className?: string }) {
  return (
    <div className={`text-center py-8 ${className}`}>
      <div className="flex items-center justify-center gap-4 mb-2 opacity-60">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold-500" />
        <div className="w-2 h-2 rotate-45 bg-gold-400" />
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold-500" />
      </div>
      <h2 className="font-display text-3xl md:text-4xl text-wine-700 font-bold mb-2 drop-shadow-sm">
        {children}
      </h2>
      {subtitle && (
        <p className="font-serif text-gold-500 uppercase tracking-widest text-xs md:text-sm">
          {subtitle}
        </p>
      )}
    </div>
  );
}
