import { CaseStudy } from '../types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-1',
    title: 'Caso 1: O Município do Interior e os 60 Salários Mínimos',
    narrative: 'Você atua como advogada de uma empresa prestadora de serviços que venceu uma ação de cobrança contra um Município do interior (não capital). O juiz proferiu sentença condenando o Município a pagar R$ 90.000,00 (valor líquido equivalente a 60 salários mínimos). O prazo para o procurador municipal recorrer transcorreu sem qualquer recurso. No entanto, o cartório da vara encaminhou os autos ao Tribunal de Justiça para reexame necessário.',
    question: 'Qual a sua conduta técnica diante do despacho de remessa do juiz?',
    options: [
      {
        id: 'A',
        title: 'Aguardar o julgamento do Tribunal, pois toda sentença contra ente público necessita de confirmação em 2º grau.',
        isCorrect: false,
        explanation: 'Incorreto. O CPC/2015 instituiu parâmetros objetivos no art. 496, § 3º para desobstruir os tribunais de causas de menor expressão econômica.'
      },
      {
        id: 'B',
        title: 'Peticionar demonstrando a dispensa legal da remessa necessária (art. 496, § 3º, III do CPC) por ser valor inferior a 100 salários mínimos, requerendo o trânsito em julgado imediato.',
        isCorrect: true,
        explanation: 'Excelente decisão profissional! Para municípios que não sejam capitais, sentenças líquidas abaixo de 100 salários mínimos NÃO se sujeitam à remessa necessária. A decisão transita em julgado em 1º grau de imediato!'
      },
      {
        id: 'C',
        title: 'Ajuizar Ação Rescisória imediata no Tribunal contra o juiz de 1º grau.',
        isCorrect: false,
        explanation: 'Incorreto. Ação Rescisória pressupõe trânsito em julgado e tem hipóteses restritas no art. 966 do CPC.'
      }
    ],
    practicalTip: 'Mnemônico dos tetos de dispensa: 1.000 salários mínimos (União), 500 (Estados e Capitais), 100 (demais Municípios).',
    legalBasis: 'CPC, art. 496, § 3º, inciso III'
  },
  {
    id: 'case-2',
    title: 'Caso 2: A Sentença de R$ 300.000 sem Citação Válida',
    narrative: 'Um empresário procura seu escritório apavorado: descobriu que todas as suas contas bancárias foram bloqueadas por uma sentença transitada em julgado há 3 anos. Ao examinar a cópia integral do processo arquivado, você constata que a citação inicial por correio foi devolvida sem assinatura e o juiz decretou a revelia do réu indevidamente, proferindo sentença definitiva condenatória.',
    question: 'Considerando que já se passaram mais de 2 anos do trânsito em julgado, qual meio autônomo de impugnação você deve ajuizar?',
    options: [
      {
        id: 'A',
        title: 'Ação Rescisória fundada no art. 966, V do CPC (violação manifesta de norma jurídica).',
        isCorrect: false,
        explanation: 'Incorreto. A Ação Rescisória decai fatalmente em 2 anos após o trânsito em julgado (art. 975 do CPC). Já se passaram 3 anos, de modo que a rescisória seria extinta de plano!'
      },
      {
        id: 'B',
        title: 'Ação de Querela Nullitatis Insanabilis, pois a falta de citação válida é vício transrescisório imprescritível.',
        isCorrect: true,
        explanation: 'Decisão impecável! A ausência ou nulidade insanável da citação é vício transrescisório. O réu revel nunca integrou a relação processual. Por isso, a sentença é juridicamente ineficaz e pode ser impugnada a qualquer tempo pela querela nullitatis!'
      },
      {
        id: 'C',
        title: 'Correição parcial com base na Lei 5.010/66.',
        isCorrect: false,
        explanation: 'Incorreto. Correição parcial tem prazo de 5 dias e serve para inversão tumultuária em processos em trâmite.'
      }
    ],
    practicalTip: 'Sentença sem citação válida do réu revel desafia Querela Nullitatis a qualquer tempo (Slides 30-31 do Prof. Esdras).',
    legalBasis: 'Doutrina dos Vícios Transrescisórios e CPC art. 239'
  },
  {
    id: 'case-3',
    title: 'Caso 3: O Lapso da Secretária no Comprovante de Custas',
    narrative: 'Como assessora de gabinete no Tribunal de Justiça, chega às suas mãos uma Apelação Cível em que a advogada do recorrente protocolou o recurso no 15º dia útil com excelente fundamentação, mas esqueceu por completo de juntar o comprovante de pagamento das custas do preparo. A parte apelada pede o imediato não conhecimento por deserção.',
    question: 'Qual minuta de despacho você deve submeter ao Desembargador Relator?',
    options: [
      {
        id: 'A',
        title: 'Não conhecer da apelação por deserção imediata, pois o preparo deve ser comprovado no ato da interposição (art. 1.007).',
        isCorrect: false,
        explanation: 'Incorreto! O CPC de 2015 veda a deserção sumária sem antes intimar a parte para a penalidade do pagamento em dobro.'
      },
      {
        id: 'B',
        title: 'Intimar a apelante para comprovar o recolhimento EM DOBRO no prazo de 5 dias, sob pena de deserção.',
        isCorrect: true,
        explanation: 'Brilhante! Conforme o art. 1.007, § 4º do CPC, na hipótese de ausência total de recolhimento no ato de interposição, o relator determinará a intimação da parte para recolher em DOBRO. Somente se não efetuar o pagamento em dobro é que o recurso será julgado deserto!'
      },
      {
        id: 'C',
        title: 'Conceder prazo de 5 dias para pagar o valor simples sem nenhuma penalidade.',
        isCorrect: false,
        explanation: 'Incorreto. O pagamento simples sem penalidade só se aplica para quem comprovou justo motivo impeditivo (art. 1.007, § 6º).'
      }
    ],
    practicalTip: 'Esqueceu o preparo todo = Recolhimento em dobro (art. 1.007, § 4º). Pagou valor menor = Complementa em 5 dias (art. 1.007, § 2º).',
    legalBasis: 'CPC, art. 1.007, § 4º e art. 932, parágrafo único'
  },
  {
    id: 'case-4',
    title: 'Caso 4: O Caso do Marcos de Itaboraí (Slide 91)',
    narrative: 'Marcos ajuizou ação indenizatória contra uma viação de ônibus na 1ª Vara Cível de Itaboraí/RJ. A sentença de improcedência foi proferida e publicada diretamente na própria audiência de instrução. No dia seguinte, inconformado mas resignado, Marcos peticionou dizendo concordar expressamente com o julgado. Três dias depois, Marcos arrependeu-se e interpôs Apelação com boas teses.',
    question: 'Como juiz de direito ou desembargador, qual juízo deve ser feito sobre a apelação de Marcos?',
    options: [
      {
        id: 'A',
        title: 'Julgar o recurso normalmente, pois foi protocolado dentro do prazo de 15 dias úteis e vigora o princípio da ampla defesa.',
        isCorrect: false,
        explanation: 'Incorreto. A tempestividade temporal não supre a perda do direito provocada por ato contraditório.'
      },
      {
        id: 'B',
        title: 'Não conhecer do recurso por ausência de pressuposto intrínseco, haja vista a ocorrência de preclusão lógica.',
        isCorrect: true,
        explanation: 'Resposta exata do gabarito oficial (Slide 93)! Ao manifestar expressa concordância com a sentença, Marcos praticou ato incompatível com a vontade de recorrer (preclusão lógica / renúncia tácita). O recurso carece do requisito de inexistência de fato impeditivo!'
      },
      {
        id: 'C',
        title: 'Extinguir o processo por perempção recursal.',
        isCorrect: false,
        explanation: 'Incorreto. Perempção é a perda do direito de ação por 3 extinções sucessivas por abandono da causa (art. 486, § 3º).'
      }
    ],
    practicalTip: 'Preclusão lógica decorre da prática de ato incompatível com o ato que se pretende praticar (ex: concordar com a decisão e depois tentar recorrer).',
    legalBasis: 'CPC, art. 1.000 e Slides 58 e 91 a 93'
  },
  {
    id: 'case-5',
    title: 'Caso 5: O Indeferimento da Inicial e o Efeito Regressivo',
    narrative: 'Você distribuiu uma petição inicial de cobrança e o juiz singular a indeferiu sumariamente sem mandar emendar (art. 331 do CPC). Você interpôs apelação no prazo legal demonstrando que a petição atendeu a todos os requisitos do art. 319 do CPC.',
    question: 'O que o juiz de 1º grau pode fazer antes de mandar a apelação para o Tribunal de Justiça?',
    options: [
      {
        id: 'A',
        title: 'Nada, pois o juiz de 1º grau está proibido de mexer no processo após prolatar sentença.',
        isCorrect: false,
        explanation: 'Incorreto. A apelação contra indeferimento da inicial tem regra especial que autoriza o juízo de retratação.'
      },
      {
        id: 'B',
        title: 'Pode exercer o juízo de retratação (Efeito Regressivo) no prazo de 5 dias e reformar sua própria decisão, mandando citar o réu.',
        isCorrect: true,
        explanation: 'Corretíssimo! Pelo art. 331, caput do CPC, a apelação contra indeferimento da petição inicial possui EFEITO REGRESSIVO. O juiz tem 5 dias para se retratar e fazer o processo prosseguir sem remeter ao Tribunal!'
      },
      {
        id: 'C',
        title: 'Inadmitir a apelação de plano se entender que a apelação não tem chances de vitória.',
        isCorrect: false,
        explanation: 'Incorreto. O art. 1.010, § 3º do CPC proíbe terminantemente o juiz de 1º grau de fazer juízo de admissibilidade da apelação!'
      }
    ],
    practicalTip: 'Efeito regressivo = poder de retratação do juiz prolator. Aplica-se nos arts. 331, 332 §3º, 485 §7º e em todos os agravos!',
    legalBasis: 'CPC, art. 331, caput e art. 1.010, § 3º'
  },
  {
    id: 'case-6',
    title: 'Caso 6: A Decisão Mista e a Dupla Violação Constitucional e Federal',
    narrative: 'O Tribunal de Justiça proferiu acórdão negando um pedido de indenização. Na fundamentação, o acórdão violou diretamente tanto um artigo da Constituição Federal (art. 5º, XXXV) quanto um dispositivo do Código Civil (art. 186). Sua cliente quer recorrer às instâncias superiores.',
    question: 'À luz do Princípio da Singularidade e das regras do CPC, como você deve estruturar a impugnação?',
    options: [
      {
        id: 'A',
        title: 'Interpor apenas Recurso Especial ao STJ, pois a violação da lei federal engloba implicitamente a ofensa constitucional.',
        isCorrect: false,
        explanation: 'Incorreto. O STJ não pode julgar ofensa à Constituição Federal, sob pena de usurpação de competência do STF.'
      },
      {
        id: 'B',
        title: 'Interpor simultaneamente Recurso Extraordinário (ao STF) e Recurso Especial (ao STJ), sendo esta a expressa exceção ao princípio da singularidade.',
        isCorrect: true,
        explanation: 'Perfeito! É a única hipótese do direito processual civil brasileiro em que se admite a interposição simultânea de dois recursos contra a mesma decisão (Slide 44 do Prof. Esdras e art. 1.031 do CPC)!'
      },
      {
        id: 'C',
        title: 'Interpor apelação adesiva perante o próprio Tribunal de Justiça.',
        isCorrect: false,
        explanation: 'Incorreto. Apelação é cabível contra sentença de 1º grau, não contra acórdão de Tribunal de Justiça.'
      }
    ],
    practicalTip: 'Singularidade = 1 recurso por decisão. Exceção clássica: RE ao STF (ofensa à CF) + REsp ao STJ (ofensa à Lei Federal) simultâneos.',
    legalBasis: 'CF/88 arts. 102, III e 105, III; CPC art. 1.031'
  },
  {
    id: 'case-7',
    title: 'Caso 7: A Manobra da "Reconsideração" como Embargos (Slide 45)',
    narrative: 'Em uma ação de cobrança, o juiz proferiu sentença condenatória. O réu protocolou "Pedido de Reconsideração" fora das hipóteses cabíveis. O juiz acolheu o pedido e reformou a sentença, afirmando expressamente na decisão que estava "recebendo o pedido de reconsideração como embargos de declaração com base na fungibilidade recursal".',
    question: 'Como advogada da parte autora, qual vício processual você deve arguir contra essa conduta do magistrado?',
    options: [
      {
        id: 'A',
        title: 'Violação ao Princípio da Singularidade.',
        isCorrect: false,
        explanation: 'Incorreto. Não foram interpostos dois recursos simultâneos.'
      },
      {
        id: 'B',
        title: 'Violação ao Princípio da Taxatividade Recursal.',
        isCorrect: true,
        explanation: 'Exato (Slide 46 do Prof. Esdras)! O pedido de reconsideração não é recurso e não tem previsão em lei federal. Aplicar fungibilidade a um instituto que sequer é recurso legalmente previsto viola frontalmente o princípio da taxatividade!'
      },
      {
        id: 'C',
        title: 'Violação ao Princípio da Non Reformatio in Pejus.',
        isCorrect: false,
        explanation: 'Incorreto. A non reformatio in pejus impede agravar a situação do recorrente exclusivo em grau de recurso.'
      }
    ],
    practicalTip: 'A fungibilidade só opera entre recursos verdadeiros, previstos em lei federal. Criar fungibilidade com pedido de reconsideração afronta a taxatividade.',
    legalBasis: 'CPC, art. 994 e Slide 45-46 do Prof. Esdras'
  }
];
