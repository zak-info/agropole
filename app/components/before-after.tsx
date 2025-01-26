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
                  className="h-6 w-6 text-blue-100"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M229.66,109.66l-48,48a8,8,0,0,1-11.32-11.32L212.69,104,170.34,61.66a8,8,0,0,1,11.32-11.32l48,48A8,8,0,0,1,229.66,109.66Zm-48-11.32-48-48A8,8,0,0,0,120,56V96.3A104.15,104.15,0,0,0,24,200a8,8,0,0,0,16,0,88.11,88.11,0,0,1,80-87.63V152a8,8,0,0,0,13.66,5.66l48-48A8,8,0,0,0,181.66,98.34Z"></path>
                </svg>
                <p className="text-base font-semibold text-slate-700">Profile</p>
              </div>
              <h3 className="font-display mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Profil Fournisseur (usine, importateur, agriculteur)
              </h3>
              <ul className="mt-6 space-y-3 text-base text-slate-600 sm:text-lg">
                <li className="flex items-start gap-3">
                  <div className="shrink-0 py-1.5">
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-slate-600 "
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                    </svg>
                  </div>
                  Permet aux fournisseurs de vendre directement leurs produits à des distributeurs, grossistes ou magasins.
                </li>
                <li className="flex items-start gap-3">
                  <div className="shrink-0 py-1.5">
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-slate-600 "
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                    </svg>
                  </div>
                  Ils peuvent gérer leurs catalogues, recevoir des commandes en gros et optimiser leur chaîne d'approvisionnement.                </li>

              </ul>
            </div>
          </div>
          <div className="rounded-2xl bg-cyan-500 shadow-lg ring-1 ring-inset ring-cyan-400">
            <div className="p-8 sm:p-12">
              <div className="inline-flex items-center gap-2">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 text-blue-100"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M229.66,109.66l-48,48a8,8,0,0,1-11.32-11.32L212.69,104,170.34,61.66a8,8,0,0,1,11.32-11.32l48,48A8,8,0,0,1,229.66,109.66Zm-48-11.32-48-48A8,8,0,0,0,120,56V96.3A104.15,104.15,0,0,0,24,200a8,8,0,0,0,16,0,88.11,88.11,0,0,1,80-87.63V152a8,8,0,0,0,13.66,5.66l48-48A8,8,0,0,0,181.66,98.34Z"></path>
                </svg>
                <p className="text-base font-semibold text-blue-100">Profile</p>

              </div>
              <h3 className="font-display mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Profil Distributeur (grossiste)
              </h3>
              <ul className="mt-6 space-y-3 text-base text-white sm:text-lg">
                <li className="flex items-start gap-3">
                  <div className="shrink-0 py-1.5">
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-white "
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                    </svg>
                  </div>
                  Conçu pour les grossistes et distributeurs, ce profil leur permet d'acheter auprès des fournisseurs et de vendre aux magasins de quartier.
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
                  Ils peuvent suivre leurs ventes, gérer leurs stocks et développer leur réseau de partenaires.                  </li>
              </ul>
            </div>
          </div>
          <div className="rounded-2xl bg-cyan-500 shadow-lg ring-1 ring-inset ring-cyan-400">
            <div className="p-8 sm:p-12">
              <div className="inline-flex items-center gap-2">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 text-blue-100"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M229.66,109.66l-48,48a8,8,0,0,1-11.32-11.32L212.69,104,170.34,61.66a8,8,0,0,1,11.32-11.32l48,48A8,8,0,0,1,229.66,109.66Zm-48-11.32-48-48A8,8,0,0,0,120,56V96.3A104.15,104.15,0,0,0,24,200a8,8,0,0,0,16,0,88.11,88.11,0,0,1,80-87.63V152a8,8,0,0,0,13.66,5.66l48-48A8,8,0,0,0,181.66,98.34Z"></path>
                </svg>
                <p className="text-base font-semibold text-blue-100">Profile</p>

              </div>
              <h3 className="font-display mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Profil Citoyen
              </h3>
              <ul className="mt-6 space-y-3 text-base text-white sm:text-lg">
                <li className="flex items-start gap-3">
                  <div className="shrink-0 py-1.5">
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-white "
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                    </svg>
                  </div>
                  Simplifie l'accès aux produits de qualité pour les citoyens.
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
                  Ce profil leur permet de passer commande directement auprès des magasins de quartier, de suivre leurs livraisons et de consommer local tout en gagnant du temps.
                </li>
              </ul>
            </div>
          </div>
          <div className="rounded-2xl bg-white shadow-lg ring-2 ring-inset ring-slate-200">
            <div className="p-8 sm:p-12">
              <div className="inline-flex items-center gap-2">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 text-blue-100"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M229.66,109.66l-48,48a8,8,0,0,1-11.32-11.32L212.69,104,170.34,61.66a8,8,0,0,1,11.32-11.32l48,48A8,8,0,0,1,229.66,109.66Zm-48-11.32-48-48A8,8,0,0,0,120,56V96.3A104.15,104.15,0,0,0,24,200a8,8,0,0,0,16,0,88.11,88.11,0,0,1,80-87.63V152a8,8,0,0,0,13.66,5.66l48-48A8,8,0,0,0,181.66,98.34Z"></path>
                </svg>
                <p className="text-base font-semibold text-slate-700">Profile</p>
              </div>
              <h3 className="font-display mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Profil Magasin (magasins de quartier)*
              </h3>
              <ul className="mt-6 space-y-3 text-base text-slate-600 sm:text-lg">
                <li className="flex items-start gap-3">
                  <div className="shrink-0 py-1.5">
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-slate-600 "
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                    </svg>
                  </div>
                  Les magasins de proximité peuvent commander facilement auprès des distributeurs ou grossistes, tout en étant connectés aux citoyens de leur quartier.
                </li>
                <li className="flex items-start gap-3">
                  <div className="shrink-0 py-1.5">
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-slate-600 "
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                    </svg>
                  </div>
                  Ce profil les aide à gérer leurs stocks, proposer leurs produits en ligne et attirer plus de clients.
                </li>

              </ul>
            </div>
          </div>
          <div className="rounded-2xl bg-white shadow-lg ring-2 ring-inset ring-slate-200">
            <div className="p-8 sm:p-12">
              <div className="inline-flex items-center gap-2">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 text-blue-100"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M229.66,109.66l-48,48a8,8,0,0,1-11.32-11.32L212.69,104,170.34,61.66a8,8,0,0,1,11.32-11.32l48,48A8,8,0,0,1,229.66,109.66Zm-48-11.32-48-48A8,8,0,0,0,120,56V96.3A104.15,104.15,0,0,0,24,200a8,8,0,0,0,16,0,88.11,88.11,0,0,1,80-87.63V152a8,8,0,0,0,13.66,5.66l48-48A8,8,0,0,0,181.66,98.34Z"></path>
                </svg>
                <p className="text-base font-semibold text-slate-700">Profile</p>
              </div>
              <h3 className="font-display mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Profil Livreur
              </h3>
              <ul className="mt-6 space-y-3 text-base text-slate-600 sm:text-lg">
                <li className="flex items-start gap-3">
                  <div className="shrink-0 py-1.5">
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-slate-600 "
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                    </svg>
                  </div>
                  Destiné aux livreurs, ce profil facilite la gestion des livraisons pour les commandes passées sur la plateforme
                </li>
                <li className="flex items-start gap-3">
                  <div className="shrink-0 py-1.5">
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-slate-600 "
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                    </svg>
                  </div>
                  Ils peuvent recevoir les trajets optimisés, communiquer avec les clients et assurer un service rapide et efficace.
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
