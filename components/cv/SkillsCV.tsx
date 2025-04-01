import React from 'react';
import { Badge } from "@/components/ui/badge";

// Définir les compétences dans des listes pour une meilleure organisation
const skillsData = {
  languages: ["JavaScript", "TypeScript", "HTML5", "CSS3", "SQL (PostgreSQL)"],
  frameworks: ["Next.js", "React", "Node.js", "Tailwind CSS"],
  backendDb: ["Node.js", "Express (notions)", "PostgreSQL", "Prisma"],
  toolsMethods: ["Git", "GitHub", "VS Code", "Vercel", "Outils IA (Cursor, etc.)", "Agile (Scrum)"],
  systems: ["Linux (Debian)", "Windows"]
};

// Catégories avec leurs titres
const skillCategories = [
  { title: "Langages", skills: skillsData.languages },
  { title: "Frameworks & Librairies", skills: skillsData.frameworks },
  { title: "Backend & Bases de données", skills: skillsData.backendDb },
  { title: "Outils & Méthodes", skills: skillsData.toolsMethods },
  { title: "Systèmes", skills: skillsData.systems }
];

const SkillsCV = () => {
  return (
    <section aria-labelledby="skills-heading" className="w-full">
      <h2 id="skills-heading" className="text-xl font-semibold text-primary dark:text-primary mb-4">
        Compétences techniques
      </h2>
      <div className="space-y-4">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h3 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-2">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {category.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-xs px-2 py-0.5">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsCV; 