# Landing Page — Clínica Odontológica (projeto de prospecção)

Landing page estática (SPA) de alto padrão para clínica odontológica, construída com
**React 19 + Vite + TypeScript + Tailwind CSS v4**. Não há backend: toda conversão
acontece por links diretos (WhatsApp, `tel:`, `mailto:`, Google, Instagram).

Todo o conteúdo é **mock data** e vive em um único arquivo: [`src/data/clinic.ts`](src/data/clinic.ts).

## Rodando localmente

```bash
npm install
npm run dev
```

Outros scripts: `npm run build` (typecheck + build), `npm run preview`, `npm run lint`.

## Direção de arte

Estética **noir & gold**, inspirada em `grandstreetdental.com` (tipografia editorial,
muito respiro) e `apaaesthetic.com` (labels em caixa alta com tracking largo, botões
de contorno fino, quase nenhum raio de borda).

| Papel | Token | Valor |
| --- | --- | --- |
| Fundo base / seções alternadas | `noir-950` / `noir-900` | `#080807` / `#0b0a09` |
| Superfícies elevadas | `noir-850` / `noir-800` | `#100e0d` / `#151312` |
| Dourado principal | `gold-500` | `#c9a227` |
| Dourado claro (hover, itálicos) | `gold-300` / `gold-200` | `#e3cd96` / `#ecdcb0` |
| Texto forte / corpo / apoio | `cream-50` / `cream-300` / `cream-500` | `#faf7f0` / `#b8b1a4` / `#8c857a` |

- **Display:** Cormorant Garamond (serifada de alto contraste, peso 300) — títulos,
  números e valores; o trecho de destaque de cada título vai em itálico dourado.
- **UI:** Jost — labels, botões e navegação em caixa alta com `tracking` de 0.2em a 0.32em.
- Sem cartões arredondados: a hierarquia vem de **filetes de 1px** (`white/8`) e de
  faixas douradas que crescem no hover. Raio máximo de 2–3px nos botões.
- Todos os tokens ficam em `src/index.css`, dentro de `@theme` — trocar a paleta inteira
  é editar esse bloco.

## Estrutura de pastas

```
├── index.html                  # metatags, fontes (Cormorant Garamond + Jost), lang pt-BR
├── vite.config.ts              # plugins + base path do GitHub Pages
├── .github/workflows/deploy.yml# deploy automático + cron das avaliações
├── scripts
│   └── fetch-google-reviews.mjs# busca as avaliações do Google no build
├── public/favicon.svg
└── src
    ├── main.tsx
    ├── App.tsx                 # composição das seções
    ├── index.css               # design tokens (@theme) + utilitários (@utility)
    ├── data
    │   ├── clinic.ts           # ★ TODO o conteúdo do site (mock data)
    │   └── google-reviews.json # gerado no build; versionado vazio (fallback)
    ├── lib
    │   ├── links.ts            # geradores de link: WhatsApp, tel, mailto
    │   ├── googleReviews.ts    # une API do Google + fallback mock
    │   └── icons.tsx           # mapa nome→ícone (permite ícone por string no mock)
    └── components
        ├── Header.tsx          # topo fixo que encolhe ao rolar + menu mobile
        ├── Hero.tsx            # chamada principal + moldura em arco + faixa de números
        ├── Services.tsx        # selos de confiança, 6 tratamentos, diferenciais
        ├── Pricing.tsx         # 3 tipos de consulta + tabela de valores base
        ├── Cases.tsx           # casos de sucesso com comparador antes/depois
        ├── Reviews.tsx         # widget simulado do Google + "Avaliar clínica"
        ├── Contact.tsx         # canais diretos, endereço, horários, mapa
        ├── Footer.tsx
        ├── WhatsAppFab.tsx     # botão flutuante de WhatsApp
        └── ui
            ├── SectionHeading.tsx
            ├── Logo.tsx
            ├── Stars.tsx
            ├── GoogleG.tsx
            ├── BrandIcons.tsx  # glifos WhatsApp/Instagram (lucide v1 não tem marcas)
            ├── ArchArt.tsx     # emblema da arcada em traço dourado (visual do hero)
            ├── SmileArt.tsx    # ilustração placeholder do sorriso (antes/depois)
            └── BeforeAfter.tsx # comparador arrastável (mouse, toque e teclado)
```

## Personalizando para um cliente real

Abra `src/data/clinic.ts` e troque os itens marcados com `// TODO`:

| Campo | O que colocar |
| --- | --- |
| `whatsappNumber` | Somente dígitos, com DDI e DDD: `5511912345678` |
| `phoneLabel` / `phoneRaw` | Telefone exibido e o usado no link `tel:` |
| `email`, `instagramUrl`, `address`, `hours`, `cro` | Dados reais da clínica |
| `googleReviewUrl` | Link "Escrever avaliação" do Google Business Profile → *Compartilhar formulário de avaliação* |
| `googleMapsUrl` | URL do perfil/endereço no Google Maps |
| `services`, `consultationPlans`, `priceTable`, `successCases`, `reviews` | Textos e valores reais |

**Fotos:** nenhuma foto de paciente é usada. O hero traz o emblema `ArchArt` dentro de
uma moldura em arco e os casos usam a ilustração `SmileArt`. Para entregar com fotos
reais, troque `<ArchArt />` por `<img className="size-full object-cover" … />` dentro da
mesma moldura (`src/components/Hero.tsx`) e `<SmileArt … />` por `<img … />` na proporção
4/3 (`src/components/ui/BeforeAfter.tsx`).

**Mapa:** `Contact.tsx` traz um placeholder clicável e, em comentário, o `<iframe>`
pronto do Google Maps para colar no lugar.

## Avaliações reais do Google

A seção de prova social pode exibir as avaliações reais da clínica sem abrir mão do
site estático. O fluxo é **em tempo de build**, não no navegador:

1. O workflow roda a cada push na `main` e de 6 em 6 horas (`cron`).
2. `scripts/fetch-google-reviews.mjs` chama a Places API (New) e grava
   `src/data/google-reviews.json`.
3. O Vite empacota esse JSON no bundle e o site é republicado.

A chave nunca chega ao navegador — fica em GitHub Secrets. E se qualquer coisa falhar
(secret ausente, cota estourada, API fora), o script sai com código 0 mantendo o
fallback: o site volta a exibir os depoimentos mock de `clinic.ts` em vez de quebrar.

### Configuração

No Google Cloud, com billing ativo: habilite a **Places API (New)**, gere uma chave e
restrinja-a à API de Places. Pegue o **Place ID** da clínica no Place ID Finder.

No repositório, em *Settings → Secrets and variables → Actions*, crie:

| Secret | Valor |
| --- | --- |
| `GOOGLE_MAPS_API_KEY` | chave do Google Cloud |
| `GOOGLE_PLACE_ID` | Place ID da clínica (`ChIJ...`) |

Para testar localmente antes de subir:

```bash
GOOGLE_MAPS_API_KEY=xxx GOOGLE_PLACE_ID=ChIJyyy npm run reviews:fetch
```

O JSON versionado no git fica sempre vazio — dados reais só existem dentro do build,
o que também mantém o projeto dentro das regras de armazenamento do Maps Platform.

### Limitações da API (não são bugs)

- **Máximo de 5 avaliações.** A API não pagina; a grade se adapta e o último card ocupa
  a linha inteira quando o total é ímpar.
- **Sem controle de ordenação.** O `places.get` aceita apenas `languageCode`,
  `regionCode` e `sessionToken`. O Google devolve as 5 que considera mais relevantes —
  o script apenas reordena essas 5 por data. Não prometa "sempre as mais recentes".
- **Sem distribuição por estrela.** A API devolve nota e total, não o histograma. Com
  dados reais as barras de 5★–1★ somem, em vez de exibirmos números inventados.
- **Atribuição obrigatória:** nome do autor com link para o perfil no Google e foto
  quando houver. Já implementado nos cards.
- Avaliações negativas entram automaticamente se estiverem entre as retornadas.

## Deploy no GitHub Pages

O workflow em `.github/workflows/deploy.yml` faz build e publica a cada push na `main`.

1. No GitHub: **Settings → Pages → Source: GitHub Actions**.
2. Faça push na `main`. O site sai em `https://<usuario>.github.io/<repositorio>/`.

O `base` do Vite está em `vite.config.ts` (`REPO_NAME`). Se o repositório for renomeado,
atualize a constante; se usar domínio próprio (CNAME), troque o `base` para `'/'`.

> Layout demonstrativo: nome, endereço, telefones, depoimentos e valores são fictícios.
