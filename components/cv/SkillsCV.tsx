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
    <section aria-labelledby="skills-heading">
      <h2 id="skills-heading" className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
        Compétences techniques
      </h2>
      <div className="space-y-6">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge key={skill} variant="secondary">
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