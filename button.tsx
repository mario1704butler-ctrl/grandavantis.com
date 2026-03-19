import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import StarRating from '@/app/components/StarRating';
import { casinos } from '@/app/data/casinos';
import { Gift, Info, CheckCircle } from 'lucide-react';

const provinces = ['All', 'Ontario', 'British Columbia', 'Quebec', 'Alberta', 'Manitoba'];
const types = ['All', 'online', 'land-based'];

export default function CasinosPage() {
  const [province, setProvince] = useState('All');
  const [type, setType] = useState('All');

  const filtered = casinos.filter(
    (c) =>
      (province === 'All' || c.province === province) &&
      (type === 'All' || c.type === type)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">🎰 Best Canadian Casinos 2026</h1>
        <p className="text-muted-foreground max-w-3xl leading-relaxed">
          Our experts have reviewed and ranked the best online and land-based casinos in Canada. Each casino is tested for game variety, payout speeds, bonus fairness, licensing, and Canadian banking options. Last updated March 2026.
        </p>
      </div>

      {/* How We Rate Info Box */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-8 flex gap-3">
        <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="font-semibold text-blue-900 mb-1">How We Rate Canadian Casinos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-1 text-sm text-blue-800">
            {['Licensing & Safety (25%)', 'Game Selection (20%)', 'Bonus Fairness (20%)', 'Payout Speed (15%)', 'Canadian Banking (10%)', 'Customer Support (10%)'].map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-medium text-gray-700">Province:</span>
          {provinces.map((p) => (
            <button
              key={p}
              onClick={() => setProvince(p)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                province === p ? 'bg-red-600 text-white border-red-600' : 'bg-white text-gray-700 border-gray-300 hover:border-red-400'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-medium text-gray-700">Type:</span>
          {types.map((t) => (
            <button
              key={t}
              onClick={() => setType(t)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border capitalize transition-colors ${
                type === t ? 'bg-red-600 text-white border-red-600' : 'bg-white text-gray-700 border-gray-300 hover:border-red-400'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <p className="text-sm text-muted-foreground mb-6">
        Showing <strong>{filtered.length}</strong> casino{filtered.length !== 1 ? 's' : ''}
        {province !== 'All' ? ` in ${province}` : ''}
        {type !== 'All' ? ` (${type})` : ''}
      </p>

      {/* Casino Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((casino, idx) => (
          <Card key={casino.id} className="overflow-hidden border border-border hover:shadow-lg transition-shadow flex flex-col sm:flex-row">
            <div className={`${casino.color} w-full sm:w-28 flex-shrink-0 flex items-center justify-center py-6 sm:py-0`}>
              <div className="text-center text-white">
                <div className="text-3xl font-bold opacity-80">{casino.name.charAt(0)}</div>
                <div className="text-xs opacity-60 mt-1">#{idx + 1}</div>
              </div>
            </div>
            <CardContent className="p-5 flex-1">
              <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className="font-bold text-base text-gray-900">{casino.name}</h3>
                <div className="flex gap-1 flex-wrap justify-end">
                  {casino.badges.map((b) => (
                    <Badge key={b} className="text-xs bg-yellow-50 text-yellow-700 border-yellow-200">{b}</Badge>
                  ))}
                </div>
              </div>
              <StarRating rating={casino.rating} size="sm" />
              <div className="flex gap-2 mt-2 flex-wrap">
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full">{casino.province}</span>
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full capitalize">{casino.type}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{casino.description}</p>
              <ul className="mt-2 space-y-0.5">
                {casino.features.map((f) => (
                  <li key={f} className="text-xs text-gray-700 flex items-center gap-1.5">
                    <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex items-center justify-between gap-3 flex-wrap">
                <div className="flex items-center gap-1 text-xs font-semibold text-green-700 bg-green-50 rounded px-2 py-1">
                  <Gift className="w-3 h-3" /> {casino.bonus}
                </div>
                <a href={casino.url} target="_blank" rel="noopener noreferrer">
                  <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                    Visit Casino →
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
