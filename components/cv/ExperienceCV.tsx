import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Données des expériences professionnelles et formation en cours
const experienceData = [
  {
    title: "Formation Développeur Web Full Stack",
    company: "Ilaria Digital School",
    location: "Full Remote",
    dates: "Oct. 2023 – Juin 2025 (Prévu)",
    description: [
      "Développement d'applications web complètes (front-end React/Next.js, back-end Node.js).",
      "Manipulation et conception de bases de données (PostgreSQL avec Prisma).",
      "Maîtrise de l'écosystème JavaScript/TypeScript.",
      "Travail collaboratif avec Git/GitHub et application des méthodologies Agiles (Scrum).",
    ],
  },
  {
    title: "Agent Maraîcher",
    company: "Les Clefs du Jardin & Le Bocal Local",
    location: "", // Optionnel si non pertinent
    dates: "2023 - 2024",
    description: [
      "Développement de l'autonomie et de l'adaptabilité face aux conditions variables.",
      "Rigueur dans le suivi des cultures biologiques et la gestion des priorités.",
      "Organisation efficace du travail saisonnier et résolution de problèmes pratiques.",
    ],
  },
  {
    title: "Agent Logistique",
    company: "Altek Medical",
    location: "",
    dates: "2022",
    description: [
      "Application rigoureuse des procédures de réception, contrôle qualité et conditionnement.",
      "Gestion précise des stocks et garantie de la traçabilité dans un environnement exigeant (matériel chirurgical).",
      "Respect des normes d'hygiène et de sécurité strictes.",
    ],
  },
  {
    title: "Agent Logistique",
    company: "AIA (Atelier Industriel Aéronautique)",
    location: "",
    dates: "2020 - 2021",
    description: [
      "Gestion rigoureuse des flux de pièces mécaniques critiques (Rafale, Mirage 2000).",
      "Garantie de la traçabilité et respect scrupuleux des délais et des normes de sécurité aéronautique.",
      "Travail d'équipe et communication efficace au sein de l'atelier.",
    ],
  },
  {
    title: "Agent Logistique",
    company: "Sofema",
    location: "",
    dates: "2018 - 2019",
    description: [
      "Réception, contrôle qualité, stockage et expédition de pièces aéronautiques (Mirage F1).",
      "Utilisation de systèmes de gestion d'entrepôt (WMS) et suivi des procédures logistiques.",
      "Fiabilité et précision dans la gestion des inventaires.",
    ],
  },
];

const ExperienceCV = () => {
  return (
    <section aria-labelledby="experience-heading">
      <h2 id="experience-heading" className="text-2xl font-semibold text-primary dark:text-primary mb-6">
        Expériences professionnelles
      </h2>
      <Accordion type="single" collapsible className="w-full space-y-4">
        {experienceData.map((exp, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden transition-colors group data-[state=open]:border-primary/50 dark:data-[state=open]:border-primary/70">
            <AccordionTrigger className="text-left hover:no-underline py-4 px-4 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50 data-[state=open]:bg-slate-50 dark:data-[state=open]:bg-slate-800/50">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-2 pr-4">
                 <div className='flex-grow'>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                       {exp.title}
                    </h3>
                    <p className="text-sm font-medium text-primary/90 dark:text-primary/90">
                      {exp.company} {exp.location && `• ${exp.location}`}
                    </p>
                 </div>
                 <div className="text-xs text-gray-500 dark:text-gray-400 font-medium shrink-0 mt-1 md:mt-0">
                    {exp.dates}
                 </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-0 pb-4 px-4 bg-white dark:bg-slate-800/30">
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400 pl-1">
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default ExperienceCV; 