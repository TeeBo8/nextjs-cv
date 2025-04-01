import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Données de formation académique
const educationData = [
  {
    degree: "Titre RNCP Niv. 6 Concepteur Développeur d'Applications",
    institution: "Ilaria Digital School",
    location: "Full Remote",
    dates: "2023 - 2025 (en cours)",
    description: "Formation intensive axée sur le développement Full Stack moderne (React, Next.js, Node.js, TypeScript, PostgreSQL, méthodologies Agiles).", // Ajout d'une petite description si pertinent
  },
  {
    degree: "Initiation au développement web (HTML, CSS, JavaScript)",
    institution: "Konexio",
    location: "",
    dates: "2024",
    description: "Certification obtenue validant les bases du développement front-end.",
  },
  {
    degree: "BAC PRO Logistique et Commercialisation",
    institution: "AFT IFTIM",
    location: "Artigues-près-Bordeaux",
    dates: "2011",
    description: "", // Pas forcément besoin de description ici
  },
  {
    degree: "BEP PRO Logistique et Commercialisation",
    institution: "AFT IFTIM",
    location: "Artigues-près-Bordeaux",
    dates: "2009",
    description: "",
  },
];

const EducationCV = () => {
  return (
    <section aria-labelledby="education-heading">
      <h2 id="education-heading" className="text-2xl font-semibold text-primary dark:text-primary mb-6">
        Formation
      </h2>
      <Accordion type="single" collapsible className="w-full space-y-4">
        {educationData.map((edu, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border border-slate-200 dark:border-slate-700 rounded-lg px-4 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50">
            <AccordionTrigger className="text-left hover:no-underline py-4">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-2 pr-4">
                 <div className='flex-grow'>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      {edu.institution} {edu.location && `• ${edu.location}`}
                    </p>
                 </div>
                 <div className="text-xs text-gray-500 dark:text-gray-400 font-medium shrink-0 mt-1 md:mt-0">
                    {edu.dates}
                 </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-0 pb-4">
              {/* Afficher la description seulement si elle existe */}
              {edu.description && (
                 <p className="text-sm text-gray-500 dark:text-gray-400 italic pl-1">
                   {edu.description}
                 </p>
              )}
               {/* Si pas de description, on peut mettre un petit fallback ou rien */}
               {!edu.description && (
                  <p className="text-sm text-gray-400 dark:text-gray-500 italic pl-1">(Aucun détail supplémentaire)</p>
               )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default EducationCV;