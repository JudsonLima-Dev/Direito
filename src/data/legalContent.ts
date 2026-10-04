import { LegalModule } from '../types';

export const LEGAL_MODULES: LegalModule[] = [
  {
    id: 'modulo-1',
    number: 1,
    title: 'Conceito e Espécies de Meios de Impugnação',
    subtitle: 'A trilogia processual e as 5 características definidoras do Recurso',
    slideRange: 'Slides 1 a 11',
    sections: [
      {
        id: 'sec-1-1',
        moduleId: 'modulo-1',
        title: 'Meios de Impugnação da Decisão Judicial',
        slideRange: 'Slides 3 a 4',
        summary: 'Instrumentos processuais disponíveis às partes ou terceiros para questionar a validade ou a justiça de uma decisão.',
        plainLanguage: 'Imagine que um juiz tomou uma decisão e você não concordou. Você tem ferramentas para contestar. A palavra "meios de impugnação" é o nome da família inteira dessas ferramentas, dividida em três grupos: os Recursos propriamente ditos, os Sucedâneos e as Ações Autônomas.',
        technicalContent: [
          'Meios de impugnação das decisões judiciais são instrumentos processuais disponíveis às partes ou a terceiros interessados para questionar a validade (vício de forma) ou a justiça (vício de conteúdo) de uma decisão judicial.',
          'Trata-se de uma expressão genérica que comporta 3 espécies fundamentais: a) Recursos; b) Sucedâneos recursais; c) Meios autônomos de impugnação.',
          'Conceito estrito de Recurso: meio de impugnação voluntário, manejado pelas partes, pelo terceiro prejudicado ou pelo Ministério Público (MP), previsto em lei federal, para, no mesmo processo, e dentro de um prazo determinado, reformar, anular, esclarecer ou integrar uma decisão judicial.'
        ],
        articles: ['CPC, art. 994', 'CPC, art. 996'],
        visualDiagram: {
          type: 'comparison',
          title: 'As 3 Espécies de Meios de Impugnação',
          items: [
            { label: 'Recursos', desc: 'No mesmo processo, dentro de prazo fatal em lei federal, voluntário (Ex: Apelação, Agravo de Instrumento).' },
            { label: 'Sucedâneos Recursais', desc: 'Categoria residual. Não são recursos formais nem ações novas (Ex: Remessa Necessária, Correição Parcial, Pedido de Reconsideração).' },
            { label: 'Ações Autônomas', desc: 'Instauram uma nova relação jurídica e um processo autônomo (Ex: Ação Rescisória, Querela Nullitatis, Embargos de Terceiro).' },
          ]
        },
        examTrap: 'Cuidado! Dizer que "todo meio de impugnação é um recurso" é um erro clássico de prova. O recurso é apenas uma das 3 espécies!',
        practicalExample: 'Se o juiz profere uma sentença com erro, a parte apela (recurso). Já se a sentença desfavorável for contra o Estado e o juiz a envia ao tribunal sem pedido da parte, trata-se de remessa necessária (sucedâneo recursal).',
        audioText: 'Meios de impugnação são as ferramentas processuais para questionar a validade ou a justiça de uma decisão judicial. Eles se dividem em três espécies: Recursos, Sucedâneos Recursais e Ações Autônomas de Impugnação. O recurso é o meio voluntário, previsto em lei federal, manejado no mesmo processo e com prazo fixado.'
      },
      {
        id: 'sec-1-2',
        moduleId: 'modulo-1',
        title: 'As 5 Características Essenciais do Recurso',
        slideRange: 'Slides 5 a 9',
        summary: 'Para ter natureza recursal estrita, o ato deve preencher 5 requisitos cumulativos.',
        plainLanguage: 'Para ser chamado de "Recurso", um ato precisa de 5 selos obrigatórios: 1) A parte tem que querer (voluntário); 2) Continua no mesmo processo (não abre processo novo); 3) Está escrito na Lei Federal; 4) Feito pelas partes, terceiro ou MP; 5) Serve para consertar, anular, esclarecer ou completar a decisão.',
        technicalContent: [
          '1. Voluntariedade (iniciativa da parte): O recurso é um ônus processual. Sua existência e extensão dependem de manifestação expressa de vontade (princípio dispositivo). Por isso, a expressão "recurso de ofício" é tecnicamente equivocada — o termo correto é "remessa necessária" (CPC, art. 496).',
          '2. Desenvolvimento no próprio processo: O recurso não instaura uma nova relação jurídica processual, sendo mero desdobramento do direito de ação originário. Prova disso é que o recorrido é "intimado" e não "citado". Nota: não confundir processo com autos (o recurso pode tramitar em autos apartados, como no agravo de instrumento).',
          '3. Expressa previsão em lei federal: Decorrência do princípio da taxatividade. A lei federal não apenas deve prever o instrumento, mas atribuir-lhe expressamente a qualificação de recurso.',
          '4. Manejável pelas partes, terceiros prejudicados ou Ministério Público: Se for determinado pelo juiz de ofício, não é recurso (caso da remessa necessária).',
          '5. Objetivo de reformar, anular, esclarecer ou integrar: Se o objetivo for puramente organizar a ordem dos atos (ex: correição), não tem natureza recursal.'
        ],
        articles: ['CPC, art. 496', 'CPC, art. 994', 'CPC, art. 996'],
        visualDiagram: {
          type: 'steps',
          title: 'Objetivos e Causas de Pedir Recursais',
          items: [
            { label: 'Pedido de Reforma', desc: 'Causa de pedir: Error in iudicando (erro de julgamento na interpretação dos fatos ou da lei). Juízo a quo errou no conteúdo.' },
            { label: 'Pedido de Anulação', desc: 'Causa de pedir: Error in procedendo (vício formal/procedimental: ultra petita, falta de fundamentação, cerceamento de defesa).' },
            { label: 'Pedido de Esclarecimento', desc: 'Causa de pedir: Obscuridade ou contradição na decisão (típico dos Embargos de Declaração).' },
            { label: 'Pedido de Integração', desc: 'Causa de pedir: Omissão do julgador sobre ponto obrigatório.' }
          ]
        },
        examTrap: 'No recurso, a outra parte é INTIMADA para apresentar contrarrazões, e NUNCA citada! Se a questão falar em "citação do recorrido", está errada.',
        practicalExample: 'Se o juiz condenou você a pagar 100 mil reais quando o contrato dizia 50 mil, houve erro de julgamento (error in iudicando) -> você pede a REFORMA. Se o juiz não deixou você ouvir testemunhas essenciais, houve cerceamento de defesa (error in procedendo) -> você pede a ANULAÇÃO.',
        audioText: 'A natureza recursal exige cinco características fundamentais: voluntariedade, desenvolvimento no próprio processo onde a decisão foi proferida, previsão expressa em lei federal, legitimidade das partes ou terceiro ou Ministério Público, e objetivo específico de reformar, anular, esclarecer ou integrar a decisão judicial.'
      }
    ]
  },
  {
    id: 'modulo-2',
    number: 2,
    title: 'Sucedâneos Recursais',
    subtitle: 'Remessa Necessária, Correição Parcial e Pedido de Reconsideração',
    slideRange: 'Slides 12 a 20',
    sections: [
      {
        id: 'sec-2-1',
        moduleId: 'modulo-2',
        title: 'Remessa Necessária (Reexame Necessário)',
        slideRange: 'Slides 12 a 15',
        summary: 'Prerrogativa da Fazenda Pública prevista no art. 496 do CPC que condiciona a eficácia da sentença à confirmação pelo Tribunal.',
        plainLanguage: 'Quando o governo perde uma ação judicial, a lei brasileira desconfia e não deixa a sentença ter efeito imediato nem transitar em julgado em 1º grau. O processo tem que subir obrigatoriamente para o Tribunal conferir. Não é um recurso porque não foi a parte que pediu, foi a lei que mandou.',
        technicalContent: [
          'A remessa necessária (art. 496 do CPC) é uma prerrogativa processual da Fazenda Pública. A sentença não produz efeito senão depois de confirmada pelo tribunal (duplo grau de jurisdição obrigatório).',
          'Hipóteses de cabimento: 1) Sentença proferida contra a União, Estados, DF, Municípios e suas autarquias e fundações de direito público; 2) Julgamento de procedência (total ou parcial) dos embargos à execução fiscal.',
          'Exceções por teto econômico (CPC, art. 496, § 3º) — Não há remessa necessária quando o valor líquido for inferior a: I - 1.000 salários-mínimos para União e autarquias federais; II - 500 salários-mínimos para Estados, DF, capitais e autarquias estaduais; III - 100 salários-mínimos para os demais Municípios.',
          '5 Razões que afastam a natureza de recurso: 1) Ausência de voluntariedade (imposição legal); 2) Ausência de dialeticidade (não há razões nem contrarrazões formuladas); 3) Ausência de prazo de interposição; 4) Não é prevista em lei federal com qualificação de recurso; 5) Não é manejada pelas partes, mas enviada pelo juiz de ofício.'
        ],
        articles: ['CPC, art. 496, caput, incisos I e II', 'CPC, art. 496, § 3º, I, II e III'],
        mnemonic: {
          acronym: '1000 - 500 - 100',
          meaning: 'Tetos de dispensa da Remessa Necessária em Salários Mínimos',
          items: [
            { letter: '1.000', word: 'União', description: 'União e respectivas autarquias e fundações federais' },
            { letter: '500', word: 'Estados / Capitais', description: 'Estados, DF, autarquias estaduais e Municípios Capitais' },
            { letter: '100', word: 'Demais Municípios', description: 'Todos os outros municípios do interior' }
          ]
        },
        examTrap: 'Se o Estado foi derrotado apenas parcialmente (ex: pedido de 100 mil, juiz deferiu 40 mil e réu não recorreu), a remessa necessária limita-se EXCLUSIVAMENTE à parte em que o Estado foi derrotado!',
        practicalExample: 'Um município do interior é condenado a pagar 30 salários-mínimos. Como 30 < 100 salários-mínimos, a sentença NÃO vai para reexame necessário, transitando em julgado normalmente em 1º grau se ninguém apelar.',
        audioText: 'A remessa necessária, prevista no artigo 496 do Código de Processo Civil, é prerrogativa da Fazenda Pública. Não é recurso porque carece de voluntariedade, prazo e dialeticidade. Fica dispensada quando a condenação for inferior a mil salários para a União, quinhentos para Estados e capitais, ou cem salários para os demais municípios.'
      },
      {
        id: 'sec-2-2',
        moduleId: 'modulo-2',
        title: 'Correição Parcial e Pedido de Reconsideração',
        slideRange: 'Slides 16 a 18',
        summary: 'Meios residuais para corrigir inversão tumultuária dos autos ou provocar o juiz sobre matérias de ordem pública.',
        plainLanguage: 'Correição Parcial é como "chamar o supervisor" quando o juiz bagunçou a ordem dos atos do processo. Já o Pedido de Reconsideração é você pedir com jeitinho para o juiz rever algo de ordem pública (como prescrição); ele NÃO suspende nem interrompe seu prazo para recorrer!',
        technicalContent: [
          'Correição Parcial: Prevista no art. 6º, I da Lei Federal 5.010/66 (e em regimentos internos dos tribunais). Prazo: 5 dias. Finalidade: corrigir erro de ofício ou inversão tumultuária da ordem procedimental praticada pelo magistrado que cause desordem ou confusão.',
          'Pedido de Reconsideração: Trata-se de mera construção jurisprudencial, sem qualquer previsão legal expressa no CPC. Como não possui assento em lei federal, descarta-se categoricamente a sua natureza recursal.',
          'Efeito fulminante do Pedido de Reconsideração: NÃO interrompe e NÃO suspende o prazo recursal! Se a parte formular pedido de reconsideração esperando resposta do juiz, o prazo de 15 dias da apelação ou agravo continuará correndo até precluir.',
          'Hipóteses de cabimento restrito do Pedido de Reconsideração: a) Decisões não sujeitas à preclusão sobre matérias de ordem pública conhecíveis de ofício (ex: prescrição, decadência); b) Erro material evidente (art. 494 do CPC); c) Decisões interlocutórias que não admitem recurso de agravo de instrumento de imediato.'
        ],
        articles: ['Lei 5.010/1966, art. 6º, I', 'CPC, art. 494'],
        examTrap: 'O Pedido de Reconsideração NUNCA interrompe nem suspende o prazo de recurso! É a pegadinha favorita da OAB e da faculdade.',
        practicalExample: 'O advogado recebe uma decisão interlocutória desfavorável e protocola "pedido de reconsideração". O juiz demora 20 dias para responder e nega. Quando o advogado tenta entrar com agravo de instrumento, o tribunal não conhece porque já precluiu o prazo!',
        audioText: 'A correição parcial visa sanar confusão tumultuária no procedimento, com prazo de cinco dias. Já o pedido de reconsideração não possui previsão legal, não tem natureza recursal e jamais suspende ou interrompe o prazo para interposição do recurso cabível.'
      }
    ]
  },
  {
    id: 'modulo-3',
    number: 3,
    title: 'Ações Autônomas de Impugnação',
    subtitle: 'Ação Rescisória, Querela Nullitatis, Reclamação Constitucional e Embargos de Terceiro',
    slideRange: 'Slides 21 a 35',
    sections: [
      {
        id: 'sec-3-1',
        moduleId: 'modulo-3',
        title: 'Ação Rescisória (CPC, art. 966)',
        slideRange: 'Slides 22 a 29',
        summary: 'Ação que gera novo processo originário no Tribunal para desconstituir decisão transitada em julgado.',
        plainLanguage: 'Depois que um processo termina e não cabe mais nenhum recurso (transitou em julgado), a coisa julgada é protegida. Mas se houve uma fraude grave (ex: o juiz foi subornado, o juiz era absolutamente incompetente, ou houve dolo da parte vencedora), você pode abrir um processo NOVO diretamente no Tribunal: a Ação Rescisória.',
        technicalContent: [
          'Conceito e natureza jurídica: É ação autônoma de impugnação; instaura nova relação jurídica processual e pressupõe o trânsito em julgado (art. 966 do CPC). Produz, em regra, efeitos ex tunc (desconstitutivos).',
          'Súmula 514 do STF: "Admite-se ação rescisória contra sentença transitada em julgado, ainda que contra ela não se tenha esgotado todos os recursos ordinários." Ou seja, a parte não é obrigada a ter recorrido até a última instância para propor rescisória.',
          'Duplo juízo cumulado: 1) Juízo rescindendo (juízo para rescindir/desconstituir a sentença viciada); 2) Juízo rescisório (se acolhido o primeiro, o tribunal profere um novo julgamento de mérito sobre a causa).',
          'Prazo decadencial: 2 (dois) anos, contados do trânsito em julgado da última decisão proferida no processo (CPC, art. 975). Quando a Fazenda Pública figurar no processo, o termo inicial só corre após o transcurso do seu prazo em dobro para recorrer.',
          'Competência originária: Cabe ao próprio tribunal competente julgar a rescisória de seus próprios julgados ou das sentenças de juízes a ele vinculados (TJ, TRF, STJ, STF).',
          'As 8 hipóteses taxativas do art. 966 do CPC: I - Prevaricação, concussão ou corrupção do juiz; II - Proferida por juiz impedido ou juízo absolutamente incompetente; III - Resultar de dolo/coação da parte vencedora, simulação ou colusão; IV - Ofensa à coisa julgada; V - Violar manifestamente norma jurídica; VI - Prova falsa comprovada em processo criminal ou na própria rescisória; VII - Prova nova obtida após o trânsito que assegure pronunciamento favorável; VIII - Erro de fato verificável pelo exame dos autos.'
        ],
        articles: ['CPC, art. 966, incisos I a VIII e § 2º', 'CPC, art. 967', 'CPC, art. 969', 'CPC, art. 975', 'Súmula 514, STF'],
        examTrap: 'A ação rescisória NÃO exige o esgotamento prévio dos recursos cabíveis (Súmula 514 do STF)! A questão que disser que é inadmissível propor rescisória porque a parte deixou a sentença transitar em julgado sem recorrer está errada!',
        practicalExample: 'O autor venceu a causa usando um recibo falso. O réu descobriu a falsidade pericial um ano após o trânsito em julgado. O réu ajuíza Ação Rescisória com base no art. 966, VI do CPC, pedindo a desconstituição do acórdão e um novo julgamento favorável.',
        audioText: 'A ação rescisória é uma ação autônoma de competência originária do Tribunal, com prazo decadencial de dois anos. Pressupõe decisão transitada em julgado, mas não exige esgotamento dos recursos, conforme a Súmula 514 do Supremo Tribunal Federal. Visa desconstituir a coisa julgada em oito hipóteses restritas do artigo 966 do CPC.'
      },
      {
        id: 'sec-3-2',
        moduleId: 'modulo-3',
        title: 'Querela Nullitatis, Reclamação e Embargos de Terceiro',
        slideRange: 'Slides 30 a 35',
        summary: 'Outras ações autônomas para vícios transrescisórios, usurpação de competência e constrição indevida de patrimônio.',
        plainLanguage: 'Se a falha no processo for tão monstruosa que fere a existência do processo (como julgar e condenar alguém sem nunca ter intimado ou citado essa pessoa), isso é um "vício transrescisório". Nem a coisa julgada de 2 anos segura! A qualquer tempo cabe a Querela Nullitatis.',
        technicalContent: [
          'Ação de Querela Nullitatis (ou actio nullitatis insanabilis): Destinada a combater os vícios transrescisórios, isto é, vícios de gravidade máxima que superam até mesmo a barreira dos 2 anos da ação rescisória. Não prescreve nem decai!',
          'Exemplos de vícios transrescisórios: 1) Ausência ou nulidade de citação do réu revel; 2) Sentença proferida sem as condições da ação; 3) Sentença proferida em desconformidade com coisa julgada anterior; 4) Decisão fundada em lei que foi posteriormente declarada inconstitucional pelo STF em controle concentrado.',
          'Reclamação Constitucional (CPC, art. 988): Ação autônoma que visa preservar a competência do tribunal e garantir a autoridade das suas decisões, bem como garantir a observância de precedentes obrigatórios (STF, Súmulas Vinculantes, IAC e IRDR).',
          'Embargos de Terceiro (CPC, arts. 674 a 681): Procedimento especial para defender o patrimônio de quem não faz parte da relação processual originária, mas sofreu constrição judicial indevida (ex: penhora, arresto, sequestro ilegal de bem).'
        ],
        articles: ['CPC, art. 988', 'CPC, arts. 674 ao 681'],
        examTrap: 'Sentença proferida sem citação válida gera vício transrescisório! Não preclui e não convalida com o trânsito em julgado. Pode ser atacada a qualquer momento por querela nullitatis.',
        practicalExample: 'Um proprietário aluga seu imóvel. O inquilino é processado por dívidas comerciais e o oficial de justiça penhora o imóvel do proprietário. O proprietário entra com Embargos de Terceiro para livrar seu patrimônio da penhora.',
        audioText: 'A ação de querela nullitatis corrige vícios transrescisórios, como a ausência de citação válida, podendo ser ajuizada a qualquer tempo. A reclamação do artigo 988 garante a competência do tribunal e o respeito aos precedentes vinculantes. E os embargos de terceiro defendem os bens de quem não é parte contra penhoras indevidas.'
      }
    ]
  },
  {
    id: 'modulo-4',
    number: 4,
    title: 'Princípios Recursais Fundamentais',
    subtitle: 'Duplo Grau, Taxatividade, Singularidade, Dialeticidade, Fungibilidade e Não Piora',
    slideRange: 'Slides 36 a 62',
    sections: [
      {
        id: 'sec-4-1',
        moduleId: 'modulo-4',
        title: 'Duplo Grau de Jurisdição e Taxatividade',
        slideRange: 'Slides 36 a 42',
        summary: 'Diferença entre instância e grau, previsão constitucional implícita e o rol taxativo de recursos.',
        plainLanguage: 'Instância é o lugar físico onde o juiz trabalha (1ª instância = comarca; 2ª instância = tribunal). Grau de jurisdição é quantas vezes aquele caso já foi analisado (1º contato = 1º grau). Além disso, ninguém inventa recurso novo em contrato: só a lei federal pode criar recursos (Taxatividade).',
        technicalContent: [
          'Instância vs Grau de Jurisdição: Instância é conceito estático de organização judiciária (1ª instância = juízes de varas; 2ª instância = desembargadores nos tribunais; instância especial = ministros no STJ/STF). Grau de jurisdição é conceito dinâmico: refere-se à quantidade de vezes que o caso foi examinado. Exemplo crucial: quando o Tribunal de Justiça julga uma ação de sua competência originária (ex: mandado de segurança contra Governador), o Tribunal atua em 1º grau de jurisdição!',
          'Fundamentos do Duplo Grau: 1) Inibir arbitrariedades do magistrado singular; 2) Reexame por magistrados colegiados, mais antigos e experientes, garantindo maior maturidade à decisão.',
          'Previsão Constitucional: Apenas a Constituição do Império de 1824 tinha previsão expressa do duplo grau (art. 158). A CF/88 NÃO possui previsão expressa! Todavia, o STJ reconhece como garantia implícita decorrente do devido processo legal e do direito de ação. Há exceções constitucionais expressas, como as ações de competência originária do STF (art. 102, I).',
          'Princípio da Taxatividade: Todos os recursos devem estar expressamente previstos em rol taxativo de lei federal. O CPC prevê 9 recursos no art. 994: I - apelação; II - agravo de instrumento; III - agravo interno; IV - embargos de declaração; V - recurso ordinário; VI - recurso especial; VII - recurso extraordinário; VIII - agravo em REsp/RE; IX - embargos de divergência. Leis extravagantes também podem prever, ex: Recurso Inominado (Lei 9.099/95, art. 41).'
        ],
        articles: ['CF/1988, art. 102, I', 'CPC, art. 994', 'Lei 9.099/1995, art. 41'],
        visualDiagram: {
          type: 'table',
          title: 'Rol Taxativo do Art. 994 do CPC',
          items: [
            { label: 'Apelação (I)', desc: 'Contra sentença final (com ou sem resolução de mérito).' },
            { label: 'Agravo de Instrumento (II)', desc: 'Contra decisões interlocutórias do rol do art. 1.015.' },
            { label: 'Agravo Interno (III)', desc: 'Contra decisão monocrática de relator para o colegiado.' },
            { label: 'Embargos de Declaração (IV)', desc: 'Contra obscuridade, omissão, contradição ou erro material.' },
            { label: 'Recursos Ordinário, Especial e Extraordinário (V, VI, VII)', desc: 'Para STJ e STF nas hipóteses constitucionais.' },
            { label: 'Agravo em REsp/RE & Embargos de Divergência (VIII, IX)', desc: 'Mecanismos de destravamento e uniformização de jurisprudência.' }
          ]
        },
        examTrap: 'As partes NÃO podem criar um novo tipo de recurso por acordo ou negócio jurídico-processual! O princípio da taxatividade exige estrita previsão em lei federal.',
        practicalExample: 'Duas grandes empresas colocam no contrato: "Caso haja litígio, caberá recurso de revisão ao diretor do tribunal". Essa cláusula é nula por violar o princípio da taxatividade recursal.',
        audioText: 'O duplo grau de jurisdição não está expresso na Constituição de 1988, sendo considerado garantia implícita pelo STJ. Já o princípio da taxatividade estabelece que os recursos dependem de lei federal em rol taxativo, como os nove recursos previstos no artigo 994 do Código de Processo Civil.'
      },
      {
        id: 'sec-4-2',
        moduleId: 'modulo-4',
        title: 'Singularidade, Dialeticidade e Fungibilidade',
        slideRange: 'Slides 43 a 55',
        summary: 'Apenas um recurso por decisão (salvo RE/REsp), dever de rebater argumentos e tolerância ao erro desculpável.',
        plainLanguage: 'Singularidade: para cada decisão só cabe um tipo de recurso. Dialeticidade: você não pode só dizer "discordo", tem que explicar ponto por ponto o erro do juiz. Fungibilidade: se a lei era confusa e você errou o nome do recurso de boa-fé, o tribunal pode aceitá-lo como o correto.',
        technicalContent: [
          'Princípio da Singularidade (ou Unirrecorribilidade): Para cada ato decisório, cabe apenas uma espécie recursal. É vedado interpor dois recursos ordinários contra a mesma decisão judicial.',
          'A GRANDE EXCEÇÃO à singularidade: Quando a decisão atacada possuir fundamentos assentados simultaneamente em norma constitucional e infraconstitucional, admite-se a interposição CONCOMITANTE de Recurso Extraordinário (ofensa à CF, julgado pelo STF) e Recurso Especial (ofensa à lei federal, julgado pelo STJ).',
          'Princípio da Dialeticidade: O recorrente tem o dever de impugnar de forma clara e específica os fundamentos da decisão recorrida. Deve indicar a causa de pedir (error in procedendo ou in iudicando) e formular pedido expresso. Fundamentos: oportunizar o contraditório do recorrido (contrarrazões) e limitar a cognição do tribunal (tantum devolutum quantum appellatum).',
          'Princípio da Fungibilidade: Permite ao tribunal receber um recurso inadequado como se fosse o correto. Fundamento: princípio da instrumentalidade das formas.',
          'Os 3 Requisitos CUMULATIVOS da Fungibilidade: 1) Existência de dúvida fundada e objetiva na doutrina/jurisprudência quanto ao recurso cabível; 2) Inexistência de erro grosseiro (ex: apelar de decisão que exclui litisconsorte é erro grosseiro!); 3) Tempestividade / Inexistência de má-fé (recurso interposto no prazo do recurso próprio).'
        ],
        articles: ['CPC, art. 1.009', 'CF/1988, art. 102, III', 'CF/1988, art. 105, III'],
        mnemonic: {
          acronym: 'D.E.M.',
          meaning: 'Requisitos da Fungibilidade Recursal',
          items: [
            { letter: 'D', word: 'Dúvida Objetiva', description: 'Divergência real entre tribunais ou lei ambígua' },
            { letter: 'E', word: 'Erro não grosseiro', description: 'Não ter violado previsão literal expressa e incontroversa' },
            { letter: 'M', word: 'Má-fé ausente (Prazo)', description: 'Interposição respeitando a tempestividade legal' }
          ]
        },
        examTrap: 'Se o juiz receber um "pedido de reconsideração" como "embargos de declaração" alegando fungibilidade, ele cometeu ilegalidade manifesta! O pedido de reconsideração não é recurso previsto em lei, logo viola a taxatividade.',
        practicalExample: 'Se o tribunal não sabe ao certo se uma decisão mista é interlocutória ou sentença porque parte dos pedidos foi extinta e outra suspensa, há dúvida objetiva. O advogado interpôs agravo de instrumento no prazo de 15 dias. O tribunal aplica a fungibilidade e conhece o recurso.',
        audioText: 'O princípio da singularidade veda dois recursos contra a mesma decisão, exceto a interposição simultânea de Recurso Especial e Recurso Extraordinário. A dialeticidade exige impugnação específica dos fundamentos. E a fungibilidade admite o recurso inadequado se houver dúvida objetiva, ausência de erro grosseiro e tempestividade.'
      },
      {
        id: 'sec-4-3',
        moduleId: 'modulo-4',
        title: 'Non Reformatio in Pejus, Preclusão e Primazia do Mérito',
        slideRange: 'Slides 56 a 62',
        summary: 'Proibição de piorar a situação do recorrente único, as 3 espécies de preclusão e o saneamento formal no art. 932.',
        plainLanguage: 'Se só você recorreu, o tribunal nunca pode te deixar em situação pior do que a sentença te deixou. A preclusão significa que o trem passou e você perdeu a chance. E o artigo 932 manda o juiz te dar 5 dias para consertar erros de papelada antes de jogar seu recurso fora.',
        technicalContent: [
          'Proibição da Non Reformatio in Pejus: O tribunal (juízo ad quem) não pode piorar a situação jurídica do recorrente exclusivo. Decorre do efeito devolutivo e do princípio dispositivo (o tribunal não pode ir além do que foi pedido).',
          'Exceção admitida da piora: Matérias de ordem pública! O tribunal pode conhecer de ofício matérias de ordem pública (ex: ausência de condições da ação, prescrição, decadência, nulidade de citação, julgamento extra petita, litigância de má-fé). Se isso gerar prejuízo incidental ao recorrente, não viola o princípio.',
          'Princípio da Consumação e as 3 Espécies de Preclusão: 1) Preclusão Temporal (o prazo legal acabou sem prática do ato); 2) Preclusão Consumativa (o ato recursal já foi praticado e esgotado; não é permitido substituir a peça nem aditar razões); 3) Preclusão Lógica (prática anterior de ato manifestamente incompatível com a vontade de recorrer, ex: assinar petição concordando com a sentença).',
          'Primazia do Julgamento de Mérito Recursal (CPC, art. 932, parágrafo único): Antes de declarar inadmissível o recurso, o relator CONCEDERÁ o prazo de 5 (cinco) dias para que o recorrente sane vício formal ou complemente documentação exigível.',
          'Alerta Máximo do Art. 932: O prazo de 5 dias aplica-se APENAS a vícios formais (documentos que faltaram, assinatura, guia de custas). NÃO SE APLICA para complementar a fundamentação jurídica das razões recursais!'
        ],
        articles: ['CPC, art. 932, parágrafo único', 'CPC, art. 1.000', 'CPC, art. 1.013'],
        examTrap: 'O artigo 932, parágrafo único, permite prazo de 5 dias para sanar vício formal, NUNCA para complementar a fundamentação recursal!',
        practicalExample: 'João foi condenado a pagar 20 mil reais. Só João recorreu pedindo para reduzir para zero. O tribunal não pode julgar o recurso de João e aumentar a condenação para 30 mil reais!',
        audioText: 'Pela vedação da reformatio in pejus, o tribunal não pode agravar a situação do recorrente exclusivo, ressalvadas matérias de ordem pública. As preclusões são temporal, consumativa e lógica. E pelo artigo 932, o relator deve dar cinco dias para corrigir vícios formais, mas nunca para complementar fundamentação deficiente.'
      }
    ]
  },
  {
    id: 'modulo-5',
    number: 5,
    title: 'Classificação dos Recursos & Duplo Julgamento',
    subtitle: 'Critérios de classificação, contagem de prazos e o binômio Admissibilidade vs Mérito',
    slideRange: 'Slides 63 a 71',
    sections: [
      {
        id: 'sec-5-1',
        moduleId: 'modulo-5',
        title: 'Classificações dos Recursos',
        slideRange: 'Slides 63 a 68',
        summary: 'Quanto ao objeto imediato, quanto à fundamentação e quanto à extensão da matéria impugnada.',
        plainLanguage: 'Recursos podem ser organizados por 3 prismas: O que você quer defender (o seu direito ou a lei do país?), de que jeito você pode argumentar (qualquer motivo ou só o que a lei permite?) e quanto da sentença você está atacando (ela toda ou só um pedaço?).',
        technicalContent: [
          '1. Quanto ao objeto imediato: a) Recursos Ordinários: buscam tutelar o direito subjetivo e o interesse individual das partes (Ex: Apelação, Agravo de Instrumento); b) Recursos Extraordinários: visam à higidez do direito objetivo e à preservação da ordem constitucional e federal (Ex: Recurso Especial ao STJ, Recurso Extraordinário ao STF, Embargos de Divergência).',
          '2. Quanto à fundamentação: a) De Fundamentação Livre: a parte pode alegar qualquer tese de fato ou de direito para demonstrar o equívoco da decisão (Ex: Apelação); b) De Fundamentação Vinculada: a parte só pode recorrer se preencher as hipóteses estritas taxadas em lei (Ex: RE no art. 102, III da CF; REsp no art. 105, III da CF; Embargos de Declaração no art. 1.022 do CPC - omissão, contradição, obscuridade e erro material).',
          '3. Quanto à extensão da matéria: a) Recursos Totais: impugnam todos os capítulos da decisão sucumbente; b) Recursos Parciais: impugnam apenas uma parcela dos capítulos sucumbentes. Os capítulos não impugnados transitam em julgado!'
        ],
        articles: ['CF/1988, art. 102, III', 'CF/1988, art. 105, III', 'CPC, art. 1.009', 'CPC, art. 1.022'],
        examTrap: 'Qual recurso tem, em regra, fundamentação livre e pode ser tanto total quanto parcial? A APELAÇÃO! Questão clássica do professor Esdras.',
        practicalExample: 'Se o autor pediu Danos Morais e Materiais, e perdeu ambos, mas na apelação recorre apenas contra a rejeição dos danos materiais, a rejeição dos danos morais transita em julgado imediatamente por falta de impugnação.',
        audioText: 'Os recursos classificam-se quanto ao objeto em ordinários e extraordinários; quanto à fundamentação em livres, como a apelação, ou vinculados, como o recurso especial e embargos de declaração; e quanto à extensão em totais ou parciais.'
      },
      {
        id: 'sec-5-2',
        moduleId: 'modulo-5',
        title: 'Termo Inicial e as Duas Etapas de Julgamento',
        slideRange: 'Slides 69 a 71',
        summary: 'Início da contagem do prazo recursal e o binômio: Juízo de Admissibilidade versus Juízo de Mérito.',
        plainLanguage: 'O relógio do recurso começa a andar no dia em que o advogado é formalmente intimado (ou na própria audiência se o juiz deu a decisão lá na hora). Antes de ler suas teses, o Tribunal faz uma "alfândega": confere se o recurso tem passagem livre (Admissibilidade). Se passar, aí sim julga o mérito.',
        technicalContent: [
          'Termo Inicial do Prazo (CPC, art. 1.003): O prazo conta-se da data em que os advogados, a sociedade de advogados, a Advocacia Pública, a Defensoria Pública ou o Ministério Público são regularmente intimados da decisão.',
          'Decisão proferida em Audiência: Os sujeitos consideram-se intimados em audiência quando nesta for prolatada a decisão (CPC, art. 1.003, § 1º).',
          'A apreciação dos recursos opera-se rigorosamente em 2 ETAPAS SUCESSIVAS:',
          '1ª Etapa — Juízo de Admissibilidade (ou prelibação): Averiguação prévia do preenchimento dos pressupostos processuais formais (intrínsecos e extrínsecos). Se aprovado, o recurso é CONHECIDO. Se faltar algum pressuposto, o recurso é NÃO CONHECIDO.',
          '2ª Etapa — Juízo de Mérito (ou delibação): Superada a admissibilidade, o tribunal avalia os fundamentos e o pedido recursal. Se os argumentos forem procedentes, DÁ-SE PROVIMENTO ao recurso; caso contrário, NEGA-SE PROVIMENTO.'
        ],
        articles: ['CPC, art. 1.003, caput e § 1º'],
        examTrap: 'Não confunda a linguagem técnica do Tribunal! Recurso com problema formal é "NÃO CONHECIDO". Recurso com argumentos fracos no mérito é "DESPROVIDO" ou "NEGADO PROVIMENTO".',
        practicalExample: 'Um advogado protocola recurso após o 15º dia útil. O Tribunal nem analisa os argumentos dele: proferirá acórdão dizendo "Recurso não conhecido por intempestividade".',
        audioText: 'O prazo do recurso conta-se da intimação da decisão ou do ato da audiência. O julgamento se divide em duas etapas: o juízo de admissibilidade, que decide se o recurso é conhecido, e o juízo de mérito, que decide se o recurso é provido ou desprovido.'
      }
    ]
  },
  {
    id: 'modulo-6',
    number: 6,
    title: 'Pressupostos Recursais (CALII & TEMPE RE PREPARO)',
    subtitle: 'Requisitos Intrínsecos, Extrínsecos e a Competência de Admissibilidade',
    slideRange: 'Slides 72 a 93',
    sections: [
      {
        id: 'sec-6-1',
        moduleId: 'modulo-6',
        title: 'Requisitos Intrínsecos — O Mnemônico C.A.L.I.I.',
        slideRange: 'Slides 72 a 76',
        summary: 'Requisitos inerentes ao direito de recorrer: Cabimento, Legitimidade, Interesse e Inexistência de fato impeditivo/extintivo.',
        plainLanguage: 'Para saber se você tem o direito de recorrer, basta lembrar da palavra CALII: Cabimento (a decisão aceita recurso?), Adequação/Legitimidade (você tem papel no processo?), Interesse (você perdeu algo e o recurso vai melhorar sua vida?), e Inexistência de desistência ou renúncia.',
        technicalContent: [
          'Os pressupostos recursais intrínsecos dizem respeito à própria existência do direito de recorrer:',
          '1. Cabimento: Verificação de que a decisão é juridicamente recorrível e de que a espécie escolhida é a adequada àquele ato.',
          '2. Legitimidade recursal (CPC, art. 996): Aptidão legal para recorrer atribuída à parte vencida, ao sucessor, ao terceiro juridicamente prejudicado e ao Ministério Público (como parte ou fiscal da ordem jurídica).',
          '3. Interesse recursal: Binômio necessidade-utilidade. Necessidade: existência de sucumbência (derrota total ou parcial). Utilidade: o recurso deve ser apto a proporcionar uma melhora prática na situação jurídica do recorrente.',
          '4. Inexistência de fato impeditivo ou extintivo:',
          '• Fato impeditivo: opera ANTES da interposição do recurso. Exemplo: Renúncia ao direito de recorrer (expressa ou tácita).',
          '• Fato extintivo: opera APÓS o recurso ter sido interposto. Exemplo: Desistência do recurso já protocolado (CPC, art. 998).'
        ],
        articles: ['CPC, art. 996', 'CPC, art. 998', 'CPC, art. 1.000'],
        mnemonic: {
          acronym: 'C.A.L.I.I.',
          meaning: 'Pressupostos Recursais Intrínsecos',
          items: [
            { letter: 'C', word: 'Cabimento', description: 'Decisão recorrível e previsão legal da via eleita' },
            { letter: 'A/L', word: 'Adequação & Legitimidade', description: 'Parte sucumbente, terceiro juridicamente prejudicado ou MP' },
            { letter: 'I', word: 'Interesse de Agir', description: 'Necessidade (sucumbência) + Utilidade de melhorar a situação' },
            { letter: 'I', word: 'Inexistência de fato extintivo/impeditivo', description: 'Sem renúncia prévia nem desistência posterior' }
          ]
        },
        examTrap: 'A renúncia é fato IMPEDITIVO (ocorre antes de interpor). A desistência é fato EXTINTIVO (ocorre depois de já ter interposto). Trocar um pelo outro é pegadinha certa!',
        practicalExample: 'Se o autor pediu 50 mil e o juiz concedeu 50 mil integralmente, o autor NÃO tem interesse recursal porque não houve sucumbência.',
        audioText: 'Os pressupostos intrínsecos resumem-se no mnemônico CALII: Cabimento, Legitimidade, Interesse recursal e Inexistência de fato impeditivo ou extintivo do direito de recorrer. A renúncia impede o recurso antes de interposto; a desistência extingue o recurso já interposto.'
      },
      {
        id: 'sec-6-2',
        moduleId: 'modulo-6',
        title: 'Requisitos Extrínsecos — O Mnemônico TEMPE RE PREPARO',
        slideRange: 'Slides 77 a 87',
        summary: 'Tempestividade em dias úteis, regularidade formal e a disciplina estrita do preparo recursal.',
        plainLanguage: 'Para saber se você recorreu do jeito certo, lembre de TEMPE RE PREPARO: Tempestividade (prazo de 15 dias úteis, só embargos são 5!), Regularidade formal (petição escrita assinada por advogado com fundamentação), e Preparo (pagamento das custas).',
        technicalContent: [
          'Os pressupostos extrínsecos referem-se ao modo correto de exercer o recurso:',
          '1. Tempestividade (CPC, art. 1.003, § 5º): Prazo unificado de 15 (quinze) dias para todos os recursos, com a única exceção dos Embargos de Declaração, cujo prazo é de 5 (cinco) dias.',
          'Regras de contagem temporal: Contagem exclusiva em DIAS ÚTEIS (CPC, art. 219), de segunda a sexta, excluídos feriados forenses (art. 216). Exclui-se o dia do começo e inclui-se o dia do vencimento (art. 224).',
          '2. Regularidade Formal: Forma escrita obrigatória (exceção: Embargos de Declaração orais nos Juizados Especiais Cíveis); Assinatura por quem possua capacidade postulatória (advogado, ressalvado jus postulandi em HC, JT e JEC 1º grau); e Fundamentação própria combatendo os pontos da decisão.',
          '3. Preparo Recursal (CPC, art. 1.007): Adiantamento financeiro das despesas processuais (taxa judiciária + porte de remessa e retorno dos autos físicos; porte dispensado em autos eletrônicos). Regra da comprovação imediata no ato de interposição!',
          'Sanções e Saneamento do Preparo:',
          '• Não pagamento imediato no protocolo: A parte é intimada para recolher EM DOBRO, sob pena de deserção (art. 1.007, § 4º).',
          '• Pagamento a menor (insuficiente): Intimação para complementar em 5 DIAS, sob pena de deserção (art. 1.007, § 2º).',
          '• Justo motivo comprovado de impossibilidade: Intimação para efetuar em 5 dias (art. 1.007, § 6º).',
          '• Erro no preenchimento da guia: Concede-se prazo de 5 dias para sanar o vício (art. 1.007, § 7º).',
          'Isenções e Recursos Gratuitos: Dispensados de preparo: Ministério Público, Administração Direta (União, Estados, DF, Municípios), Autarquias e Beneficiários da Justiça Gratuita. Recursos que independem de preparo: Embargos de Declaração e Agravo em REsp/RE.'
        ],
        articles: ['CPC, art. 216', 'CPC, art. 219', 'CPC, art. 224', 'CPC, art. 1.003, § 5º', 'CPC, art. 1.007, §§ 2º, 4º, 6º e 7º'],
        mnemonic: {
          acronym: 'TEMPE RE PREPARO',
          meaning: 'Pressupostos Recursais Extrínsecos',
          items: [
            { letter: 'TEMPE', word: 'Tempestividade', description: '15 dias úteis (ou 5 para embargos de declaração)' },
            { letter: 'RE', word: 'Regularidade Formal', description: 'Forma escrita, capacidade postulatória e fundamentação' },
            { letter: 'PREPARO', word: 'Preparo', description: 'Custas imediatas; se faltar paga em dobro; se menor complementa em 5 dias' }
          ]
        },
        examTrap: 'Se a parte esquecer de juntar o comprovante de preparo, o recurso NÃO é considerado deserto de imediato! Primeiro o juiz deve intimar a parte para pagar em dobro no prazo legal.',
        practicalExample: 'Ao interpor apelação, o advogado pagou R$ 400 de custas quando a tabela exigia R$ 500. Trata-se de recolhimento insuficiente (a menor): o relator intima o advogado para complementar os R$ 100 restantes em 5 dias.',
        audioText: 'Os pressupostos extrínsecos são tempestividade, regularidade formal e preparo. Os prazos são de quinze dias úteis, exceto para embargos de declaração que têm cinco dias. Na ausência de preparo, a parte é intimada para pagar em dobro sob pena de deserção; se o pagamento foi insuficiente, prazo de cinco dias para complementar.'
      },
      {
        id: 'sec-6-3',
        moduleId: 'modulo-6',
        title: 'As 4 Hipóteses de Competência de Admissibilidade',
        slideRange: 'Slides 88 a 93',
        summary: 'Quem examina se o recurso reúne os requisitos formais antes de julgar o mérito.',
        plainLanguage: 'Nem todo recurso é julgado no mesmo lugar onde foi protocolado. O CPC tem 4 combinações possíveis para quem confere os requisitos formais (admissibilidade) e quem julga o mérito.',
        technicalContent: [
          'O juízo de admissibilidade pode ser conferido a órgãos distintos conforme o recurso:',
          '1ª Hipótese: Interposto perante o juízo prolator da decisão ("a quo"), mas a competência para admissibilidade e julgamento de mérito pertence EXCLUSIVAMENTE ao tribunal superior ("ad quem"). Exemplo: Apelação (art. 1.010, § 3º do CPC — o juiz de 1ª instância está proibido de fazer juízo de admissibilidade da apelação!).',
          '2ª Hipótese: Interposto perante o órgão prolator da decisão ("a quo"), que realiza a admissibilidade prévia, mas o mérito é julgado pelo tribunal ad quem. Exemplos: Recurso Especial (REsp) e Recurso Extraordinário (RE) perante o Presidente ou Vice do Tribunal de origem.',
          '3ª Hipótese: Interposto perante o próprio órgão prolator que proferiu a decisão, que detém competência para admitir e julgar. Exemplo: Embargos de Declaração.',
          '4ª Hipótese: Interposto DIRETAMENTE no órgão jurisdicional superior ("ad quem"), que possui competência para admitir e julgar. Exemplo: Agravo de Instrumento (CPC, art. 1.016).'
        ],
        articles: ['CPC, art. 1.010, § 3º', 'CPC, art. 1.016', 'CPC, art. 1.022', 'CPC, art. 1.030'],
        visualDiagram: {
          type: 'table',
          title: 'As 4 Hipóteses de Admissibilidade',
          items: [
            { label: '1ª Hipótese: Apelação', desc: 'Protocolada no juiz de 1º grau, mas só o Tribunal faz admissibilidade e mérito (art. 1.010, § 3º).' },
            { label: '2ª Hipótese: REsp e RE', desc: 'Protocolados no Tribunal de origem (que faz 1ª admissibilidade) e julgados no STJ/STF.' },
            { label: '3ª Hipótese: Embargos de Declaração', desc: 'O mesmo órgão que decidiu admite e julga os embargos.' },
            { label: '4ª Hipótese: Agravo de Instrumento', desc: 'Protocolado diretamente no Tribunal de 2ª instância (art. 1.016).' }
          ]
        },
        examTrap: 'O juiz de 1º grau pode inadmitir apelação por intempestividade ou falta de preparo? NUNCA! O art. 1.010, § 3º do CPC proíbe o juiz de 1º grau de fazer juízo de admissibilidade na apelação.',
        practicalExample: 'No caso do Marcos de Itaboraí (Slide 91), ele concordou por petição com a sentença de improcedência e depois de 3 dias tentou apelar. O recurso não será julgado no mérito porque ocorreu preclusão lógica!',
        audioText: 'Existem quatro hipóteses de competência de admissibilidade. Na apelação, ela cabe apenas ao órgão ad quem. No recurso especial e extraordinário, há duplo exame. Nos embargos de declaração, o mesmo juízo admite e julga. E no agravo de instrumento, a interposição é feita diretamente no tribunal superior.'
      }
    ]
  },
  {
    id: 'modulo-7',
    number: 7,
    title: 'Juízo de Mérito & Efeitos dos Recursos',
    subtitle: 'Error in Procedendo vs Iudicando e os 6 Efeitos Recursais',
    slideRange: 'Slides 94 a 122',
    sections: [
      {
        id: 'sec-7-1',
        moduleId: 'modulo-7',
        title: 'Causa de Pedir e Pedidos no Juízo de Mérito',
        slideRange: 'Slides 94 a 98',
        summary: 'Error in procedendo (anulação) versus Error in iudicando (reforma) e a Teoria da Causa Madura.',
        plainLanguage: 'Quando o recurso chega ao mérito, você aponta o que deu errado: se o juiz desrespeitou as regras do jogo (error in procedendo), você pede a ANULAÇÃO para o processo voltar e ser refeito. Mas se o processo já estiver pronto para julgamento (causa madura), o próprio tribunal decide o caso na hora!',
        technicalContent: [
          '1. Error in procedendo (vício formal): Impugna-se a decisão que contém erro na condução do procedimento ou desrespeito às normas processuais. Exemplos: sentença extra petita, ultra petita ou citra petita; ausência de intervenção obrigatória do MP; falta de citação de litisconsorte necessário; cerceamento do direito de defesa.',
          'Consequência: O pedido formulado é de ANULAÇÃO (declaração de nulidade absoluta) da decisão e retorno dos autos ao juízo de 1º grau para nova decisão.',
          'Exceção vital — Teoria da Causa Madura (CPC, art. 1.013, § 3º): Se o processo estiver em condições de imediato julgamento (questões de direito ou provas fáticas já exauridas), o próprio TRIBUNAL DEVE JULGAR O MÉRITO de imediato, dispensando a remessa ao primeiro grau!',
          '2. Error in iudicando (erro de julgamento): Impugna-se o conteúdo substantivo da decisão. Alega-se que o juiz valorou mal as provas ou interpretou incorretamente a norma de direito material aplicável.',
          'Consequência: O pedido formulado é de REFORMA (substituição do conteúdo pelo juízo ad quem).'
        ],
        articles: ['CPC, art. 1.013, § 3º, incisos I a IV'],
        examTrap: 'Se o tribunal acolher error in procedendo mas a causa estiver madura (art. 1.013, § 3º), o tribunal NÃO devolve os autos ao 1º grau; ele próprio julga o mérito!',
        practicalExample: 'O juiz julgou improcedente a ação sem ouvir as testemunhas requeridas. O autor apela alegando cerceamento de defesa (error in procedendo) e pede anulação da sentença para que a prova seja colhida.',
        audioText: 'No juízo de mérito, o error in procedendo decorre de falha formal e conduz ao pedido de anulação, aplicando-se a teoria da causa madura se o processo estiver pronto para julgamento. Já o error in iudicando decorre de erro na interpretação dos fatos ou do direito e conduz ao pedido de reforma.'
      },
      {
        id: 'sec-7-2',
        moduleId: 'modulo-7',
        title: 'Os Efeitos: Obstativo, Devolutivo e Suspensivo',
        slideRange: 'Slides 99 a 109',
        summary: 'Impedimento do trânsito em julgado, dimensões horizontal e vertical do devolutivo, e a concessão de efeito suspensivo.',
        plainLanguage: 'Efeito Obstativo: o recurso barra a decisão de se tornar definitiva (não transita em julgado enquanto durar o recurso). Efeito Devolutivo: leva o caso para o Tribunal (horizontal = só o que você pediu; vertical = tudo que envolve o pedido). Efeito Suspensivo: congela a decisão para ela não ser executada agora.',
        technicalContent: [
          '1. Efeito Obstativo: A interposição de qualquer recurso admissível impede a preclusão temporal e o trânsito em julgado (preclusão máxima da coisa julgada), postergando-o até a decisão final do recurso.',
          '2. Efeito Devolutivo: Transfere ao órgão ad quem o conhecimento da matéria impugnada no juízo a quo. REGRA ABSOLUTA: TODO recurso gera efeito devolutivo!',
          '• Dimensão Horizontal (Extensão - CPC, art. 1.013, caput): Delimita QUAIS capítulos da decisão serão apreciados pelo tribunal ("tantum devolutum quantum appellatum"). O que não foi recorrido transita em julgado.',
          '• Dimensão Vertical (Profundidade - CPC, art. 1.013, §§ 1º e 2º): Dentro do capítulo devolvido, o tribunal pode examinar TODOS os fundamentos, teses e provas deduzidos pelas partes na defesa, mesmo que o juiz de 1º grau não os tenha enfrentado (ex: prescrição rejeitada autoriza analisar a compensação de dívida).',
          '3. Efeito Suspensivo: Impede que a decisão recorrida produza efeitos práticos e executivos imediatos antes do julgamento recursal.',
          'Regra geral do CPC/2015 (art. 995, caput): Os recursos em regra NÃO possuem efeito suspensivo automático.',
          'Critérios de Concessão: a) Ope Legis (efeito próprio concedido por força de lei, ex: Apelação art. 1.012); b) Ope Judicis (efeito impróprio concedido pelo Relator).',
          'Requisitos CUMULATIVOS para o Relator conceder efeito suspensivo (CPC, art. 995, parágrafo único): 1) Risco de dano grave ou de difícil/impossível reparação (periculum in mora); 2) Probabilidade de provimento do recurso (fumus boni iuris); mais o pedido expresso do recorrente.'
        ],
        articles: ['CPC, art. 995, caput e parágrafo único', 'CPC, art. 1.012', 'CPC, art. 1.013, caput e §§ 1º e 2º'],
        mnemonic: {
          acronym: 'OPE LEGIS vs OPE JUDICIS',
          meaning: 'Critérios do Efeito Suspensivo',
          items: [
            { letter: 'Ope Legis', word: 'Pela Lei', description: 'Direto na lei (Ex: art. 1.012 da Apelação)' },
            { letter: 'Ope Judicis', word: 'Pelo Juiz / Relator', description: 'Requer: Perigo de Dano Grave + Probabilidade do Direito + Pedido Expresso' }
          ]
        },
        examTrap: 'O efeito suspensivo no CPC/2015 é a EXCEÇÃO, não a regra! Todo recurso tem efeito devolutivo, mas nem todo recurso tem efeito suspensivo.',
        practicalExample: 'Se o juiz determinou o despejo de uma empresa em 15 dias, a parte interpõe agravo de instrumento com pedido de efeito suspensivo ope judicis, demonstrando que o despejo imediato falirá o negócio antes do julgamento do recurso.',
        audioText: 'O efeito obstativo impede a coisa julgada. O efeito devolutivo transfere a matéria ao tribunal, com dimensão horizontal delimitando os capítulos e dimensão vertical aprofundando os fundamentos. O efeito suspensivo é exceção no CPC de 2015 e pode ser ope legis ou concedido pelo relator ope judicis mediante perigo de dano e probabilidade do direito.'
      },
      {
        id: 'sec-7-3',
        moduleId: 'modulo-7',
        title: 'Os Efeitos: Translativo, Substitutivo e Regressivo',
        slideRange: 'Slides 110 a 122',
        summary: 'Conhecimento de ofício de matérias de ordem pública, acórdão que substitui a sentença e juízo de retratação.',
        plainLanguage: 'Efeito Translativo: o Tribunal pode agir como detetive e notar matérias de ordem pública sozinho, sem ninguém pedir. Efeito Substitutivo: o acórdão do Tribunal apaga a sentença e fica no lugar dela. Efeito Regressivo (juízo de retratação): o juiz de 1º grau que deu a decisão pode voltar atrás e mudar de ideia.',
        technicalContent: [
          '4. Efeito Translativo: Possibilidade de o tribunal conhecer de matérias de ordem pública DE OFÍCIO (sem provocação das partes) durante o julgamento do recurso ordinário. Exemplos: prescrição, decadência, coisa julgada, nulidade de citação, carência de ação.',
          '5. Efeito Substitutivo (CPC, art. 1.008): O julgamento proferido pelo tribunal SUBSTITUIRÁ a decisão impugnada no que tiver sido objeto de recurso. O acórdão substitui a sentença.',
          'Exceções ao Efeito Substitutivo (casos onde NÃO substitui): a) Não conhecimento do recurso (inadmissibilidade: a decisão recorrida permanece intacta); b) Acolhimento de error in procedendo com anulação e retorno ao 1º grau (haverá novo julgamento pelo juiz a quo).',
          '6. Efeito Regressivo (Juízo de Retratação): Autoriza o próprio juízo a quo (o juiz que proferiu a decisão) a rever o seu posicionamento e se retratar!',
          'Hipóteses taxativas de Efeito Regressivo: a) Apelação contra sentença que indefere a petição inicial (CPC, art. 331, caput); b) Apelação contra sentença de improcedência liminar do pedido (CPC, art. 332, § 3º); c) Apelação contra sentença que extingue o processo sem resolução de mérito (CPC, art. 485, § 7º); d) TODOS os recursos de agravo (Agravo de Instrumento, Agravo Interno, etc.).'
        ],
        articles: ['CPC, art. 331, caput', 'CPC, art. 332, § 3º', 'CPC, art. 485, § 7º', 'CPC, art. 1.008', 'CPC, art. 1.018, § 1º'],
        examTrap: 'O efeito substitutivo NÃO ocorre quando o recurso não é conhecido ou quando a decisão é anulada por vício de procedimento com reenvio ao juiz de origem!',
        practicalExample: 'No caso hipotético do Slide 119: o réu recorre pedindo análise de outros argumentos (efeito devolutivo); o Tribunal nota de ofício uma prescrição que ninguém havia visto (efeito translativo); e profere acórdão reformando a sentença (efeito substitutivo). Ordem: Devolutivo -> Translativo -> Substitutivo!',
        audioText: 'O efeito translativo permite ao tribunal conhecer matérias de ordem pública de ofício. O efeito substitutivo faz o julgamento do tribunal substituir a decisão recorrida, ressalvado o não conhecimento e a anulação com reenvio. E o efeito regressivo permite ao próprio juiz da causa se retratar, presente em apelações de sentenças terminativas e em todos os agravos.'
      }
    ]
  }
];
