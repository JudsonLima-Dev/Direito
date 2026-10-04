import React from 'react';
import { UserProgress } from '../types';
import { BADGES, CAREER_LEVELS } from '../data/badgesData';
import { LEGAL_MODULES } from '../data/legalContent';
import { OFFICIAL_QUESTIONS } from '../data/questionsData';
import { FLASHCARDS } from '../data/flashcardsData';
import { CASE_STUDIES } from '../data/caseStudiesData';
import { Award, Printer, RotateCcw, BookOpen, Target, BrainCircuit, Gavel } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface ProgressDashboardProps {
  progress: UserProgress;
  onOpenPrintable: () => void;
  onResetProgress: () => void;
  onTriggerLove: () => void;
}

export const ProgressDashboard: React.FC<ProgressDashboardProps> = ({
  progress,
  onOpenPrintable,
  onResetProgress,
}) => {
  const totalSections = LEGAL_MODULES.reduce((acc, m) => acc + m.sections.length, 0);
  const completedSections = progress.completedSectionIds.length;
  const sectionPercent = Math.min(100, Math.round((completedSections / totalSections) * 100));

  const totalQuestions = OFFICIAL_QUESTIONS.length;
  const correctQuestions = Object.values(progress.answeredQuestionIds).filter(a => a.isCorrect).length;

  const currentCareer = [...CAREER_LEVELS].reverse().find(c => progress.xp >= c.minXp) || CAREER_LEVELS[0];
  const nextCareer = CAREER_LEVELS.find(c => c.minXp > progress.xp) || null;

  const xpToNext = nextCareer ? nextCareer.minXp - progress.xp : 0;
  const progressInLevel = nextCareer
    ? Math.round(((progress.xp - currentCareer.minXp) / (nextCareer.minXp - currentCareer.minXp)) * 100)
    : 100;

  const handlePrintClick = () => {
    sounds.playClick(progress.soundEffectsEnabled);
    onOpenPrintable();
  };

  const handleResetClick = () => {
    sounds.playClick(progress.soundEffectsEnabled);
    if (window.confirm('Deseja realmente reiniciar todo o histórico para recomeçar os estudos do zero?')) {
      onResetProgress();
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Career Status Hero Card in Textured Tone & Peach */}
      <div className="relative overflow-hidden rounded-3xl bg-textured-dark text-[#EEE2DC] border border-[#EDC7B7]/40 p-6 sm:p-9 shadow-xl">
        <div className="absolute inset-0 bg-textured-overlay opacity-25 pointer-events-none" />
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          <div className="md:col-span-8 space-y-3.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDC7B7]/20 border border-[#EDC7B7]/40 text-[#EDC7B7] text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4 text-[#EDC7B7]" />
              <span>Plano de Carreira Processual</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              {currentCareer.title}
            </h2>

            <p className="text-[#EEE2DC]/90 text-xs sm:text-sm font-sans max-w-xl leading-relaxed">
              Você já acumulou <strong className="text-[#EDC7B7] font-mono">{progress.xp} Pontos de Experiência (XP)</strong>. 
              {nextCareer ? (
                <> Faltam apenas <strong className="text-white font-mono">{xpToNext} XP</strong> para alcançar o cargo de <strong className="text-white">{nextCareer.title}</strong>.</>
              ) : (
                <> Parabéns, meu amor! Você atingiu a mais alta honraria da 1ª Unidade de Processo Civil!</>
              )}
            </p>

            {/* Career Progress Bar */}
            <div className="pt-2 max-w-lg space-y-1.5">
              <div className="flex justify-between text-xs text-[#BAB2B5]">
                <span>Evolução para a próxima promoção</span>
                <span className="font-mono text-[#EDC7B7] font-bold">{progressInLevel}%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2.5 p-0.5 border border-[#EDC7B7]/30 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-[#AC3B61] to-[#EDC7B7] h-full rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(100, Math.max(5, progressInLevel))}%` }}
                />
              </div>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-white/10 border border-[#EDC7B7]/30 text-center space-y-2 backdrop-blur-md">
            <div className="w-16 h-16 rounded-2xl bg-[#AC3B61] text-[#EEE2DC] flex items-center justify-center font-bold text-3xl shadow-md">
              👑
            </div>
            <span className="text-xs text-[#BAB2B5] font-sans block">Sequência de Foco</span>
            <span className="font-mono text-xl font-bold text-white">
              {progress.streakDays} dia(s) consecutivos
            </span>
          </div>

        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        
        <div className="rounded-2xl bg-white/90 p-5 border border-[#BAB2B5]/60 shadow-xs space-y-1.5 text-[#123C69]">
          <div className="flex items-center gap-1.5 text-[#123C69]/70 text-xs">
            <BookOpen className="w-4 h-4 text-[#AC3B61]" />
            <span>Teoria Lida</span>
          </div>
          <span className="text-2xl font-bold font-mono text-[#123C69] block tabular-nums">
            {completedSections}/{totalSections}
          </span>
          <span className="text-[11px] text-[#BAB2B5] font-mono">
            {sectionPercent}% concluído
          </span>
        </div>

        <div className="rounded-2xl bg-white/90 p-5 border border-[#BAB2B5]/60 shadow-xs space-y-1.5 text-[#123C69]">
          <div className="flex items-center gap-1.5 text-[#123C69]/70 text-xs">
            <Target className="w-4 h-4 text-[#AC3B61]" />
            <span>Questões Acertadas</span>
          </div>
          <span className="text-2xl font-bold font-mono text-[#123C69] block tabular-nums">
            {correctQuestions}/{totalQuestions}
          </span>
          <span className="text-[11px] text-[#BAB2B5] font-mono">
            Gabarito oficial UNAMA
          </span>
        </div>

        <div className="rounded-2xl bg-white/90 p-5 border border-[#BAB2B5]/60 shadow-xs space-y-1.5 text-[#123C69]">
          <div className="flex items-center gap-1.5 text-[#123C69]/70 text-xs">
            <BrainCircuit className="w-4 h-4 text-[#AC3B61]" />
            <span>Cards Dominados</span>
          </div>
          <span className="text-2xl font-bold font-mono text-[#123C69] block tabular-nums">
            {progress.masteredFlashcardIds.length}/{FLASHCARDS.length}
          </span>
          <span className="text-[11px] text-[#BAB2B5] font-mono">
            Mnemônicos memorizados
          </span>
        </div>

        <div className="rounded-2xl bg-white/90 p-5 border border-[#BAB2B5]/60 shadow-xs space-y-1.5 text-[#123C69]">
          <div className="flex items-center gap-1.5 text-[#123C69]/70 text-xs">
            <Gavel className="w-4 h-4 text-[#AC3B61]" />
            <span>Casos Solucionados</span>
          </div>
          <span className="text-2xl font-bold font-mono text-[#123C69] block tabular-nums">
            {progress.solvedCaseIds.length}/{CASE_STUDIES.length}
          </span>
          <span className="text-[11px] text-[#BAB2B5] font-mono">
            Simulações práticas
          </span>
        </div>

      </div>

      {/* Badges & Distintivos Showcase */}
      <div className="rounded-3xl bg-white/90 border border-[#BAB2B5]/60 p-6 sm:p-9 shadow-sm space-y-6 text-[#123C69]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#BAB2B5]/30 pb-4">
          <div>
            <span className="text-[10px] font-mono text-[#AC3B61] uppercase tracking-wider font-bold block">
              Recompensas de Desempenho
            </span>
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#123C69] mt-1">
              Distintivos & Conquistas de Mérito
            </h3>
          </div>

          <span className="text-xs font-mono text-[#123C69] bg-[#EDC7B7]/50 border border-[#EDC7B7] px-3 py-1.5 rounded-xl font-bold">
            {progress.unlockedBadgeIds.length} de {BADGES.length} conquistados
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
          {BADGES.map(badge => {
            const isUnlocked = progress.unlockedBadgeIds.includes(badge.id);

            return (
              <div
                key={badge.id}
                className={`p-4 rounded-2xl border transition-all flex flex-col justify-between gap-2.5 ${
                  isUnlocked
                    ? 'bg-[#EDC7B7]/30 border-[#AC3B61]/50 text-[#123C69] shadow-xs'
                    : 'bg-[#EEE2DC]/40 border-[#BAB2B5]/40 text-[#BAB2B5] opacity-60'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="text-2xl">
                    {isUnlocked ? '🏅' : '🔒'}
                  </span>
                  {isUnlocked ? (
                    <span className="text-[10px] font-mono font-bold text-[#AC3B61] bg-[#EDC7B7]/60 border border-[#EDC7B7] px-2 py-0.5 rounded-md">
                      CONQUISTADO
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono text-[#BAB2B5]">
                      BLOQUEADO
                    </span>
                  )}
                </div>

                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#123C69] leading-snug font-serif">
                    {badge.title}
                  </h4>
                  <p className="text-[11px] text-[#123C69]/80 mt-1 leading-snug font-sans">
                    {badge.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#BAB2B5]/30 text-[10px] text-[#BAB2B5] font-mono">
                  {badge.requirement}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Action Footers: Print Study Guide & Reset */}
      <div className="rounded-3xl bg-white/90 border border-[#BAB2B5]/60 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#123C69]">
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="font-serif font-bold text-[#123C69] text-base">
            Guia de Estudos Diagramado (Vade Mecum para Prova)
          </h4>
          <p className="text-xs text-[#123C69]/80 font-sans">
            Gere uma versão diagramada e limpa pronta para imprimir ou salvar em PDF antes da prova.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrintClick}
            className="px-5 py-2.5 bg-[#AC3B61] hover:bg-[#962F50] text-white text-xs font-bold rounded-xl flex items-center gap-2 cursor-pointer shadow-md shadow-[#AC3B61]/25 transition-all"
          >
            <Printer className="w-4 h-4 text-white" />
            <span>Abrir Vade Mecum Impresso</span>
          </button>

          <button
            onClick={handleResetClick}
            className="p-2.5 text-[#BAB2B5] hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors cursor-pointer border border-transparent hover:border-rose-200"
            title="Reiniciar progresso para recomeçar os estudos"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
};
