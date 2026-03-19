export interface NorwayCasino {
  id: number;
  name: string;
  rating: number;
  bonusNOK: string;
  license: string;
  description: string;
  features: string[];
  url: string;
  color: string;
  badge: string;
}

export const norwayCasinos: NorwayCasino[] = [
  {
    id: 1,
    name: 'LeoVegas Casino',
    rating: 4.9,
    bonusNOK: '5 000 kr + 200 Gratisspinn',
    license: 'Malta Gaming Authority',
    description: 'Kåret til verdens beste mobilcasino. LeoVegas tilbyr et imponerende spillutvalg, lynrask utbetaling og norsk kundestøtte.',
    features: ['2 000+ Spilleautomater', 'Norsk Kundestøtte', 'BankID Innlogging'],
    url: 'https://www.leovegas.com/',
    color: 'bg-orange-600',
    badge: 'Vår #1',
  },
  {
    id: 2,
    name: 'Casumo Casino',
    rating: 4.8,
    bonusNOK: '2 000 kr + 20 Gratisspinn',
    license: 'Malta Gaming Authority',
    description: 'Unikt og morsomt casino med en adventure-lignende belønningsstruktur. Casumo er perfekt for norske spillere som vil ha det gøy.',
    features: ['Unik Aventyr-Profil', 'Daglige Kampanjer', 'Rask Utbetaling'],
    url: 'https://www.casumo.com/',
    color: 'bg-purple-700',
    badge: 'Mest Populær',
  },
  {
    id: 3,
    name: 'Unibet Casino',
    rating: 4.7,
    bonusNOK: '1 000 kr Velkomstbonus',
    license: 'Malta Gaming Authority',
    description: 'Et av Norges mest betrodde casinoer med over 600 spill, live casino og sportsbetting – alt på norsk.',
    features: ['Norsk Lisens (MGA)', 'Live Casino', 'Sportsbook'],
    url: 'https://www.unibet.com/',
    color: 'bg-green-700',
    badge: 'Mest Betrodd',
  },
  {
    id: 4,
    name: 'Betsafe Casino',
    rating: 4.6,
    bonusNOK: '3 000 kr + 100 Gratisspinn',
    license: 'Malta Gaming Authority',
    description: 'Betsafe kombinerer et stort spillbibliotek med trygg gambling og norske betalingsmetoder som BankAxept og Vipps.',
    features: ['Vipps Betaling', 'Norsk Støtte', '600+ Spill'],
    url: 'https://www.betsafe.com/',
    color: 'bg-red-700',
    badge: 'Beste Betaling',
  },
  {
    id: 5,
    name: 'Mr Green Casino',
    rating: 4.5,
    bonusNOK: '2 500 kr + 100 Gratisspinn',
    license: 'UK Gambling Commission',
    description: 'Stilrent og sikkert online casino som er kjent for sitt brede spillvalg, høy utbetalingsprosent og ansvarlig spillpolitikk.',
    features: ['Grønn Gaming', 'Høy RTP', 'Ansvarlig Spill'],
    url: 'https://www.mrgreen.com/',
    color: 'bg-emerald-700',
    badge: 'Ansvarlig Spill',
  },
  {
    id: 6,
    name: 'Rizk Casino',
    rating: 4.5,
    bonusNOK: '100% opptil 1 000 kr',
    license: 'Malta Gaming Authority',
    description: 'Med sin superhelt-maskot og populære Wheel of Rizk-belønninger er dette et morsomt og rettferdig casino for norske spillere.',
    features: ['Wheel of Rizk Rewards', 'Ingen Omsetningskrav', 'Rask Utbetaling'],
    url: 'https://www.rizk.com/',
    color: 'bg-blue-700',
    badge: 'Ingen Wagering',
  },
  {
    id: 7,
    name: 'Guts Casino',
    rating: 4.4,
    bonusNOK: '1 500 kr + 100 Gratisspinn',
    license: 'Malta Gaming Authority',
    description: 'Guts Casino er kjent for sin raske utbetalingsprosess og et solid spillutvalg fra ledende leverandører som NetEnt og Microgaming.',
    features: ['48-timers Utbetaling', 'NetEnt Spill', 'Mobilvennlig'],
    url: 'https://www.guts.com/',
    color: 'bg-yellow-700',
    badge: 'Raskest Utbetaling',
  },
  {
    id: 8,
    name: 'Betsson Casino',
    rating: 4.3,
    bonusNOK: '2 000 kr Velkomstpakke',
    license: 'Malta Gaming Authority',
    description: 'Betsson er et av Skandinavias mest etablerte casinoer med en enorm spillsamling, live casino og regelmessige kampanjer for norske spillere.',
    features: ['Skandinavisk Arv', 'Live Dealer Spill', 'Lojalitetsprogram'],
    url: 'https://www.betsson.com/',
    color: 'bg-sky-700',
    badge: 'Skandinavisk Favoritt',
  },
];
