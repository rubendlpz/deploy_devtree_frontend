export default function HomeFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 py-12 border-t border-slate-800">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-1">
            <h3 className="text-white font-black text-2xl tracking-tight mb-3">
              DevTree
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              La red social definitiva para desarrolladores.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Producto
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                  Características
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                  Precios
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                  Ejemplos
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                  Actualizaciones
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Comunidad
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                  Desarrolladores
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                  Documentación
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                  Soporte
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-2 mb-6">
              <li>
                <a href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                  Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                  Términos
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                  Contacto
                </a>
              </li>
            </ul>

            <div className="flex gap-3">
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            © {currentYear} <span className="text-white font-semibold">DevTree</span>.
          </p>
          <p className="text-slate-400 text-sm">
            Desarrollado por{" "}
            <a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
              Ruben Lopez
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}