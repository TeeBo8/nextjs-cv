import React from 'react';

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
      <h2 id="experience-heading" className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
        Expériences professionnelles
      </h2>
      <div className="space-y-8">
        {experienceData.map((exp, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-x-6">
            {/* Colonne Dates (prend moins de place) */}
            <div className="md:w-1/4 mb-2 md:mb-0 text-sm text-gray-500 dark:text-gray-400 font-medium shrink-0">
              {exp.dates}
            </div>

            {/* Colonne Détails (prend plus de place) */}
            <div className="md:w-3/4 grow">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {exp.title}
              </h3>
              <p className="text-md font-medium text-primary dark:text-primary-foreground mb-2">
                {exp.company} {exp.location && `• ${exp.location}`}
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceCV; 