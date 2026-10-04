import React, { useState } from 'react';
import { CaseStudy, UserProgress } from '../types';
import { Gavel, CheckCircle2, XCircle, ArrowRight, RotateCcw, Volume2, Sparkles, BookOpen } from 'lucide-react';
import { narrator } from '../utils/audioNarrator';
import { sounds } from '../utils/soundEffects';
import confetti from 'canvas-confetti';

interface CaseSimulatorProps {
  cases: CaseStudy[];
  progress: UserProgress;
  onSolveCase: (caseId: string) => void;
  onTriggerLove: () => void;
}

export const CaseSimulator: React.FC<CaseSimulatorProps> = ({
  cases,
  progress,
  onSolveCase,
  onTriggerLove,
}) => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);

  const activeCase = cases[currentIdx] || cases[0];
  const selectedOption = activeCase.options.find(o => o.id === selectedOptionId);

  const handleSelectOption = (optionId: string) => {
    if (hasSubmitted) return;
    sounds.playClick(progress.soundEffectsEnabled);
    setSelectedOptionId(optionId);
  };

  const handleSubmit = () => {
    if (!selectedOptionId) return;
    setHasSubmitted(true);

    const isCorrect = selectedOption?.isCorrect ?? false;
    if (isCorrect) {
      sounds.playSuccess(progress.soundEffectsEnabled);
      try {
        confetti({
          particleCount: 70,
          spread: 85,
          origin: { y: 0.65 },
          colors: ['#AC3B61', '#EDC7B7', '#123C69', '#ffffff'],
        });
      } catch {
        // Fallback
      }
      onSolveCase(activeCase.id);
      onTriggerLove();
    } else {
      sounds.playClick(progress.soundEffectsEnabled);
    }
  };

  const handleNextCase = () => {
    sounds.playClick(progress.soundEffectsEnabled);
    narrator.stop();
    setSelectedOptionId(null);
    setHasSubmitted(false);
    if (currentIdx < cases.length - 1) {
      setCurrentIdx(currentIdx + 1);
    }
  };

  const handleResetCase = () => {
    sounds.playClick(progress.soundEffectsEnabled);
    setSelectedOptionId(null);
    setHasSubmitted(false);
  };

  const handleReadCaseAudio = () => {
    sounds.playClick(progress.soundEffectsEnabled);
    const audioText = `${activeCase.title}. Cenário Fático: ${activeCase.narrative}. Pergunta: ${activeCase.question}`;
    narrator.toggle(audioText, progress.audioSpeed);
  };

  const solvedCount = progress.solvedCaseIds.length;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* Header Banner in Textured Tone & Peach */}
      <div className="relative overflow-hidden rounded-3xl bg-textured-dark text-[#EEE2DC] border border-[#EDC7B7]/40 p-6 sm:p-9 shadow-xl">
        <div className="absolute inset-0 bg-textured-overlay opacity-30 pointer-events-none" />
        <div className="relative z-10 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-[#EDC7B7] text-xs font-bold uppercase tracking-wider">
              <Gavel className="w-4 h-4" />
              <span>Simulador Prático de Decisão Judicial</span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-[#EEE2DC] bg-white/10 px-3 py-1.5 rounded-xl border border-white/15 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#EDC7B7]" />
              <span>Casos Resolvidos: {solvedCount} de {cases.length}</span>
            </div>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Simulador de Casos Reais de Foro & Tribunal
          </h2>

          <p className="text-[#EEE2DC]/90 text-xs sm:text-sm font-sans max-w-2xl leading-relaxed">
            Assuma o papel de advogada ou magistrada em casos práticos baseados nas decisões e jurisprudências dos 122 slides.
          </p>
        </div>

        {/* Ambient Courtroom Backdrop */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-15 overflow-hidden pointer-events-none hidden md:block">
          <img
            src="/src/assets/images/courtroom_tribunal_modern_1791122580642.jpg"
            alt="Plenário do Tribunal"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Case Navigation Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
        {cases.map((c, idx) => {
          const isSolved = progress.solvedCaseIds.includes(c.id);
          const isCurrent = idx === currentIdx;

          return (
            <button
              key={c.id}
              onClick={() => {
                sounds.playClick(progress.soundEffectsEnabled);
                narrator.stop();
                setCurrentIdx(idx);
                setSelectedOptionId(null);
                setHasSubmitted(false);
              }}
              className={`px-3.5 py-2 rounded-xl border transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                isCurrent
                  ? 'bg-[#123C69] text-white border-[#123C69] font-bold shadow-xs'
                  : 'bg-white/80 text-[#123C69] border-[#BAB2B5]/60 hover:bg-[#EEE2DC]'
              }`}
            >
              <span>Caso {idx + 1}</span>
              {isSolved && <span className="text-[#EDC7B7]">✓</span>}
            </button>
          );
        })}
      </div>

      {/* Case Details Card */}
      <div className="rounded-3xl bg-white/95 border border-[#BAB2B5]/60 p-6 sm:p-9 shadow-sm space-y-6 text-[#123C69]">
        
        {/* Top of Case */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#BAB2B5]/30 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#EDC7B7]/50 text-[#AC3B61] flex items-center justify-center border border-[#EDC7B7]">
              <Gavel className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold text-[#AC3B61] uppercase tracking-wider block">
                Cenário Fático #{currentIdx + 1}
              </span>
              <h3 className="font-serif font-bold text-lg sm:text-xl text-[#123C69] leading-snug">
                {activeCase.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleReadCaseAudio}
              className="px-3 py-1.5 rounded-xl bg-[#EEE2DC] hover:bg-[#EDC7B7]/50 text-[#123C69] text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border border-[#BAB2B5]/60"
            >
              <Volume2 className="w-3.5 h-3.5 text-[#AC3B61]" />
              <span>Ouvir Caso</span>
            </button>

            {hasSubmitted && (
              <button
                onClick={handleResetCase}
                className="p-1.5 rounded-lg text-[#BAB2B5] hover:text-[#123C69] hover:bg-[#EEE2DC] transition-colors"
                title="Repetir caso"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Narrative Box */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#EEE2DC]/60 border border-[#BAB2B5]/50 space-y-2.5">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#AC3B61] font-bold block">
            Relatório dos Fatos
          </span>
          <p className="text-[#123C69] text-xs sm:text-sm leading-relaxed font-sans font-normal">
            {activeCase.narrative}
          </p>
        </div>

        {/* The Legal Question */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-[#123C69] font-serif font-bold text-sm sm:text-base">
            <BookOpen className="w-4 h-4 text-[#AC3B61]" />
            <span>Sua Decisão Técnica: {activeCase.question}</span>
          </div>

          <div className="space-y-3 pt-1">
            {activeCase.options.map(option => {
              const isSelected = selectedOptionId === option.id;
              let style = 'border-[#BAB2B5]/50 bg-white hover:bg-[#EEE2DC]/60 text-[#123C69]';

              if (isSelected && !hasSubmitted) {
                style = 'border-[#123C69] bg-[#EDC7B7]/30 ring-2 ring-[#123C69] text-[#123C69]';
              } else if (hasSubmitted) {
                if (option.isCorrect) {
                  style = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-medium';
                } else if (isSelected && !option.isCorrect) {
                  style = 'border-rose-400 bg-rose-50 text-rose-950';
                } else {
                  style = 'border-[#BAB2B5]/30 bg-white/40 text-[#BAB2B5]';
                }
              }

              return (
                <div
                  key={option.id}
                  onClick={() => handleSelectOption(option.id)}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 shadow-2xs ${style}`}
                >
                  <div
                    className={`w-7 h-7 rounded-xl flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5 ${
                      isSelected && !hasSubmitted
                        ? 'bg-[#123C69] text-white'
                        : hasSubmitted && option.isCorrect
                        ? 'bg-emerald-600 text-white'
                        : hasSubmitted && isSelected && !option.isCorrect
                        ? 'bg-rose-600 text-white'
                        : 'bg-[#EEE2DC] text-[#123C69] border border-[#BAB2B5]/60'
                    }`}
                  >
                    {option.id.toUpperCase()}
                  </div>

                  <div className="flex-1 text-xs sm:text-sm leading-relaxed font-sans">
                    {option.title}
                  </div>

                  {hasSubmitted && (
                    <div className="shrink-0 mt-0.5">
                      {option.isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      ) : isSelected ? (
                        <XCircle className="w-5 h-5 text-rose-500" />
                      ) : null}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Detailed Feedback & Legal Basis */}
        {hasSubmitted && (
          <div className="p-5 sm:p-6 rounded-2xl bg-[#EEE2DC]/60 border border-[#BAB2B5]/60 space-y-4">
            <div className="flex items-center gap-2">
              {selectedOption?.isCorrect ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span className="font-bold text-sm text-emerald-900">
                    Decisão Técnica Correta! +100 XP
                  </span>
                </>
              ) : (
                <>
                  <XCircle className="w-5 h-5 text-rose-600" />
                  <span className="font-bold text-sm text-rose-900">
                    Decisão Processualmente Equivocada. Veja a fundamentação abaixo.
                  </span>
                </>
              )}
            </div>

            <p className="text-xs sm:text-sm text-[#123C69]/90 leading-relaxed font-sans">
              {selectedOption?.explanation}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs border-t border-[#BAB2B5]/40">
              <div className="p-3 bg-white rounded-xl border border-[#BAB2B5]/50">
                <span className="font-mono font-bold text-[#AC3B61] block uppercase text-[10px]">
                  Base Legal & Jurisprudência
                </span>
                <span className="font-semibold text-[#123C69] mt-1 block">
                  {activeCase.legalBasis}
                </span>
              </div>

              <div className="p-3 bg-white rounded-xl border border-[#BAB2B5]/50">
                <span className="font-mono font-bold text-[#AC3B61] block uppercase text-[10px]">
                  Dica de Prática Forense
                </span>
                <span className="font-semibold text-[#123C69] mt-1 block">
                  {activeCase.practicalTip}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-[#BAB2B5]/30">
          <span className="text-xs text-[#BAB2B5] font-mono">
            Caso {currentIdx + 1} de {cases.length}
          </span>

          <div className="flex items-center gap-3">
            {!hasSubmitted ? (
              <button
                disabled={!selectedOptionId}
                onClick={handleSubmit}
                className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedOptionId
                    ? 'bg-[#AC3B61] hover:bg-[#962F50] text-white shadow-md shadow-[#AC3B61]/25'
                    : 'bg-[#BAB2B5]/30 text-[#BAB2B5] cursor-not-allowed border border-[#BAB2B5]/40'
                }`}
              >
                Prolatar Decisão
              </button>
            ) : (
              <button
                onClick={handleNextCase}
                className="px-6 py-2.5 bg-[#123C69] hover:bg-[#0E2F52] text-white text-xs font-bold rounded-xl flex items-center gap-2 cursor-pointer shadow-md transition-all"
              >
                <span>Próximo Caso</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

      </div>

    </div>
  );
};
