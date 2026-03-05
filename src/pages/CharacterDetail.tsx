import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, Heart, Sword, Crown } from 'lucide-react';
import { CharacterProfile, SecretContent } from '../data/content';
import SecretReveal from '../components/SecretReveal';
import DecorativeHeading from '../components/DecorativeHeading';

interface CharacterDetailProps {
  character: CharacterProfile;
  onBack: () => void;
}

export default function CharacterDetail({ character, onBack }: CharacterDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="min-h-screen bg-slate-50 pb-20"
    >
      {/* Header / Nav */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gold-200 px-4 py-4 flex items-center justify-between shadow-sm">
        <button 
          onClick={onBack}
          className="p-2 rounded-full hover:bg-slate-100 text-wine-700 transition-colors flex items-center gap-2"
        >
          <ArrowLeft size={20} />
          <span className="font-serif font-medium">Back</span>
        </button>
        <span className="font-display text-lg text-wine-700 font-bold">{character.name}</span>
        <div className="w-10" /> {/* Spacer for balance */}
      </div>

      <div className="max-w-3xl mx-auto px-4 pt-6">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gold-200 overflow-hidden mb-8">
          <div className="h-32 bg-gradient-to-r from-wine-700 to-purple-900 relative">
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')]" />
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
              <div className="w-24 h-24 rounded-full bg-slate-200 border-4 border-white shadow-md flex items-center justify-center overflow-hidden">
                <img 
                  src={character.profileUrl} 
                  alt={character.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="pt-16 pb-8 px-6 text-center">
            <h1 className="font-display text-3xl text-slate-800 font-bold mb-1">{character.name}</h1>
            <p className="font-serif text-gold-500 uppercase tracking-widest text-sm mb-4">{character.role}</p>
            
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {character.keywords.map((kw, i) => (
                <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-serif border border-slate-200">
                  #{kw}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-slate-100 pt-6">
              <div className="flex flex-col">
                <span className="text-xs text-slate-400 uppercase tracking-wider">Age</span>
                <span className="font-serif text-slate-700 font-medium">{character.age}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-400 uppercase tracking-wider">Height</span>
                <span className="font-serif text-slate-700 font-medium">{character.height}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-400 uppercase tracking-wider">MBTI</span>
                <span className="font-serif text-slate-700 font-medium">{character.mbti}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-400 uppercase tracking-wider">Enneagram</span>
                <span className="font-serif text-slate-700 font-medium">{character.enneagram}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-10 text-center px-4">
          <p className="font-serif text-lg text-slate-600 leading-relaxed italic">
            "{character.description}"
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {character.sections.map((section, idx) => (
            <div key={idx} className="bg-white/50 rounded-xl p-1">
              <DecorativeHeading subtitle={`Section 0${idx + 1}`} className="!py-4">
                {section.title}
              </DecorativeHeading>
              
              <div className="space-y-4">
                {section.content.map((item, i) => {
                  if (typeof item === 'string') {
                    return (
                      <div key={i} className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm font-serif text-slate-700">
                        {item}
                      </div>
                    );
                  } else {
                    return (
                      <div key={i}>
                        <SecretReveal
                          type={item.type}
                          title={item.title}
                          content={item.content}
                        />
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
