import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { label: 'Casinos', to: '/casinos' },
  { label: 'Hotels', to: '/hotels' },
  { label: 'Bonuses', to: '/bonuses' },
  { label: 'About', to: '/about' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-red-700 tracking-tight">
          <Trophy className="w-6 h-6 text-red-600" />
          CanadaCasinos<span className="text-gray-400">.ca</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? 'bg-red-50 text-red-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/casinos">
            <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
              🎰 Top Picks
            </Button>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-white px-4 pb-4 pt-2 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                location.pathname === link.to ? 'bg-red-50 text-red-700' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/casinos" onClick={() => setOpen(false)}>
            <Button size="sm" className="mt-2 w-full bg-red-600 hover:bg-red-700 text-white">
              🎰 Top Picks
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}
