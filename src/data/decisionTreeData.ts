export interface DecisionTreeNode {
  id: string;
  title: string;
  question: string;
  context: string;
  recommendation?: {
    instrument: string;
    category: 'Recurso' | 'Sucedâneo' | 'Ação Autônoma';
    article: string;
    deadline: string;
    description: string;
    color: string;
  };
  options?: {
    label: string;
    description: string;
    targetNodeId: string;
  }[];
}

export const DECISION_TREE: Record<string, DecisionTreeNode> = {
  root: {
    id: 'root',
    title: '1. Estado da Decisão Judicial',
    question: 'A decisão judicial já transitou em julgado (não cabe mais nenhum recurso ordinário)?',
    context: 'A primeira grande bifurcação no processo civil separa os remédios manejados no processo em curso daqueles que exigem um novo processo.',
    options: [
      {
        label: 'Sim, já transitou em julgado',
        description: 'Não cabem mais recursos ordinários dentro daquele processo.',
        targetNodeId: 'transitado',
      },
      {
        label: 'Não, o processo ainda está em andamento',
        description: 'A decisão ainda pode ser impugnada no próprio processo.',
        targetNodeId: 'em_andamento',
      },
    ],
  },
  transitado: {
    id: 'transitado',
    title: '2. Avaliação de Vício na Decisão Transitada',
    question: 'Houve ausência ou nulidade absoluta da citação e o réu foi revel?',
    context: 'Existem vícios tão graves que impedem até a formação válida da relação processual (vícios transrescisórios).',
    options: [
      {
        label: 'Sim, o réu nunca foi citado validamente',
        description: 'Vício gravíssimo transrescisório que vulnera a própria existência jurídica.',
        targetNodeId: 'res_querela',
      },
      {
        label: 'Não, houve citação regular, mas há outro vício grave',
        description: 'Vício capitulado no art. 966 do CPC (dolo, corrupção, prova falsa, etc.).',
        targetNodeId: 'res_rescisoria_check',
      },
    ],
  },
  res_querela: {
    id: 'res_querela',
    title: 'Solução: Ação de Querela Nullitatis',
    question: 'Instrumento Identificado!',
    context: 'Como a citação válida é pressuposto de existência, a sentença proferida contra réu não citado é ineficaz.',
    recommendation: {
      instrument: 'Ação de Querela Nullitatis Insanabilis',
      category: 'Ação Autônoma',
      article: 'Doutrina e Jurisprudência dos Vícios Transrescisórios',
      deadline: 'Imprescritível / A qualquer tempo',
      description: 'Pode ser proposta mesmo após transcorridos muitos anos, não se sujeitando ao prazo de 2 anos da rescisória.',
      color: 'rose',
    },
  },
  res_rescisoria_check: {
    id: 'res_rescisoria_check',
    title: '3. Prazo Decadencial da Rescisória',
    question: 'Já se passaram mais de 2 anos contados do trânsito em julgado da última decisão?',
    context: 'O art. 975 do CPC fixa prazo decadencial estrito de 2 anos para proteger a segurança jurídica.',
    options: [
      {
        label: 'Não, ainda está dentro do prazo de 2 anos',
        description: 'O trânsito em julgado ocorreu há menos de dois anos.',
        targetNodeId: 'res_rescisoria',
      },
      {
        label: 'Sim, já se passaram mais de 2 anos',
        description: 'O prazo decadencial de dois anos já expirou.',
        targetNodeId: 'res_preclusao_maxima',
      },
    ],
  },
  res_rescisoria: {
    id: 'res_rescisoria',
    title: 'Solução: Ação Rescisória',
    question: 'Instrumento Identificado!',
    context: 'Enquadrando-se em uma das 8 hipóteses do art. 966 do CPC (Súmula 514 STF: independe de ter esgotado recursos ordinários).',
    recommendation: {
      instrument: 'Ação Rescisória',
      category: 'Ação Autônoma',
      article: 'CPC, art. 966 e 975',
      deadline: '2 anos decadenciais do trânsito em julgado',
      description: 'Competência originária do Tribunal. Cumula juízo rescindendo (desconstituir) e rescisório (novo julgamento).',
      color: 'amber',
    },
  },
  res_preclusao_maxima: {
    id: 'res_preclusao_maxima',
    title: 'Resultado: Coisa Julgada Soberana',
    question: 'Decisão Imutável',
    context: 'Decorrido o biênio decadencial sem ajuizamento da rescisória e inocorrendo vícios transrescisórios, a decisão torna-se soberanamente imutável.',
    recommendation: {
      instrument: 'Coisa Julgada Material Soberana',
      category: 'Ação Autônoma',
      article: 'CF/88, art. 5º, XXXVI e CPC, art. 502',
      deadline: 'Esgotado',
      description: 'Não cabe mais rescisória. O princípio da segurança jurídica prevalece sobre eventual inconformismo.',
      color: 'stone',
    },
  },
  em_andamento: {
    id: 'em_andamento',
    title: '2. Iniciativa do Meio de Impugnação',
    question: 'A impugnação decorre de iniciativa da parte ou de imposição obrigatória da lei enviada pelo juiz?',
    context: 'Se a iniciativa é do juiz por mandamento legal, não há voluntariedade.',
    options: [
      {
        label: 'É remessa obrigatória pelo juiz (sem recurso da parte)',
        description: 'Sentença desfavorável à Fazenda Pública que o juiz envia ao Tribunal.',
        targetNodeId: 'check_remessa',
      },
      {
        label: 'É iniciativa voluntária da parte, terceiro ou MP',
        description: 'Manifestação de inconformismo pelo legitimado processual.',
        targetNodeId: 'tipo_decisao',
      },
    ],
  },
  check_remessa: {
    id: 'check_remessa',
    title: '3. Tetos Econômicos da Remessa Necessária',
    question: 'Qual o valor certo e líquido da condenação imposta à Fazenda Pública?',
    context: 'O art. 496, § 3º dispensa a remessa necessária se o valor for inferior aos parâmetros legais.',
    options: [
      {
        label: 'Superior a 1.000 (União), 500 (Estados/Capitais) ou 100 SM (Municípios)',
        description: 'Valor excede os limites de dispensa do art. 496, § 3º.',
        targetNodeId: 'res_remessa',
      },
      {
        label: 'Inferior aos tetos legais',
        description: 'Ex: Condenação do Município do interior inferior a 100 salários mínimos.',
        targetNodeId: 'res_dispensa_remessa',
      },
    ],
  },
  res_remessa: {
    id: 'res_remessa',
    title: 'Solução: Remessa Necessária',
    question: 'Sucedâneo Recursal Identificado!',
    context: 'Condiciona a eficácia da sentença à confirmação pelo colegiado do Tribunal.',
    recommendation: {
      instrument: 'Remessa Necessária (Reexame Obrigatório)',
      category: 'Sucedâneo',
      article: 'CPC, art. 496',
      deadline: 'Ex officio (sem prazo de interposição pela parte)',
      description: 'Não é recurso por faltar voluntariedade, dialeticidade e prazo. Impede o trânsito em julgado em 1º grau.',
      color: 'emerald',
    },
  },
  res_dispensa_remessa: {
    id: 'res_dispensa_remessa',
    title: 'Resultado: Dispensa Legal de Remessa',
    question: 'Eficácia Imediata da Sentença',
    context: 'Por estar abaixo dos tetos de 1.000, 500 ou 100 salários mínimos, a remessa não ocorre.',
    recommendation: {
      instrument: 'Sentença Sujeita Apenas a Recurso Voluntário',
      category: 'Sucedâneo',
      article: 'CPC, art. 496, § 3º',
      deadline: 'Se a Fazenda não apelar em 30 dias úteis (prazo em dobro), transita em julgado.',
      description: 'Não sobe de ofício ao Tribunal. O particular pode requerer o cumprimento definitivo após o prazo recursal.',
      color: 'emerald',
    },
  },
  tipo_decisao: {
    id: 'tipo_decisao',
    title: '3. Tipo de Ato Processual Atacado',
    question: 'Qual é a natureza jurídica do pronunciamento judicial que causou sucumbência?',
    context: 'O princípio da singularidade exige adequar perfeitamente a espécie recursal ao ato impugnado.',
    options: [
      {
        label: 'Sentença (terminativa com ou sem mérito)',
        description: 'Põe fim à fase cognitiva do processo de 1º grau.',
        targetNodeId: 'res_apelacao',
      },
      {
        label: 'Decisão Interlocutória (rol do art. 1.015 do CPC)',
        description: 'Pronunciamento que decide incidente ou tutela provisória sem pôr fim ao processo.',
        targetNodeId: 'res_agravo',
      },
      {
        label: 'Decisão com obscuridade, omissão, contradição ou erro material',
        description: 'Qualquer pronunciamento judicial que necessite de integração ou esclarecimento.',
        targetNodeId: 'res_embargos',
      },
      {
        label: 'Decisão monocrática proferida por Relator no Tribunal',
        description: 'Decisão unipessoal tomada dentro do Tribunal.',
        targetNodeId: 'res_agravo_interno',
      },
      {
        label: 'Constrição judicial indevida sobre bens de quem não é parte',
        description: 'Penhora, arresto ou apreensão sobre patrimônio de terceiro.',
        targetNodeId: 'res_embargos_terceiro',
      },
    ],
  },
  res_apelacao: {
    id: 'res_apelacao',
    title: 'Solução: Recurso de Apelação',
    question: 'Recurso Ordinário por Excelência!',
    context: 'Recurso de fundamentação livre, que devolve ao tribunal a matéria fática e de direito nos limites da impugnação.',
    recommendation: {
      instrument: 'Apelação Cível',
      category: 'Recurso',
      article: 'CPC, art. 1.009 e 1.010',
      deadline: '15 dias úteis (comprovação imediata de preparo)',
      description: 'Possui efeito suspensivo próprio (ope legis - art. 1.012). O juiz de 1º grau não faz juízo de admissibilidade (§ 3º).',
      color: 'blue',
    },
  },
  res_agravo: {
    id: 'res_agravo',
    title: 'Solução: Agravo de Instrumento',
    question: 'Recurso contra Decisão Interlocutória',
    context: 'Interposto diretamente no Tribunal de 2ª instância contra as decisões expressas no art. 1.015 (ou urgência mitigada tema 988 STJ).',
    recommendation: {
      instrument: 'Agravo de Instrumento',
      category: 'Recurso',
      article: 'CPC, art. 1.015 e 1.016',
      deadline: '15 dias úteis',
      description: 'Possui efeito regressivo (juiz de 1º grau pode reconsiderar). Efeito suspensivo depende de pedido ope judicis.',
      color: 'indigo',
    },
  },
  res_embargos: {
    id: 'res_embargos',
    title: 'Solução: Embargos de Declaração',
    question: 'Recurso de Saneamento da Decisão',
    context: 'Serve para integrar omissões, esclarecer obscuridades/contradições ou corrigir erros materiais.',
    recommendation: {
      instrument: 'Embargos de Declaração',
      category: 'Recurso',
      article: 'CPC, art. 1.022 e 1.023',
      deadline: '5 dias úteis (ÚNICO recurso com prazo diferenciado!)',
      description: 'Independe de preparo (gratuito). Julgado pelo próprio órgão que proferiu a decisão impugnada.',
      color: 'teal',
    },
  },
  res_agravo_interno: {
    id: 'res_agravo_interno',
    title: 'Solução: Agravo Interno',
    question: 'Submissão ao Colegiado do Tribunal',
    context: 'Leva a decisão individual do relator para ser julgada pelo colegiado (câmara ou turma).',
    recommendation: {
      instrument: 'Agravo Interno',
      category: 'Recurso',
      article: 'CPC, art. 1.021',
      deadline: '15 dias úteis',
      description: 'Exige impugnação fundamentada e específica de cada ponto da decisão monocrática.',
      color: 'cyan',
    },
  },
  res_embargos_terceiro: {
    id: 'res_embargos_terceiro',
    title: 'Solução: Embargos de Terceiro',
    question: 'Ação Autônoma Especial de Proteção Patrimonial',
    context: 'Procedimento especial do art. 674 do CPC para livrar bens de quem não é réu nem executado.',
    recommendation: {
      instrument: 'Embargos de Terceiro',
      category: 'Ação Autônoma',
      article: 'CPC, arts. 674 a 681',
      deadline: 'Até 5 dias depois da arrematação/adjudicação (art. 675)',
      description: 'Gera um processo incidental autônomo com petição inicial, provas sumárias e citação da parte embargada.',
      color: 'rose',
    },
  },
};
