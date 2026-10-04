import React from 'react';
import { UserProgress } from '../types';
import { CAREER_LEVELS } from '../data/badgesData';
import { Volume2, VolumeX, Sliders, Sparkles, BookOpen, CheckSquare, BrainCircuit, HelpCircle, GitFork, Search, Heart } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface HeaderProps {
  progress: UserProgress;
  activeTab: 'trilha' | 'questoes' | 'simulador' | 'flashcards' | 'arvore' | 'progresso';
  setActiveTab: (tab: 'trilha' | 'questoes' | 'simulador' | 'flashcards' | 'arvore' | 'progresso') => void;
  onOpenAccessibility: () => void;
  onOpenSearch: () => void;
  onToggleAmbient: () => void;
  onTriggerLove: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  progress,
  activeTab,
  setActiveTab,
  onOpenAccessibility,
  onOpenSearch,
  onToggleAmbient,
  onTriggerLove,
}) => {
  const currentCareer = [...CAREER_LEVELS].reverse().find(c => progress.xp >= c.minXp) || CAREER_LEVELS[0];

  const handleTabClick = (tab: typeof activeTab) => {
    sounds.playClick(progress.soundEffectsEnabled);
    setActiveTab(tab);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#EEE2DC]/95 backdrop-blur-md border-b border-[#BAB2B5]/50 transition-colors shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Zone 1: Brand Wordmark */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleTabClick('trilha')}
            className="text-left group cursor-pointer focus:outline-none"
          >
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-xl sm:text-2xl tracking-tight text-[#123C69]">
                JurisTrilha
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold uppercase tracking-wider bg-[#EDC7B7]/40 text-[#123C69] border border-[#BAB2B5]/60">
                UNAMA
              </span>
            </div>
            <span className="text-[11px] text-[#123C69]/70 font-sans tracking-wide block -mt-0.5">
              Processo Civil · 1ª Unidade (122 Slides)
            </span>
          </button>
        </div>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 text-xs xl:text-sm font-medium text-[#123C69]">
          <button
            onClick={() => handleTabClick('trilha')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'trilha'
                ? 'bg-[#123C69] text-white font-medium shadow-xs'
                : 'hover:text-[#123C69] hover:bg-[#EDC7B7]/40'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Trilha Teórica</span>
          </button>

          <button
            onClick={() => handleTabClick('questoes')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'questoes'
                ? 'bg-[#123C69] text-white font-medium shadow-xs'
                : 'hover:text-[#123C69] hover:bg-[#EDC7B7]/40'
            }`}
          >
            <CheckSquare className="w-3.5 h-3.5" />
            <span>Questões</span>
          </button>

          <button
            onClick={() => handleTabClick('simulador')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'simulador'
                ? 'bg-[#123C69] text-white font-medium shadow-xs'
                : 'hover:text-[#123C69] hover:bg-[#EDC7B7]/40'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Simulador de Foro</span>
          </button>

          <button
            onClick={() => handleTabClick('flashcards')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'flashcards'
                ? 'bg-[#123C69] text-white font-medium shadow-xs'
                : 'hover:text-[#123C69] hover:bg-[#EDC7B7]/40'
            }`}
          >
            <BrainCircuit className="w-3.5 h-3.5" />
            <span>Mnemônicos & Cards</span>
          </button>

          <button
            onClick={() => handleTabClick('arvore')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'arvore'
                ? 'bg-[#123C69] text-white font-medium shadow-xs'
                : 'hover:text-[#123C69] hover:bg-[#EDC7B7]/40'
            }`}
          >
            <GitFork className="w-3.5 h-3.5" />
            <span>Árvore Decisória</span>
          </button>

          <button
            onClick={() => handleTabClick('progresso')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'progresso'
                ? 'bg-[#123C69] text-white font-medium shadow-xs'
                : 'hover:text-[#123C69] hover:bg-[#EDC7B7]/40'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#AC3B61]" />
            <span>Progresso</span>
          </button>
        </nav>

        {/* Zone 3: Actions */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          
          {/* Quick Love Boost Button */}
          <button
            onClick={onTriggerLove}
            className="p-2 rounded-lg border border-[#BAB2B5]/50 bg-white hover:bg-[#EDC7B7]/30 text-[#AC3B61] transition-all cursor-pointer shadow-2xs"
            title="Dose de incentivo com carinho"
          >
            <Heart className="w-4 h-4 fill-[#AC3B61] text-[#AC3B61]" />
          </button>

          {/* Search Trigger */}
          <button
            onClick={() => {
              sounds.playClick(progress.soundEffectsEnabled);
              onOpenSearch();
            }}
            className="flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-lg bg-white hover:bg-[#EDC7B7]/30 border border-[#BAB2B5]/60 text-[#123C69] text-xs transition-colors cursor-pointer shadow-2xs"
            title="Pesquisar artigos e conceitos (Ctrl + K)"
          >
            <Search className="w-3.5 h-3.5 text-[#123C69]/70" />
            <span className="hidden sm:inline font-medium">Pesquisar CPC</span>
          </button>

          {/* Ambient Focus Sound Generator */}
          <button
            onClick={onToggleAmbient}
            className={`p-2 rounded-lg border text-xs transition-all flex items-center gap-1 cursor-pointer shadow-2xs ${
              progress.ambientSound !== 'off'
                ? 'bg-[#123C69] text-white border-[#123C69]'
                : 'bg-white text-[#123C69] border-[#BAB2B5]/60 hover:bg-[#EDC7B7]/30'
            }`}
            title={
              progress.ambientSound === 'off'
                ? 'Ativar som de concentração'
                : progress.ambientSound === 'brown'
                ? 'Som ativo: Ruído Marrom'
                : 'Som ativo: Chuva Suave'
            }
          >
            {progress.ambientSound === 'off' ? (
              <VolumeX className="w-4 h-4" />
            ) : (
              <Volume2 className="w-4 h-4 animate-pulse text-[#EDC7B7]" />
            )}
            <span className="hidden xl:inline text-[11px] font-medium">
              {progress.ambientSound === 'off' ? 'Foco' : progress.ambientSound === 'brown' ? 'Marrom' : 'Chuva'}
            </span>
          </button>

          {/* XP & Career Pill */}
          <button
            onClick={() => handleTabClick('progresso')}
            className="flex items-center gap-2 bg-white hover:bg-[#EDC7B7]/40 border border-[#BAB2B5]/60 px-3 py-1.5 rounded-lg text-xs transition-all cursor-pointer text-[#123C69] shadow-2xs"
            title="Seu Nível e Pontos de Experiência"
          >
            <span className="font-mono font-bold text-[#123C69] tabular-nums">
              {progress.xp} XP
            </span>
            <span className="hidden sm:inline text-[#BAB2B5]">·</span>
            <span className="hidden sm:inline font-medium truncate max-w-[130px]">
              {currentCareer.title}
            </span>
          </button>

          {/* Sensory Accessibility modal */}
          <button
            onClick={onOpenAccessibility}
            className="p-2 rounded-lg border border-[#BAB2B5]/60 text-[#123C69] bg-white hover:bg-[#EDC7B7]/30 transition-colors cursor-pointer shadow-2xs"
            title="Preferências de Leitura & Interface"
          >
            <Sliders className="w-4 h-4 text-[#123C69]" />
          </button>
        </div>

      </div>

      {/* Mobile Navigation bar */}
      <div className="lg:hidden flex items-center justify-between overflow-x-auto px-4 py-2 border-t border-[#BAB2B5]/40 bg-[#EEE2DC] text-xs gap-2 scrollbar-none">
        <button
          onClick={() => handleTabClick('trilha')}
          className={`px-3 py-1 rounded-lg whitespace-nowrap transition-colors ${
            activeTab === 'trilha' ? 'bg-[#123C69] text-white font-medium' : 'text-[#123C69]'
          }`}
        >
          Trilha
        </button>
        <button
          onClick={() => handleTabClick('questoes')}
          className={`px-3 py-1 rounded-lg whitespace-nowrap transition-colors ${
            activeTab === 'questoes' ? 'bg-[#123C69] text-white font-medium' : 'text-[#123C69]'
          }`}
        >
          Questões
        </button>
        <button
          onClick={() => handleTabClick('simulador')}
          className={`px-3 py-1 rounded-lg whitespace-nowrap transition-colors ${
            activeTab === 'simulador' ? 'bg-[#123C69] text-white font-medium' : 'text-[#123C69]'
          }`}
        >
          Simulador
        </button>
        <button
          onClick={() => handleTabClick('flashcards')}
          className={`px-3 py-1 rounded-lg whitespace-nowrap transition-colors ${
            activeTab === 'flashcards' ? 'bg-[#123C69] text-white font-medium' : 'text-[#123C69]'
          }`}
        >
          Cards
        </button>
        <button
          onClick={() => handleTabClick('arvore')}
          className={`px-3 py-1 rounded-lg whitespace-nowrap transition-colors ${
            activeTab === 'arvore' ? 'bg-[#123C69] text-white font-medium' : 'text-[#123C69]'
          }`}
        >
          Árvore
        </button>
        <button
          onClick={() => handleTabClick('progresso')}
          className={`px-3 py-1 rounded-lg whitespace-nowrap transition-colors ${
            activeTab === 'progresso' ? 'bg-[#123C69] text-white font-medium' : 'text-[#123C69]'
          }`}
        >
          Painel
        </button>
      </div>
    </header>
  );
};
