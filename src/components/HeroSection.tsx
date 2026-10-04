import React from 'react';
import { motion } from 'motion/react';
import { UserProgress } from '../types';
import { LEGAL_MODULES } from '../data/legalContent';
import { OFFICIAL_QUESTIONS } from '../data/questionsData';
import { FLASHCARDS } from '../data/flashcardsData';
import { CAREER_LEVELS } from '../data/badgesData';
import { Volume2, Compass, BookOpen, ArrowRight, Gavel, Heart } from 'lucide-react';
import { narrator } from '../utils/audioNarrator';
import { sounds } from '../utils/soundEffects';

interface HeroSectionProps {
  progress: UserProgress;
  onStartStudy: () => void;
  onStartQuiz: () => void;
  onStartSimulator: () => void;
  onOpenFlashcards: () => void;
  onOpenSearch: () => void;
  onTriggerLove: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  progress,
  onStartStudy,
  onStartQuiz,
  onStartSimulator,
  onOpenFlashcards,
  onTriggerLove,
}) => {
  const totalSections = LEGAL_MODULES.reduce((acc, m) => acc + m.sections.length, 0);
  const completedCount = progress.completedSectionIds.length;
  const progressPercent = Math.min(100, Math.round((completedCount / totalSections) * 100));

  const answeredCount = Object.keys(progress.answeredQuestionIds).length;
  const currentCareer = [...CAREER_LEVELS].reverse().find(c => progress.xp >= c.minXp) || CAREER_LEVELS[0];

  const handleAudioIntro = () => {
    sounds.playClick(progress.soundEffectsEnabled);
    const introText =
      'Olá, meu amor! Esse ambiente de estudos foi desenvolvido para você dominar com calma e clareza ' +
      'todo o conteúdo dos cento e vinte e dois slides de Processo Civil do professor Esdras Rodrigues da UNAMA. ' +
      'Você tem tudo o que precisa: explicações sem complicação, áudio para cada lição, mnemônicos e simulações práticas. ' +
      'Tenho certeza absoluta de que você vai se sair brilhantemente hoje. Vamos começar?';
    narrator.toggle(introText, progress.audioSpeed);
  };

  return (
    <div className="relative overflow-hidden bg-textured-dark text-[#EEE2DC] border-b border-[#BAB2B5]/30">
      {/* Background layer with Texture, Transparency & Multi-layer Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.28 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          src="/src/assets/images/hero_law_luxury_1791122567093.jpg"
          alt="Biblioteca jurídica contemporânea"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter contrast-125"
        />
        {/* Tactile textured grid overlay */}
        <div className="absolute inset-0 bg-textured-overlay opacity-30 pointer-events-none" />
        {/* Smooth gradient depth overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#242023] via-[#242023]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#242023] via-[#242023]/85 to-[#242023]/50 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Editorial Text with Exact Image Palette */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-[#EDC7B7]/40 text-[#EDC7B7] text-xs font-semibold tracking-wide backdrop-blur-md">
              <Compass className="w-3.5 h-3.5 text-[#EDC7B7]" />
              <span>Direito Processual Civil · UNAMA · 1ª Unidade</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Recursos & Impugnações da Decisão Judicial
            </h1>

            <p className="text-[#EEE2DC]/90 text-sm sm:text-base leading-relaxed max-w-2xl font-sans font-normal">
              Aprenda todo o conteúdo dos <strong className="text-[#EDC7B7] font-semibold">122 slides do Prof. Me. Esdras Rodrigues</strong> com 
              uma interface limpa, diagramação editorial, síntese sem jargões desnecessários, narração em áudio e simulador prático de casos.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onStartStudy}
                className="px-5 py-2.5 bg-[#AC3B61] hover:bg-[#962F50] text-white text-sm font-semibold rounded-xl shadow-md shadow-[#AC3B61]/25 transition-all flex items-center gap-2 cursor-pointer group"
              >
                <BookOpen className="w-4 h-4 text-white" />
                <span>Iniciar Trilha de Estudos</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onStartSimulator}
                className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-[#EEE2DC] border border-[#EDC7B7]/40 text-sm font-medium rounded-xl transition-all flex items-center gap-2 cursor-pointer backdrop-blur-md"
              >
                <Gavel className="w-4 h-4 text-[#EDC7B7]" />
                <span>Simulador de Foro</span>
              </button>

              <button
                onClick={handleAudioIntro}
                className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-[#EEE2DC] border border-[#EDC7B7]/40 text-sm font-medium rounded-xl transition-colors flex items-center gap-2 cursor-pointer backdrop-blur-md"
              >
                <Volume2 className="w-4 h-4 text-[#EDC7B7]" />
                <span>Ouvir Guia</span>
              </button>

              <button
                onClick={onTriggerLove}
                className="px-3.5 py-2.5 bg-white/10 hover:bg-white/20 text-[#EDC7B7] border border-[#EDC7B7]/40 font-medium text-xs rounded-xl transition-all flex items-center gap-1.5 cursor-pointer backdrop-blur-md"
                title="Mensagem de carinho e apoio"
              >
                <Heart className="w-3.5 h-3.5 fill-[#AC3B61] text-[#AC3B61]" />
                <span>Incentivo do Amor</span>
              </button>
            </div>
          </motion.div>

          {/* Daily Goal & Progress Bento Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl p-6 shadow-2xl space-y-4 border border-[#BAB2B5]/40 bg-white/95 text-[#123C69] backdrop-blur-md">
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EDC7B7]/40 text-[#123C69] flex items-center justify-center font-bold text-base border border-[#EDC7B7]">
                    {progress.streakDays}🔥
                  </div>
                  <div>
                    <span className="text-[10px] text-[#BAB2B5] uppercase font-mono tracking-wider font-bold block">
                      Meta de Hoje
                    </span>
                    <span className="text-sm font-bold text-[#123C69] font-serif">
                      Dominar a 1ª Unidade
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-sm font-mono text-[#123C69] font-bold block tabular-nums">
                    {progress.xp} XP
                  </span>
                  <span className="text-[11px] text-[#BAB2B5] font-medium">
                    {currentCareer.title}
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs text-[#123C69] font-semibold">
                  <span>Progresso do Conteúdo</span>
                  <span className="font-mono tabular-nums text-[#AC3B61] font-bold">{progressPercent}%</span>
                </div>
                <div className="w-full bg-[#EEE2DC] rounded-full h-2.5 overflow-hidden border border-[#BAB2B5]/40 p-0.5">
                  <motion.div
                    className="bg-gradient-to-r from-[#AC3B61] to-[#EDC7B7] h-full rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercent}%` }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                  />
                </div>
                <div className="flex justify-between text-[11px] text-[#BAB2B5] mt-1 font-mono">
                  <span>{completedCount} de {totalSections} seções</span>
                  <span>{answeredCount} questões feitas</span>
                </div>
              </div>

              {/* Quick Metrics Grid */}
              <div className="grid grid-cols-3 gap-2.5 pt-2 border-t border-[#BAB2B5]/30 text-center">
                <div className="p-2.5 rounded-xl bg-[#EEE2DC]/50 border border-[#BAB2B5]/40">
                  <span className="text-[10px] text-[#123C69]/70 block uppercase font-mono font-semibold">Módulos</span>
                  <span className="text-sm font-bold text-[#123C69] font-mono">7</span>
                </div>

                <div 
                  onClick={onOpenFlashcards}
                  className="p-2.5 rounded-xl bg-[#EEE2DC]/50 hover:bg-[#EDC7B7]/40 border border-[#BAB2B5]/40 cursor-pointer transition-colors"
                >
                  <span className="text-[10px] text-[#123C69]/70 block uppercase font-mono font-semibold">Cards</span>
                  <span className="text-sm font-bold text-[#AC3B61] font-mono">
                    {progress.masteredFlashcardIds.length}/{FLASHCARDS.length}
                  </span>
                </div>

                <div 
                  onClick={onStartQuiz}
                  className="p-2.5 rounded-xl bg-[#EEE2DC]/50 hover:bg-[#EDC7B7]/40 border border-[#BAB2B5]/40 cursor-pointer transition-colors"
                >
                  <span className="text-[10px] text-[#123C69]/70 block uppercase font-mono font-semibold">Questões</span>
                  <span className="text-sm font-bold text-[#123C69] font-mono">
                    {answeredCount}/{OFFICIAL_QUESTIONS.length}
                  </span>
                </div>
              </div>

              <div className="text-[11px] text-[#123C69]/80 flex items-center gap-1.5 pt-1 font-sans">
                <Heart className="w-3.5 h-3.5 fill-[#AC3B61] text-[#AC3B61] shrink-0" />
                <span>Estude no seu ritmo. Você vai arrasar nessa prova hoje!</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};
