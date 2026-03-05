import React, { useState } from 'react';
import { Lock, Key, Unlock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SecretRevealProps {
  type?: 'lock' | 'key';
  title?: string;
  content: string;
  className?: string;
}

export default function SecretReveal({ type = 'lock', title, content, className = '' }: SecretRevealProps) {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className={`my-4 ${className}`}>
      <motion.div
        layout
        onClick={() => setIsRevealed(!isRevealed)}
        className={`
          relative overflow-hidden rounded-xl border cursor-pointer transition-all duration-500
          ${isRevealed 
            ? 'bg-white border-gold-400 shadow-md' 
            : 'bg-slate-900 border-slate-700 shadow-inner hover:bg-slate-800'
          }
        `}
      >
        {/* Header / Trigger Area */}
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`
              p-2 rounded-full 
              ${isRevealed ? 'bg-gold-100 text-gold-500' : 'bg-slate-800 text-slate-400'}
            `}>
              {isRevealed ? <Unlock size={20} /> : (type === 'key' ? <Key size={20} /> : <Lock size={20} />)}
            </div>
            <div className="flex flex-col">
              <span className={`font-serif font-bold text-sm tracking-wider uppercase ${isRevealed ? 'text-gold-500' : 'text-slate-400'}`}>
                {isRevealed ? 'Secret Revealed' : 'Secret Hidden'}
              </span>
              {title && (
                <span className={`font-serif text-lg font-medium ${isRevealed ? 'text-wine-700' : 'text-slate-200'}`}>
                  {title}
                </span>
              )}
            </div>
          </div>
          <motion.div
            animate={{ rotate: isRevealed ? 180 : 0 }}
            className="text-slate-400"
          >
            {/* Chevron or indicator could go here */}
          </motion.div>
        </div>

        {/* Content Area */}
        <AnimatePresence>
          {isRevealed && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="px-6 pb-6 pt-2"
            >
              <div className="h-px w-full bg-gradient-to-r from-transparent via-gold-300 to-transparent mb-4 opacity-50" />
              <p className="font-serif text-slate-700 leading-relaxed whitespace-pre-wrap">
                {content}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Decorative Pattern for hidden state */}
        {!isRevealed && (
          <div className="absolute inset-0 pointer-events-none opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />
        )}
      </motion.div>
    </div>
  );
}
