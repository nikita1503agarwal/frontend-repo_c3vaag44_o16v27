import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#/', label: 'Home' },
    { href: '#/about', label: 'About' },
    { href: '#/products', label: 'Products' },
    { href: '#/export', label: 'Export Services' },
    { href: '#/sustainability', label: 'Sustainability' },
    { href: '#/blog', label: 'Blog' },
    { href: '#/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-green-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Primary">
        <div className="flex items-center justify-between h-16">
          <a href="#/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-md bg-gradient-to-br from-green-600 to-yellow-500 flex items-center justify-center text-white font-bold">M</div>
            <div className="leading-tight">
              <span className="block font-semibold text-green-800">Misefa Agro Raya</span>
              <span className="block text-xs text-green-600">Indonesian Agricultural Export</span>
            </div>
          </a>
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-green-800 hover:text-green-900 hover:bg-green-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#/contact"
              className="ml-2 inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Get a Quote
            </a>
          </div>
          <button
            className="md:hidden p-2 rounded-md text-green-800 hover:bg-green-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-md text-sm font-medium text-green-800 hover:text-green-900 hover:bg-green-50"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#/contact"
                onClick={() => setOpen(false)}
                className="mt-1 inline-flex items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700"
              >
                Get a Quote
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
