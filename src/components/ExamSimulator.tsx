import React, { useState } from 'react';
import { Question, UserProgress } from '../types';
import { CheckCircle2, XCircle, Volume2, ArrowRight, RotateCcw } from 'lucide-react';
import { narrator } from '../utils/audioNarrator';
import { sounds } from '../utils/soundEffects';
import confetti from 'canvas-confetti';

interface ExamSimulatorProps {
  questions: Question[];
  progress: UserProgress;
  onAnswerQuestion: (questionId: string, selectedOption: string, isCorrect: boolean) => void;
  onTriggerLove: () => void;
}

export const ExamSimulator: React.FC<ExamSimulatorProps> = ({
  questions,
  progress,
  onAnswerQuestion,
  onTriggerLove,
}) => {
  const [filterMode, setFilterMode] = useState<'all' | 'pending' | 'correct' | 'incorrect'>('all');
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);

  const filteredQuestions = questions.filter(q => {
    const record = progress.answeredQuestionIds[q.id];
    if (filterMode === 'pending') return !record;
    if (filterMode === 'correct') return record?.isCorrect;
    if (filterMode === 'incorrect') return record && !record.isCorrect;
    return true;
  });

  const activeQuestion = filteredQuestions[selectedIdx] || filteredQuestions[0] || questions[0];
  const existingRecord = progress.answeredQuestionIds[activeQuestion?.id];

  const handleSelectOption = (optionId: string) => {
    if (hasSubmitted || existingRecord) return;
    sounds.playClick(progress.soundEffectsEnabled);
    setSelectedOptionId(optionId);
  };

  const handleSubmit = () => {
    if (!selectedOptionId || !activeQuestion) return;
    const isCorrect = selectedOptionId.toLowerCase() === activeQuestion.correctOptionId.toLowerCase();
    setHasSubmitted(true);

    if (isCorrect) {
      sounds.playSuccess(progress.soundEffectsEnabled);
      try {
        confetti({
          particleCount: 60,
          spread: 75,
          origin: { y: 0.75 },
          colors: ['#AC3B61', '#EDC7B7', '#123C69', '#ffffff'],
        });
      } catch {
        // Fallback
      }
      onTriggerLove();
    } else {
      sounds.playClick(progress.soundEffectsEnabled);
    }

    onAnswerQuestion(activeQuestion.id, selectedOptionId, isCorrect);
  };

  const handleNext = () => {
    sounds.playClick(progress.soundEffectsEnabled);
    narrator.stop();
    setSelectedOptionId(null);
    setHasSubmitted(false);
    if (selectedIdx < filteredQuestions.length - 1) {
      setSelectedIdx(selectedIdx + 1);
    }
  };

  const handleResetCurrent = () => {
    sounds.playClick(progress.soundEffectsEnabled);
    setSelectedOptionId(null);
    setHasSubmitted(false);
  };

  const handleReadAudio = () => {
    if (!activeQuestion) return;
    sounds.playClick(progress.soundEffectsEnabled);
    const text = `Questão número ${selectedIdx + 1}. ${activeQuestion.questionText}. ` +
      activeQuestion.options.map(o => `Alternativa ${o.id}: ${o.text}`).join('. ');
    narrator.toggle(text, progress.audioSpeed);
  };

  const totalAnswered = Object.keys(progress.answeredQuestionIds).length;
  const totalCorrect = Object.values(progress.answeredQuestionIds).filter(a => a.isCorrect).length;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* Top Banner and Score Bar in Palette */}
      <div className="rounded-3xl bg-white/90 border border-[#BAB2B5]/60 p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[#123C69]">
        <div>
          <span className="text-[10px] font-mono text-[#AC3B61] uppercase tracking-wider font-bold block">
            Banco Oficial UNAMA · Prof. Me. Esdras Rodrigues
          </span>
          <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#123C69] mt-1">
            Simulador de Questões de Prova (14 Questões dos Slides)
          </h2>
          <p className="text-xs text-[#123C69]/80 mt-1 font-sans">
            Treine cada questão formulada pelo professor com gabarito fundamentado e pontuação.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <span className="text-xs text-[#BAB2B5] block font-mono">Taxa de Acerto</span>
            <span className="text-lg font-bold font-mono text-[#AC3B61]">
              {totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0}%
            </span>
          </div>

          <div className="h-10 w-px bg-[#BAB2B5]/40" />

          <div className="text-right">
            <span className="text-xs text-[#BAB2B5] block font-mono">Concluídas</span>
            <span className="text-lg font-bold font-mono text-[#123C69]">
              {totalAnswered}/{questions.length}
            </span>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
        {[
          { id: 'all', label: `Todas (${questions.length})` },
          { id: 'pending', label: `Pendentes (${questions.length - totalAnswered})` },
          { id: 'correct', label: `Acertos (${totalCorrect})` },
          { id: 'incorrect', label: `Para Revisar (${totalAnswered - totalCorrect})` },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => {
              sounds.playClick(progress.soundEffectsEnabled);
              setFilterMode(tab.id as typeof filterMode);
              setSelectedIdx(0);
              setSelectedOptionId(null);
              setHasSubmitted(false);
            }}
            className={`px-3 py-1.5 rounded-xl border transition-all cursor-pointer whitespace-nowrap ${
              filterMode === tab.id
                ? 'bg-[#123C69] text-white border-[#123C69] font-bold shadow-xs'
                : 'bg-white/80 text-[#123C69] border-[#BAB2B5]/60 hover:bg-[#EEE2DC]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Question Card */}
      {activeQuestion ? (
        <div className="rounded-3xl bg-white/95 border border-[#BAB2B5]/60 p-6 sm:p-9 shadow-sm space-y-6 text-[#123C69]">
          
          {/* Header of Question */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#BAB2B5]/30 pb-4">
            <div className="flex items-center gap-2.5">
              <span className="px-3 py-1 rounded-full bg-[#EDC7B7]/50 border border-[#EDC7B7] text-[#123C69] text-xs font-mono font-bold">
                Questão {selectedIdx + 1} de {filteredQuestions.length}
              </span>
              <span className="text-xs font-mono text-[#AC3B61] font-bold">
                Origem: Slide {activeQuestion.slideOrigin}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleReadAudio}
                className="px-3 py-1.5 rounded-xl bg-[#EEE2DC] hover:bg-[#EDC7B7]/50 text-[#123C69] text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border border-[#BAB2B5]/60"
              >
                <Volume2 className="w-3.5 h-3.5 text-[#AC3B61]" />
                <span>Ouvir Questão</span>
              </button>

              {existingRecord && (
                <button
                  onClick={handleResetCurrent}
                  className="p-1.5 rounded-lg text-[#BAB2B5] hover:text-[#123C69] hover:bg-[#EEE2DC] transition-colors"
                  title="Refazer questão"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Topic Title */}
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-[#AC3B61] uppercase tracking-wider block">
              Tópico Temático: {activeQuestion.topic}
            </span>
            <p className="text-[#123C69] text-base sm:text-lg leading-relaxed font-serif font-semibold">
              {activeQuestion.questionText}
            </p>
          </div>

          {/* Options */}
          <div className="space-y-3 pt-2">
            {activeQuestion.options.map(option => {
              const isSelected = (selectedOptionId || existingRecord?.selectedOption) === option.id;
              const isAnswered = hasSubmitted || !!existingRecord;
              const isOptionCorrect = option.id.toLowerCase() === activeQuestion.correctOptionId.toLowerCase();

              let cardStyle = 'border-[#BAB2B5]/50 bg-white hover:bg-[#EEE2DC]/60 text-[#123C69]';

              if (isSelected && !isAnswered) {
                cardStyle = 'border-[#123C69] bg-[#EDC7B7]/30 ring-2 ring-[#123C69] text-[#123C69]';
              } else if (isAnswered) {
                if (isOptionCorrect) {
                  cardStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-medium';
                } else if (isSelected && !isOptionCorrect) {
                  cardStyle = 'border-rose-400 bg-rose-50 text-rose-950';
                } else {
                  cardStyle = 'border-[#BAB2B5]/30 bg-white/40 text-[#BAB2B5]';
                }
              }

              return (
                <div
                  key={option.id}
                  onClick={() => handleSelectOption(option.id)}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 shadow-2xs ${cardStyle}`}
                >
                  <div
                    className={`w-7 h-7 rounded-xl flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5 ${
                      isSelected && !isAnswered
                        ? 'bg-[#123C69] text-white'
                        : isAnswered && isOptionCorrect
                        ? 'bg-emerald-600 text-white'
                        : isAnswered && isSelected && !isOptionCorrect
                        ? 'bg-rose-600 text-white'
                        : 'bg-[#EEE2DC] text-[#123C69] border border-[#BAB2B5]/60'
                    }`}
                  >
                    {option.id.toUpperCase()}
                  </div>

                  <div className="flex-1 text-xs sm:text-sm leading-relaxed font-sans">
                    {option.text}
                  </div>

                  {isAnswered && (
                    <div className="shrink-0 mt-0.5">
                      {isOptionCorrect ? (
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

          {/* Feedback Explanation Box */}
          {(hasSubmitted || existingRecord) && (
            <div className="p-5 sm:p-6 rounded-2xl bg-[#EEE2DC]/60 border border-[#BAB2B5]/60 space-y-3">
              <div className="flex items-center gap-2">
                {(selectedOptionId || existingRecord?.selectedOption)?.toLowerCase() === activeQuestion.correctOptionId.toLowerCase() ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span className="font-bold text-sm text-emerald-900">
                      Excelente, você acertou! +50 XP
                    </span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5 text-rose-600" />
                    <span className="font-bold text-sm text-rose-900">
                      Resposta incorreta. A alternativa correta é a letra {activeQuestion.correctOptionId.toUpperCase()}.
                    </span>
                  </>
                )}
              </div>

              <div className="text-xs sm:text-sm text-[#123C69]/90 leading-relaxed font-sans border-t border-[#BAB2B5]/40 pt-3">
                <strong className="block text-[#123C69] mb-1 font-serif">Fundamentação & Explicação do Professor:</strong>
                {activeQuestion.explanation}
              </div>
            </div>
          )}

          {/* Action Row */}
          <div className="flex items-center justify-between pt-4 border-t border-[#BAB2B5]/30">
            <span className="text-xs text-[#BAB2B5] font-mono">
              Questão {selectedIdx + 1} de {filteredQuestions.length}
            </span>

            <div className="flex items-center gap-3">
              {!hasSubmitted && !existingRecord ? (
                <button
                  disabled={!selectedOptionId}
                  onClick={handleSubmit}
                  className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedOptionId
                      ? 'bg-[#AC3B61] hover:bg-[#962F50] text-white shadow-md shadow-[#AC3B61]/25'
                      : 'bg-[#BAB2B5]/30 text-[#BAB2B5] cursor-not-allowed border border-[#BAB2B5]/40'
                  }`}
                >
                  Confirmar Resposta
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="px-6 py-2.5 bg-[#123C69] hover:bg-[#0E2F52] text-white text-xs font-bold rounded-xl flex items-center gap-2 cursor-pointer shadow-md transition-all"
                >
                  <span>Próxima Questão</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

        </div>
      ) : (
        <div className="rounded-3xl bg-white border border-[#BAB2B5]/60 p-12 text-center text-[#123C69]/60">
          Nenhuma questão encontrada para este filtro.
        </div>
      )}

    </div>
  );
};
