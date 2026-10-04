import React, { useState } from 'react';
import { DECISION_TREE, DecisionTreeNode } from '../data/decisionTreeData';
import { UserProgress } from '../types';
import { GitFork, ArrowRight, RotateCcw, Volume2, CheckCircle2 } from 'lucide-react';
import { narrator } from '../utils/audioNarrator';
import { sounds } from '../utils/soundEffects';

interface DecisionTreeViewerProps {
  progress: UserProgress;
}

export const DecisionTreeViewer: React.FC<DecisionTreeViewerProps> = ({ progress }) => {
  const [currentNodeId, setCurrentNodeId] = useState<string>('root');
  const [pathHistory, setPathHistory] = useState<string[]>(['root']);

  const currentNode: DecisionTreeNode = DECISION_TREE[currentNodeId] || DECISION_TREE['root'];

  const handleSelectOption = (targetNodeId: string) => {
    sounds.playClick(progress.soundEffectsEnabled);
    narrator.stop();
    setCurrentNodeId(targetNodeId);
    setPathHistory(prev => [...prev, targetNodeId]);
  };

  const handleReset = () => {
    sounds.playClick(progress.soundEffectsEnabled);
    narrator.stop();
    setCurrentNodeId('root');
    setPathHistory(['root']);
  };

  const handleStepBack = (targetIndex: number) => {
    sounds.playClick(progress.soundEffectsEnabled);
    narrator.stop();
    const newHistory = pathHistory.slice(0, targetIndex + 1);
    setPathHistory(newHistory);
    setCurrentNodeId(newHistory[newHistory.length - 1]);
  };

  const handleAudioRead = () => {
    sounds.playClick(progress.soundEffectsEnabled);
    let text = `${currentNode.title}. ${currentNode.question}. Contexto: ${currentNode.context}. `;
    if (currentNode.recommendation) {
      text += `Recomendação final: ${currentNode.recommendation.instrument}, categoria ${currentNode.recommendation.category}, artigo ${currentNode.recommendation.article}. ${currentNode.recommendation.description}`;
    }
    narrator.toggle(text, progress.audioSpeed);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* Header and Reset */}
      <div className="rounded-3xl bg-white/90 border border-[#BAB2B5]/60 p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[#123C69]">
        <div>
          <span className="text-[10px] font-mono text-[#AC3B61] uppercase tracking-wider font-bold block">
            Guia Lógico de Impugnações
          </span>
          <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#123C69] mt-1">
            Qual o Meio de Impugnação Adequado?
          </h2>
          <p className="text-xs text-[#123C69]/80 mt-1 font-sans">
            Navegue passo a passo para identificar se cabe Recurso, Sucedâneo ou Ação Autônoma de Impugnação.
          </p>
        </div>

        <button
          onClick={handleReset}
          className="self-start sm:self-auto px-4 py-2 border border-[#BAB2B5] hover:bg-[#EEE2DC] text-[#123C69] text-xs font-semibold rounded-xl flex items-center gap-2 cursor-pointer transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reiniciar Árvore</span>
        </button>
      </div>

      {/* Breadcrumb Path History */}
      {pathHistory.length > 1 && (
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs text-[#123C69]/70 scrollbar-none">
          <span className="text-[#BAB2B5] font-medium">Trilha:</span>
          {pathHistory.map((nodeId, idx) => {
            const isLast = idx === pathHistory.length - 1;
            const node = DECISION_TREE[nodeId];

            return (
              <React.Fragment key={nodeId}>
                <button
                  onClick={() => handleStepBack(idx)}
                  className={`hover:underline cursor-pointer truncate max-w-[140px] ${
                    isLast ? 'font-bold text-[#AC3B61]' : 'text-[#123C69]'
                  }`}
                >
                  {node?.title || nodeId}
                </button>
                {!isLast && <span className="text-[#BAB2B5]">/</span>}
              </React.Fragment>
            );
          })}
        </div>
      )}

      {/* Main Decision Node Card */}
      <div className="relative">
        <div
          className="rounded-3xl bg-white/95 border border-[#BAB2B5]/60 p-6 sm:p-9 shadow-lg space-y-6 text-[#123C69]"
        >
          {/* Card Top Title & Audio */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#BAB2B5]/30 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#EDC7B7]/50 text-[#AC3B61] flex items-center justify-center border border-[#EDC7B7]">
                <GitFork className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#AC3B61] uppercase tracking-wider font-bold block">
                  Etapa de Decisão
                </span>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-[#123C69] leading-snug">
                  {currentNode.title}
                </h3>
              </div>
            </div>

            <button
              onClick={handleAudioRead}
              className="self-start sm:self-auto px-3.5 py-2 bg-[#EEE2DC] hover:bg-[#EDC7B7]/50 text-[#123C69] text-xs font-semibold rounded-xl transition-all flex items-center gap-2 cursor-pointer border border-[#BAB2B5]/60"
            >
              <Volume2 className="w-4 h-4 text-[#AC3B61]" />
              <span>Ouvir Explicação</span>
            </button>
          </div>

          {/* Context & Question */}
          <p className="text-[#123C69] text-sm leading-relaxed font-sans bg-[#EEE2DC]/60 p-4 sm:p-5 rounded-2xl border border-[#BAB2B5]/50">
            {currentNode.context}
          </p>

          {/* Options (If branch node) */}
          {currentNode.options && currentNode.options.length > 0 && (
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#123C69]/70 uppercase tracking-wider block font-mono">
                  Escolha o cenário que se aplica ao seu caso:
                </span>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {currentNode.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelectOption(opt.targetNodeId)}
                    className="w-full text-left p-4 sm:p-5 rounded-2xl border border-[#BAB2B5]/50 hover:border-[#AC3B61] bg-white hover:bg-[#EDC7B7]/25 transition-all flex items-center justify-between gap-4 cursor-pointer group shadow-2xs"
                  >
                    <div>
                      <span className="font-bold text-sm sm:text-base text-[#123C69] group-hover:text-[#AC3B61] block font-serif">
                        {opt.label}
                      </span>
                      <span className="text-xs text-[#123C69]/80 group-hover:text-[#123C69] block font-sans mt-0.5">
                        {opt.description}
                      </span>
                    </div>

                    <ArrowRight className="w-5 h-5 text-[#BAB2B5] group-hover:text-[#AC3B61] shrink-0 transition-transform group-hover:translate-x-1" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Final Recommendation Box in Textured Tone */}
          {currentNode.recommendation && (
            <div className="p-6 sm:p-7 rounded-2xl bg-textured-dark text-[#EEE2DC] border border-[#EDC7B7]/40 space-y-5 shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-textured-overlay opacity-25 pointer-events-none" />
              <div className="relative z-10 space-y-5">
                <div className="flex items-center gap-2 text-xs font-bold text-[#EDC7B7] uppercase tracking-wide">
                  <CheckCircle2 className="w-5 h-5 text-[#EDC7B7]" />
                  <span>Conclusão Processual Identificada</span>
                </div>

                <div>
                  <span className="text-xs text-[#BAB2B5] font-sans block">Remédio Jurídico Adequado:</span>
                  <h4 className="font-serif font-bold text-2xl sm:text-3xl text-white mt-1">
                    {currentNode.recommendation.instrument}
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-1">
                  <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                    <span className="text-[#BAB2B5] block uppercase text-[10px] font-mono">Espécie</span>
                    <span className="font-semibold text-white mt-1 block">{currentNode.recommendation.category}</span>
                  </div>
                  <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                    <span className="text-[#BAB2B5] block uppercase text-[10px] font-mono">Fundamentação</span>
                    <span className="font-semibold text-[#EDC7B7] font-mono mt-1 block">{currentNode.recommendation.article}</span>
                  </div>
                  <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                    <span className="text-[#BAB2B5] block uppercase text-[10px] font-mono">Prazo</span>
                    <span className="font-semibold text-white mt-1 block">{currentNode.recommendation.deadline}</span>
                  </div>
                </div>

                <p className="text-[#EEE2DC]/90 text-xs sm:text-sm leading-relaxed font-sans pt-1">
                  {currentNode.recommendation.description}
                </p>

                {/* Action */}
                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={handleReset}
                    className="px-5 py-2.5 bg-[#AC3B61] hover:bg-[#962F50] text-white text-xs font-bold rounded-xl flex items-center gap-2 cursor-pointer shadow-md transition-all"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Analisar Outro Cenário</span>
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

    </div>
  );
};
