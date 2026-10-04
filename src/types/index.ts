export type ReadingTheme = 'classic' | 'sepia' | 'dark' | 'contrast';
export type FontSize = 'normal' | 'large' | 'extralarge';

export interface UserProgress {
  xp: number;
  level: number;
  completedSectionIds: string[];
  answeredQuestionIds: Record<string, { selectedOption: string; isCorrect: boolean; timestamp: number }>;
  masteredFlashcardIds: string[];
  solvedCaseIds: string[];
  unlockedBadgeIds: string[];
  streakDays: number;
  dailyGoalMet: boolean;
  notes: Record<string, string>;
  theme: ReadingTheme;
  fontSize: FontSize;
  dyslexicFont: boolean;
  soundEffectsEnabled: boolean;
  ambientSound: 'off' | 'brown' | 'rain';
  audioSpeed: number;
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  icon: string;
  requirement: string;
}

export interface LegalSection {
  id: string;
  moduleId: string;
  title: string;
  slideRange: string;
  summary: string;
  plainLanguage: string; // Explicação em termos simples para processamento cognitivo amigável
  technicalContent: string[]; // Rigor técnico com artigos
  articles: string[];
  mnemonic?: {
    acronym: string;
    meaning: string;
    items: { letter: string; word: string; description: string }[];
  };
  visualDiagram?: {
    type: 'comparison' | 'flow' | 'steps' | 'table';
    title: string;
    items: { label: string; desc: string; highlight?: boolean }[];
  };
  examTrap: string; // Pegadinha de prova
  practicalExample: string;
  audioText: string;
}

export interface LegalModule {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  slideRange: string;
  sections: LegalSection[];
}

export interface Question {
  id: string;
  slideOrigin: number;
  topic: string;
  context?: string;
  questionText: string;
  options: {
    id: string;
    text: string;
  }[];
  correctOptionId: string;
  explanation: string;
  detailsByOption?: Record<string, string>;
}

export interface CaseStudy {
  id: string;
  title: string;
  narrative: string;
  question: string;
  options: {
    id: string;
    title: string;
    isCorrect: boolean;
    explanation: string;
  }[];
  practicalTip: string;
  legalBasis: string;
}

export interface Flashcard {
  id: string;
  category: string;
  front: string;
  back: string;
  mnemonicHint?: string;
  articles: string;
}
