"use client";
import React, { useState } from "react";
// import TestimonialSingle from "./testimonial-single";

const faqData = [
  {
    question: "Qu&apos;est-ce que ce logiciel peut faire pour mon magasin ?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        <p>
        Notre logiciel vous aide à gérer facilement vos stocks, vos ventes et vos clients tout en proposant une boutique en ligne pour élargir votre portée et augmenter vos revenus.
        </p>
      </div>
    ),
  },
  {
    question: "Puis-je suivre mes stocks en temps réel ?",
    answer:
      "Oui, notre logiciel offre un suivi en temps réel de vos stocks avec des alertes pour éviter les ruptures ou les surstocks.",
  },
  {
    question: "Une boutique en ligne est-elle incluse ?",
    answer:
      "Absolument ! Vous pouvez créer une boutique en ligne directement depuis le logiciel, où vos clients peuvent commander vos produits 24h/24 et 7j/7.",
  },
  {
    question: "Mon équipe aura-t-elle besoin de formation ?",
    answer:
      "Non, le logiciel est simple d’utilisation. Cependant, nous proposons une assistance et des guides pour aider vos employés à démarrer rapidement.",
  },
  {
    question: "Puis-je accéder au logiciel depuis mon téléphone ou ma tablette ?",
    answer:
      "Oui, le logiciel est compatible avec les appareils mobiles pour que vous puissiez gérer votre magasin de n’importe où.",
  },
  {
    question: "Les données de mon magasin sont-elles sécurisées ?",
    answer:
      "Toutes vos données sont protégées grâce à des systèmes de sécurité avancés pour garantir leur confidentialité.",
  },
  {
    question: "Combien coûte le logiciel ?",
    answer:
      "Nous proposons différents plans tarifaires adaptés à vos besoins. Contactez-nous pour une offre personnalisée.",
  },
  {
    question: "Puis-je essayer le logiciel avant de l’acheter ?",
    answer:
      "Oui, nous offrons une période d’essai gratuite pour que vous puissiez tester toutes les fonctionnalités.",
  },
];

const FAQItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <li>
      <button
        className="relative flex w-full items-center gap-2 border-t border-slate-200 py-5 text-left text-base font-semibold md:text-lg"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="flex-1 text-slate-800">{question}</span>
        <svg
          className={`ml-auto h-4 w-4 flex-shrink-0 fill-current transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 12L2 6h12l-6 6z" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pb-5 leading-relaxed text-slate-600">
          {typeof answer === "string" ? <p>{answer}</p> : answer}
        </div>
      </div>
    </li>
  );
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-slate-50" id="faq">
      <div className="mx-auto max-w-7xl px-8 py-24">
        <div className="flex flex-col gap-12 md:flex-row">
          <div className="flex basis-1/2 flex-col text-left">
            <p className="mb-4 inline-block font-bold text-blue-500">FAQ</p>
            <p className="text-3xl font-extrabold text-slate-800 md:text-4xl">
             Foire Aux Questions (FAQ)
            </p>
          </div>
          <ul className="basis-1/2">
            {faqData.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </ul>
        </div>
        {/* <TestimonialSingle
          testimonial={{
            name: "SARL Agrople",
            content:
              "SARL Agropole em est une startup algérienne innovante qui réinvente la distribution alimentaire en mélangeant la distribution classique et une plateforme numérique connectée à l'ensemble de la chaîne d'approvisionnement. L'objectif est de faciliter l'accès aux produits alimentaires de qualité, en créant un écosystème où fournisseurs, distributeurs, grossistes, magasins de quartier et citoyens collaborent efficacement.",
            schoolName: "Software and Systems",
            image: "/images/A.png",
          }}
        /> */}
      </div>
    </section>
  );
}
