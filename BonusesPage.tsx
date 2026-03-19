import { Link } from 'react-router-dom';
import { Trophy, Shield, ExternalLink } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 font-bold text-xl text-white mb-3">
              <Trophy className="w-5 h-5 text-red-400" />
              CanadaCasinos<span className="text-gray-500">.ca</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Canada's most trusted independent guide to casinos, hotels, and gambling bonuses.
              Updated monthly by our editorial team.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/casinos" className="hover:text-white transition-colors">Casino Reviews</Link></li>
              <li><Link to="/hotels" className="hover:text-white transition-colors">Hotel Reviews</Link></li>
              <li><Link to="/bonuses" className="hover:text-white transition-colors">Bonuses</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Provinces */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">By Province</h4>
            <ul className="space-y-2 text-sm">
              {['Ontario', 'British Columbia', 'Quebec', 'Alberta', 'Manitoba'].map((p) => (
                <li key={p}>
                  <Link to={`/casinos`} className="hover:text-white transition-colors">{p}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Responsible Gambling */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Responsible Gambling</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://www.camh.ca/" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1 transition-colors">
                  CAMH <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://www.begambleaware.org/" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1 transition-colors">
                  BeGambleAware <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://www.gamblingtherapy.org/" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1 transition-colors">
                  Gambling Therapy <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://www.problemgambling.ca/" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1 transition-colors">
                  Problem Gambling Canada <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-gray-700 mb-6" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-green-500 flex-shrink-0" />
            <span>
              <strong className="text-gray-400">18+ Only.</strong> Gambling can be addictive. Play responsibly.
              CanadaCasinos.ca contains affiliate links. We may earn a commission at no extra cost to you.
              All reviews are independent and based on our editorial criteria.
            </span>
          </div>
          <p className="whitespace-nowrap">© {new Date().getFullYear()} CanadaCasinos.ca</p>
        </div>
      </div>
    </footer>
  );
}
