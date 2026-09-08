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
  tagline: 'Odontologia estética de alto padrão',
  cro: 'CRO/SP 00000', // TODO: registro real da clinica
  phoneLabel: '(11) 4000-0000', // TODO
  phoneRaw: '+551140000000', // TODO
  whatsappNumber: '5511900000000', // TODO: apenas digitos, com DDI + DDD
  whatsappMessage: 'Olá! Vim pelo site e gostaria de agendar uma avaliação.',
  email: 'contato@odontoprime.com.br', // TODO
  instagramHandle: '@odontoprime',
  instagramUrl: 'https://instagram.com/', // TODO: perfil real
  address: {
    street: 'Av. Exemplo, 1.234 — Conj. 78',
    district: 'Asa Norte',
    city: 'Brasília | DF',
    state: 'SP',
    zip: '01000-000',
  },
  // TODO: substituir pelo link "Escrever avaliacao" do perfil do Google
  // (Google Business Profile > Compartilhar formulario de avaliacao)
  googleReviewUrl: 'https://search.google.com/local/writereview?placeid=SEU_PLACE_ID',
  googleMapsUrl: 'https://maps.google.com/?q=Av.+Exemplo+1234+Sao+Paulo',
  googleRating: 4.9,
  googleReviewCount: 327,
  hours: [
    { day: 'Segunda a sexta', time: '08h — 20h' },
    { day: 'Sábado', time: '08h — 14h' },
    { day: 'Domingo e feriados', time: 'Plantão de urgência' },
  ],
} as const

export const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Valores', href: '#valores' },
  { label: 'Resultados', href: '#casos' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Contato', href: '#contato' },
] as const

/** Selos de confianca exibidos logo abaixo do Hero. */
export const trustBadges = [
  { icon: 'ShieldCheck', label: 'Biossegurança nível hospitalar' },
  { icon: 'ScanLine', label: 'Scanner intraoral 3D' },
  { icon: 'HeartPulse', label: 'Atendimento humanizado' },
  { icon: 'CreditCard', label: 'Parcelamos em até 12x' },
] as const

export const stats = [
  { value: '12', suffix: ' anos', label: 'de história na região' },
  { value: '100', suffix: '+', label: 'sorrisos transformados' },
  { value: '4,9', suffix: '/5', label: 'no Google Reviews' },
  { value: '96', suffix: '%', label: 'de pacientes por indicação' },
] as const

export type Service = {
  id: string
  icon: string
  title: string
  description: string
  bullets: string[]
  priceFrom: string
  highlight?: boolean
}

export const services: Service[] = [
  {
    id: 'implantes',
    icon: 'Anchor',
    title: 'Implantes dentários',
    description:
      'Reposição de dentes com implantes de titânio, planejamento digital e carga imediata quando indicado.',
    bullets: [
      'Cirurgia guiada por computador',
      'Prótese provisória no mesmo dia',
      'Garantia estendida',
    ],
    priceFrom: 'R$ 2.900',
    highlight: true,
  },
  {
    id: 'lentes',
    icon: 'Sparkles',
    title: 'Lentes de contato dental',
    description:
      'Facetas ultrafinas em porcelana para redesenhar o sorriso com aparência natural e mínimo desgaste.',
    bullets: ['Ensaio digital antes de iniciar', 'Porcelana importada', 'Mock-up para aprovação'],
    priceFrom: 'R$ 1.850',
  },
  {
    id: 'ortodontia',
    icon: 'Smile',
    title: 'Ortodontia invisível',
    description:
      'Alinhadores transparentes removíveis com acompanhamento digital de cada etapa do tratamento.',
    bullets: ['Simulação 3D do resultado', 'Sem aparelho metálico', 'Revisões a cada 45 dias'],
    priceFrom: 'R$ 6.400',
    highlight: true,
  },
  {
    id: 'clareamento',
    icon: 'Sun',
    title: 'Clareamento dental',
    description:
      'Protocolos de consultório e caseiro supervisionado, com controle de sensibilidade em todas as sessões.',
    bullets: ['Até 6 tons mais claro', 'Moldeiras personalizadas', 'Kit de manutenção incluso'],
    priceFrom: 'R$ 890',
  },
  {
    id: 'harmonizacao',
    icon: 'Wand2',
    title: 'Harmonização orofacial',
    description:
      'Procedimentos faciais integrados ao sorriso, respeitando as proporções naturais de cada rosto.',
    bullets: ['Avaliação facial completa', 'Produtos com registro Anvisa', 'Retorno de ajuste incluso'],
    priceFrom: 'R$ 1.200',
  },
  {
    id: 'prevencao',
    icon: 'Stethoscope',
    title: 'Prevenção e periodontia',
    description:
      'Limpeza profissional, tratamento de gengiva e planos de manutenção para a família toda.',
    bullets: ['Profilaxia com ultrassom', 'Aplicação de flúor', 'Plano semestral de acompanhamento'],
    priceFrom: 'R$ 260',
  },
]

export type ConsultationPlan = {
  id: string
  name: string
  description: string
  price: string
  priceNote: string
  duration: string
  features: string[]
  featured?: boolean
  ctaLabel: string
}

/** Tipos de consulta / tabela de valores base. */
export const consultationPlans: ConsultationPlan[] = [
  {
    id: 'avaliacao',
    name: 'Avaliação inicial',
    description: 'Primeiro contato para entender sua queixa e mapear as possibilidades.',
    price: 'Gratuita',
    priceNote: 'primeira visita',
    duration: '40 min',
    features: [
      'Exame clínico completo',
      'Fotografias intraorais',
      'Plano de tratamento por escrito',
      'Simulação de valores e parcelas',
    ],
    ctaLabel: 'Agendar avaliação',
  },
  {
    id: 'diagnostico',
    name: 'Diagnóstico digital',
    description: 'Escaneamento 3D e planejamento reverso para casos estéticos e reabilitações.',
    price: 'R$ 390',
    priceNote: 'abatido no tratamento',
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
    price: 'R$ 250',
    priceNote: 'consulta de urgência',
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

export type PriceRow = {
  procedure: string
  category: string
  price: string
  installment: string
}

/** Tabela de valores base — referencia inicial, sujeita a avaliacao. */
export const priceTable: PriceRow[] = [
  {
    procedure: 'Limpeza + profilaxia completa',
    category: 'Prevenção',
    price: 'R$ 260',
    installment: '2x sem juros',
  },
  {
    procedure: 'Clareamento em consultório (3 sessões)',
    category: 'Estética',
    price: 'R$ 890',
    installment: '6x sem juros',
  },
  {
    procedure: 'Restauração em resina (por dente)',
    category: 'Restaurador',
    price: 'R$ 380',
    installment: '3x sem juros',
  },
  {
    procedure: 'Lente de contato dental (por dente)',
    category: 'Estética',
    price: 'R$ 1.850',
    installment: '12x sem juros',
  },
  {
    procedure: 'Implante unitário + prótese',
    category: 'Reabilitação',
    price: 'R$ 2.900',
    installment: '12x sem juros',
  },
  {
    procedure: 'Alinhadores invisíveis (caso completo)',
    category: 'Ortodontia',
    price: 'R$ 6.400',
    installment: '18x sem juros',
  },
  {
    procedure: 'Tratamento de canal (por canal)',
    category: 'Endodontia',
    price: 'R$ 780',
    installment: '6x sem juros',
  },
  {
    procedure: 'Harmonização orofacial (sessão)',
    category: 'Facial',
    price: 'R$ 1.200',
    installment: '4x sem juros',
  },
]

export type SuccessCase = {
  id: string
  patient: string
  age: number
  treatment: string
  duration: string
  sessions: string
  summary: string
  quote: string
  tags: string[]
  /** Tons usados no placeholder visual — troque por fotos reais depois. */
  palette: { before: string; after: string }
}

export const successCases: SuccessCase[] = [
  {
    id: 'caso-1',
    patient: 'Paciente M.',
    age: 34,
    treatment: 'Lentes de contato dental',
    duration: '3 semanas',
    sessions: '4 sessões',
    summary:
      'Reanatomização de 10 dentes superiores com fechamento de diastema e correção de desgaste no incisivo central.',
    quote: 'Eu sorria de boca fechada em todas as fotos. Hoje não penso mais nisso.',
    tags: ['Estética', 'Mínimo desgaste'],
    palette: { before: '#1a1613', after: '#100f0d' },
  },
  {
    id: 'caso-2',
    patient: 'Paciente R.',
    age: 52,
    treatment: 'Reabilitação com implantes',
    duration: '5 meses',
    sessions: '7 sessões',
    summary:
      'Substituição de prótese removível por protocolo fixo sobre 6 implantes, com carga imediata no dia da cirurgia.',
    quote: 'Voltei a comer o que eu quiser sem medo. A diferença é diária.',
    tags: ['Reabilitação', 'Carga imediata'],
    palette: { before: '#191512', after: '#0f0e0d' },
  },
  {
    id: 'caso-3',
    patient: 'Paciente J.',
    age: 27,
    treatment: 'Alinhadores invisíveis',
    duration: '11 meses',
    sessions: '9 revisões',
    summary:
      'Correção de apinhamento anterior e mordida cruzada sem aparelho fixo, com acompanhamento digital mensal.',
    quote: 'Ninguém no trabalho percebeu que eu estava tratando. Esse era o meu medo.',
    tags: ['Ortodontia', 'Discreto'],
    palette: { before: '#1b1714', after: '#110f0e' },
  },
  {
    id: 'caso-4',
    patient: 'Paciente A.',
    age: 41,
    treatment: 'Clareamento + restaurações',
    duration: '1 mês',
    sessions: '5 sessões',
    summary:
      'Clareamento combinado e troca de restaurações antigas escurecidas nos dentes anteriores superiores.',
    quote: 'Achei que precisaria de lente. Resolvemos com muito menos do que eu imaginava.',
    tags: ['Estética', 'Conservador'],
    palette: { before: '#18140f', after: '#0f0e0c' },
  },
]

export type Review = {
  id: string
  author: string
  initials: string
  rating: number
  timeAgo: string
  text: string
  treatment: string
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
    treatment: 'Lentes de contato dental',
    accent: '#c9a227',
  },
  {
    id: 'r2',
    author: 'Ricardo M.',
    initials: 'RM',
    rating: 5,
    timeAgo: 'há 1 mês',
    text: 'Tenho pavor de dentista desde criança. Fui muito bem acolhido, fizeram tudo no meu ritmo e sem dor. Terminei o implante e voltei para levar minha esposa.',
    treatment: 'Implante dentário',
    accent: '#d8bf7d',
  },
  {
    id: 'r3',
    author: 'Juliana P.',
    initials: 'JP',
    rating: 5,
    timeAgo: 'há 1 mês',
    text: 'Pontualidade que eu nunca vi em clínica. Nunca esperei mais de 5 minutos. O acompanhamento pelo WhatsApp entre as consultas faz muita diferença.',
    treatment: 'Alinhadores invisíveis',
    accent: '#b08d3f',
  },
  {
    id: 'r4',
    author: 'André S.',
    initials: 'AS',
    rating: 5,
    timeAgo: 'há 2 meses',
    text: 'Cheguei de urgência num sábado com muita dor e fui atendido em menos de uma hora. Resolveram na hora e ainda organizaram o tratamento completo depois.',
    treatment: 'Urgência odontológica',
    accent: '#e3cd96',
  },
  {
    id: 'r5',
    author: 'Patrícia L.',
    initials: 'PL',
    rating: 5,
    timeAgo: 'há 3 meses',
    text: 'Levo meus dois filhos e eles adoram ir. Equipe com uma paciência enorme com criança. Preço justo e parcelamento que cabe no orçamento da família.',
    treatment: 'Odontopediatria',
    accent: '#a8841c',
  },
  {
    id: 'r6',
    author: 'Fernando T.',
    initials: 'FT',
    rating: 5,
    timeAgo: 'há 4 meses',
    text: 'A simulação digital antes de começar me deu total segurança. Vi o resultado antes de gastar um real. Ficou exatamente como no planejamento.',
    treatment: 'Diagnóstico digital',
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
