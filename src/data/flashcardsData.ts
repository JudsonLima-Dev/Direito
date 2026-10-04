import { Flashcard } from '../types';

export const FLASHCARDS: Flashcard[] = [
  {
    id: 'fc-1',
    category: 'Mnemônico',
    front: 'O que significa o mnemônico CALII nos pressupostos intrínsecos?',
    back: 'C - Cabimento (decisão recorrível)\nA/L - Adequação & Legitimidade (vencido, 3º prejudicado, MP)\nI - Interesse de agir (necessidade + utilidade)\nI - Inexistência de fato impeditivo (renúncia) ou extintivo (desistência)',
    mnemonicHint: 'CALII = As chaves que abrem a porta do direito de recorrer!',
    articles: 'CPC, arts. 996, 998 e 1.000'
  },
  {
    id: 'fc-2',
    category: 'Mnemônico',
    front: 'O que significa o mnemônico TEMPE RE PREPARO nos pressupostos extrínsecos?',
    back: 'TEMPE - Tempestividade (15 dias úteis em regra; 5 dias para Embargos de Declaração)\nRE - Regularidade formal (petição escrita, capacidade postulatória e motivação)\nPREPARO - Pagamento imediato das custas e porte de remessa se autos físicos',
    mnemonicHint: 'TEMPE RE PREPARO = O modo e a embalagem correta de entregar o recurso!',
    articles: 'CPC, arts. 219, 1.003 § 5º e 1.007'
  },
  {
    id: 'fc-3',
    category: 'Sucedâneos',
    front: 'Quais são os 3 tetos de dispensa da Remessa Necessária do art. 496, § 3º?',
    back: '1.000 salários mínimos para a União e autarquias federais;\n500 salários mínimos para Estados, DF, capitais e autarquias estaduais;\n100 salários mínimos para os demais Municípios.',
    mnemonicHint: 'Ordem decrescente de poder: 1000 (União) -> 500 (Estados/Capitais) -> 100 (Interior)',
    articles: 'CPC, art. 496, § 3º, I, II e III'
  },
  {
    id: 'fc-4',
    category: 'Princípios',
    front: 'Por que o Pedido de Reconsideração é perigoso para o prazo recursal?',
    back: 'Porque ele é mera construção jurisprudencial sem previsão em lei. Por isso, NÃO interrompe e NÃO suspende o prazo para interpor o recurso cabível! Se você esperar a resposta, seu prazo precluirá.',
    mnemonicHint: 'Reconsideração não é recurso e o relógio NÃO para!',
    articles: 'Jurisprudência pacífica do STJ e CPC art. 994'
  },
  {
    id: 'fc-5',
    category: 'Ações Autônomas',
    front: 'A Ação Rescisória exige que a parte tenha esgotado todos os recursos até o fim?',
    back: 'NÃO! Conforme a Súmula 514 do STF: "Admite-se ação rescisória contra sentença transitada em julgado, ainda que contra ela não se tenha esgotado todos os recursos ordinários".',
    mnemonicHint: 'Súmula 514 STF: basta o trânsito em julgado!',
    articles: 'Súmula 514 do STF e CPC art. 966'
  },
  {
    id: 'fc-6',
    category: 'Ações Autônomas',
    front: 'Qual é o prazo da Ação Rescisória e da Querela Nullitatis?',
    back: 'Ação Rescisória: Prazo decadencial rígido de 2 anos do trânsito em julgado (art. 975).\nQuerela Nullitatis: Imprescritível / A qualquer tempo, pois ataca vícios transrescisórios (ex: ausência de citação válida com réu revel).',
    mnemonicHint: '2 anos = Rescisória. Para sempre = Querela Nullitatis!',
    articles: 'CPC, art. 975 e Doutrina de Vícios Transrescisórios'
  },
  {
    id: 'fc-7',
    category: 'Princípios',
    front: 'Qual a diferença entre Error in Procedendo e Error in Iudicando?',
    back: 'Error in Procedendo: Vício formal na condução do processo (ex: sentença extra petita, falta de MP obrigatório). Pedido: ANULAÇÃO.\nError in Iudicando: Vício substancial no julgamento de fato ou direito. Pedido: REFORMA.',
    mnemonicHint: 'Procedendo = Procedimento (Forma) -> Anula! Iudicando = Conteúdo -> Reforma!',
    articles: 'CPC, art. 1.013'
  },
  {
    id: 'fc-8',
    category: 'Princípios',
    front: 'Quais os 3 requisitos para aplicar o Princípio da Fungibilidade?',
    back: '1. Dúvida fundada e objetiva na jurisprudência/doutrina;\n2. Inexistência de erro grosseiro na escolha do recurso;\n3. Tempestividade (interposto dentro do prazo do recurso próprio).',
    mnemonicHint: 'Mnemônico D.E.M. (Dúvida, Erro grosseiro ausente, Má-fé ausente)',
    articles: 'CPC, art. 277'
  },
  {
    id: 'fc-9',
    category: 'Preparo',
    front: 'O que acontece se a parte esquecer totalmente de juntar o preparo no protocolo do recurso?',
    back: 'O relator NÃO decreta deserção de imediato! A parte é intimada para recolher o preparo EM DOBRO no prazo legal, sob pena de deserção (art. 1.007, § 4º). Se pagou a menor, complementa a diferença em 5 dias (§ 2º).',
    mnemonicHint: 'Esqueceu tudo = Paga em dobro! Pagou pouco = Complementa em 5 dias!',
    articles: 'CPC, art. 1.007, §§ 2º e 4º'
  },
  {
    id: 'fc-10',
    category: 'Efeitos',
    front: 'Quais são as duas dimensões do Efeito Devolutivo?',
    back: 'Dimensão Horizontal (Extensão): delimita QUAIS capítulos foram impugnados (tantum devolutum quantum appellatum).\nDimensão Vertical (Profundidade): dentro dos capítulos impugnados, o tribunal pode examinar TODOS os fundamentos e argumentos da defesa.',
    mnemonicHint: 'Horizontal = Quais fatias do bolo. Vertical = Até a base daquela fatia!',
    articles: 'CPC, art. 1.013, §§ 1º e 2º'
  },
  {
    id: 'fc-11',
    category: 'Efeitos',
    front: 'O que é o Efeito Regressivo e onde ele se aplica?',
    back: 'É o poder que o próprio juiz prolator da decisão tem de se retratar e mudar sua decisão. Aplica-se: 1) Apelação contra indeferimento da inicial (art. 331); 2) Apelação contra improcedência liminar (art. 332 §3º); 3) Sentença sem mérito (art. 485 §7º); 4) TODOS os agravos.',
    mnemonicHint: 'Regressivo = Regressar sobre seus passos (Juízo de Retratação)!',
    articles: 'CPC, arts. 331, 332 §3º, 485 §7º e 1.018 §1º'
  },
  {
    id: 'fc-12',
    category: 'Efeitos',
    front: 'O que é Efeito Translativo?',
    back: 'É a faculdade e o dever do Tribunal de conhecer de matérias de ordem pública DE OFÍCIO (sem provocação das partes), como prescrição, decadência, coisa julgada e nulidade absoluta de citação.',
    mnemonicHint: 'Translativo = O Tribunal atua de ofício em questões de ordem pública!',
    articles: 'CPC, art. 485, § 3º e jurisprudência'
  },
  {
    id: 'fc-13',
    category: 'Procedimento',
    front: 'O juiz de 1º grau pode fazer o juízo de admissibilidade da apelação?',
    back: 'NÃO! O art. 1.010, § 3º do CPC proibiu expressamente o juiz de 1º grau de fazer juízo de admissibilidade na apelação. Ele apenas intima para contrarrazões e remete os autos ao Tribunal.',
    mnemonicHint: 'Na Apelação, 1º grau só carimba e despacha pro Tribunal!',
    articles: 'CPC, art. 1.010, § 3º'
  },
  {
    id: 'fc-14',
    category: 'Princípios',
    front: 'Qual a única exceção admitida ao Princípio da Singularidade?',
    back: 'A interposição simultânea de Recurso Especial (REsp ao STJ - ofensa à lei federal) e Recurso Extraordinário (RE ao STF - ofensa à Constituição) contra o mesmo acórdão que contenha dupla fundamentação autônoma.',
    mnemonicHint: 'Singularidade = 1 decisão, 1 recurso. Exceção de ouro = RE + REsp juntos!',
    articles: 'CPC, art. 1.031 e CF/88'
  },
  {
    id: 'fc-15',
    category: 'Preparo',
    front: 'Quais recursos INDEPENDEM de preparo (são gratuitos por lei)?',
    back: '1. Embargos de Declaração;\n2. Agravo em Recurso Especial e em Recurso Extraordinário (AREsp e ARE).',
    mnemonicHint: 'ED e Agravo em REsp/RE não pagam custas!',
    articles: 'CPC, art. 1.007 e 1.022'
  }
];
