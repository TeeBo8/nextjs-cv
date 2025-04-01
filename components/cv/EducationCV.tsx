import React from 'react';

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
      <div className="space-y-6"> {/* Espace vertical entre chaque diplôme */}
        {educationData.map((edu, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-x-6">
            {/* Colonne Dates */}
            <div className="md:w-1/4 mb-1 md:mb-0 text-sm text-gray-500 dark:text-gray-400 font-medium shrink-0">
              {edu.dates}
            </div>

            {/* Colonne Détails */}
            <div className="md:w-3/4 grow">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {edu.degree}
              </h3>
              <p className="text-md font-medium text-gray-600 dark:text-gray-300 mb-1">
                {edu.institution} {edu.location && `• ${edu.location}`}
              </p>
              {/* Afficher la description seulement si elle existe */}
              {edu.description && (
                 <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                   {edu.description}
                 </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationCV;