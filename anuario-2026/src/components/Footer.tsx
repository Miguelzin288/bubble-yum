export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* School info */}
          <div className="space-y-2">
            <h3 className="font-display text-lg font-bold">
              Escola Joaquim Andrade Meirelles
            </h3>
            <p className="font-body text-sm opacity-80">
              Turma de formandos 2026
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider opacity-70">
              Contato
            </h4>
            <div className="space-y-2 font-body text-sm opacity-80">
              <div className="flex items-center gap-2">
                <span aria-hidden="true">✉</span>
                <span>contato@ejam.edu.br</span>
              </div>
              <div className="flex items-center gap-2">
                <span aria-hidden="true">☎</span>
                <span>(XX) XXXX-XXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <span aria-hidden="true">⌖</span>
                <span>Endereço da escola</span>
              </div>
            </div>
          </div>

          {/* Developers */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider opacity-70">
              Desenvolvido por
            </h4>
            <ul className="font-body text-sm opacity-80 space-y-1">
              <li>Miguel Braga</li>
              <li>Miguel Sarti</li>
              <li>Luiggi Grecco</li>
              <li>Vitor Gabriel</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-primary-foreground/20 text-center">
          <p className="font-body text-xs opacity-50">
            © 2026 Anuário Digital — Escola Joaquim Andrade Meirelles
          </p>
        </div>
      </div>
    </footer>
  );
};
