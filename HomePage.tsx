export interface Bonus {
  id: number;
  casino: string;
  type: 'Welcome' | 'No Deposit' | 'Free Spins' | 'Reload' | 'Cashback';
  offer: string;
  wagering: string;
  rating: number;
  url: string;
  highlight: boolean;
}

export const bonuses: Bonus[] = [
  { id: 1, casino: 'Jackpot City', type: 'Welcome', offer: '$1,600 Matched Across 4 Deposits', wagering: '70x', rating: 4.8, url: 'https://www.jackpotcity.com/', highlight: true },
  { id: 2, casino: 'Zodiac Casino', type: 'Free Spins', offer: '80 Free Spins for $1 Deposit', wagering: '200x', rating: 4.6, url: 'https://www.zodiac-casino.com/', highlight: true },
  { id: 3, casino: 'Spin Casino', type: 'Welcome', offer: '$1,000 Match Bonus + 100 Free Spins', wagering: '40x', rating: 4.7, url: 'https://www.spincasino.com/', highlight: false },
  { id: 4, casino: 'Royal Vegas', type: 'Welcome', offer: '$1,200 Bonus Over First 3 Deposits', wagering: '50x', rating: 4.6, url: 'https://www.royalvegas.com/', highlight: false },
  { id: 5, casino: 'Ruby Fortune', type: 'Welcome', offer: '$750 Welcome Bonus Package', wagering: '40x', rating: 4.5, url: 'https://www.rubyfortune.com/', highlight: false },
  { id: 6, casino: '888 Casino', type: 'No Deposit', offer: '$88 Free – No Deposit Required', wagering: '30x', rating: 4.5, url: 'https://www.888casino.com/', highlight: true },
  { id: 7, casino: 'Playzee', type: 'Welcome', offer: '$300 + 200 Free Spins on First Deposit', wagering: '35x', rating: 4.3, url: 'https://www.playzee.com/', highlight: false },
  { id: 8, casino: 'Jackpot City', type: 'Reload', offer: '25% Reload Every Friday up to $200', wagering: '40x', rating: 4.8, url: 'https://www.jackpotcity.com/', highlight: false },
  { id: 9, casino: 'Spin Casino', type: 'Cashback', offer: '10% Weekly Cashback on Net Losses', wagering: '1x', rating: 4.7, url: 'https://www.spincasino.com/', highlight: false },
  { id: 10, casino: 'Mummy\'s Gold', type: 'Welcome', offer: '$500 Welcome Bonus + 50 Spins', wagering: '50x', rating: 4.4, url: 'https://www.mummysgold.com/', highlight: false },
];
