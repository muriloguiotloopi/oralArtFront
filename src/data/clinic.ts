/* =====================================================================
   MOCK DATA — Landing Page de prospeccao
   ---------------------------------------------------------------------
   Todo o conteudo editavel do site vive neste arquivo.
   Para personalizar para um cliente real, basta trocar os valores abaixo
   (nenhum componente precisa ser alterado).
   Itens marcados com  // TODO  sao os que exigem dado real do cliente.
===================================================================== */

export const siteConfig = {
  name: 'Odonto Prime',
  legalName: 'Odonto Prime Odontologia Especializada',
  tagline: 'Odontologia estética e reabilitadora',
  cro: 'CRO/DF 00000', // TODO: registro real da clinica
  /* Identificacao exigida pela Resolucao CFO-196/2019: anuncio de pessoa
     juridica precisa trazer nome e CRO do responsavel tecnico. */
  technicalDirector: {
    name: 'Dr. Nome Sobrenome', // TODO
    cro: 'CRO/DF 00000', // TODO
    title: 'Cirurgião-Dentista',
  },
  phoneLabel: '(11) 4000-0000', // TODO
  phoneRaw: '+551140000000', // TODO
  whatsappNumber: '5511900000000', // TODO: apenas digitos, com DDI + DDD
  whatsappMessage: 'Olá! Vim pelo site e gostaria de agendar uma avaliação.',
  email: 'contato@odontoprime.com.br', // TODO
  instagramHandle: '@odontoprime',
  instagramUrl: 'https://instagram.com/', // TODO: perfil real
  // TODO: endereco real da clinica (hoje aponta para um perfil real do Google,
  // so para que os links da secao de avaliacoes funcionem na demonstracao)
  address: {
    street: 'SGAS 616, Bloco B — Loja 05',
    district: 'Asa Sul',
    city: 'Brasília',
    state: 'DF',
    zip: '70200-760',
  },
  /* TODO: Place ID do perfil do cliente no Google.
     Como obter: Google Business Profile > Compartilhar formulario de avaliacao,
     ou https://developers.google.com/maps/documentation/places/place-id
     Todos os links do Google (avaliar, ver avaliacoes e rota) saem daqui —
     ver googleReviewUrl / googleReviewsUrl / googleMapsUrl em src/lib/links.ts. */
  googlePlaceId: 'ChIJ4Q-PspslWpMRA4HHchneeCU',
  googleRating: 4.9,
  googleReviewCount: 826,
  hours: [
    { day: 'Segunda a sexta', time: '08h — 20h' },
    { day: 'Sábado', time: '08h — 14h' },
    { day: 'Domingo e feriados', time: 'Plantão de urgência' },
  ],
} as const

export const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Consultas', href: '#consultas' },
  { label: 'Convênios', href: '#convenios' },
  { label: 'Protocolos', href: '#protocolos' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Contato', href: '#contato' },
] as const

/** Selos de confianca exibidos logo abaixo do Hero. */
export const trustBadges = [
  { icon: 'ShieldCheck', label: 'Biossegurança nível hospitalar' },
  { icon: 'ScanLine', label: 'Scanner intraoral 3D' },
  { icon: 'HeartPulse', label: 'Atendimento humanizado' },
  { icon: 'GraduationCap', label: 'Equipe de especialistas' },
] as const

export const stats = [
  { value: '12', suffix: ' anos', label: 'de história na região' },
  { value: '8', suffix: '', label: 'especialidades no mesmo lugar' },
  { value: '4,9', suffix: '/5', label: 'no Google Reviews' },
  { value: '6', suffix: ' dias', label: 'de atendimento por semana' },
] as const

export type Service = {
  id: string
  icon: string
  title: string
  description: string
  bullets: string[]
  highlight?: boolean
}

export const services: Service[] = [
  {
    id: 'limpeza',
    icon: 'Droplets',
    title: 'Limpeza',
    description:
      'Profilaxia completa com remoção de tártaro e placa bacteriana, polimento e aplicação de flúor na mesma sessão.',
    bullets: ['Ultrassom e jato de bicarbonato', 'Aplicação de flúor', 'Orientação de higiene individual'],
  },
  {
    id: 'restauracoes',
    icon: 'Layers',
    title: 'Restaurações',
    description:
      'Reconstrução de dentes com cárie ou fratura em resina composta, com cor ajustada ao esmalte natural.',
    bullets: ['Resina nanoparticulada', 'Escala de cor individualizada', 'Sem uso de amálgama'],
  },
  {
    id: 'proteses',
    icon: 'Crown',
    title: 'Próteses Dentárias',
    description:
      'Coroas, pontes e próteses fixas ou removíveis para devolver função mastigatória e estética ao sorriso.',
    bullets: ['Coroas em porcelana e zircônia', 'Prótese fixa sobre implante', 'Ajuste de mordida incluso'],
  },
  {
    id: 'lentes',
    icon: 'Gem',
    title: 'Lentes de Contato',
    description:
      'Facetas ultrafinas em porcelana para redesenhar o sorriso com aparência natural e mínimo desgaste.',
    bullets: ['Ensaio digital antes de iniciar', 'Porcelana importada', 'Mock-up para aprovação'],
    highlight: true,
  },
  {
    id: 'implantes',
    icon: 'Anchor',
    title: 'Implantes',
    description:
      'Reposição de dentes perdidos com implantes de titânio, planejamento digital e carga imediata quando indicado.',
    bullets: [
      'Cirurgia guiada por computador',
      'Prótese provisória no mesmo dia',
      'Controle radiográfico periódico',
    ],
    highlight: true,
  },
  {
    id: 'cirurgias',
    icon: 'Syringe',
    title: 'Cirurgias Orais',
    description:
      'Extrações, remoção de sisos e pequenos procedimentos cirúrgicos com sedação consciente quando indicado.',
    bullets: ['Remoção de sisos inclusos', 'Sedação consciente disponível', 'Acompanhamento pós-operatório'],
  },
  {
    id: 'clareamento',
    icon: 'Sun',
    title: 'Clareamento',
    description:
      'Protocolos de consultório e caseiro supervisionado, com controle de sensibilidade em todas as sessões.',
    bullets: ['Controle de sensibilidade', 'Moldeiras personalizadas', 'Kit de manutenção incluso'],
  },
  {
    id: 'endodontia',
    icon: 'Microscope',
    title: 'Endodontia',
    description:
      'Tratamento de canal com microscopia operatória, com foco em preservar o dente natural.',
    bullets: ['Microscópio operatório', 'Instrumentação rotatória', 'Acompanhamento radiográfico'],
  },
]

export type ConsultationPlan = {
  id: string
  name: string
  description: string
  duration: string
  features: string[]
  featured?: boolean
  ctaLabel: string
}

/** Tipos de consulta oferecidos. */
export const consultationPlans: ConsultationPlan[] = [
  {
    id: 'avaliacao',
    name: 'Avaliação inicial',
    description: 'Primeiro contato para entender sua queixa e mapear as possibilidades.',
    duration: '40 min',
    features: [
      'Exame clínico completo',
      'Fotografias intraorais',
      'Plano de tratamento por escrito',
      'Espaço para tirar todas as dúvidas',
    ],
    ctaLabel: 'Agendar avaliação',
  },
  {
    id: 'diagnostico',
    name: 'Diagnóstico digital',
    description: 'Escaneamento 3D e planejamento reverso para casos estéticos e reabilitações.',
    duration: '1h 15min',
    features: [
      'Scanner intraoral 3D',
      'Documentação radiográfica',
      'Prévia digital do sorriso (DSD)',
      'Relatório com 2 alternativas de plano',
      'Segunda opinião com especialista',
    ],
    featured: true,
    ctaLabel: 'Quero o diagnóstico digital',
  },
  {
    id: 'urgencia',
    name: 'Urgência odontológica',
    description: 'Encaixe no mesmo dia para dor, trauma ou restauração que soltou.',
    duration: '30 min',
    features: [
      'Atendimento no mesmo dia',
      'Controle imediato da dor',
      'Radiografia periapical inclusa',
      'Encaminhamento para o tratamento definitivo',
    ],
    ctaLabel: 'Preciso de atendimento hoje',
  },
]

/** Passo a passo do orcamento — substitui a antiga tabela de valores. */
export const budgetSteps = [
  {
    title: 'Avaliação clínica',
    text: 'Exame completo, fotografias intraorais e, quando indicado, escaneamento 3D para entender o seu caso.',
  },
  {
    title: 'Plano por escrito',
    text: 'Você recebe o plano de tratamento com procedimentos, número de sessões e os valores fechados de cada etapa.',
  },
  {
    title: 'Aprovação antes de iniciar',
    text: 'Nada começa sem o seu aval. As condições de pagamento são combinadas nessa mesma conversa.',
  },
] as const

export type InsurancePlan = {
  id: string
  name: string
  /** Operadora/grupo responsavel — o paciente costuma reconhecer o plano pela marca. */
  operator: string
  /** Marcas do mesmo grupo atendidas pelo mesmo credenciamento. */
  brands?: string[]
  description: string
  /** Procedimentos cobertos — todos dentro do Rol obrigatorio da ANS. */
  coverage: string[]
}

/* TODO: confirmar com o cliente o credenciamento ativo, as carencias e os
   planos especificos de cada operadora antes de publicar.
   Os logos oficiais entram no lugar do texto do "cartao" em Insurance.tsx —
   pedir os arquivos e a autorizacao de uso a cada operadora. */
export const insurancePlans: InsurancePlan[] = [
  {
    id: 'amil',
    name: 'Amil Dental',
    operator: 'Grupo Amil',
    description:
      'Uma das maiores carteiras odontológicas do país, com planos individuais, familiares e empresariais. Atendemos as linhas mais comuns da Amil Dental e cuidamos da autorização dos procedimentos aqui mesmo, sem que você precise ligar para a operadora.',
    coverage: [
      'Consulta e diagnóstico',
      'Limpeza e prevenção',
      'Restaurações em resina',
      'Urgência odontológica',
    ],
  },
  {
    id: 'aesp',
    name: 'AESP Odonto',
    operator: 'AESP Odonto',
    description:
      'Operadora com mais de 25 anos de mercado e rede credenciada em todo o Brasil, forte em planos coletivos por adesão e empresariais. O atendimento segue a cobertura prevista no seu contrato, conferida antes da primeira consulta.',
    coverage: ['Consulta e avaliação', 'Radiografias', 'Tratamento de gengiva', 'Extrações simples'],
  },
  {
    id: 'odontoprev',
    name: 'OdontoPrev',
    operator: 'Grupo OdontoPrev',
    brands: ['Bradesco Dental', 'BB Dental'],
    description:
      'Maior grupo odontológico da América Latina. As carteiras Bradesco Dental e BB Dental são operadas pela OdontoPrev e atendidas pelo mesmo credenciamento — se o seu cartão traz qualquer uma dessas três marcas, o atendimento aqui é o mesmo.',
    coverage: [
      'Consulta e diagnóstico',
      'Profilaxia e flúor',
      'Tratamento de canal',
      'Urgência odontológica',
    ],
  },
  {
    id: 'odontogroup',
    name: 'OdontoGroup',
    operator: 'OdontoGroup',
    description:
      'Operadora sediada em Brasília, com mais de 27 anos de atuação e presença consolidada nos planos de servidores públicos do DF. A carteirinha digital e a autorização pelo aplicativo encurtam o caminho entre a avaliação e o início do tratamento.',
    coverage: ['Consulta e diagnóstico', 'Radiografias', 'Restaurações', 'Cirurgia oral menor'],
  },
]

/** Passo a passo exibido abaixo dos convenios. */
export const insuranceSteps = [
  {
    title: 'Confirme seu plano',
    text: 'Mande uma foto da carteirinha pelo WhatsApp. A recepção confere cobertura e carências antes de você sair de casa.',
  },
  {
    title: 'Agende a consulta',
    text: 'Marcamos o horário e já deixamos encaminhada a autorização dos procedimentos previstos na avaliação.',
  },
  {
    title: 'Traga documento e cartão',
    text: 'No dia, basta o cartão do convênio — físico ou digital — e um documento com foto. O resto é com a gente.',
  },
] as const

/* Protocolos clinicos descritos sem imagem de antes/depois, sem identificacao
   do paciente e sem depoimento: a Resolucao CFO-196/2019 reserva esse tipo de
   divulgacao ao proprio profissional executor, nao a pessoa juridica. */
export type SuccessCase = {
  id: string
  treatment: string
  duration: string
  sessions: string
  summary: string
  tags: string[]
}

export const successCases: SuccessCase[] = [
  {
    id: 'caso-1',
    treatment: 'Lentes de contato dental',
    duration: '3 semanas',
    sessions: '4 sessões',
    summary:
      'Reanatomização de 10 dentes superiores com fechamento de diastema e correção de desgaste no incisivo central.',
    tags: ['Estética', 'Mínimo desgaste'],
  },
  {
    id: 'caso-2',
    treatment: 'Reabilitação com implantes',
    duration: '5 meses',
    sessions: '7 sessões',
    summary:
      'Substituição de prótese removível por protocolo fixo sobre 6 implantes, com carga imediata no dia da cirurgia.',
    tags: ['Reabilitação', 'Carga imediata'],
  },
  {
    id: 'caso-3',
    treatment: 'Endodontia + coroa',
    duration: '3 semanas',
    sessions: '4 sessões',
    summary:
      'Tratamento de canal com microscopia em molar fraturado, seguido de coroa em zircônia — dente preservado sem necessidade de extração.',
    tags: ['Endodontia', 'Dente preservado'],
  },
  {
    id: 'caso-4',
    treatment: 'Clareamento + restaurações',
    duration: '1 mês',
    sessions: '5 sessões',
    summary:
      'Clareamento combinado e troca de restaurações antigas escurecidas nos dentes anteriores superiores.',
    tags: ['Estética', 'Conservador'],
  },
]

export type Review = {
  id: string
  author: string
  initials: string
  rating: number
  timeAgo: string
  text: string
  accent: string
}

/** Depoimentos simulando o widget do Google Reviews. */
export const reviews: Review[] = [
  {
    id: 'r1',
    author: 'Camila F.',
    initials: 'CF',
    rating: 5,
    timeAgo: 'há 2 semanas',
    text: 'Atendimento impecável do começo ao fim. Me explicaram cada etapa, o orçamento veio por escrito e não teve nenhuma surpresa depois. A clínica é impecavelmente limpa.',
    accent: '#c9a227',
  },
  {
    id: 'r2',
    author: 'Ricardo M.',
    initials: 'RM',
    rating: 5,
    timeAgo: 'há 1 mês',
    text: 'Tenho pavor de dentista desde criança. Fui muito bem acolhido, fizeram tudo no meu ritmo e sem dor. Terminei o implante e voltei para levar minha esposa.',
    accent: '#d8bf7d',
  },
  {
    id: 'r3',
    author: 'Juliana P.',
    initials: 'JP',
    rating: 5,
    timeAgo: 'há 1 mês',
    text: 'Pontualidade que eu nunca vi em clínica. Nunca esperei mais de 5 minutos. O acompanhamento pelo WhatsApp entre as consultas faz muita diferença.',
    accent: '#b08d3f',
  },
  {
    id: 'r4',
    author: 'André S.',
    initials: 'AS',
    rating: 5,
    timeAgo: 'há 2 meses',
    text: 'Cheguei de urgência num sábado com muita dor e fui atendido em menos de uma hora. Resolveram na hora e ainda organizaram o tratamento completo depois.',
    accent: '#e3cd96',
  },
  {
    id: 'r5',
    author: 'Patrícia L.',
    initials: 'PL',
    rating: 5,
    timeAgo: 'há 3 meses',
    text: 'Levo meus dois filhos e eles adoram ir. Equipe com uma paciência enorme com criança. Explicam cada etapa para eles antes de começar.',
    accent: '#a8841c',
  },
  {
    id: 'r6',
    author: 'Fernando T.',
    initials: 'FT',
    rating: 5,
    timeAgo: 'há 4 meses',
    text: 'A simulação digital antes de começar me deu total segurança. Vi o resultado antes de gastar um real. Ficou exatamente como no planejamento.',
    accent: '#cbb26a',
  },
]

/** Distribuicao de notas exibida no widget do Google (5 -> 1 estrela). */
export const ratingBreakdown = [
  { stars: 5, percent: 94 },
  { stars: 4, percent: 5 },
  { stars: 3, percent: 1 },
  { stars: 2, percent: 0 },
  { stars: 1, percent: 0 },
] as const

export const differentials = [
  {
    icon: 'CalendarCheck',
    title: 'Agenda sem espera',
    text: 'Horários controlados para que ninguém espere além de 10 minutos na recepção.',
  },
  {
    icon: 'FileText',
    title: 'Orçamento transparente',
    text: 'Você recebe o plano de tratamento por escrito, com valores fechados antes de iniciar.',
  },
  {
    icon: 'Microscope',
    title: 'Tecnologia de ponta',
    text: 'Scanner 3D, radiografia digital de baixa dose e microscopia para endodontia.',
  },
] as const
