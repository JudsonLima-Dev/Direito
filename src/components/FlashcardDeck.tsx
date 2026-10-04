import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Flashcard, UserProgress } from '../types';
import { RotateCw, Volume2, Sparkles, CheckCircle2, Shuffle, ArrowLeft, ArrowRight, Lightbulb } from 'lucide-react';
import { narrator } from '../utils/audioNarrator';
import { sounds } from '../utils/soundEffects';

interface FlashcardDeckProps {
  flashcards: Flashcard[];
  progress: UserProgress;
  onMasterFlashcard: (cardId: string) => void;
  onTriggerLove: () => void;
}

export const FlashcardDeck: React.FC<FlashcardDeckProps> = ({
  flashcards,
  progress,
  onMasterFlashcard,
  onTriggerLove,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Mnemônico', 'Espécies', 'Princípio', 'Prazo & Teto'];

  const filteredCards = flashcards.filter(c => {
    if (selectedCategory === 'Todos') return true;
    return c.category.toLowerCase().includes(selectedCategory.toLowerCase());
  });

  const activeCard = filteredCards[currentIndex] || filteredCards[0] || flashcards[0];
  const isMastered = progress.masteredFlashcardIds.includes(activeCard?.id);

  const handleFlip = () => {
    sounds.playClick(progress.soundEffectsEnabled);
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    sounds.playClick(progress.soundEffectsEnabled);
    narrator.stop();
    setIsFlipped(false);
    setCurrentIndex(prev => (prev + 1) % filteredCards.length);
  };

  const handlePrev = () => {
    sounds.playClick(progress.soundEffectsEnabled);
    narrator.stop();
    setIsFlipped(false);
    setCurrentIndex(prev => (prev - 1 + filteredCards.length) % filteredCards.length);
  };

  const handleShuffle = () => {
    sounds.playClick(progress.soundEffectsEnabled);
    narrator.stop();
    setIsFlipped(false);
    setCurrentIndex(Math.floor(Math.random() * filteredCards.length));
  };

  const handleMaster = () => {
    sounds.playSuccess(progress.soundEffectsEnabled);
    onMasterFlashcard(activeCard.id);
    onTriggerLove();
    setTimeout(() => {
      handleNext();
    }, 400);
  };

  const handleReadAudio = () => {
    sounds.playClick(progress.soundEffectsEnabled);
    const textToRead = isFlipped ? activeCard.back : activeCard.front;
    narrator.toggle(textToRead, progress.audioSpeed);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* Header and Stats */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#BAB2B5]/40 pb-4">
        <div>
          <span className="text-[10px] font-mono text-[#AC3B61] uppercase tracking-wider font-bold block">
            Retenção e Memorização
          </span>
          <h2 className="font-serif font-bold text-2xl text-[#123C69] mt-1">
            Flashcards & Mnemônicos Estratégicos
          </h2>
          <p className="text-xs text-[#123C69]/80 mt-1 font-sans">
            Gire os cartões para testar seu domínio imediato sobre os 122 slides.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <span className="text-xs text-[#BAB2B5] block font-mono">Dominados</span>
            <span className="text-base font-bold font-mono text-[#123C69]">
              {progress.masteredFlashcardIds.length} / {flashcards.length}
            </span>
          </div>
          <button
            onClick={handleShuffle}
            className="p-2.5 rounded-xl border border-[#BAB2B5]/60 hover:bg-[#EEE2DC] text-[#123C69] transition-colors cursor-pointer"
            title="Embaralhar cartões"
          >
            <Shuffle className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => {
              sounds.playClick(progress.soundEffectsEnabled);
              setSelectedCategory(cat);
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
            className={`px-3 py-1.5 rounded-xl border transition-all cursor-pointer whitespace-nowrap ${
              selectedCategory === cat
                ? 'bg-[#123C69] text-white border-[#123C69] font-bold shadow-xs'
                : 'bg-white/80 text-[#123C69] border-[#BAB2B5]/60 hover:bg-[#EEE2DC]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 3D Flip Card Container */}
      <div className="relative min-h-[360px] sm:min-h-[380px] perspective-1000">
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="w-full h-full relative"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Card Face */}
          <div
            onClick={handleFlip}
            className="w-full min-h-[340px] sm:min-h-[380px] rounded-3xl bg-white border border-[#BAB2B5]/60 p-6 sm:p-10 shadow-lg cursor-pointer transition-all hover:border-[#AC3B61] flex flex-col justify-between relative group select-none overflow-hidden text-[#123C69]"
          >
            {/* Top Accent Stripe */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#123C69] via-[#AC3B61] to-[#EDC7B7]" />

            {/* Top Meta */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#123C69] bg-[#EDC7B7]/50 px-3 py-1 rounded-full border border-[#EDC7B7]">
                {activeCard.category}
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={e => {
                    e.stopPropagation();
                    handleReadAudio();
                  }}
                  className="p-2 rounded-xl bg-[#EEE2DC] hover:bg-[#EDC7B7]/50 text-[#123C69] transition-colors"
                  title="Ouvir este card"
                >
                  <Volume2 className="w-4 h-4 text-[#AC3B61]" />
                </button>
                <span className="text-[11px] text-[#123C69]/60 font-sans">
                  {isFlipped ? 'Verso (Resposta)' : 'Frente (Pergunta)'}
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="my-auto py-6 text-center space-y-4">
              {!isFlipped ? (
                <>
                  <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-[#123C69] leading-snug">
                    {activeCard.front}
                  </h3>
                  <p className="text-xs text-[#123C69]/60 font-sans">
                    Toque no cartão para conferir a resposta e a fundamentação
                  </p>
                </>
              ) : (
                <div className="space-y-4 text-left max-w-2xl mx-auto">
                  <p className="text-[#123C69] text-sm sm:text-base leading-relaxed font-sans whitespace-pre-line font-medium">
                    {activeCard.back}
                  </p>

                  {activeCard.mnemonicHint && (
                    <div className="p-3.5 bg-[#EDC7B7]/40 border border-[#EDC7B7] rounded-xl flex items-center gap-2.5 text-xs text-[#123C69] font-medium">
                      <Lightbulb className="w-4 h-4 text-[#AC3B61] shrink-0" />
                      <span>{activeCard.mnemonicHint}</span>
                    </div>
                  )}

                  <div className="pt-2 text-xs text-[#123C69]/70 font-mono">
                    Artigos / Súmulas correlatas: {activeCard.articles}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Meta */}
            <div className="flex items-center justify-between pt-4 border-t border-[#BAB2B5]/30 text-xs text-[#123C69]/70">
              <span className="flex items-center gap-2 font-sans group-hover:text-[#AC3B61] transition-colors">
                <RotateCw className="w-3.5 h-3.5" />
                <span>Girar cartão</span>
              </span>

              <span className="font-mono text-[#BAB2B5]">
                {currentIndex + 1} de {filteredCards.length}
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Control Buttons */}
      <div className="flex items-center justify-between gap-3 pt-2">
        <button
          onClick={handlePrev}
          className="px-4 py-2.5 border border-[#BAB2B5] bg-white hover:bg-[#EEE2DC] text-[#123C69] text-xs font-semibold rounded-xl flex items-center gap-2 cursor-pointer transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Anterior</span>
        </button>

        <button
          onClick={handleMaster}
          className={`px-5 py-2.5 text-xs font-semibold rounded-xl flex items-center gap-2 cursor-pointer transition-all ${
            isMastered
              ? 'bg-emerald-600 text-white shadow-xs'
              : 'bg-[#AC3B61] hover:bg-[#962F50] text-white shadow-md shadow-[#AC3B61]/25'
          }`}
        >
          <CheckCircle2 className="w-4 h-4" />
          <span>{isMastered ? 'Já Dominado ✓' : 'Marcar como Dominado (+25 XP)'}</span>
        </button>

        <button
          onClick={handleNext}
          className="px-4 py-2.5 border border-[#BAB2B5] bg-white hover:bg-[#EEE2DC] text-[#123C69] text-xs font-semibold rounded-xl flex items-center gap-2 cursor-pointer transition-colors"
        >
          <span className="hidden sm:inline">Próximo</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
