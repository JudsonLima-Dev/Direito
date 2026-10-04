import { Badge } from '../types';

export const BADGES: Badge[] = [
  {
    id: 'primeiro_passo',
    title: 'Primeiro Voto',
    description: 'Iniciou seus estudos e concluiu a primeira seção de Direito Processual Civil.',
    icon: 'ScrollText',
    requirement: 'Concluir 1 seção teórica',
  },
  {
    id: 'triparticao',
    title: 'Trilogia da Impugnação',
    description: 'Compreendeu perfeitamente a distinção entre Recursos, Sucedâneos e Ações Autônomas.',
    icon: 'Scale',
    requirement: 'Concluir Módulo 1',
  },
  {
    id: 'fazenda_publica',
    title: 'Defensora da Fazenda',
    description: 'Dominou os limites de 100, 500 e 1.000 salários e as 5 razões do reexame não ser recurso.',
    icon: 'ShieldAlert',
    requirement: 'Concluir Módulo 2',
  },
  {
    id: 'rescisoria_mestre',
    title: 'Juízo Rescindendo',
    description: 'Dominou as 8 hipóteses de rescindibilidade, a Súmula 514 do STF e os 2 anos decadenciais.',
    icon: 'FileSpreadsheet',
    requirement: 'Concluir Módulo 3',
  },
  {
    id: 'principios_ouro',
    title: 'Mestre dos Princípios',
    description: 'Compreendeu Taxatividade, Singularidade, Fungibilidade, Dialeticidade e Non Reformatio in Pejus.',
    icon: 'Award',
    requirement: 'Concluir Módulo 4',
  },
  {
    id: 'calii_dominado',
    title: 'Mnemônico C.A.L.I.I.',
    description: 'Fixou na memória: Cabimento, Adequação/Legitimidade, Interesse e Inexistência de fato impeditivo/extintivo.',
    icon: 'Brain',
    requirement: 'Completar o estudo de pressupostos intrínsecos',
  },
  {
    id: 'tempe_preparo',
    title: 'Guardiã do Preparo & Prazos',
    description: 'Mestre em dias úteis (art. 219), preparo em dobro e complementação em 5 dias.',
    icon: 'Clock',
    requirement: 'Completar o estudo de pressupostos extrínsecos',
  },
  {
    id: 'efeitos_plenos',
    title: 'Soberana dos Efeitos Recursais',
    description: 'Distingue com precisão cirúrgica os efeitos Devolutivo, Suspensivo, Translativo, Substitutivo e Regressivo.',
    icon: 'Layers',
    requirement: 'Concluir Módulo 7',
  },
  {
    id: 'gabarito_unama',
    title: 'Gabarito UNAMA',
    description: 'Acertou as questões oficiais dos slides do Prof. Me. Esdras Rodrigues com 100% de sucesso.',
    icon: 'CheckCircle2',
    requirement: 'Acertar ao menos 8 questões oficiais',
  },
  {
    id: 'magistrada',
    title: 'Juíza Togada dos Casos Práticos',
    description: 'Solucionou todos os casos hipotéticos do Tribunal Simulado aplicando a jurisprudência correta.',
    icon: 'Gavel',
    requirement: 'Resolver todos os casos práticos do simulador',
  },
  {
    id: 'flashcard_champ',
    title: 'Memória Fotográfica',
    description: 'Dominou todos os 20+ flashcards mnemônicos do curso.',
    icon: 'Sparkles',
    requirement: 'Marcar 15 flashcards como dominados',
  },
  {
    id: 'unidade_concluida',
    title: 'Têmis da Primeira Unidade',
    description: 'Concluiu integralmente todos os 122 slides e tópicos do conteúdo hoje!',
    icon: 'Crown',
    requirement: 'Concluir 100% de todo o curso',
  },
];

export const CAREER_LEVELS = [
  { level: 1, title: 'Estagiária de Vara Cível', minXp: 0, icon: 'BookOpen' },
  { level: 2, title: 'Bacharel em Direito', minXp: 120, icon: 'GraduationCap' },
  { level: 3, title: 'Advogada Processualista Júnior', minXp: 300, icon: 'Briefcase' },
  { level: 4, title: 'Especialista em Recursos Cíveis', minXp: 550, icon: 'Scale' },
  { level: 5, title: 'Assessora de Gabinete no TJ', minXp: 850, icon: 'ShieldCheck' },
  { level: 6, title: 'Juíza de Direito de 1ª Instância', minXp: 1200, icon: 'Gavel' },
  { level: 7, title: 'Desembargadora de Tribunal', minXp: 1650, icon: 'Building2' },
  { level: 8, title: 'Ministra do Superior Tribunal de Justiça', minXp: 2200, icon: 'Crown' },
];
