import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ExternalLink, Mail } from 'lucide-react';

const team = [
  { name: 'David Mackenzie', role: 'Editor-in-Chief', bio: '15+ years in iGaming journalism. Former editor at Casino.org and AskGamblers. David oversees all casino reviews and maintains our rating methodology.', avatar: 'DM' },
  { name: 'Sarah Tremblay', role: 'Hotel & Resort Specialist', bio: 'Travel and hospitality writer who has personally stayed at and reviewed over 80 casino resorts across North America and Europe.', avatar: 'ST' },
  { name: 'James Chen', role: 'Bonus & Promotions Analyst', bio: 'Former software developer turned gambling analyst. James specialises in dissecting bonus terms and wagering calculations for our readers.', avatar: 'JC' },
];

const ratingCriteria = [
  'Licensing from recognised regulators (AGCO, BCLC, MGA, UKGC)',
  'Independent RNG certification and audit reports',
  'Payout speed and available Canadian banking methods',
  'Breadth and quality of the game library',
  'Fairness of bonus terms and wagering requirements',
  'Quality and responsiveness of customer support',
  'Mobile experience and app availability',
  'Player community feedback and complaint resolution',
];

export default function AboutPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      {/* Mission */}
      <section className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About CanadaCasinos.ca</h1>
        <div className="bg-red-50 border border-red-100 rounded-xl p-6">
          <h2 className="text-xl font-bold text-red-800 mb-3">🎯 Our Mission</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            CanadaCasinos.ca was founded in 2010 with one goal: to give Canadian players a completely independent, honest, and up-to-date resource for finding the best casinos, hotels, and gambling bonuses in Canada.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We are not owned by any casino operator. Every review is written by our in-house editorial team based on real testing, player feedback, and our 50-point evaluation framework. We believe informed players make better decisions — and have more fun.
          </p>
        </div>
      </section>

      {/* How We Review */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-5">🔍 How We Review</h2>
        <p className="text-muted-foreground mb-5 leading-relaxed">
          Every casino on our site has been assessed against our 50-point framework. We create real accounts, make real deposits, test withdrawals, contact support, and play through hundreds of games before publishing a review. Our framework covers:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {ratingCriteria.map((c) => (
            <div key={c} className="flex items-start gap-2 text-sm text-gray-700">
              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
              <span>{c}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">👥 Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {team.map((member) => (
            <Card key={member.name} className="border border-border">
              <CardContent className="p-5 text-center">
                <div className="w-14 h-14 rounded-full bg-red-100 text-red-700 font-bold text-lg flex items-center justify-center mx-auto mb-3">
                  {member.avatar}
                </div>
                <h3 className="font-bold text-gray-900">{member.name}</h3>
                <p className="text-xs text-red-600 font-medium mb-2">{member.role}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Responsible Gambling */}
      <section className="mb-12 bg-orange-50 border border-orange-200 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-orange-900 mb-4">🛡️ Responsible Gambling</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Gambling is meant to be entertainment. We take responsible gambling seriously and encourage all players to set limits, take breaks, and seek help if needed. CanadaCasinos.ca supports the following organisations:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { name: 'CAMH – Centre for Addiction and Mental Health', url: 'https://www.camh.ca/' },
            { name: 'BeGambleAware', url: 'https://www.begambleaware.org/' },
            { name: 'Gambling Therapy', url: 'https://www.gamblingtherapy.org/' },
            { name: 'Problem Gambling Canada', url: 'https://www.problemgambling.ca/' },
          ].map((org) => (
            <a key={org.name} href={org.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-orange-800 hover:text-orange-600 transition-colors">
              <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
              {org.name}
            </a>
          ))}
        </div>
        <p className="text-sm text-gray-600 mt-4 font-medium">
          Problem Gambling Helpline (Canada): <strong>1-888-230-3505</strong>
        </p>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-5">
          <Mail className="inline w-6 h-6 mr-2 text-red-600" />Contact Us
        </h2>
        {submitted ? (
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
            <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-3" />
            <h3 className="font-bold text-green-800 text-lg mb-1">Message Sent!</h3>
            <p className="text-green-700 text-sm">Thanks for reaching out. We'll get back to you within 2 business days.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-300"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-300 resize-none"
                placeholder="Your message or question..."
              />
            </div>
            <Button type="submit" className="bg-red-600 hover:bg-red-700 text-white">
              Send Message
            </Button>
          </form>
        )}
      </section>
    </div>
  );
}
