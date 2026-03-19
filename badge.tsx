import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import StarRating from '@/app/components/StarRating';
import { bonuses } from '@/app/data/bonuses';
import { ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';

const typeColors: Record<string, string> = {
  Welcome: 'bg-blue-50 text-blue-700 border-blue-200',
  'No Deposit': 'bg-green-50 text-green-700 border-green-200',
  'Free Spins': 'bg-purple-50 text-purple-700 border-purple-200',
  Reload: 'bg-orange-50 text-orange-700 border-orange-200',
  Cashback: 'bg-teal-50 text-teal-700 border-teal-200',
};

const faqItems = [
  { q: 'What is a wagering requirement?', a: 'A wagering requirement (also called playthrough) specifies how many times you must bet the bonus amount before withdrawing winnings. For example, a $100 bonus with 40x wagering means you must wager $4,000 before cashing out.' },
  { q: 'What is a Welcome Bonus?', a: 'A welcome bonus is offered to new players upon their first deposit(s). It typically matches a percentage of your deposit up to a maximum amount, sometimes including free spins.' },
  { q: 'What is a No Deposit Bonus?', a: 'A no deposit bonus gives you free cash or spins without requiring any deposit. These are rare and usually come with high wagering requirements.' },
  { q: 'Are these bonuses available to all Canadian provinces?', a: "Most online casino bonuses listed here are available to players in all Canadian provinces. However, some provinces (like Ontario's iGaming Ontario market) may have different regulated operators. Always verify availability on the casino's site." },
  { q: 'How do we verify bonus offers?', a: 'Our editorial team manually checks each bonus offer monthly, confirms the terms directly with the casino, and updates listings accordingly. We only feature licensed and reputable operators.' },
];

export default function BonusesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      {/* Header */}
      <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-8 mb-10 text-white">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">🎁 Best Canadian Casino Bonuses 2026</h1>
        <p className="text-yellow-50 max-w-2xl leading-relaxed">
          We track and verify the top casino bonus offers available to Canadian players. All bonuses are checked monthly for accuracy. Click "Claim Bonus" to visit the casino's site with the offer activated.
        </p>
      </div>

      {/* Bonus Cards */}
      <div className="space-y-4 mb-12">
        {bonuses.map((bonus, idx) => (
          <Card key={bonus.id} className={`border ${bonus.highlight ? 'border-yellow-300 bg-yellow-50' : 'border-border'} hover:shadow-md transition-shadow`}>
            <CardContent className="p-5">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-bold text-gray-700 flex-shrink-0">
                    {idx + 1}
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold text-gray-900">{bonus.casino}</span>
                      {bonus.highlight && (
                        <Badge className="bg-yellow-400 text-gray-900 border-0 text-xs">⭐ Featured</Badge>
                      )}
                      <Badge className={`text-xs border ${typeColors[bonus.type]}`}>{bonus.type}</Badge>
                    </div>
                    <p className="text-base font-semibold text-red-700 mt-0.5">{bonus.offer}</p>
                  </div>
                </div>
                <div className="sm:ml-auto flex flex-col sm:items-end gap-2">
                  <StarRating rating={bonus.rating} size="sm" />
                  <p className="text-xs text-muted-foreground">Wagering: <strong>{bonus.wagering}</strong></p>
                  <a href={bonus.url} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                      Claim Bonus →
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Disclaimer */}
      <div className="bg-gray-50 border border-border rounded-xl p-5 mb-10 flex gap-3">
        <AlertCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-gray-600 leading-relaxed">
          <strong>Bonus Terms Apply.</strong> All casino bonuses come with terms and conditions. Always read the full T&Cs before claiming any offer. Wagering requirements, game restrictions, maximum bet limits, and expiry dates may apply. Gambling should be for entertainment only. If gambling stops being fun, please call the Problem Gambling Helpline: <strong>1-888-230-3505</strong>.
        </p>
      </div>

      {/* FAQ Accordion */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">💡 Bonus Terms Explained</h2>
        <div className="space-y-3">
          {faqItems.map((item, idx) => (
            <div key={idx} className="border border-border rounded-xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-5 py-4 text-left font-medium text-gray-900 hover:bg-gray-50 transition-colors"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <span>{item.q}</span>
                {openFaq === idx ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
              </button>
              {openFaq === idx && (
                <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed border-t border-border pt-3">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
