import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import StarRating from '@/app/components/StarRating';
import { hotels } from '@/app/data/hotels';
import { MapPin, CheckCircle } from 'lucide-react';

const provinces = ['All', 'Ontario', 'British Columbia', 'Quebec', 'Alberta'];
const categories = ['All', 'Casino Resort', 'Luxury', 'Budget'];

const categoryColors: Record<string, string> = {
  'Casino Resort': 'bg-purple-50 text-purple-700 border-purple-200',
  'Luxury': 'bg-yellow-50 text-yellow-700 border-yellow-200',
  'Budget': 'bg-green-50 text-green-700 border-green-200',
};

export default function HotelsPage() {
  const [province, setProvince] = useState('All');
  const [category, setCategory] = useState('All');

  const filtered = hotels.filter(
    (h) =>
      (province === 'All' || h.province === province) &&
      (category === 'All' || h.category === category)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">🏨 Best Canadian Hotels & Casino Resorts 2026</h1>
        <p className="text-muted-foreground max-w-3xl leading-relaxed">
          From world-class casino resorts on Niagara Falls to budget-friendly city-centre stays, our team reviews the best places to stay in Canada. Each property is assessed on location, amenities, value, and service quality.
        </p>
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
          <span className="text-sm font-medium text-gray-700">Category:</span>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                category === c ? 'bg-red-600 text-white border-red-600' : 'bg-white text-gray-700 border-gray-300 hover:border-red-400'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <p className="text-sm text-muted-foreground mb-6">
        Showing <strong>{filtered.length}</strong> hotel{filtered.length !== 1 ? 's' : ''}
        {province !== 'All' ? ` in ${province}` : ''}
        {category !== 'All' ? ` (${category})` : ''}
      </p>

      {/* Hotel Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((hotel) => (
          <Card key={hotel.id} className="overflow-hidden border border-border hover:shadow-lg transition-shadow flex flex-col sm:flex-row">
            <div className={`${hotel.color} w-full sm:w-28 flex-shrink-0 flex items-center justify-center py-6 sm:py-0`}>
              <span className="text-white text-3xl font-bold opacity-70">{hotel.name.charAt(0)}</span>
            </div>
            <CardContent className="p-5 flex-1">
              <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className="font-bold text-base text-gray-900">{hotel.name}</h3>
                <Badge className={`text-xs border ${categoryColors[hotel.category]}`}>{hotel.category}</Badge>
              </div>
              <StarRating rating={hotel.rating} size="sm" />
              <div className="flex items-center gap-3 mt-1">
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="w-3 h-3" /> {hotel.province}
                </span>
                <span className="text-xs font-bold text-gray-700">{hotel.priceRange}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{hotel.description}</p>
              <div className="mt-3 flex flex-wrap gap-1">
                {hotel.amenities.map((a) => (
                  <span key={a} className="flex items-center gap-1 text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full">
                    <CheckCircle className="w-3 h-3 text-green-500" /> {a}
                  </span>
                ))}
              </div>
              <a href={hotel.url} target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="mt-4 bg-red-600 hover:bg-red-700 text-white">
                  Book Now →
                </Button>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
