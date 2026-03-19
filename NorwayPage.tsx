import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import StarRating from '@/app/components/StarRating';
import { casinos } from '@/app/data/casinos';
import { hotels } from '@/app/data/hotels';
import { bonuses } from '@/app/data/bonuses';
import { ArrowRight, CheckCircle, MapPin, Gift, Star } from 'lucide-react';

const featuredCasinos = casinos.slice(0, 3);
const featuredHotels = hotels.slice(0, 3);
const topBonuses = bonuses.filter((b) => b.highlight).slice(0, 3);

const stats = [
  { label: 'Casino Reviews', value: '150+', icon: '🎰' },
  { label: 'Provinces Covered', value: '10', icon: '🍁' },
  { label: 'Bonus Offers Tracked', value: '80+', icon: '🎁' },
  { label: 'Updated', value: 'Monthly', icon: '🔄' },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-700 via-red-800 to-gray-900 text-white py-24 px-4">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }}
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <Badge className="mb-5 bg-white/20 text-white border-white/30 text-sm px-4 py-1">
            🍁 Canada's #1 Casino & Hotel Guide
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Canada's Best<br />
            <span className="text-yellow-300">Casinos & Hotels</span>
          </h1>
          <p className="text-lg sm:text-xl text-red-100 mb-10 max-w-2xl mx-auto">
            Expert reviews, exclusive bonuses, and trusted ratings for 150+ Canadian casinos and luxury hotels — updated every month by our editorial team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/casinos">
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8">
                🎰 Explore Casinos
              </Button>
            </Link>
            <Link to="/hotels">
              <Button size="lg" variant="outline" className="border-white text-white bg-white/10 hover:bg-white/20 font-bold px-8">
                🏨 Find Hotels
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center gap-1">
              <span className="text-2xl">{s.icon}</span>
              <span className="text-2xl font-bold text-red-700">{s.value}</span>
              <span className="text-xs text-muted-foreground font-medium">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Casinos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">🎰 Featured Casinos</h2>
            <p className="text-muted-foreground mt-1">Top-rated casinos handpicked by our editors</p>
          </div>
          <Link to="/casinos">
            <Button variant="outline" size="sm" className="gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredCasinos.map((casino) => (
            <Card key={casino.id} className="overflow-hidden border border-border hover:shadow-md transition-shadow">
              <div className={`${casino.color} h-24 flex items-center justify-center`}>
                <span className="text-white text-3xl font-bold opacity-60">{casino.name.charAt(0)}</span>
              </div>
              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-base text-gray-900">{casino.name}</h3>
                  <Badge className="text-xs bg-yellow-50 text-yellow-700 border-yellow-200">{casino.badges[0]}</Badge>
                </div>
                <StarRating rating={casino.rating} size="sm" />
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{casino.description}</p>
                <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-green-700 bg-green-50 rounded px-2 py-1 w-fit">
                  <Gift className="w-3 h-3" /> {casino.bonus}
                </div>
                <a href={casino.url} target="_blank" rel="noopener noreferrer">
                  <Button size="sm" className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white">
                    Visit Casino →
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Hotels */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">🏨 Featured Hotels</h2>
              <p className="text-muted-foreground mt-1">Luxury stays and casino resorts across Canada</p>
            </div>
            <Link to="/hotels">
              <Button variant="outline" size="sm" className="gap-1">
                View All <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredHotels.map((hotel) => (
              <Card key={hotel.id} className="overflow-hidden border border-border hover:shadow-md transition-shadow">
                <div className={`${hotel.color} h-24 flex items-center justify-center`}>
                  <span className="text-white text-3xl font-bold opacity-60">{hotel.name.charAt(0)}</span>
                </div>
                <CardContent className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-base text-gray-900">{hotel.name}</h3>
                    <Badge variant="outline" className="text-xs">{hotel.category}</Badge>
                  </div>
                  <StarRating rating={hotel.rating} size="sm" />
                  <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                    <MapPin className="w-3 h-3" /> {hotel.province}
                    <span className="ml-2 font-semibold text-gray-700">{hotel.priceRange}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{hotel.description}</p>
                  <a href={hotel.url} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" variant="outline" className="mt-4 w-full border-red-200 text-red-700 hover:bg-red-50">
                      Book Now →
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Top Bonuses Teaser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">🎁 Top Bonuses Right Now</h2>
            <p className="text-muted-foreground mt-1">Exclusive offers for Canadian players — verified weekly</p>
          </div>
          <Link to="/bonuses">
            <Button variant="outline" size="sm" className="gap-1">
              All Bonuses <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topBonuses.map((bonus) => (
            <Card key={bonus.id} className="border-2 border-yellow-200 bg-yellow-50 hover:shadow-md transition-shadow">
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-gray-900">{bonus.casino}</span>
                  <Badge className="bg-yellow-400 text-gray-900 border-0 text-xs">{bonus.type}</Badge>
                </div>
                <p className="text-lg font-bold text-red-700 mb-1">{bonus.offer}</p>
                <p className="text-xs text-muted-foreground mb-4">Wagering: {bonus.wagering}</p>
                <div className="flex items-center justify-between">
                  <StarRating rating={bonus.rating} size="sm" />
                  <a href={bonus.url} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white text-xs">
                      Claim Bonus →
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="bg-gray-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Why Trust CanadaCasinos.ca?</h2>
          <p className="text-gray-400 mb-10">Our editorial team of gambling experts has been reviewing Canadian casinos since 2010.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: <CheckCircle className="w-8 h-8 text-green-400" />, title: 'Independent Reviews', desc: 'No sponsored placements. Every review is based purely on player experience and our testing criteria.' },
              { icon: <Star className="w-8 h-8 text-yellow-400" />, title: 'Verified Ratings', desc: 'Our 50-point rating system covers games, payouts, support, bonuses, licensing, and mobile experience.' },
              { icon: <MapPin className="w-8 h-8 text-red-400" />, title: 'Canada-First Focus', desc: 'We only review sites that accept Canadian players, offer CAD banking, and meet Canadian player standards.' },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center gap-3">
                {item.icon}
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
