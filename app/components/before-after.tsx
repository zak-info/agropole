export default function BeforeAfter() {
  return (
    <section id="bf" className="bg-slate-50">
      <div className="mx-auto max-w-5xl px-8 py-16 md:py-24">
        {/* <ProblemsTitle /> */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-2xl bg-white shadow-lg ring-2 ring-inset ring-slate-200">
            <div className="p-8 sm:p-12">
              <div className="inline-flex items-center gap-2">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 text-slate-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M232,184a8,8,0,0,1-16,0A88,88,0,0,0,67.47,120.16l26.19,26.18A8,8,0,0,1,88,160H24a8,8,0,0,1-8-8V88a8,8,0,0,1,13.66-5.66l26.48,26.48A104,104,0,0,1,232,184Z"></path>
                </svg>
                <p className="text-base font-semibold text-slate-700">Avant</p>
              </div>
              <h3 className="font-display mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Avant d&apos;utiliser le logiciel
              </h3>
              <ul className="mt-6 space-y-3 text-base text-slate-600 sm:text-lg">
                <li className="flex items-start gap-3">
                  <div className="shrink-0 py-1.5">
                    <svg
                      className="h-4 w-4 text-slate-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </div>
                  Gestion manuelle : Suivi des stocks lent et sujet aux erreurs.
                </li>
                <li className="flex items-start gap-3">
                  <div className="shrink-0 py-1.5">
                    <svg
                      className="h-4 w-4 text-slate-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </div>
                  Portée limitée : Ventes uniquement en magasin, sans présence en ligne.
                </li>
                <li className="flex items-start gap-3">
                  <div className="shrink-0 py-1.5">
                    <svg
                      className="h-4 w-4 text-slate-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </div>
                  Suivi inefficace : Transactions mal organisées, difficulté à suivre les performances.
                </li>
                <li className="flex items-start gap-3">
                  <div className="shrink-0 py-1.5">
                    <svg
                      className="h-4 w-4 text-slate-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </div>
                  Perte de temps : Tâches administratives longues et répétitives.
                </li>
              </ul>
            </div>
          </div>
          <div className="rounded-2xl bg-cyan-500 shadow-lg ring-1 ring-inset ring-cyan-400">
            <div className="p-8 sm:p-12">
              <div className="inline-flex items-center gap-2">
                <p className="text-base font-semibold text-blue-100">Apres</p>
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 text-blue-100"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M229.66,109.66l-48,48a8,8,0,0,1-11.32-11.32L212.69,104,170.34,61.66a8,8,0,0,1,11.32-11.32l48,48A8,8,0,0,1,229.66,109.66Zm-48-11.32-48-48A8,8,0,0,0,120,56V96.3A104.15,104.15,0,0,0,24,200a8,8,0,0,0,16,0,88.11,88.11,0,0,1,80-87.63V152a8,8,0,0,0,13.66,5.66l48-48A8,8,0,0,0,181.66,98.34Z"></path>
                </svg>
              </div>
              <h3 className="font-display mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Avec le logiciel
              </h3>
              <ul className="mt-6 space-y-3 text-base text-white sm:text-lg">
                <li className="flex items-start gap-3">
                  <div className="shrink-0 py-1.5">
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                    </svg>
                  </div>
                  Gestion automatisée : Suivi des stocks précis et en temps réel.
                </li>
                <li className="flex items-start gap-3">
                  <div className="shrink-0 py-1.5">
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                    </svg>
                  </div>
                  Boutique en ligne : Produits disponibles 24h/24, augmentation des ventes.
                </li>
                <li className="flex items-start gap-3">
                  <div className="shrink-0 py-1.5">
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                    </svg>
                  </div>
                  Rapports clairs : Analyse des performances rapide et fiable.
                </li>
                <li className="flex items-start gap-3">
                  <div className="shrink-0 py-1.5">
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                    </svg>
                  </div>
                  Efficacité accrue : Gain de temps sur toutes les tâches administratives.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
