import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles, Crown } from 'lucide-react';
import { worldData, characters } from './data/content';
import SecretReveal from './components/SecretReveal';
import DecorativeHeading from './components/DecorativeHeading';
import CharacterDetail from './pages/CharacterDetail';

export default function App() {
  const [activeView, setActiveView] = useState<'home' | 'lexiyan' | 'nerka'>('home');

  const renderContent = () => {
    if (activeView === 'lexiyan') {
      return <CharacterDetail character={characters.find(c => c.id === 'lexiyan')!} onBack={() => setActiveView('home')} />;
    }
    if (activeView === 'nerka') {
      return <CharacterDetail character={characters.find(c => c.id === 'nerka')!} onBack={() => setActiveView('home')} />;
    }

    return (
      <motion.div
        key={activeView}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-slate-50 overflow-x-hidden"
      >
        {/* Hero Section */}
        <header className="relative min-h-[80vh] flex flex-col items-center justify-center p-6 text-center overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-gold-100/30" />
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/damask.png')]" />
          
          {/* Floating Particles/Decorations */}
          <motion.div 
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 text-gold-300 opacity-50"
          >
            <Sparkles size={48} />
          </motion.div>
          <motion.div 
            animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-40 right-10 text-purple-200 opacity-50"
          >
            <Crown size={64} />
          </motion.div>

          {/* Title */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <p className="font-serif text-gold-500 tracking-[0.3em] uppercase text-sm md:text-base mb-4">
                Romance Fantasy, MAYBE.
              </p>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-wine-700 font-bold mb-6 drop-shadow-sm leading-tight">
                집착 <span className="text-gold-400 text-3xl md:text-5xl align-middle px-2 font-serif italic">vs</span> 경멸
              </h1>
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-wine-700 to-transparent mx-auto mb-8" />
              <p className="font-serif text-slate-600 max-w-md mx-auto leading-relaxed text-lg">
                미친놈들의 이유없는 집착일지, 아니면...<br/>
                비틀린 애정과 증오의 혼합물일지.
              </p>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10 text-wine-700/50"
          >
            <ChevronDown size={32} />
          </motion.div>
        </header>

        {/* Character Links */}
        <section className="py-20 px-4 max-w-5xl mx-auto">
          <DecorativeHeading subtitle="Characters">
            Main Characters
          </DecorativeHeading>
          
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            {/* Lexiyan Card */}
            <motion.div
              whileHover={{ y: -10 }}
              onClick={() => setActiveView('lexiyan')}
              className="group cursor-pointer relative h-96 rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="absolute inset-0 bg-slate-900" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              {/* Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                style={{ backgroundImage: `url(${characters.find(c => c.id === 'lexiyan')?.imageUrl})` }}
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
                <p className="font-serif text-gold-400 text-sm tracking-widest uppercase mb-2">1st Prince</p>
                <h3 className="font-display text-3xl font-bold mb-2 group-hover:text-gold-200 transition-colors">Lexiyan</h3>
                <p className="font-serif text-white/80 line-clamp-2">
                  {characters.find(c => c.id === 'lexiyan')?.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-gold-400 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0">
                  View Profile <span className="text-lg">→</span>
                </div>
              </div>
            </motion.div>

            {/* Nerka Card */}
            <motion.div
              whileHover={{ y: -10 }}
              onClick={() => setActiveView('nerka')}
              className="group cursor-pointer relative h-96 rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="absolute inset-0 bg-slate-900" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              {/* Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                style={{ backgroundImage: `url(${characters.find(c => c.id === 'nerka')?.imageUrl})` }}
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
                <p className="font-serif text-gold-400 text-sm tracking-widest uppercase mb-2">3rd Prince</p>
                <h3 className="font-display text-3xl font-bold mb-2 group-hover:text-gold-200 transition-colors">Nerka</h3>
                <p className="font-serif text-white/80 line-clamp-2">
                  {characters.find(c => c.id === 'nerka')?.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-gold-400 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0">
                  View Profile <span className="text-lg">→</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* World Section (Continuous Scroll) */}
        <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto relative">
          <div className="absolute left-4 md:left-0 top-0 bottom-0 w-px bg-gold-200 hidden md:block" />
          
          <DecorativeHeading subtitle="World View">
            {worldData.empire.title}
          </DecorativeHeading>

          <div className="space-y-12 font-serif text-slate-700 leading-loose">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gold-100 relative overflow-hidden group hover:shadow-md transition-shadow">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                 <Crown size={100} />
               </div>
               <h3 className="text-xl font-bold text-wine-700 mb-4 flex items-center gap-2">
                 <span className="w-2 h-8 bg-gold-400 rounded-full block" />
                 {worldData.empire.year}
               </h3>
               <p className="mb-6">{worldData.empire.description}</p>
               
               <div className="grid md:grid-cols-2 gap-6">
                 <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                   <h4 className="font-bold text-slate-800 mb-2">외적 위협</h4>
                   <p className="text-sm">{worldData.empire.situation.external}</p>
                 </div>
                 <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                   <h4 className="font-bold text-slate-800 mb-2">내적 위험</h4>
                   <p className="text-sm">{worldData.empire.situation.internal}</p>
                 </div>
               </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gold-100">
               <h3 className="text-xl font-bold text-wine-700 mb-4 flex items-center gap-2">
                 <span className="w-2 h-8 bg-purple-400 rounded-full block" />
                 {worldData.empire.religion.name}
               </h3>
               <ul className="list-disc list-inside space-y-2 marker:text-gold-500">
                 {worldData.empire.religion.role.map((role, i) => (
                   <li key={i}>{role}</li>
                 ))}
               </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-center text-xl font-bold text-slate-800">갈등 세력</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {worldData.empire.factions.map((faction, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <h4 className="font-bold text-wine-700 mb-2">{faction.name}</h4>
                    <p className="text-sm mb-4">{faction.desc}</p>
                    {faction.secret && (
                      <SecretReveal 
                        type={faction.secret.type} 
                        content={faction.secret.content} 
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-gold-50 p-8 rounded-2xl shadow-sm border border-gold-200">
               <DecorativeHeading subtitle="Imperial Family" className="!py-4">
                 {worldData.imperialFamily.title}
               </DecorativeHeading>
               <ul className="space-y-4 text-center">
                 {worldData.imperialFamily.details.map((detail, i) => (
                   <li key={i} className="text-slate-700">{detail}</li>
                 ))}
               </ul>
            </div>
          </div>
        </section>

        {/* User Character (Toggle Section) - REMOVED */}

        {/* Footer */}
        <footer className="py-10 text-center text-slate-400 font-serif text-sm">
          <div className="w-8 h-8 mx-auto mb-4 border border-gold-300 rotate-45" />
          <p>© 2026 Obsession vs Contempt. All rights reserved.</p>
        </footer>
      </motion.div>
    );
  };

  return (
    <div className="font-sans text-slate-900">
      <AnimatePresence mode="wait">
        {renderContent()}
      </AnimatePresence>
    </div>
  );
}
