export default function Footer() {
  return (
    <footer className="border-t border-navy-700/50 bg-navy-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="relative w-7 h-7 flex items-center justify-center">
                <div className="absolute inset-0 bg-electric-500/20 rounded-lg" />
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 text-electric-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <span className="text-base font-semibold tracking-tight text-white">
                Auto<span className="text-gradient-blue">MATE</span>
              </span>
            </div>
            <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
              The Consultant Brain that replaces expensive agency discovery
              phases. AI-powered workflow analysis and automation blueprints at
              zero cost.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-slate-300 mb-4">
              Product
            </h4>
            <ul className="space-y-2.5">
              {["How It Works", "The Brain", "ROI Calculator", "Pricing"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-slate-500 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-300 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {["About", "Blog", "Careers", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-slate-500 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-navy-700/50 gap-4">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} AutoMATE. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy", "Terms", "Cookies"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs text-slate-600 hover:text-slate-400 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
