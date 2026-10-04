import React, { useState, useEffect } from 'react';
import { LegalModule, LegalSection, UserProgress } from '../types';
import { Volume2, VolumeX, CheckCircle2, ChevronRight, ChevronLeft, Lightbulb, Scale, Edit3, Save, Layers, AlertCircle } from 'lucide-react';
import { narrator } from '../utils/audioNarrator';
import { sounds } from '../utils/soundEffects';
import confetti from 'canvas-confetti';

interface ModuleReaderProps {
  modules: LegalModule[];
  progress: UserProgress;
  onCompleteSection: (sectionId: string) => void;
  onSaveNote: (sectionId: string, note: string) => void;
  onTriggerLove: () => void;
  initialModuleId?: string;
  initialSectionId?: string;
}

export const ModuleReader: React.FC<ModuleReaderProps> = ({
  modules,
  progress,
  onCompleteSection,
  onSaveNote,
  onTriggerLove,
  initialModuleId,
  initialSectionId,
}) => {
  const [selectedModuleId, setSelectedModuleId] = useState<string>(initialModuleId || modules[0].id);
  const [selectedSectionId, setSelectedSectionId] = useState<string>(
    initialSectionId || modules[0].sections[0].id
  );
  const [localNote, setLocalNote] = useState<string>('');
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);
  const [isAudioPaused, setIsAudioPaused] = useState<boolean>(false);

  // Update selection if props change from external search navigation
  useEffect(() => {
    if (initialModuleId) setSelectedModuleId(initialModuleId);
    if (initialSectionId) setSelectedSectionId(initialSectionId);
  }, [initialModuleId, initialSectionId]);

  const currentModule = modules.find(m => m.id === selectedModuleId) || modules[0];
  const currentSection = currentModule.sections.find(s => s.id === selectedSectionId) || currentModule.sections[0];

  // Load section notes
  useEffect(() => {
    setLocalNote(progress.notes[currentSection.id] || '');
  }, [currentSection.id, progress.notes]);

  // Audio listener
  useEffect(() => {
    narrator.setListener(state => {
      setIsAudioPlaying(state.isPlaying);
      setIsAudioPaused(state.isPaused);
    });

    return () => {
      narrator.setListener(() => {});
    };
  }, []);

  const handleMarkComplete = (sec: LegalSection) => {
    sounds.playSuccess(progress.soundEffectsEnabled);
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#AC3B61', '#EDC7B7', '#123C69', '#ffffff'],
      });
    } catch {
      // Fallback
    }
    onCompleteSection(sec.id);
    onTriggerLove();
  };

  const handleSaveNoteAction = () => {
    sounds.playClick(progress.soundEffectsEnabled);
    onSaveNote(currentSection.id, localNote);
  };

  const handleToggleAudio = () => {
    sounds.playClick(progress.soundEffectsEnabled);
    narrator.toggle(currentSection.audioText, progress.audioSpeed);
  };

  const handleNextSection = () => {
    sounds.playClick(progress.soundEffectsEnabled);
    narrator.stop();
    const curIdx = currentModule.sections.findIndex(s => s.id === currentSection.id);
    if (curIdx < currentModule.sections.length - 1) {
      setSelectedSectionId(currentModule.sections[curIdx + 1].id);
    } else {
      const curModIdx = modules.findIndex(m => m.id === currentModule.id);
      if (curModIdx < modules.length - 1) {
        const nextMod = modules[curModIdx + 1];
        setSelectedModuleId(nextMod.id);
        setSelectedSectionId(nextMod.sections[0].id);
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevSection = () => {
    sounds.playClick(progress.soundEffectsEnabled);
    narrator.stop();
    const curIdx = currentModule.sections.findIndex(s => s.id === currentSection.id);
    if (curIdx > 0) {
      setSelectedSectionId(currentModule.sections[curIdx - 1].id);
    } else {
      const curModIdx = modules.findIndex(m => m.id === currentModule.id);
      if (curModIdx > 0) {
        const prevMod = modules[curModIdx - 1];
        setSelectedModuleId(prevMod.id);
        setSelectedSectionId(prevMod.sections[prevMod.sections.length - 1].id);
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isCurrentCompleted = progress.completedSectionIds.includes(currentSection.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Module Navigation Tabs */}
      <div className="w-full overflow-x-auto pb-2 scrollbar-none">
        <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white/80 border border-[#BAB2B5]/60 shadow-xs w-max min-w-full sm:min-w-0">
          {modules.map(mod => {
            const isSelected = mod.id === selectedModuleId;
            const completedInMod = mod.sections.filter(s => progress.completedSectionIds.includes(s.id)).length;
            const isAllCompleted = completedInMod === mod.sections.length;

            return (
              <button
                key={mod.id}
                onClick={() => {
                  sounds.playClick(progress.soundEffectsEnabled);
                  narrator.stop();
                  setSelectedModuleId(mod.id);
                  setSelectedSectionId(mod.sections[0].id);
                }}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs transition-all whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? 'bg-[#123C69] text-[#EEE2DC] font-bold shadow-md'
                    : 'text-[#123C69] hover:bg-[#EDC7B7]/40'
                }`}
              >
                {isAllCompleted ? (
                  <CheckCircle2 className={`w-3.5 h-3.5 ${isSelected ? 'text-[#EDC7B7]' : 'text-emerald-600'} shrink-0`} />
                ) : (
                  <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[#EDC7B7]' : 'bg-[#AC3B61]'} shrink-0`} />
                )}
                <span>M{mod.number}: {mod.title.split(':')[0]}</span>
                <span className={`text-[11px] font-mono ${isSelected ? 'text-[#EDC7B7]' : 'text-[#123C69]/70'}`}>
                  ({completedInMod}/{mod.sections.length})
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Grid: Sidebar Navigator + Reading Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Sub-Navigation: Sections list for current module */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="rounded-2xl bg-white/85 border border-[#BAB2B5]/60 p-5 sm:p-6 shadow-sm space-y-4">
            <div className="border-b border-[#BAB2B5]/40 pb-4">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#AC3B61] font-bold block">
                Módulo {currentModule.number} · Slides {currentModule.slideRange}
              </span>
              <h2 className="font-serif font-bold text-xl text-[#123C69] mt-1 leading-snug">
                {currentModule.title}
              </h2>
              <p className="text-xs text-[#123C69]/80 mt-1 font-sans leading-relaxed">
                {currentModule.subtitle}
              </p>
            </div>

            {/* Sections List */}
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-[#123C69] uppercase tracking-wider block">
                Conteúdos deste Módulo:
              </span>
              <div className="space-y-1.5">
                {currentModule.sections.map((sec, idx) => {
                  const isSecSelected = sec.id === selectedSectionId;
                  const isDone = progress.completedSectionIds.includes(sec.id);

                  return (
                    <button
                      key={sec.id}
                      onClick={() => {
                        sounds.playClick(progress.soundEffectsEnabled);
                        narrator.stop();
                        setSelectedSectionId(sec.id);
                      }}
                      className={`w-full text-left p-3 rounded-xl border text-xs transition-all flex items-start justify-between gap-2.5 cursor-pointer ${
                        isSecSelected
                          ? 'bg-[#EDC7B7]/40 border-[#AC3B61] text-[#123C69] font-bold shadow-xs'
                          : 'bg-white/60 hover:bg-white border-[#BAB2B5]/40 text-[#123C69]/90'
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        <span className="text-[#AC3B61] font-mono text-[11px] mt-0.5">
                          {idx + 1}.
                        </span>
                        <div>
                          <span className="block font-medium text-[#123C69] leading-tight">
                            {sec.title}
                          </span>
                          <span className="text-[11px] text-[#123C69]/60 mt-1 block font-mono">
                            Slides {sec.slideRange}
                          </span>
                        </div>
                      </div>

                      <div className="shrink-0 mt-0.5">
                        {isDone ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <div className="w-4 h-4 rounded-full border border-[#BAB2B5]" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Notes Box */}
          <div className="rounded-2xl bg-white/85 border border-[#BAB2B5]/60 p-5 shadow-sm space-y-3">
            <div className="flex items-center justify-between text-xs font-medium text-[#123C69]">
              <span className="flex items-center gap-1.5 font-bold">
                <Edit3 className="w-3.5 h-3.5 text-[#AC3B61]" />
                <span>Caderno de Anotações</span>
              </span>
              {progress.notes[currentSection.id] && (
                <span className="text-[#AC3B61] text-[11px] font-bold">
                  Salvo ✓
                </span>
              )}
            </div>

            <textarea
              value={localNote}
              onChange={e => setLocalNote(e.target.value)}
              placeholder="Digite aqui suas observações, dúvidas ou resumos pessoais para esta lição..."
              rows={4}
              className="w-full text-xs p-3 rounded-xl border border-[#BAB2B5]/60 bg-white focus:border-[#AC3B61] focus:outline-none text-[#123C69] placeholder-[#BAB2B5] resize-none font-sans"
            />

            <button
              onClick={handleSaveNoteAction}
              className="w-full py-2 bg-[#EDC7B7]/50 hover:bg-[#EDC7B7] text-[#123C69] text-xs font-semibold rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer border border-[#BAB2B5]/40"
            >
              <Save className="w-3.5 h-3.5 text-[#AC3B61]" />
              <span>Salvar Anotação</span>
            </button>
          </div>
        </aside>

        {/* Right Canvas: Deep Theoretical & Pedagogical Reader */}
        <section className="lg:col-span-8 space-y-6">
          <div
            className="rounded-3xl bg-white/95 border border-[#BAB2B5]/60 p-6 sm:p-9 shadow-lg space-y-7 relative overflow-hidden text-[#123C69]"
          >
            {/* Top Accent Stripe */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#123C69] via-[#AC3B61] to-[#EDC7B7]" />

            {/* Header: Title, Slides, Audio Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#BAB2B5]/30 pb-5">
              <div>
                <div className="flex items-center gap-2 text-[#AC3B61] text-xs font-mono font-medium">
                  <span>MÓDULO {currentModule.number}</span>
                  <span>·</span>
                  <span>SLIDES {currentSection.slideRange}</span>
                </div>
                <h1 className="font-serif font-bold text-2xl sm:text-3xl text-[#123C69] mt-1 leading-snug">
                  {currentSection.title}
                </h1>
              </div>

              {/* Audio Narrator Bar */}
              <div className="flex items-center gap-2 bg-[#EEE2DC] border border-[#BAB2B5]/60 p-1.5 rounded-xl">
                <button
                  onClick={handleToggleAudio}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                    isAudioPlaying
                      ? 'bg-[#AC3B61] text-white shadow-md'
                      : 'bg-white text-[#123C69] hover:bg-white/80'
                  }`}
                  title={isAudioPlaying ? 'Pausar ou Parar Narração' : 'Ouvir Narração Desta Lição'}
                >
                  <Volume2 className={`w-4 h-4 ${isAudioPlaying && !isAudioPaused ? 'text-white animate-pulse' : 'text-[#AC3B61]'}`} />
                  <span>{isAudioPlaying ? (isAudioPaused ? 'Continuar' : 'Pausar') : 'Ouvir Lição'}</span>
                </button>

                {isAudioPlaying && (
                  <button
                    onClick={() => {
                      sounds.playClick(progress.soundEffectsEnabled);
                      narrator.stop();
                    }}
                    className="p-2 text-[#123C69]/70 hover:text-[#123C69] rounded-lg transition-colors cursor-pointer"
                    title="Parar narração"
                  >
                    <VolumeX className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Direct Plain-Language Conceptual Explanation */}
            <div className="rounded-2xl bg-[#EDC7B7]/25 border border-[#EDC7B7] p-5 sm:p-6 space-y-2.5">
              <div className="flex items-center gap-2 text-[#AC3B61] font-bold text-xs uppercase tracking-wider">
                <Lightbulb className="w-4 h-4 text-[#AC3B61]" />
                <span>Conceito Central & Síntese Clara</span>
              </div>
              <p className="text-[#123C69] text-sm sm:text-base leading-relaxed font-sans font-normal">
                {currentSection.plainLanguage}
              </p>
            </div>

            {/* Mnemonic Breakdown Card in Textured Tone */}
            {currentSection.mnemonic && (
              <div className="rounded-2xl bg-textured-dark text-[#EEE2DC] border border-[#EDC7B7]/40 p-6 space-y-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-textured-overlay opacity-25 pointer-events-none" />
                <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="flex items-center gap-2 text-xs font-bold text-[#EDC7B7] uppercase tracking-wide">
                    <Lightbulb className="w-4 h-4 text-[#EDC7B7]" />
                    <span>Mnemônico Estratégico: {currentSection.mnemonic.acronym}</span>
                  </span>
                  <span className="text-xs text-[#EEE2DC]/90 font-medium font-sans">
                    {currentSection.mnemonic.meaning}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-1">
                  {currentSection.mnemonic.items.map((item, i) => (
                    <div
                      key={i}
                      className="bg-white/10 border border-[#EDC7B7]/30 p-3.5 rounded-xl shadow-xs"
                    >
                      <span className="font-mono font-bold text-[#EDC7B7] text-sm block">
                        {item.letter} — {item.word}
                      </span>
                      <span className="text-xs text-[#EEE2DC]/90 leading-snug mt-1.5 block font-sans">
                        {item.description}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Legal Foundation & Articles Rigor */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#123C69] font-bold text-xs uppercase tracking-wider">
                <Scale className="w-4 h-4 text-[#AC3B61]" />
                <span>Fundamentação Técnica & Preceitos Legais</span>
              </div>

              <div className="space-y-3">
                {currentSection.technicalContent.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-[#123C69]/90 text-sm sm:text-[15px] leading-relaxed font-sans"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {currentSection.articles.length > 0 && (
                <div className="pt-2 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-[#123C69]/70">Dispositivos:</span>
                  {currentSection.articles.map((art, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono font-bold text-[#123C69] bg-[#EDC7B7]/40 px-2.5 py-1 rounded-lg border border-[#EDC7B7]"
                    >
                      {art}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Visual Diagram Table / Comparison (if applicable) */}
            {currentSection.visualDiagram && (
              <div className="rounded-2xl bg-[#EEE2DC]/60 border border-[#BAB2B5]/60 p-5 sm:p-6 space-y-3.5">
                <div className="flex items-center gap-2 text-[#123C69] font-serif font-bold text-sm">
                  <Layers className="w-4 h-4 text-[#AC3B61]" />
                  <span>{currentSection.visualDiagram.title}</span>
                </div>

                <div className="grid grid-cols-1 gap-2.5">
                  {currentSection.visualDiagram.items.map((it, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-3.5 rounded-xl border border-[#BAB2B5]/50 flex flex-col sm:flex-row sm:items-baseline gap-2.5 shadow-2xs"
                    >
                      <span className="font-bold text-xs text-[#AC3B61] shrink-0 sm:w-52">
                        {it.label}:
                      </span>
                      <span className="text-xs text-[#123C69]/90 leading-relaxed font-sans">
                        {it.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Practical Example */}
            <div className="rounded-2xl bg-[#123C69]/5 border border-[#123C69]/20 p-5 space-y-2">
              <span className="text-xs font-bold text-[#123C69] uppercase tracking-wide block">
                Exemplo Prático de Aplicação
              </span>
              <p className="text-[#123C69]/90 text-xs sm:text-sm leading-relaxed font-sans">
                {currentSection.practicalExample}
              </p>
            </div>

            {/* Exam Trap Alert Card */}
            <div className="rounded-2xl bg-[#AC3B61]/10 border border-[#AC3B61]/35 p-5 space-y-2">
              <div className="flex items-center gap-2 text-[#AC3B61] font-bold text-xs uppercase tracking-wide">
                <AlertCircle className="w-4 h-4 text-[#AC3B61]" />
                <span>Ponto de Atenção em Avaliações (Pegadinha Frequente)</span>
              </div>
              <p className="text-[#123C69] text-xs sm:text-sm leading-relaxed font-sans">
                {currentSection.examTrap}
              </p>
            </div>

            {/* Bottom Section Actions: Prev / Complete / Next */}
            <div className="border-t border-[#BAB2B5]/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={handlePrevSection}
                className="w-full sm:w-auto px-4 py-2.5 border border-[#BAB2B5] text-[#123C69] hover:bg-[#EEE2DC] text-xs font-semibold rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Seção Anterior</span>
              </button>

              <button
                onClick={() => handleMarkComplete(currentSection)}
                className={`w-full sm:w-auto px-6 py-2.5 text-xs font-bold rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md ${
                  isCurrentCompleted
                    ? 'bg-emerald-600 text-white shadow-emerald-600/20'
                    : 'bg-[#AC3B61] hover:bg-[#962F50] text-white shadow-[#AC3B61]/25 hover:scale-[1.02]'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>
                  {isCurrentCompleted ? 'Concluída ✓ (+50 XP)' : 'Concluir esta Seção (+50 XP)'}
                </span>
              </button>

              <button
                onClick={handleNextSection}
                className="w-full sm:w-auto px-4 py-2.5 border border-[#BAB2B5] text-[#123C69] hover:bg-[#EEE2DC] text-xs font-semibold rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <span>Próxima Seção</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </section>

      </div>

    </div>
  );
};
