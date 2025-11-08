export default function Footer() {
  return (
    <footer className="mt-16 border-t border-green-100 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-md bg-gradient-to-br from-green-600 to-yellow-500 flex items-center justify-center text-white font-bold">M</div>
            <div className="leading-tight">
              <span className="block font-semibold text-green-800">Misefa Agro Raya</span>
              <span className="block text-xs text-green-600">Indonesian Agricultural Export</span>
            </div>
          </div>
          <p className="text-green-700">We connect Indonesia's finest agricultural products with the world, with transparent sourcing and export-grade quality.</p>
        </div>
        <div>
          <h3 className="text-green-900 font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-green-700">
            <li><a href="#/about" className="hover:text-green-900">About</a></li>
            <li><a href="#/sustainability" className="hover:text-green-900">Sustainability</a></li>
            <li><a href="#/export" className="hover:text-green-900">Export Services</a></li>
            <li><a href="#/blog" className="hover:text-green-900">Blog</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-green-900 font-semibold mb-3">Products</h3>
          <ul className="space-y-2 text-green-700">
            <li><a href="#/products#coconut" className="hover:text-green-900">Coconut Derivatives</a></li>
            <li><a href="#/products#spices" className="hover:text-green-900">Spices & Herbs</a></li>
            <li><a href="#/products#coffee" className="hover:text-green-900">Coffee & Cacao</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-green-900 font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-green-700">
            <li>Jakarta, Indonesia</li>
            <li>+62 21 1234 5678</li>
            <li>sales@misefaagro.com</li>
          </ul>
          <a href="#/contact" className="mt-3 inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700">Request Quotation</a>
        </div>
      </div>
      <div className="border-t border-green-100 py-4 text-center text-xs text-green-600">© {new Date().getFullYear()} Misefa Agro Raya. All rights reserved.</div>
    </footer>
  );
}
