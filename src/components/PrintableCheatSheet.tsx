import React from 'react';
import { Printer, ArrowLeft, BookOpen, Scale, Award } from 'lucide-react';

interface PrintableCheatSheetProps {
  onClose: () => void;
}

export const PrintableCheatSheet: React.FC<PrintableCheatSheetProps> = ({ onClose }) => {
  return (
    <div className="bg-white min-h-screen text-stone-900 py-10 px-4 sm:px-8 max-w-4xl mx-auto font-sans print:p-0 print:max-w-none">
      
      {/* Top Action Bar (hidden when printed) */}
      <div className="flex items-center justify-between border-b border-stone-200 pb-4 mb-8 print:hidden">
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-xs font-semibold text-stone-600 hover:text-stone-900 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar ao Aplicativo</span>
        </button>

        <button
          onClick={() => window.print()}
          className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold rounded-lg flex items-center gap-2 cursor-pointer shadow-sm"
        >
          <Printer className="w-4 h-4" />
          <span>Imprimir / Salvar em PDF</span>
        </button>
      </div>

      {/* Printable Sheet Header */}
      <div className="border-b-2 border-stone-900 pb-4 mb-6">
        <div className="flex items-center justify-between text-xs font-mono text-stone-500 uppercase tracking-widest mb-1">
          <span>Direito Processual Civil · 1ª Unidade</span>
          <span>UNAMA · Prof. Me. Esdras Rodrigues</span>
        </div>
        <h1 className="font-serif text-3xl font-bold text-stone-950">
          Vade Mecum: Recursos & Meios de Impugnação
        </h1>
        <p className="text-xs text-stone-600 mt-1">
          Guia Sintético e Completo dos 122 Slides · Mnemônicos, Prazos e Artigos do CPC
        </p>
      </div>

      {/* Section 1: Tripartição dos Meios de Impugnação */}
      <div className="space-y-6 text-xs leading-relaxed">
        
        <div>
          <h2 className="font-serif text-base font-bold text-stone-900 border-b border-stone-300 pb-1 mb-2 uppercase tracking-wide">
            1. Trilogia dos Meios de Impugnação da Decisão Judicial
          </h2>
          <div className="grid grid-cols-3 gap-3">
            <div className="border border-stone-300 p-2.5 rounded bg-stone-50">
              <span className="font-bold block text-stone-900">RECURSOS</span>
              <p className="text-stone-600 mt-1 text-[11px]">
                Meio voluntário, no mesmo processo, em prazo fatal de lei federal. Não gera processo novo (recorrido é intimado, não citado).
              </p>
            </div>
            <div className="border border-stone-300 p-2.5 rounded bg-stone-50">
              <span className="font-bold block text-stone-900">SUCEDÂNEOS RECURSAIS</span>
              <p className="text-stone-600 mt-1 text-[11px]">
                Viés residual (nem recurso nem ação nova): Remessa Necessária (art. 496), Correição Parcial (Lei 5.010/66) e Pedido de Reconsideração.
              </p>
            </div>
            <div className="border border-stone-300 p-2.5 rounded bg-stone-50">
              <span className="font-bold block text-stone-900">AÇÕES AUTÔNOMAS</span>
              <p className="text-stone-600 mt-1 text-[11px]">
                Instauram NOVA relação processual: Ação Rescisória (art. 966), Querela Nullitatis (vícios transrescisórios), Reclamação (art. 988) e Embargos de Terceiro (art. 674).
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Mnemônicos Fundamentais */}
        <div>
          <h2 className="font-serif text-base font-bold text-stone-900 border-b border-stone-300 pb-1 mb-2 uppercase tracking-wide">
            2. Mnemônicos de Ouro para a Prova
          </h2>
          <div className="grid grid-cols-2 gap-4">
            
            <div className="border border-stone-300 p-3 rounded">
              <span className="font-mono font-bold text-amber-900 block mb-1">
                C.A.L.I.I. — Requisitos Intrínsecos (Direito de Recorrer)
              </span>
              <ul className="list-disc pl-4 space-y-0.5 text-stone-700 text-[11px]">
                <li><strong>C</strong>abimento: decisão recorrível pela via eleita.</li>
                <li><strong>A/L</strong>egitimidade: vencido, terceiro prejudicado ou MP.</li>
                <li><strong>I</strong>nteresse: necessidade (sucumbência) + utilidade (melhora prática).</li>
                <li><strong>I</strong>nexistência de fato impeditivo (renúncia) ou extintivo (desistência).</li>
              </ul>
            </div>

            <div className="border border-stone-300 p-3 rounded">
              <span className="font-mono font-bold text-amber-900 block mb-1">
                TEMPE RE PREPARO — Requisitos Extrínsecos (Modo de Recorrer)
              </span>
              <ul className="list-disc pl-4 space-y-0.5 text-stone-700 text-[11px]">
                <li><strong>TEMPE</strong>stividade: 15 dias úteis (5 dias para Embargos de Declaração).</li>
                <li><strong>RE</strong>gularidade Formal: forma escrita, capacidade postulatória e motivação.</li>
                <li><strong>PREPARO</strong>: custas imediatas. Não pagou = dobra. Pagou a menor = 5 dias p/ suprir.</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Section 3: Remessa Necessária e Tetos */}
        <div>
          <h2 className="font-serif text-base font-bold text-stone-900 border-b border-stone-300 pb-1 mb-2 uppercase tracking-wide">
            3. Remessa Necessária (CPC, Art. 496)
          </h2>
          <div className="border border-stone-300 rounded overflow-hidden">
            <table className="w-full text-left border-collapse text-[11px]">
              <thead className="bg-stone-100 border-b border-stone-300 font-bold">
                <tr>
                  <th className="p-2 border-r border-stone-300">Ente Público Condenado</th>
                  <th className="p-2 border-r border-stone-300">Teto de Dispensa (§ 3º)</th>
                  <th className="p-2">Regra Prática</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                <tr>
                  <td className="p-2 border-r border-stone-200 font-medium">União e autarquias federais</td>
                  <td className="p-2 border-r border-stone-200 font-mono">1.000 salários mínimos</td>
                  <td className="p-2">Inferior a 1.000 SM NÃO há remessa obrigatória.</td>
                </tr>
                <tr>
                  <td className="p-2 border-r border-stone-200 font-medium">Estados, DF, capitais e autarquias estaduais</td>
                  <td className="p-2 border-r border-stone-200 font-mono">500 salários mínimos</td>
                  <td className="p-2">Inferior a 500 SM NÃO há remessa obrigatória.</td>
                </tr>
                <tr>
                  <td className="p-2 border-r border-stone-200 font-medium">Demais Municípios do interior</td>
                  <td className="p-2 border-r border-stone-200 font-mono">100 salários mínimos</td>
                  <td className="p-2">Inferior a 100 SM NÃO há remessa obrigatória.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-1 text-[11px] text-stone-500 italic">
            * 5 Razões por que não é recurso: ausência de voluntariedade, ausência de dialeticidade, ausência de prazo, não qualificada como recurso em lei e manejada pelo juiz de ofício.
          </p>
        </div>

        {/* Section 4: Ação Rescisória vs Querela Nullitatis */}
        <div>
          <h2 className="font-serif text-base font-bold text-stone-900 border-b border-stone-300 pb-1 mb-2 uppercase tracking-wide">
            4. Ação Rescisória vs Querela Nullitatis
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="border border-stone-300 p-2.5 rounded">
              <span className="font-bold text-stone-900 block">AÇÃO RESCISÓRIA (Art. 966)</span>
              <p className="text-[11px] text-stone-700 mt-1">
                • <strong>Prazo:</strong> Decadencial de 2 anos (art. 975).<br/>
                • <strong>Súmula 514 STF:</strong> NÃO exige esgotamento dos recursos ordinários!<br/>
                • <strong>Competência:</strong> Originária do Tribunal prolator.<br/>
                • <strong>Hipóteses:</strong> Corrupção, incompetência absoluta, dolo, ofensa à coisa julgada, violação manifesta, prova falsa, prova nova e erro de fato.
              </p>
            </div>
            <div className="border border-stone-300 p-2.5 rounded">
              <span className="font-bold text-stone-900 block">QUERELA NULLITATIS INSANABILIS</span>
              <p className="text-[11px] text-stone-700 mt-1">
                • <strong>Prazo:</strong> Imprescritível / A qualquer tempo.<br/>
                • <strong>Finalidade:</strong> Combater vícios transrescisórios.<br/>
                • <strong>Principal hipótese:</strong> Ausência ou nulidade de citação com réu revel.<br/>
                • <strong>Natureza:</strong> Vício tão grave que impede o nascimento válido do processo.
              </p>
            </div>
          </div>
        </div>

        {/* Section 5: Os 6 Efeitos Recursais */}
        <div>
          <h2 className="font-serif text-base font-bold text-stone-900 border-b border-stone-300 pb-1 mb-2 uppercase tracking-wide">
            5. Os 6 Efeitos dos Recursos
          </h2>
          <div className="grid grid-cols-3 gap-2.5 text-[11px]">
            <div className="border border-stone-200 p-2 rounded bg-stone-50">
              <strong>1. Obstativo:</strong> Impede a preclusão e o trânsito em julgado.
            </div>
            <div className="border border-stone-200 p-2 rounded bg-stone-50">
              <strong>2. Devolutivo:</strong> Transfere a matéria ao Tribunal. Horizontal = capítulos; Vertical = fundamentos (art. 1.013).
            </div>
            <div className="border border-stone-200 p-2 rounded bg-stone-50">
              <strong>3. Suspensivo:</strong> Regra é NÃO ter (art. 995). Ope legis (Apelação art. 1.012) ou Ope judicis (risco de dano + fumaça do direito).
            </div>
            <div className="border border-stone-200 p-2 rounded bg-stone-50">
              <strong>4. Translativo:</strong> Tribunal conhece de ordem pública de ofício (prescrição, nulidades).
            </div>
            <div className="border border-stone-200 p-2 rounded bg-stone-50">
              <strong>5. Substitutivo:</strong> O acórdão substitui a sentença (art. 1.008). Não substitui se inadmitido ou se anulado com reenvio.
            </div>
            <div className="border border-stone-200 p-2 rounded bg-stone-50">
              <strong>6. Regressivo (Retratação):</strong> Juiz prolator pode voltar atrás (arts. 331, 332 §3º, 485 §7º e todos os agravos).
            </div>
          </div>
        </div>

        {/* Section 6: Princípios e Pegadinhas de Prova */}
        <div>
          <h2 className="font-serif text-base font-bold text-stone-900 border-b border-stone-300 pb-1 mb-2 uppercase tracking-wide">
            6. Princípios Recursais & Pegadinhas Clássicas
          </h2>
          <ul className="list-disc pl-4 space-y-1 text-[11px] text-stone-700">
            <li><strong>Singularidade (Unirrecorribilidade):</strong> 1 recurso por decisão. <em>Exceção:</em> RE (STF) + REsp (STJ) simultâneos quando houver fundamentos constitucional e infraconstitucional autônomos.</li>
            <li><strong>Taxatividade:</strong> Somente lei federal cria recursos. Partes não podem criar recursos por negócio jurídico. Pedido de reconsideração não é recurso e não interrompe prazo!</li>
            <li><strong>Fungibilidade:</strong> Exige dúvida objetiva, ausência de erro grosseiro e tempestividade (D.E.M.).</li>
            <li><strong>Proibição da Non Reformatio in Pejus:</strong> Não pode piorar a situação do recorrente único, exceto em matéria de ordem pública conhecida de ofício.</li>
            <li><strong>Art. 932, parágrafo único:</strong> Prazo de 5 dias para sanar vício formal, NUNCA para complementar fundamentação deficiente!</li>
            <li><strong>Apelação (Art. 1.010, § 3º):</strong> O juiz de 1º grau NÃO faz mais juízo de admissibilidade na apelação.</li>
          </ul>
        </div>

      </div>

      {/* Footer */}
      <div className="mt-8 pt-4 border-t border-stone-300 text-center text-[10px] text-stone-500 font-mono">
        Material de Estudo Personalizado · 100% embasado nos 122 slides do Prof. Me. Esdras Rodrigues · UNAMA
      </div>

    </div>
  );
};
