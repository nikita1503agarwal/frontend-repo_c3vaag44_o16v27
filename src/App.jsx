import { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import { Section, ProductCard, ProductDetail } from './components/Sections';

// Simple hash-based router for multi-page feel without extra deps
function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash || '#/');
  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash || '#/');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);
  return hash.replace('#', '');
}

const PRODUCTS = [
  {
    id: 'coconut',
    name: 'Coconut Derivatives',
    summary: 'Desiccated coconut, charcoal briquettes, crude & RBD coconut oil',
    specs: ['Moisture < 3%', 'Mesh 10–12 / 20–22', 'FFA < 0.1%','Ash < 2.5%','Food-grade packaging'],
    applications: ['Confectionery', 'Bakery', 'BBQ fuel', 'Cosmetics', 'Food processing'],
  },
  {
    id: 'spices',
    name: 'Indonesian Spices',
    summary: 'Cloves, nutmeg, mace, black pepper, cinnamon (cassia)',
    specs: ['ASTA color 60+', 'Admixture < 1%', 'Moisture < 12%','Handpicked quality'],
    applications: ['Food seasoning', 'Pharmaceuticals', 'Essential oils', 'Beverage'],
  },
  {
    id: 'coffee',
    name: 'Coffee & Cacao',
    summary: 'Sumatra Arabica, Robusta, fermented cacao beans',
    specs: ['Screen 16+', 'Moisture 12%', 'Defects SCAA standard'],
    applications: ['Roasting', 'Instant coffee', 'Chocolate production'],
  },
];

function SEO({ title, description }) {
  useEffect(() => {
    document.title = title ? `${title} | Misefa Agro Raya` : 'Misefa Agro Raya – Indonesian Agricultural Export';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', description || 'Exporting Indonesia’s best coconut derivatives, spices, coffee and more with full compliance and reliable logistics.');
  }, [title, description]);
  return null;
}

function HomePage() {
  return (
    <>
      <SEO title="Home" description="Indonesia’s export-grade agricultural commodities and end-to-end export services." />
      <Hero />
      <Section id="highlights" title="Why Work With Misefa Agro Raya" subtitle="Export-focused quality control, documentation accuracy, and on-time shipments.">
        <div className="grid md:grid-cols-3 gap-6">
          {[{
            t: 'Quality You Can Trust', d: 'Strict grading, lab tests, and consistent specifications for every shipment.'
          },{
            t: 'Compliance & Documentation', d: 'From COO, Phytosanitary, MSDS to Halal and HS codes — handled end-to-end.'
          },{
            t: 'Reliable Logistics', d: 'Sea and air freight options with transparent timelines and tracking.'
          }].map((i) => (
            <div key={i.t} className="rounded-xl bg-white ring-1 ring-green-100 p-6">
              <div className="text-lg font-semibold text-green-900">{i.t}</div>
              <p className="mt-2 text-green-700 text-sm">{i.d}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section id="products" title="Featured Products" subtitle="Sourced responsibly across Indonesia with export-grade consistency.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} id={p.id} name={p.name} summary={p.summary} specs={p.specs} applications={p.applications} />
          ))}
        </div>
      </Section>
      <Section id="cta">
        <div className="rounded-2xl bg-gradient-to-br from-green-600 to-yellow-500 p-1">
          <div className="p-8 bg-white rounded-2xl grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl font-bold text-green-900">Ready to source from Indonesia?</h3>
              <p className="mt-2 text-green-700">Share your target specs and destination port — we’ll prepare a tailored quotation.</p>
            </div>
            <div className="flex md:justify-end">
              <a href="#/contact" className="inline-flex items-center rounded-md bg-green-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-700">Request Quotation</a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <SEO title="About" description="Learn about Misefa Agro Raya’s mission, sourcing network, certifications, and export expertise." />
      <Section id="about" title="About Misefa Agro Raya" subtitle="Connecting Indonesia’s farms to global markets with integrity and precision.">
        <div className="prose prose-green max-w-none">
          <p className="text-green-700">We are an Indonesian exporter specializing in agricultural commodities. Our team manages supplier vetting, quality audits, and export documentation to ensure seamless deliveries worldwide.</p>
          <ul className="grid md:grid-cols-3 gap-4 not-prose mt-6">
            {['Supplier audits','Lot traceability','Pre-shipment inspection'].map((x) => (
              <li key={x} className="rounded-lg ring-1 ring-green-100 bg-white p-4 text-green-900 font-medium">{x}</li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}

function ProductsPage({ productId }) {
  const product = useMemo(() => PRODUCTS.find(p => p.id === productId), [productId]);
  return (
    <>
      <SEO title="Products" description="Explore coconut derivatives, spices, coffee and more with detailed specs and applications." />
      <Section id="products-overview" title="Products" subtitle="Technical specifications, applications, and export packaging options.">
        {!product && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((p) => (
              <ProductCard key={p.id} id={p.id} name={p.name} summary={p.summary} specs={p.specs} applications={p.applications} />
            ))}
          </div>
        )}
        {product && (
          <ProductDetail product={product} />
        )}
      </Section>
    </>
  );
}

function ExportPage() {
  return (
    <>
      <SEO title="Export Services" description="End-to-end export handling: QC, documentation, compliance, and logistics." />
      <Section id="export" title="Export Services" subtitle="We manage documentation and logistics so you receive goods on time and on spec.">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {t:'Documentation',d:'COO, Phytosanitary, HS code classification, Halal, MSDS, Packing list, Invoice.'},
            {t:'Quality Control',d:'Sampling, lab testing, grading, moisture and FFA checks.'},
            {t:'Logistics',d:'FCL/LCL booking, insurance, fumigation, port handling, tracking.'},
          ].map((i) => (
            <div key={i.t} className="rounded-xl bg-white ring-1 ring-green-100 p-6">
              <div className="text-lg font-semibold text-green-900">{i.t}</div>
              <p className="mt-2 text-green-700 text-sm">{i.d}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

function SustainabilityPage() {
  return (
    <>
      <SEO title="Sustainability" description="Responsible sourcing, farmer partnerships, and traceability across the supply chain." />
      <Section id="sustainability" title="Sustainability" subtitle="We partner with farmers and processors for ethical, traceable sourcing.">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl bg-white ring-1 ring-green-100 p-6">
            <div className="text-lg font-semibold text-green-900">Farmer Partnerships</div>
            <p className="mt-2 text-green-700 text-sm">Capacity building and fair pricing improve quality and livelihoods.</p>
          </div>
          <div className="rounded-xl bg-white ring-1 ring-green-100 p-6">
            <div className="text-lg font-semibold text-green-900">Traceability</div>
            <p className="mt-2 text-green-700 text-sm">Lot-based documentation and audits for export compliance.</p>
          </div>
        </div>
      </Section>
    </>
  );
}

function BlogPage() {
  return (
    <>
      <SEO title="Blog" description="Insights on Indonesian commodities, market trends, and export readiness." />
      <Section id="blog" title="Blog" subtitle="News and updates from our export operations.">
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <article key={i} className="rounded-xl bg-white ring-1 ring-green-100 p-6">
              <h3 className="font-semibold text-green-900">Market update {i}</h3>
              <p className="mt-2 text-sm text-green-700">Export insights on pricing and seasonal availability.</p>
              <a href="#/contact" className="mt-3 inline-block text-sm font-medium text-green-700 hover:text-green-900">Contact for full report →</a>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}

function ContactPage() {
  const params = new URLSearchParams(window.location.hash.split('?')[1] || '');
  const product = params.get('product') || '';
  return (
    <>
      <SEO title="Contact" description="Request a quotation with your target specs, quantity, and destination port." />
      <Section id="contact" title="Request Quotation" subtitle="Tell us your requirements. We’ll respond within 1 business day.">
        <form className="grid md:grid-cols-2 gap-6 max-w-3xl">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-green-900">Product</label>
            <input defaultValue={product} type="text" placeholder="e.g., Desiccated Coconut Fine Grade" className="mt-1 w-full rounded-md border-green-200 focus:border-green-400 focus:ring-green-400" />
          </div>
          <div>
            <label className="block text-sm font-medium text-green-900">Company</label>
            <input type="text" className="mt-1 w-full rounded-md border-green-200 focus:border-green-400 focus:ring-green-400" />
          </div>
          <div>
            <label className="block text-sm font-medium text-green-900">Email</label>
            <input type="email" className="mt-1 w-full rounded-md border-green-200 focus:border-green-400 focus:ring-green-400" />
          </div>
          <div>
            <label className="block text-sm font-medium text-green-900">Quantity</label>
            <input type="text" placeholder="e.g., 1x20’ FCL" className="mt-1 w-full rounded-md border-green-200 focus:border-green-400 focus:ring-green-400" />
          </div>
          <div>
            <label className="block text-sm font-medium text-green-900">Destination Port</label>
            <input type="text" placeholder="e.g., Jebel Ali, UAE" className="mt-1 w-full rounded-md border-green-200 focus:border-green-400 focus:ring-green-400" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-green-900">Notes</label>
            <textarea rows="4" className="mt-1 w-full rounded-md border-green-200 focus:border-green-400 focus:ring-green-400" placeholder="Target specs, packaging, incoterms"></textarea>
          </div>
          <div className="md:col-span-2">
            <button type="button" className="inline-flex items-center rounded-md bg-green-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-700">Send Request</button>
          </div>
        </form>
      </Section>
    </>
  );
}

export default function App() {
  const route = useHashRoute();
  // routes: /, /about, /products, /products/:id, /export, /sustainability, /blog, /contact
  const [path, param] = route.split('/').filter(Boolean);
  const page = path || '';

  return (
    <div className="min-h-screen flex flex-col bg-white text-green-900">
      <Navbar />
      <main className="flex-1">
        {page === '' && <HomePage />}
        {page === 'about' && <AboutPage />}
        {page === 'products' && <ProductsPage productId={param} />}
        {page === 'export' && <ExportPage />}
        {page === 'sustainability' && <SustainabilityPage />}
        {page === 'blog' && <BlogPage />}
        {page === 'contact' && <ContactPage />}
      </main>
      <Footer />
    </div>
  );
}
