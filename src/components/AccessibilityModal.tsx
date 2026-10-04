import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { UserProgress, ReadingTheme, FontSize } from '../types';
import { X, Type, Palette, Sparkles, Check, Headphones } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface AccessibilityModalProps {
  progress: UserProgress;
  isOpen: boolean;
  onClose: () => void;
  onUpdateSettings: (settings: Partial<UserProgress>) => void;
}

export const AccessibilityModal: React.FC<AccessibilityModalProps> = ({
  progress,
  isOpen,
  onClose,
  onUpdateSettings,
}) => {
  if (!isOpen) return null;

  const themes: { id: ReadingTheme; title: string; desc: string; preview: string }[] = [
    {
      id: 'sepia',
      title: 'Porcelana & Linho (Paleta da Foto)',
      desc: 'Linho suave (#EEE2DC), azul profundo (#123C69), detalhes em vinho (#AC3B61) e pêssego (#EDC7B7).',
      preview: 'bg-[#EEE2DC] border-[#BAB2B5] text-[#123C69]',
    },
    {
      id: 'classic',
      title: 'Marfim Suave',
      desc: 'Fundo marfim claro com alto contraste e tipografia nobre.',
      preview: 'bg-[#FAF6F4] border-[#BAB2B5] text-[#123C69]',
    },
    {
      id: 'dark',
      title: 'Azul Meia-Noite',
      desc: 'Superfície azul profundo noturna para estudos com baixa luminosidade.',
      preview: 'bg-[#0A192F] border-white/20 text-[#EEE2DC]',
    },
    {
      id: 'contrast',
      title: 'Alto Contraste P&B',
      desc: 'Definição tipográfica máxima em preto e branco absoluto.',
      preview: 'bg-black border-stone-500 text-white',
    },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#242023]/70 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-xl rounded-3xl bg-white shadow-2xl border border-[#BAB2B5]/60 p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto text-[#123C69]"
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#BAB2B5]/30 pb-4">
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-[#AC3B61]" />
              <div>
                <h3 className="font-serif font-bold text-lg text-[#123C69] leading-snug">
                  Preferências de Interface & Leitura
                </h3>
                <p className="text-xs text-[#123C69]/70 font-sans">
                  Personalize a estética visual, fontes e recursos de áudio.
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-[#BAB2B5] hover:text-[#123C69] rounded-lg hover:bg-[#EEE2DC] cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Theme Selector */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-[#123C69] uppercase tracking-wider">
              <Palette className="w-4 h-4 text-[#AC3B61]" />
              <span>Tema Visual & Cores</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {themes.map(t => {
                const isSelected = progress.theme === t.id;

                return (
                  <button
                    key={t.id}
                    onClick={() => {
                      sounds.playClick(progress.soundEffectsEnabled);
                      onUpdateSettings({ theme: t.id });
                    }}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-2 ${
                      isSelected
                        ? 'ring-2 ring-[#AC3B61] border-[#AC3B61] bg-[#EDC7B7]/30'
                        : 'border-[#BAB2B5]/50 bg-[#EEE2DC]/30 hover:bg-[#EEE2DC]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs text-[#123C69]">{t.title}</span>
                      {isSelected && <Check className="w-4 h-4 text-[#AC3B61]" />}
                    </div>
                    <div className={`h-6 rounded-md border text-[10px] flex items-center justify-center font-medium ${t.preview}`}>
                      Amostra de Texto
                    </div>
                    <span className="text-[11px] text-[#123C69]/70 font-sans leading-snug">
                      {t.desc}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Font Size & Typography */}
          <div className="space-y-3 pt-2 border-t border-[#BAB2B5]/30">
            <div className="flex items-center gap-2 text-xs font-bold text-[#123C69] uppercase tracking-wider">
              <Type className="w-4 h-4 text-[#AC3B61]" />
              <span>Escala Tipográfica & Espaçamento</span>
            </div>

            <div className="flex items-center gap-2">
              {(['normal', 'large', 'extralarge'] as FontSize[]).map(size => (
                <button
                  key={size}
                  onClick={() => {
                    sounds.playClick(progress.soundEffectsEnabled);
                    onUpdateSettings({ fontSize: size });
                  }}
                  className={`flex-1 py-2 text-xs font-semibold rounded-xl border transition-colors cursor-pointer ${
                    progress.fontSize === size
                      ? 'bg-[#AC3B61] border-[#AC3B61] text-white font-bold'
                      : 'bg-white border-[#BAB2B5]/60 text-[#123C69] hover:bg-[#EEE2DC]'
                  }`}
                >
                  {size === 'normal' ? 'Normal (14px)' : size === 'large' ? 'Grande (16px)' : 'Extra (18px)'}
                </button>
              ))}
            </div>

            {/* Typography enhancer */}
            <label className="flex items-center justify-between p-3.5 rounded-xl bg-[#EEE2DC]/60 border border-[#BAB2B5]/50 cursor-pointer hover:bg-[#EEE2DC] transition-colors">
              <div>
                <span className="text-xs font-semibold text-[#123C69] block">
                  Tipografia com Alta Legibilidade (Lexend)
                </span>
                <span className="text-[11px] text-[#123C69]/70 font-sans">
                  Espaçamento otimizado para leitura confortável por horas a fio.
                </span>
              </div>
              <input
                type="checkbox"
                checked={progress.dyslexicFont}
                onChange={e => {
                  sounds.playClick(progress.soundEffectsEnabled);
                  onUpdateSettings({ dyslexicFont: e.target.checked });
                }}
                className="w-4 h-4 rounded text-[#AC3B61] accent-[#AC3B61] focus:ring-[#AC3B61] cursor-pointer"
              />
            </label>
          </div>

          {/* Audio Controls */}
          <div className="space-y-3 pt-2 border-t border-[#BAB2B5]/30">
            <div className="flex items-center gap-2 text-xs font-bold text-[#123C69] uppercase tracking-wider">
              <Headphones className="w-4 h-4 text-[#AC3B61]" />
              <span>Áudio & Narração</span>
            </div>

            {/* Narration Speed */}
            <div className="space-y-1.5">
              <span className="text-xs text-[#123C69]/70 font-medium block">
                Velocidade da Voz da Narração:
              </span>
              <div className="flex items-center gap-2">
                {[0.8, 1.0, 1.2].map(speed => (
                  <button
                    key={speed}
                    onClick={() => {
                      sounds.playClick(progress.soundEffectsEnabled);
                      onUpdateSettings({ audioSpeed: speed });
                    }}
                    className={`flex-1 py-2 text-xs font-mono rounded-xl border transition-colors cursor-pointer ${
                      progress.audioSpeed === speed
                        ? 'bg-[#AC3B61] border-[#AC3B61] text-white font-bold'
                        : 'bg-white border-[#BAB2B5]/60 text-[#123C69] hover:bg-[#EEE2DC]'
                    }`}
                  >
                    {speed === 0.8 ? '0.8x (Calmo)' : speed === 1.0 ? '1.0x (Padrão)' : '1.2x (Rápido)'}
                  </button>
                ))}
              </div>
            </div>

            {/* Ambient Sound Mode */}
            <div className="space-y-1.5 pt-1">
              <span className="text-xs text-[#123C69]/70 font-medium block">
                Gerador de Foco Acústico:
              </span>
              <div className="flex items-center gap-2">
                {[
                  { id: 'off', label: 'Silencioso' },
                  { id: 'brown', label: 'Ruído Marrom' },
                  { id: 'rain', label: 'Chuva Suave' },
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => {
                      const newAmbient = item.id as 'off' | 'brown' | 'rain';
                      sounds.setAmbient(newAmbient);
                      onUpdateSettings({ ambientSound: newAmbient });
                    }}
                    className={`flex-1 py-2 text-xs rounded-xl border transition-colors cursor-pointer ${
                      progress.ambientSound === item.id
                        ? 'bg-[#AC3B61] border-[#AC3B61] text-white font-bold'
                        : 'bg-white border-[#BAB2B5]/60 text-[#123C69] hover:bg-[#EEE2DC]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Sound effects toggle */}
            <label className="flex items-center justify-between p-3.5 rounded-xl bg-[#EEE2DC]/60 border border-[#BAB2B5]/50 cursor-pointer mt-2 hover:bg-[#EEE2DC] transition-colors">
              <div>
                <span className="text-xs font-semibold text-[#123C69] block">
                  Efeitos Sonoros Sutis
                </span>
                <span className="text-[11px] text-[#123C69]/70 font-sans">
                  Sons discretos ao acertar questões ou avançar etapas.
                </span>
              </div>
              <input
                type="checkbox"
                checked={progress.soundEffectsEnabled}
                onChange={e => onUpdateSettings({ soundEffectsEnabled: e.target.checked })}
                className="w-4 h-4 rounded text-[#AC3B61] accent-[#AC3B61] focus:ring-[#AC3B61] cursor-pointer"
              />
            </label>
          </div>

          {/* Footer */}
          <div className="pt-2">
            <button
              onClick={onClose}
              className="w-full py-3 bg-[#AC3B61] hover:bg-[#962F50] text-white text-xs font-bold rounded-xl cursor-pointer shadow-md shadow-[#AC3B61]/25 transition-all"
            >
              Salvar Preferências
            </button>
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
