import React, { useState, useEffect, useCallback } from 'react';
import { UserProgress, ReadingTheme, FontSize } from './types';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ModuleReader } from './components/ModuleReader';
import { ExamSimulator } from './components/ExamSimulator';
import { CaseSimulator } from './components/CaseSimulator';
import { FlashcardDeck } from './components/FlashcardDeck';
import { DecisionTreeViewer } from './components/DecisionTreeViewer';
import { ProgressDashboard } from './components/ProgressDashboard';
import { PrintableCheatSheet } from './components/PrintableCheatSheet';
import { AccessibilityModal } from './components/AccessibilityModal';
import { SearchModal } from './components/SearchModal';
import { MotivationalLoveToaster, LOVE_MESSAGES } from './components/MotivationalLoveToaster';

import { LEGAL_MODULES } from './data/legalContent';
import { OFFICIAL_QUESTIONS } from './data/questionsData';
import { FLASHCARDS } from './data/flashcardsData';
import { CASE_STUDIES } from './data/caseStudiesData';
import { CAREER_LEVELS } from './data/badgesData';

import { sounds } from './utils/soundEffects';
import { narrator } from './utils/audioNarrator';

const LOCAL_STORAGE_KEY = 'juris_trilha_progress_v5';

const defaultProgress: UserProgress = {
  xp: 0,
  level: 1,
  completedSectionIds: [],
  answeredQuestionIds: {},
  masteredFlashcardIds: [],
  solvedCaseIds: [],
  unlockedBadgeIds: [],
  streakDays: 1,
  dailyGoalMet: false,
  notes: {},
  theme: 'sepia', // Default matches the user's exact uploaded image palette!
  fontSize: 'normal',
  dyslexicFont: false,
  soundEffectsEnabled: true,
  ambientSound: 'off',
  audioSpeed: 1.0,
};

export default function App() {
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return { ...defaultProgress, ...parsed, theme: 'sepia' };
      }
    } catch {
      // Fallback
    }
    return defaultProgress;
  });

  const [activeTab, setActiveTab] = useState<
    'trilha' | 'questoes' | 'simulador' | 'flashcards' | 'arvore' | 'progresso'
  >('trilha');
  const [isPrintableOpen, setIsPrintableOpen] = useState<boolean>(false);
  const [isAccessibilityOpen, setIsAccessibilityOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [targetModuleId, setTargetModuleId] = useState<string | undefined>(undefined);
  const [targetSectionId, setTargetSectionId] = useState<string | undefined>(undefined);

  // Love & Romantic Motivational Toast state
  const [loveMessage, setLoveMessage] = useState<string | null>(null);

  const handleTriggerLove = useCallback(() => {
    const randomMsg = LOVE_MESSAGES[Math.floor(Math.random() * LOVE_MESSAGES.length)];
    setLoveMessage(randomMsg);
  }, []);

  // Keyboard shortcut for search (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Save to local storage on change
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // Ignore
    }
  }, [progress]);

  // Check badges unlock logic
  const checkBadges = useCallback((current: UserProgress): string[] => {
    const newBadgeIds = [...current.unlockedBadgeIds];

    const unlock = (id: string) => {
      if (!newBadgeIds.includes(id)) {
        newBadgeIds.push(id);
      }
    };

    if (current.completedSectionIds.length >= 1) unlock('primeiro_passo');
    // Module 1 check
    const mod1Secs = LEGAL_MODULES[0].sections.map(s => s.id);
    if (mod1Secs.every(id => current.completedSectionIds.includes(id))) unlock('triparticao');

    // Module 2 check
    const mod2Secs = LEGAL_MODULES[1].sections.map(s => s.id);
    if (mod2Secs.every(id => current.completedSectionIds.includes(id))) unlock('fazenda_publica');

    // Module 3 check
    const mod3Secs = LEGAL_MODULES[2].sections.map(s => s.id);
    if (mod3Secs.every(id => current.completedSectionIds.includes(id))) unlock('rescisoria_mestre');

    // Module 4 check
    const mod4Secs = LEGAL_MODULES[3].sections.map(s => s.id);
    if (mod4Secs.every(id => current.completedSectionIds.includes(id))) unlock('principios_ouro');

    // Section CALII check (sec-6-1)
    if (current.completedSectionIds.includes('sec-6-1')) unlock('calii_dominado');

    // Section TEMPE RE PREPARO check (sec-6-2)
    if (current.completedSectionIds.includes('sec-6-2')) unlock('tempe_preparo');

    // Module 7 check
    const mod7Secs = LEGAL_MODULES[6].sections.map(s => s.id);
    if (mod7Secs.every(id => current.completedSectionIds.includes(id))) unlock('efeitos_plenos');

    // Official questions check
    const correctCount = Object.values(current.answeredQuestionIds).filter(q => q.isCorrect).length;
    if (correctCount >= 8) unlock('gabarito_unama');

    // Case simulator check
    if (current.solvedCaseIds.length >= CASE_STUDIES.length) unlock('magistrada');

    // Flashcard check
    if (current.masteredFlashcardIds.length >= 12) unlock('flashcard_champ');

    // Total completion check
    const totalSectionsCount = LEGAL_MODULES.reduce((acc, m) => acc + m.sections.length, 0);
    if (current.completedSectionIds.length >= totalSectionsCount) unlock('unidade_concluida');

    return newBadgeIds;
  }, []);

  const handleCompleteSection = (sectionId: string) => {
    setProgress(prev => {
      if (prev.completedSectionIds.includes(sectionId)) return prev;
      const updatedSections = [...prev.completedSectionIds, sectionId];
      const newXp = prev.xp + 50;
      const updatedCareer = [...CAREER_LEVELS].reverse().find(c => newXp >= c.minXp) || CAREER_LEVELS[0];
      
      const newBadges = checkBadges({
        ...prev,
        completedSectionIds: updatedSections,
        xp: newXp,
        level: updatedCareer.level,
      });

      return {
        ...prev,
        completedSectionIds: updatedSections,
        xp: newXp,
        level: updatedCareer.level,
        unlockedBadgeIds: newBadges,
      };
    });
  };

  const handleAnswerQuestion = (questionId: string, selectedOption: string, isCorrect: boolean) => {
    setProgress(prev => {
      const existing = prev.answeredQuestionIds[questionId];
      const updatedAnswers = {
        ...prev.answeredQuestionIds,
        [questionId]: {
          selectedOption,
          isCorrect,
          timestamp: Date.now(),
        },
      };

      const xpBonus = !existing && isCorrect ? 50 : 0;
      const newXp = prev.xp + xpBonus;
      const updatedCareer = [...CAREER_LEVELS].reverse().find(c => newXp >= c.minXp) || CAREER_LEVELS[0];

      const newBadges = checkBadges({
        ...prev,
        answeredQuestionIds: updatedAnswers,
        xp: newXp,
        level: updatedCareer.level,
      });

      return {
        ...prev,
        answeredQuestionIds: updatedAnswers,
        xp: newXp,
        level: updatedCareer.level,
        unlockedBadgeIds: newBadges,
      };
    });
  };

  const handleMasterFlashcard = (cardId: string) => {
    setProgress(prev => {
      if (prev.masteredFlashcardIds.includes(cardId)) return prev;
      const updated = [...prev.masteredFlashcardIds, cardId];
      const newXp = prev.xp + 25;
      const updatedCareer = [...CAREER_LEVELS].reverse().find(c => newXp >= c.minXp) || CAREER_LEVELS[0];

      const newBadges = checkBadges({
        ...prev,
        masteredFlashcardIds: updated,
        xp: newXp,
        level: updatedCareer.level,
      });

      return {
        ...prev,
        masteredFlashcardIds: updated,
        xp: newXp,
        level: updatedCareer.level,
        unlockedBadgeIds: newBadges,
      };
    });
  };

  const handleSolveCase = (caseId: string) => {
    setProgress(prev => {
      if (prev.solvedCaseIds.includes(caseId)) return prev;
      const updated = [...prev.solvedCaseIds, caseId];
      const newXp = prev.xp + 100;
      const updatedCareer = [...CAREER_LEVELS].reverse().find(c => newXp >= c.minXp) || CAREER_LEVELS[0];

      const newBadges = checkBadges({
        ...prev,
        solvedCaseIds: updated,
        xp: newXp,
        level: updatedCareer.level,
      });

      return {
        ...prev,
        solvedCaseIds: updated,
        xp: newXp,
        level: updatedCareer.level,
        unlockedBadgeIds: newBadges,
      };
    });
  };

  const handleSaveNote = (sectionId: string, note: string) => {
    setProgress(prev => ({
      ...prev,
      notes: {
        ...prev.notes,
        [sectionId]: note,
      },
    }));
  };

  const handleUpdateSettings = (partial: Partial<UserProgress>) => {
    setProgress(prev => ({
      ...prev,
      ...partial,
    }));
  };

  const handleToggleAmbient = () => {
    sounds.playClick(progress.soundEffectsEnabled);
    const nextAmbient: 'off' | 'brown' | 'rain' =
      progress.ambientSound === 'off'
        ? 'brown'
        : progress.ambientSound === 'brown'
        ? 'rain'
        : 'off';
    sounds.setAmbient(nextAmbient);
    handleUpdateSettings({ ambientSound: nextAmbient });
  };

  const handleResetProgress = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    setProgress(defaultProgress);
    sounds.playClick(true);
  };

  const handleTabChange = (newTab: typeof activeTab) => {
    narrator.stop();
    setActiveTab(newTab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectFromSearch = (moduleId: string, sectionId: string) => {
    setTargetModuleId(moduleId);
    setTargetSectionId(sectionId);
    handleTabChange('trilha');
    setTimeout(() => {
      const el = document.getElementById('trilha-content');
      el?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  if (isPrintableOpen) {
    return <PrintableCheatSheet onClose={() => setIsPrintableOpen(false)} />;
  }

  // Exact image palette styling with tactile textured background
  const themeClasses: Record<ReadingTheme, string> = {
    sepia: 'bg-textured-linen text-[#123C69]',
    classic: 'bg-[#FAF6F4] text-[#123C69]',
    dark: 'bg-[#1E1B1D] text-[#EEE2DC]',
    contrast: 'bg-black text-white',
  };

  const fontSizes: Record<FontSize, string> = {
    normal: 'text-sm',
    large: 'text-base',
    extralarge: 'text-lg',
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        themeClasses[progress.theme] || themeClasses.sepia
      } ${fontSizes[progress.fontSize] || fontSizes.normal} ${
        progress.dyslexicFont ? 'font-sans tracking-wide leading-relaxed' : 'font-sans'
      }`}
    >
      {/* 3-Zone Top Navigation Contract */}
      <Header
        progress={progress}
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        onOpenAccessibility={() => setIsAccessibilityOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onToggleAmbient={handleToggleAmbient}
        onTriggerLove={handleTriggerLove}
      />

      {/* Hero Banner (visible on Trilha tab) */}
      {activeTab === 'trilha' && (
        <HeroSection
          progress={progress}
          onStartStudy={() => {
            const element = document.getElementById('trilha-content');
            element?.scrollIntoView({ behavior: 'smooth' });
          }}
          onStartQuiz={() => handleTabChange('questoes')}
          onStartSimulator={() => handleTabChange('simulador')}
          onOpenFlashcards={() => handleTabChange('flashcards')}
          onOpenSearch={() => setIsSearchOpen(true)}
          onTriggerLove={handleTriggerLove}
        />
      )}

      {/* Main Tab Routing */}
      <main id="trilha-content">
        {activeTab === 'trilha' && (
          <ModuleReader
            modules={LEGAL_MODULES}
            progress={progress}
            onCompleteSection={handleCompleteSection}
            onSaveNote={handleSaveNote}
            onTriggerLove={handleTriggerLove}
            initialModuleId={targetModuleId}
            initialSectionId={targetSectionId}
          />
        )}

        {activeTab === 'questoes' && (
          <ExamSimulator
            questions={OFFICIAL_QUESTIONS}
            progress={progress}
            onAnswerQuestion={handleAnswerQuestion}
            onTriggerLove={handleTriggerLove}
          />
        )}

        {activeTab === 'simulador' && (
          <CaseSimulator
            cases={CASE_STUDIES}
            progress={progress}
            onSolveCase={handleSolveCase}
            onTriggerLove={handleTriggerLove}
          />
        )}

        {activeTab === 'flashcards' && (
          <FlashcardDeck
            flashcards={FLASHCARDS}
            progress={progress}
            onMasterFlashcard={handleMasterFlashcard}
            onTriggerLove={handleTriggerLove}
          />
        )}

        {activeTab === 'arvore' && (
          <DecisionTreeViewer progress={progress} />
        )}

        {activeTab === 'progresso' && (
          <ProgressDashboard
            progress={progress}
            onOpenPrintable={() => setIsPrintableOpen(true)}
            onResetProgress={handleResetProgress}
            onTriggerLove={handleTriggerLove}
          />
        )}
      </main>

      {/* Romantic Motivational Toast & Floating Love Button */}
      <MotivationalLoveToaster
        currentMessage={loveMessage}
        onClose={() => setLoveMessage(null)}
        onTriggerRandom={handleTriggerLove}
        soundEnabled={progress.soundEffectsEnabled}
      />

      {/* Search & Web Research Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectSection={handleSelectFromSearch}
        soundEffectsEnabled={progress.soundEffectsEnabled}
        audioSpeed={progress.audioSpeed}
      />

      {/* Reading & UI/UX Preferences Modal */}
      <AccessibilityModal
        progress={progress}
        isOpen={isAccessibilityOpen}
        onClose={() => setIsAccessibilityOpen(false)}
        onUpdateSettings={handleUpdateSettings}
      />

      {/* Editorial Footer */}
      <footer className="mt-20 border-t border-[#BAB2B5]/40 bg-[#EEE2DC]/90 backdrop-blur-md py-8 px-4 sm:px-6 lg:px-8 text-center text-xs text-[#123C69]/80 font-sans">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-medium text-[#123C69]">
            JurisTrilha · Estudo Integral de Processo Civil (1ª Unidade)
          </span>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="hover:text-[#AC3B61] cursor-pointer transition-colors"
            >
              Pesquisar CPC (Ctrl + K)
            </button>
            <span aria-hidden="true" className="text-[#BAB2B5]">·</span>
            <button
              onClick={() => setIsPrintableOpen(true)}
              className="hover:text-[#AC3B61] underline cursor-pointer transition-colors"
            >
              Vade Mecum para Impressão
            </button>
            <span aria-hidden="true" className="text-[#BAB2B5]">·</span>
            <button
              onClick={handleTriggerLove}
              className="text-[#AC3B61] hover:text-[#962F50] cursor-pointer flex items-center gap-1.5 font-bold transition-colors"
            >
              <span>❤️</span> Dose de Carinho
            </button>
          </div>
          <span className="text-[#123C69]/70">
            UNAMA · Prof. Me. Esdras Rodrigues
          </span>
        </div>
      </footer>
    </div>
  );
}
