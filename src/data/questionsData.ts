import { Question } from '../types';

export const OFFICIAL_QUESTIONS: Question[] = [
  {
    id: 'q-slide-10',
    slideOrigin: 10,
    topic: 'Distinção entre Error in Procedendo e Error in Iudicando',
    questionText: 'No sistema recursal, distingue-se o error in procedendo do error in iudicando. Assinale a alternativa correta:',
    options: [
      {
        id: 'A',
        text: 'O error in procedendo refere-se a vício no conteúdo da decisão, enquanto o error in iudicando decorre de falha na condução do procedimento.'
      },
      {
        id: 'B',
        text: 'O error in iudicando está ligado a erro de julgamento (apreciação do fato ou do direito), ao passo que o error in procedendo decorre de violação de norma processual.'
      },
      {
        id: 'C',
        text: 'Ambos se referem a vícios formais do processo, diferenciando-se apenas quanto ao momento em que ocorrem.'
      },
      {
        id: 'D',
        text: 'O error in procedendo impede a interposição de recurso, enquanto o error in iudicando autoriza apenas ação autônoma de impugnação.'
      },
      {
        id: 'E',
        text: 'Não há distinção prática entre eles, pois ambos conduzem necessariamente à reforma da decisão.'
      }
    ],
    correctOptionId: 'B',
    explanation: 'Gabarito Oficial: Letra B (Slide 11). O error in iudicando é o erro substancial no julgamento de mérito (má apreciação fática ou jurídica), levando ao pedido de REFORMA. Já o error in procedendo é a violação a norma procedimental/formal, conduzindo ao pedido de ANULAÇÃO da decisão.',
    detailsByOption: {
      A: 'Incorreta. As definições foram invertidas.',
      B: 'Correta! Exata correspondência conceitual do sistema recursal brasileiro.',
      C: 'Incorreta. Error in iudicando é vício de conteúdo/substancial, não formal.',
      D: 'Incorreta. Ambos admitem recurso de impugnação no próprio processo.',
      E: 'Incorreta. Há distinção essencial: procedendo gera anulação, iudicando gera reforma.'
    }
  },
  {
    id: 'q-slide-19',
    slideOrigin: 19,
    topic: 'Remessa Necessária e Sucumbência Parcial',
    questionText: 'Quanto à remessa necessária, é correto afirmar que:',
    options: [
      {
        id: 'A',
        text: 'Não existe nos embargos à execução fiscal.'
      },
      {
        id: 'B',
        text: 'Permite o recurso adesivo feito pela parte contrária.'
      },
      {
        id: 'C',
        text: 'Não existe nas decisões proferidas contra as Autarquias e Fundações Públicas, sendo um Instituto pertinente aos órgãos da Administração direta.'
      },
      {
        id: 'D',
        text: 'Existe em processos julgados parcialmente contra o Estado e, caso não exista recurso da outra parte, refere-se apenas a parte onde o Estado tenha sido derrotado.'
      }
    ],
    correctOptionId: 'D',
    explanation: 'Gabarito Oficial: Letra D (Slide 20). Conforme o art. 496 do CPC e a jurisprudência consolidada, quando há sucumbência recíproca e o particular não interpõe recurso voluntário, a remessa necessária restringe-se estritamente à parcela em que o ente público sucumbiu.',
    detailsByOption: {
      A: 'Incorreta. O art. 496, II expressamente prevê remessa nos embargos à execução fiscal procedentes.',
      B: 'Incorreta. Súmula do STJ veda recurso adesivo em remessa necessária por falta de recurso voluntário principal.',
      C: 'Incorreta. O art. 496, I abrange expressamente autarquias e fundações de direito público.',
      D: 'Correta! A remessa oficial devolve ao tribunal exclusivamente a parte em que a Fazenda foi vencida.'
    }
  },
  {
    id: 'q-slide-28',
    slideOrigin: 28,
    topic: 'Ação Rescisória e Incompetência Absoluta',
    context: 'Em um processo, o pedido foi julgado improcedente antes da citação do réu. Entendeu o juiz que fora violado um enunciado de súmula do tribunal de justiça sobre um direito local e que a fase instrutória não era necessária. Tal sentença restou irrecorrida. Após transcorrido um ano dessa decisão, o sucessor a título universal do autor percebeu que o juízo daquele processo era absolutamente incompetente. Nesse sentido, ajuizou uma ação rescisória, para fins de desconstituição daquela sentença.',
    questionText: 'Nesse cenário, é correto afirmar que a ação rescisória:',
    options: [
      {
        id: 'A',
        text: 'não poderá ser admitida, uma vez que não houve o esgotamento da instância recursal ordinária;'
      },
      {
        id: 'B',
        text: 'não poderá ser admitida, uma vez que não há formação de coisa julgada material no processo originário;'
      },
      {
        id: 'C',
        text: 'não poderá ter seu mérito favorável, uma vez que a violação do enunciado de súmula foi de um direito local;'
      },
      {
        id: 'D',
        text: 'poderá ter procedência em seu mérito, uma vez que houve violação do princípio do contraditório;'
      },
      {
        id: 'E',
        text: 'poderá ter procedência em seu mérito, uma vez que há vício processual no julgamento no processo originário.'
      }
    ],
    correctOptionId: 'E',
    explanation: 'Gabarito Oficial: Letra E (Slide 29). Pelo art. 966, II do CPC, a decisão de mérito transitada em julgado pode ser rescindida quando proferida por juízo absolutamente incompetente (vício processual insanável de competência). Além disso, a Súmula 514 do STF expressamente autoriza rescisória sem esgotamento de recursos!',
    detailsByOption: {
      A: 'Incorreta. A Súmula 514 do STF afasta a exigência de esgotamento de recursos ordinários.',
      B: 'Incorreta. A improcedência liminar com trânsito em julgado gera coisa julgada material.',
      C: 'Incorreta. O fundamento da rescisória em análise é a incompetência absoluta do juízo (art. 966, II).',
      D: 'Incorreta. O contraditório não foi o vício que legitimou a rescisória.',
      E: 'Correta! A incompetência absoluta é vício processual expressamente previsto no art. 966, II do CPC.'
    }
  },
  {
    id: 'q-slide-34',
    slideOrigin: 34,
    topic: 'Ações Autônomas e Querela Nullitatis',
    questionText: 'Em relação às ações autônomas de impugnação de decisões judiciais, assinale a alternativa correta:',
    options: [
      {
        id: 'A',
        text: 'A ação rescisória pode ser ajuizada a qualquer tempo, desde que demonstrada a existência de erro de fato ou violação literal de norma jurídica.'
      },
      {
        id: 'B',
        text: 'A ação anulatória, diferentemente da ação rescisória, não possui prazo decadencial e é utilizada para desconstituir sentenças de mérito transitadas em julgado.'
      },
      {
        id: 'C',
        text: 'A querela nullitatis é admitida em situações excepcionais, como na hipótese de sentença proferida sem citação válida, vício que não se convalida pelo trânsito em julgado.'
      },
      {
        id: 'D',
        text: 'A reclamação constitucional é cabível apenas contra decisões interlocutórias, não sendo admitida em face de acórdãos transitados em julgado.'
      },
      {
        id: 'E',
        text: 'Os embargos de terceiro destinam-se a discutir a validade de decisão judicial que, após o trânsito em julgado, tenha violado a coisa julgada.'
      }
    ],
    correctOptionId: 'C',
    explanation: 'Gabarito Oficial: Letra C (Slide 35). A querela nullitatis insanabilis ataca vícios transrescisórios gravíssimos — em especial a sentença proferida contra réu sem citação válida e revel. Por ser ato juridicamente nulo/inexistente, não convalida com o trânsito em julgado e pode ser proposta a qualquer tempo.',
    detailsByOption: {
      A: 'Incorreta. A ação rescisória tem prazo decadencial rígido de 2 anos (art. 975 CPC).',
      B: 'Incorreta. A anulatória comum não serve para desconstituir sentenças de mérito transitadas em julgado.',
      C: 'Correta! Vício de ausência de citação é transrescisório e não se convalida com o tempo.',
      D: 'Incorreta. A reclamação constitucional tem hipóteses amplas no art. 988 do CPC.',
      E: 'Incorreta. Embargos de terceiro combatem constrição patrimonial ilegal sobre bens de não-partes.'
    }
  },
  {
    id: 'q-slide-45',
    slideOrigin: 45,
    topic: 'Princípios Recursais: Fungibilidade e Taxatividade',
    context: 'Foi emitida sentença constitutiva em processo ordinário. Inconformado com o resultado uma das partes formula pedido de reconsideração. O Juiz da causa conhece do pedido e reformula a sentença, indicando que acatou a reconsideração como embargos de declaração devido ao princípio da fungibilidade recursal.',
    questionText: 'Entendendo que a decisão é equivocada e manifestamente ilegal, o princípio processual violado com a conduta do magistrado é o da:',
    options: [
      {
        id: 'A',
        text: 'singularidade.'
      },
      {
        id: 'B',
        text: 'consumação.'
      },
      {
        id: 'C',
        text: 'taxatividade.'
      },
      {
        id: 'D',
        text: 'motivação.'
      }
    ],
    correctOptionId: 'C',
    explanation: 'Gabarito Oficial: Letra C (Slide 46). O pedido de reconsideração não é recurso e não possui previsão legal. A fungibilidade só pode ser aplicada entre recursos previstos em lei federal (taxatividade). O magistrado violou frontalmente a TAXATIVIDADE ao criar uma via recursal inexistente e fungível!',
    detailsByOption: {
      A: 'Incorreta. Não houve interposição concomitante de dois recursos.',
      B: 'Incorreta. A consumação refere-se à prática do ato processual.',
      C: 'Correta! A taxatividade exige que todo recurso e toda via fungível estejam previstos em lei federal.',
      D: 'Incorreta. O erro não foi de falta de fundamentação, mas de admissão de expediente não previsto em lei.'
    }
  },
  {
    id: 'q-slide-54',
    slideOrigin: 54,
    topic: 'Princípios da Singularidade e Fungibilidade',
    questionText: 'Quanto aos princípios recursais, assinale a correta:',
    options: [
      {
        id: 'A',
        text: 'o princípio da taxatividade recursal tem sido mitigado, admitindo-se a criação de recursos não previstos expressamente em lei, desde que as partes criem tais recursos de comum acordo, como negócio jurídico-processual.'
      },
      {
        id: 'B',
        text: 'o princípio da dialeticidade diz respeito ao elemento volitivo, ou seja, à vontade da parte em recorrer, expressa na interposição do recurso correspondente à situação jurídica dos autos.'
      },
      {
        id: 'C',
        text: 'o princípio da fungibilidade não foi previsto normativamente no atual ordenamento jurídico processual, não mais se podendo receber um recurso por outro em situações de pretensa dúvida.'
      },
      {
        id: 'D',
        text: 'pelo princípio da singularidade ou unirrecorribilidade afirma-se que só se admite uma espécie recursal como meio de impugnação de cada decisão judicial, mostrando-se defeso interpor concomitantemente duas espécies recursais contra a mesma decisão.'
      }
    ],
    correctOptionId: 'D',
    explanation: 'Gabarito Oficial: Letra D (Slide 55). O princípio da singularidade (unirrecorribilidade) consagra a regra de que contra cada ato decisório é cabível apenas um único recurso, sendo proibido interpor simultaneamente dois recursos ordinários.',
    detailsByOption: {
      A: 'Incorreta. Negócio jurídico não pode inventar novo recurso no CPC (reserva de lei federal).',
      B: 'Incorreta. Vontade diz respeito à voluntariedade; dialeticidade é o dever de motivar e rebater.',
      C: 'Incorreta. A fungibilidade decorre do art. 277 e da instrumentalidade das formas.',
      D: 'Correta! Definição impecável do princípio da singularidade ou unirrecorribilidade.'
    }
  },
  {
    id: 'q-slide-61',
    slideOrigin: 61,
    topic: 'Proposições sobre Princípios Recursais',
    questionText: 'Considere as seguintes proposições:\nI. O princípio do duplo grau é postulado constitucional inafastável, pelo que a lei ordinária não pode restringir o cabimento de recursos.\nII. A taxatividade restringe os recursos ao CPC e leis extravagantes, enquanto a singularidade permite mais de uma espécie de recurso a cada decisão recorrível.\nIII. A fungibilidade permite ao tribunal conhecer recurso errôneo se não houver erro grosseiro e se NÃO houver dúvida objetiva.\nIV. O princípio da proibição da reformatio in pejus é decorrência do efeito devolutivo, que advém do princípio dispositivo, vedando a reforma em prejuízo do recorrente exclusivo.',
    options: [
      { id: 'A', text: 'Estão corretos os itens I e II.' },
      { id: 'B', text: 'Estão corretos os itens III e IV.' },
      { id: 'C', text: 'Apenas o item IV está correto.' },
      { id: 'D', text: 'Todos os itens estão corretos.' }
    ],
    correctOptionId: 'C',
    explanation: 'Gabarito Oficial: Apenas o item IV está correto (Slide 62). Analisando os erros: O item I erra porque há hipóteses sem duplo grau (ex: competência originária STF); O item II erra ao dizer que singularidade permite mais de uma espécie; O item III erra ao dizer "se não houver dúvida" (a fungibilidade EXIGE dúvida objetiva!). Logo, apenas o item IV é verdadeiro!',
    detailsByOption: {
      A: 'Incorreta. Os itens I e II contêm graves equívocos jurídicos.',
      B: 'Incorreta. O item III errou a premissa da dúvida objetiva.',
      C: 'Correta! Exato gabarito do Slide 62 do professor Esdras.',
      D: 'Incorreta. Apenas a proposição IV é juridicamente irretocável.'
    }
  },
  {
    id: 'q-slide-67',
    slideOrigin: 67,
    topic: 'Classificação dos Recursos: Fundamentação e Extensão',
    questionText: 'Qual das alternativas abaixo apresenta um recurso que, em regra, possui fundamentação livre e pode ser tanto total quanto parcial?',
    options: [
      { id: 'a', text: 'Recurso extraordinário.' },
      { id: 'b', text: 'Embargos de declaração.' },
      { id: 'c', text: 'Recurso especial.' },
      { id: 'd', text: 'Apelação.' }
    ],
    correctOptionId: 'd',
    explanation: 'Gabarito Oficial: Letra D (Slide 68). A apelação possui fundamentação livre (a parte pode invocar qualquer questão fática ou jurídica contra a sentença) e pode ser total (atacar a sentença inteira) ou parcial (atacar apenas alguns capítulos de condenação). RE, REsp e Embargos de Declaração têm fundamentação vinculada.',
    detailsByOption: {
      a: 'Incorreta. RE tem fundamentação vinculada (art. 102, III da CF).',
      b: 'Incorreta. Embargos têm fundamentação vinculada (art. 1.022 CPC).',
      c: 'Incorreta. REsp tem fundamentação vinculada (art. 105, III da CF).',
      d: 'Correta! A apelação é por excelência o recurso de fundamentação livre.'
    }
  },
  {
    id: 'q-slide-75',
    slideOrigin: 75,
    topic: 'Pressupostos Recursais (Exceção)',
    questionText: 'Quanto aos recursos, é correto afirmar, EXCETO, que:',
    options: [
      {
        id: 'A',
        text: 'O cabimento, o interesse recursal e a legitimidade recursal são requisitos recursais intrínsecos.'
      },
      {
        id: 'B',
        text: 'O julgamento de um recurso não poderá criar situação mais prejudicial para a parte recorrente do que aquela existente antes da interposição.'
      },
      {
        id: 'C',
        text: 'Em atenção ao princípio da fungibilidade, o recurso equivocado poderá ser conhecido como correto desde que exista dúvida objetiva quanto ao recurso cabível, inexista erro grosseiro e esteja dentro do prazo para interposição do recurso adequado.'
      },
      {
        id: 'D',
        text: 'Conforme o caso, uma decisão poderá ser impugnada por até dois recursos ordinários diferentes.'
      }
    ],
    correctOptionId: 'D',
    explanation: 'Gabarito Oficial: Letra D (Slide 76). A proposição D é FALSA (e portanto a resposta correta da questão EXCETO) porque o princípio da singularidade proíbe terminantemente a interposição de dois recursos ordinários contra a mesma decisão. A única exceção de recursos simultâneos é RE (STF) e REsp (STJ), que são recursos extraordinários, e não ordinários!',
    detailsByOption: {
      A: 'Verdadeira. CALII compõe os pressupostos intrínsecos.',
      B: 'Verdadeira. Princípio da non reformatio in pejus.',
      C: 'Verdadeira. Os 3 requisitos cumulativos da fungibilidade recursal.',
      D: 'FALSA (Gabarito da questão)! Não cabem dois recursos ordinários simultâneos.'
    }
  },
  {
    id: 'q-slide-86',
    slideOrigin: 86,
    topic: 'Preparo Recursal (Verdadeiro ou Falso)',
    questionText: 'A respeito do preparo, como requisito extrínseco de admissibilidade dos recursos, assinale a sequência correta de V ou F:\n1. O pagamento do preparo só deve ser comprovado se houver impugnação da parte contrária.\n2. O porte de remessa e retorno dos autos é ônus do Estado.\n3. São dispensados de preparo os recursos interpostos pelas autarquias.\n4. Não dependem de preparo os recursos do Ministério Público, mesmo quando atua como parte.\n5. A insuficiência no valor do preparo implicará deserção, se o recorrente, intimado, não vier a supri-lo em cinco dias.',
    options: [
      { id: 'A', text: 'V - V - F - F - V' },
      { id: 'B', text: 'F - F - V - V - V' },
      { id: 'C', text: 'F - V - V - F - F' },
      { id: 'D', text: 'V - F - F - V - V' }
    ],
    correctOptionId: 'B',
    explanation: 'Gabarito Oficial: F - F - V - V - V (Slide 86). O preparo deve ser comprovado imediatamente no ato de protocolo (e não só se houver impugnação); o porte de remessa e retorno é ônus do recorrente em autos físicos; autarquias e MP são dispensados de preparo; e a insuficiência gera deserção apenas se não for suprida em 5 dias.',
    detailsByOption: {
      A: 'Incorreta.',
      B: 'Correta! Exata correspondência com o slide 86.',
      C: 'Incorreta.',
      D: 'Incorreta.'
    }
  },
  {
    id: 'q-slide-91',
    slideOrigin: 91,
    topic: 'Preclusão Lógica e Desistência/Renúncia',
    context: 'Marcos propôs ação indenizatória na 1ª Vara Cível de Itaboraí/RJ. A ação foi julgada improcedente. A sentença foi proferida na própria Audiência de Instrução e Julgamento. No dia subsequente, Marcos protocolou petição expressando sua inteira concordância com a sentença. Três dias depois, Marcos arrependeu-se e interpôs apelação buscando reformar o julgado.',
    questionText: 'Diante do caso concreto narrado, é correto afirmar que:',
    options: [
      {
        id: 'A',
        text: 'o recurso de apelação interposto por Marcos é o adequado, devendo ser recebido pelo juízo cível em que o feito tramitou em respeito aos princípios do contraditório e da ampla defesa.'
      },
      {
        id: 'B',
        text: 'o recurso interposto contra o “decisum” não irá ser julgado no mérito, pelo fato de ter ocorrido verdadeira preclusão lógica.'
      },
      {
        id: 'C',
        text: 'o recurso interposto é tempestivo, posto que Marcos ainda se encontrava dentro do prazo legal para recorrer.'
      },
      {
        id: 'D',
        text: 'o recurso interposto não deve ser acolhido porquanto, quando Marcos peticionou concordando com a sentença, operou-se a figura da perempção.'
      },
      {
        id: 'E',
        text: 'não poderá ser interposto o recurso em decorrência da presença da preclusão temporal.'
      }
    ],
    correctOptionId: 'B',
    explanation: 'Gabarito Oficial: Letra B (Slide 93). Ao peticionar concordando expressamente com a sentença no dia seguinte, Marcos praticou ato absolutamente incompatível com a vontade de recorrer (preclusão lógica / renúncia tácita ao recurso). Portanto, seu recurso posterior carece de pressuposto intrínseco (inexistência de fato impeditivo) e não terá o mérito examinado.',
    detailsByOption: {
      A: 'Incorreta. A ampla defesa não supera a preclusão lógica consumada.',
      B: 'Correta! Preclusão lógica impede o exame do mérito da apelação.',
      C: 'Incorreta. Embora tempestivo no tempo, foi fulminado pela preclusão lógica.',
      D: 'Incorreta. Não houve perempção (perempção é a perda do direito de ação por dar causa a 3 extinções por abandono).',
      E: 'Incorreta. Não foi preclusão temporal (o prazo de 15 dias não havia acabado).'
    }
  },
  {
    id: 'q-slide-111',
    slideOrigin: 111,
    topic: 'Eficácia da Decisão e Efeito Suspensivo',
    questionText: 'Os recursos possuem princípios informativos e efeitos, alguns consagrados em doutrina, outros previstos expressamente em lei. A esse respeito, assinale a afirmativa correta:',
    options: [
      {
        id: 'A',
        text: 'O efeito obstativo é o efeito de transferir ao órgão julgador do recurso o conhecimento da matéria impugnada no recurso.'
      },
      {
        id: 'B',
        text: 'Salvo disposição legal ou decisão judicial em contrário, a interposição de recurso não impede a eficácia da decisão.'
      },
      {
        id: 'C',
        text: 'O princípio da taxatividade não impede a criação de recursos não previstos em lei por vontade das partes.'
      },
      {
        id: 'D',
        text: 'O efeito translativo impede o conhecimento de matérias de ordem pública no julgamento do recurso.'
      },
      {
        id: 'E',
        text: 'O princípio da voluntariedade impede a interposição de recursos pelo Ministério Público, ainda que atuando enquanto fiscal do ordenamento jurídico.'
      }
    ],
    correctOptionId: 'B',
    explanation: 'Gabarito Oficial: Letra B (Slide 112). Reproduz exatamente a letra do art. 995, caput do CPC: a regra geral no processo civil brasileiro é que a interposição de recurso NÃO impede a eficácia da decisão recorrida (não tem efeito suspensivo automático, salvo exceção legal ou decisão judicial expressa).',
    detailsByOption: {
      A: 'Incorreta. Transferir matéria ao tribunal é efeito devolutivo, não obstativo.',
      B: 'Correta! Regra basilar do art. 995 do Código de Processo Civil.',
      C: 'Incorreta. A taxatividade impede categoricamente criação de recurso por particulares.',
      D: 'Incorreta. O efeito translativo PERMITE o conhecimento de ofício.',
      E: 'Incorreta. O MP pode recorrer mesmo quando atua como fiscal da ordem jurídica (art. 996).'
    }
  },
  {
    id: 'q-slide-117',
    slideOrigin: 117,
    topic: 'Efeito Regressivo / Juízo de Retratação',
    context: 'Tendo sido proferida uma decisão interlocutória, recorre-se por meio de agravo de instrumento e, noticiada a interposição recursal, o juiz que proferiu a decisão a reconsidera.',
    questionText: 'Esta conduta do juiz diz respeito ao efeito recursal:',
    options: [
      { id: 'A', text: 'devolutivo.' },
      { id: 'B', text: 'expansivo.' },
      { id: 'C', text: 'regressivo.' },
      { id: 'D', text: 'substitutivo.' },
      { id: 'E', text: 'translativo.' }
    ],
    correctOptionId: 'C',
    explanation: 'Gabarito Oficial: Letra C (Slide 118). O efeito regressivo (também chamado de juízo de retratação ou efeito iterativo) é aquele que autoriza o próprio juízo prolator da decisão recorrida ("a quo") a reexaminar seu ato e voltar atrás, reformulando-o.',
    detailsByOption: {
      A: 'Incorreta. Devolutivo remete a matéria ao Tribunal superior.',
      B: 'Incorreta. Expansivo atinge atos fora do capítulo estrito.',
      C: 'Correta! O efeito regressivo autoriza a retratação pelo juiz da causa.',
      D: 'Incorreta. Substitutivo é o acórdão que substitui a decisão.',
      E: 'Incorreta. Translativo é o exame de matérias de ordem pública ex officio.'
    }
  },
  {
    id: 'q-slide-119',
    slideOrigin: 119,
    topic: 'Sucessão Cronológica dos Efeitos Recursais',
    context: 'Em sentença, foi julgado procedente o pedido autoral, com base em fundamento suficiente. Em recurso, o réu pediu a apreciação de outros argumentos da defesa que não haviam sido considerados na sentença. O tribunal conheceu do recurso e, ao julgá-lo, verificou uma questão de ordem pública que não havia sido cogitada até então na demanda. Com base nessa questão de ordem pública, prolatou-se acórdão que reformou a sentença.',
    questionText: 'Com relação aos efeitos recursais no caso hipotético apresentado, são verificados, respectiva e cronologicamente, os efeitos:',
    options: [
      { id: 'A', text: 'regressivo, translativo e expansivo.' },
      { id: 'B', text: 'regressivo, devolutivo e translativo.' },
      { id: 'C', text: 'devolutivo, expansivo e translativo.' },
      { id: 'D', text: 'devolutivo, translativo e substitutivo.' },
      { id: 'E', text: 'devolutivo, translativo e regressivo.' }
    ],
    correctOptionId: 'D',
    explanation: 'Gabarito Oficial: Letra D (Slide 120). Cronologia perfeita: 1º) Ao apelar devolvendo os argumentos defensivos -> Efeito Devolutivo (profundidade); 2º) Ao detectar matéria de ordem pública de ofício -> Efeito Translativo; 3º) Ao prolatar o acórdão que substitui a sentença reformada -> Efeito Substitutivo.',
    detailsByOption: {
      A: 'Incorreta. Não houve retratação pelo juiz de 1º grau.',
      B: 'Incorreta. Não houve efeito regressivo.',
      C: 'Incorreta. Não foi efeito expansivo, mas translativo e substitutivo.',
      D: 'Correta! Cronologia exata do caso do Slide 119 do Prof. Esdras.',
      E: 'Incorreta. O julgamento no tribunal não tem efeito regressivo neste momento.'
    }
  }
];
