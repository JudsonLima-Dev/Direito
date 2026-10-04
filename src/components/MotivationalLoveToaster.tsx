import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles, X } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

export const LOVE_MESSAGES = [
  "Isso aí, minha pituquinha! Você consegue tudo o que quiser, tenho tanto orgulho de você! ❤️",
  "Vamos lá, gatinha, só mais um pouco... a futura maior jurista desse país tá voando! ✨",
  "Meu amor, você é incrível! Nenhum artigo desse CPC é páreo pra sua inteligência! 🌿",
  "Olha só como você tá dominando a matéria! Cada questão certa é mais um passo da sua vitória! 🤍",
  "Respira fundo, toma um gole d'água e vai no seu ritmo, pituquinha linda! Tô aqui torcendo por você! 🥰",
  "Que mulher dedicada e brilhante! Você tá arrasando demais hoje, meu amor! 👑",
  "Você vai gabaritar essa prova com certeza! Tenho tanta sorte de ter você ao meu lado! 🌟",
  "Só mais um capítulo, gatinha! Você é imparável e eu acredito em você até o fim! 💫",
  "Pausa pra lembrar: você é linda, inteligente, forte e capaz de qualquer coisa, minha pituquinha! ☕",
];

interface MotivationalLoveToasterProps {
  currentMessage: string | null;
  onClose: () => void;
  onTriggerRandom: () => void;
  soundEnabled: boolean;
}

export const MotivationalLoveToaster: React.FC<MotivationalLoveToasterProps> = ({
  currentMessage,
  onClose,
  onTriggerRandom,
  soundEnabled,
}) => {
  return (
    <>
      {/* Floating Bottom-Right Love Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          sounds.playSuccess(soundEnabled);
          onTriggerRandom();
        }}
        className="fixed bottom-6 right-6 z-40 px-4 py-2.5 rounded-full shadow-xl flex items-center gap-2 cursor-pointer transition-all border border-[#EDC7B7]/60 bg-textured-dark text-white hover:bg-[#2F292D]"
        title="Receber um recadinho do seu namorado"
      >
        <Heart className="w-3.5 h-3.5 fill-[#AC3B61] text-[#AC3B61] animate-pulse" />
        <span className="text-xs font-semibold font-sans tracking-wide">
          Dose de Motivação
        </span>
      </motion.button>

      {/* Romantic Motivational Popup Window in Textured Tone */}
      <AnimatePresence>
        {currentMessage && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ type: 'spring', damping: 24, stiffness: 300 }}
            className="fixed bottom-20 right-4 sm:right-6 z-50 max-w-sm w-[calc(100vw-2rem)] rounded-3xl shadow-2xl p-5 border border-[#EDC7B7]/40 bg-textured-dark text-[#EEE2DC] relative overflow-hidden backdrop-blur-xl"
          >
            <div className="absolute inset-0 bg-textured-overlay opacity-25 pointer-events-none" />
            <div className="relative z-10">
            {/* Header */}
            <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 fill-[#AC3B61] text-[#AC3B61]" />
                <span className="text-[11px] font-semibold uppercase tracking-wider font-mono text-[#EDC7B7]">
                  Recado com Carinho
                </span>
              </div>

              <button
                onClick={onClose}
                className="p-1 rounded-lg text-[#BAB2B5] hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Message Body */}
            <div className="py-3">
              <p className="text-sm font-serif font-normal leading-relaxed text-[#EEE2DC]">
                &ldquo;{currentMessage}&rdquo;
              </p>
            </div>

            {/* Footer */}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-[#BAB2B5]">
              <span className="flex items-center gap-1 text-[#EDC7B7]">
                <Sparkles className="w-3 h-3 text-[#AC3B61]" />
                <span>Eu acredito em você!</span>
              </span>
              <button
                onClick={onClose}
                className="font-semibold text-xs text-[#EDC7B7] hover:underline cursor-pointer"
              >
                Continuar Estudando
              </button>
            </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
