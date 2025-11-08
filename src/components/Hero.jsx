export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-green-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-yellow-200/40 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-200">Certified Exporter • Indonesian Origin</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-green-900">Exporting Indonesia’s Best Agricultural Commodities</h1>
          <p className="mt-4 text-lg text-green-700">From plantations to global ports — we deliver consistent quality, compliant documentation, and reliable logistics for your supply chain.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#/products" className="inline-flex items-center rounded-md bg-green-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-700">Explore Products</a>
            <a href="#/export" className="inline-flex items-center rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-green-700 ring-1 ring-inset ring-green-200 hover:bg-green-50">Export Services</a>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <div className="rounded-lg bg-white/70 backdrop-blur p-4 ring-1 ring-green-100">
              <div className="text-2xl font-bold text-green-900">40+</div>
              <div className="text-xs text-green-700">Countries Served</div>
            </div>
            <div className="rounded-lg bg-white/70 backdrop-blur p-4 ring-1 ring-green-100">
              <div className="text-2xl font-bold text-green-900">ISO</div>
              <div className="text-xs text-green-700">Quality Systems</div>
            </div>
            <div className="rounded-lg bg-white/70 backdrop-blur p-4 ring-1 ring-green-100">
              <div className="text-2xl font-bold text-green-900">Halal</div>
              <div className="text-xs text-green-700">and HACCP Ready</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-green-600 to-yellow-500 p-1 shadow-xl">
            <div className="h-full w-full rounded-2xl bg-white p-6 grid grid-cols-2 gap-3">
              {["Coconut","Nutmeg","Coffee","Cocoa","Cloves","Cassia"].map((item) => (
                <div key={item} className="rounded-lg bg-green-50/60 ring-1 ring-green-100 p-4">
                  <div className="h-20 rounded-md bg-gradient-to-br from-green-200 to-yellow-100" />
                  <div className="mt-2 text-sm font-medium text-green-900">{item}</div>
                  <div className="text-xs text-green-700">Export grade</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
