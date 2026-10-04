import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, Volume2, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { LEGAL_MODULES } from '../data/legalContent';
import { OFFICIAL_QUESTIONS } from '../data/questionsData';
import { FLASHCARDS } from '../data/flashcardsData';
import { narrator } from '../utils/audioNarrator';
import { sounds } from '../utils/soundEffects';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSection: (moduleId: string, sectionId: string) => void;
  soundEffectsEnabled: boolean;
  audioSpeed: number;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectSection,
  soundEffectsEnabled,
  audioSpeed,
}) => {
  const [query, setQuery] = useState('');

  // Pre-index all modules, sections, questions and flashcards
  const searchIndex = useMemo(() => {
    const list: {
      id: string;
      type: 'Seção Teórica' | 'Questão Oficial' | 'Mnemônico / Card';
      title: string;
      subtitle: string;
      content: string;
      moduleId?: string;
      sectionId?: string;
      questionId?: string;
    }[] = [];

    // Modules and sections
    LEGAL_MODULES.forEach(mod => {
      mod.sections.forEach(sec => {
        list.push({
          id: sec.id,
          type: 'Seção Teórica',
          title: sec.title,
          subtitle: `${mod.title} · Slides ${sec.slideRange}`,
          content: `${sec.summary} ${sec.plainLanguage} ${sec.articles.join(' ')} ${sec.technicalContent.join(' ')} ${sec.examTrap}`,
          moduleId: mod.id,
          sectionId: sec.id,
        });
      });
    });

    // Questions
    OFFICIAL_QUESTIONS.forEach(q => {
      list.push({
        id: q.id,
        type: 'Questão Oficial',
        title: q.topic,
        subtitle: `Slide de Origem: ${q.slideOrigin} · Prof. Esdras`,
        content: `${q.questionText} ${q.options.map(o => o.text).join(' ')} ${q.explanation}`,
        questionId: q.id,
      });
    });

    // Flashcards
    FLASHCARDS.forEach(fc => {
      list.push({
        id: fc.id,
        type: 'Mnemônico / Card',
        title: fc.front,
        subtitle: `Categoria: ${fc.category} · ${fc.articles}`,
        content: `${fc.front} ${fc.back} ${fc.mnemonicHint || ''}`,
      });
    });

    return list;
  }, []);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase().trim();
    return searchIndex
      .filter(item => {
        return (
          item.title.toLowerCase().includes(q) ||
          item.content.toLowerCase().includes(q) ||
          item.subtitle.toLowerCase().includes(q)
        );
      })
      .slice(0, 12);
  }, [query, searchIndex]);

  const quickWebQueries = [
    { label: 'CPC Art. 994 (Rol de Recursos)', url: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13105.htm#art994' },
    { label: 'CPC Art. 496 (Remessa Necessária)', url: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13105.htm#art496' },
    { label: 'CPC Art. 966 (Ação Rescisória)', url: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13105.htm#art966' },
    { label: 'Súmula 514 STF (Rescisória)', url: 'https://jurisprudencia.stf.jus.br/pages/search/sjur3854/pesquisa' },
    { label: 'Jurisprudência STJ', url: 'https://scon.stj.jus.br/SCON/' },
  ];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 md:p-10 bg-[#242023]/70 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl rounded-3xl bg-white shadow-2xl border border-[#BAB2B5]/60 overflow-hidden my-auto text-[#123C69]"
          onClick={e => e.stopPropagation()}
        >
          {/* Search Header Bar */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-[#BAB2B5]/30 bg-[#EEE2DC]">
            <Search className="w-5 h-5 text-[#AC3B61] shrink-0" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Pesquisar artigos do CPC, mnemônicos, súmulas, prazos ou conceitos..."
              className="w-full bg-transparent text-sm sm:text-base text-[#123C69] placeholder-[#BAB2B5] focus:outline-none font-sans"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="p-1 rounded-md text-[#BAB2B5] hover:text-[#123C69]"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-white/80 hover:bg-white text-[#123C69] transition-colors border border-[#BAB2B5]/50"
            >
              ESC
            </button>
          </div>

          {/* Quick Suggestions & Official Legal Links */}
          <div className="px-5 py-3 border-b border-[#BAB2B5]/30 bg-white flex items-center gap-2 overflow-x-auto scrollbar-none text-xs">
            <span className="text-[#123C69]/70 shrink-0 flex items-center gap-1 font-semibold">
              <ExternalLink className="w-3.5 h-3.5 text-[#AC3B61]" />
              <span>Fontes Oficiais:</span>
            </span>
            {quickWebQueries.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded-md bg-[#EEE2DC] hover:bg-[#EDC7B7] text-[#123C69] whitespace-nowrap transition-colors border border-[#BAB2B5]/40 flex items-center gap-1 font-medium"
              >
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          {/* Search Results Area */}
          <div className="max-h-[60vh] overflow-y-auto p-4 space-y-2 divide-y divide-[#BAB2B5]/20">
            {query.trim() === '' ? (
              <div className="p-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#EDC7B7]/50 text-[#AC3B61] flex items-center justify-center mx-auto">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h4 className="font-serif font-bold text-base text-[#123C69]">
                  Pesquisa no Curso & Artigos do CPC
                </h4>
                <p className="text-xs text-[#123C69]/70 max-w-md mx-auto leading-relaxed font-sans">
                  Digite qualquer artigo (ex: <strong>art. 496</strong>, <strong>art. 966</strong>, <strong>art. 1007</strong>) 
                  ou termo (<strong>preparo</strong>, <strong>fungibilidade</strong>, <strong>CALII</strong>).
                </p>

                <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                  {['CALII', 'TEMPE RE PREPARO', 'Art. 496', 'Art. 966', 'Fungibilidade', 'Preclusão Lógica', 'Efeito Devolutivo'].map(term => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="px-3 py-1 rounded-full text-xs bg-[#EEE2DC] hover:bg-[#EDC7B7] text-[#123C69] border border-[#BAB2B5]/50 transition-colors cursor-pointer font-medium"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            ) : results.length > 0 ? (
              results.map(item => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-xl hover:bg-[#EEE2DC]/50 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 group cursor-pointer border border-transparent hover:border-[#EDC7B7]"
                  onClick={() => {
                    sounds.playClick(soundEffectsEnabled);
                    if (item.moduleId && item.sectionId) {
                      onSelectSection(item.moduleId, item.sectionId);
                      onClose();
                    }
                  }}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#EDC7B7] text-[#123C69]">
                        {item.type}
                      </span>
                      <span className="text-xs text-[#BAB2B5] font-medium">{item.subtitle}</span>
                    </div>

                    <h4 className="font-serif font-bold text-sm sm:text-base text-[#123C69] group-hover:text-[#AC3B61] transition-colors">
                      {item.title}
                    </h4>

                    <p className="text-xs text-[#123C69]/80 font-sans line-clamp-2 leading-relaxed">
                      {item.content}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                    <button
                      onClick={e => {
                        e.stopPropagation();
                        sounds.playClick(soundEffectsEnabled);
                        narrator.toggle(`${item.title}. ${item.content}`, audioSpeed);
                      }}
                      className="p-2 rounded-lg bg-[#EEE2DC] hover:bg-[#EDC7B7] text-[#123C69] transition-colors"
                      title="Ouvir este resultado"
                    >
                      <Volume2 className="w-4 h-4 text-[#AC3B61]" />
                    </button>

                    {item.moduleId && item.sectionId && (
                      <span className="flex items-center gap-1 text-xs font-bold text-[#AC3B61] group-hover:translate-x-1 transition-transform">
                        <span>Ir para Lição</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-[#123C69]/60 text-sm">
                Nenhum resultado encontrado para &quot;{query}&quot;. Tente outro termo ou consulte os links oficiais no topo.
              </div>
            )}
          </div>

          {/* Footer note */}
          <div className="px-5 py-3 border-t border-[#BAB2B5]/30 bg-[#EEE2DC] text-[11px] text-[#123C69]/70 flex items-center justify-between font-sans">
            <span>Pesquisa rápida em todos os 122 slides e artigos do CPC</span>
            <span className="font-mono text-[#AC3B61] font-bold">{results.length} resultados</span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
