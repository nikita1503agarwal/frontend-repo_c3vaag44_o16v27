export function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {title && <h2 className="text-3xl font-bold text-green-900">{title}</h2>}
          {subtitle && <p className="mt-2 text-green-700">{subtitle}</p>}
        </div>
        <div className="mt-8">
          {children}
        </div>
      </div>
    </section>
  );
}

export function ProductCard({ id, name, summary, specs, applications, image }) {
  return (
    <div id={id} className="group rounded-xl ring-1 ring-green-100 bg-white hover:shadow-lg transition overflow-hidden">
      <div className="aspect-[4/3] bg-gradient-to-br from-green-200 to-yellow-100" aria-hidden />
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-green-900">{name}</h3>
            <p className="mt-1 text-sm text-green-700">{summary}</p>
          </div>
          <a href={`#/products/${id}`} className="shrink-0 inline-flex items-center rounded-md bg-green-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-green-700">Details</a>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-green-700">
          <div>
            <div className="font-semibold text-green-900">Specs</div>
            <ul className="list-disc pl-5 space-y-1">
              {specs.slice(0,3).map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
          <div>
            <div className="font-semibold text-green-900">Applications</div>
            <ul className="list-disc pl-5 space-y-1">
              {applications.slice(0,3).map((a) => <li key={a}>{a}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProductDetail({ product }) {
  if (!product) return null;
  return (
    <div className="max-w-5xl">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-green-200 to-yellow-100" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-green-900">{product.name}</h3>
          <p className="mt-2 text-green-700">{product.summary}</p>
          <div className="mt-6 grid grid-cols-2 gap-6 text-sm">
            <div>
              <div className="font-semibold text-green-900">Specifications</div>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-green-700">
                {product.specs.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
            <div>
              <div className="font-semibold text-green-900">Applications</div>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-green-700">
                {product.applications.map((a) => <li key={a}>{a}</li>)}
              </ul>
            </div>
          </div>
          <div className="mt-6">
            <a href={`#/contact?product=${encodeURIComponent(product.name)}`} className="inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700">Request Quotation</a>
          </div>
        </div>
      </div>
    </div>
  );
}
