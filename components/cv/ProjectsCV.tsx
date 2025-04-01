import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

// Données des projets
const projectsData = [
  {
    title: "Tiblog",
    description: [
      "Blog personnel développé avec Next.js 14 (App Router), TypeScript, et Tailwind CSS.",
      "Gestion de contenu via MDX, base de données PostgreSQL gérée avec l'ORM Prisma.",
      "Focus sur les performances, le SEO et une expérience de lecture agréable.",
    ],
    link: "https://github.com/TeeBo8/Tiblog",
  },
  {
    title: "Portfolio Thibault Leture",
    description: [
      "Site portfolio interactif et responsive pour présenter mon parcours et mes projets.",
      "Construit avec Next.js, TypeScript et Tailwind CSS, déployé sur Vercel.",
      "Met en œuvre des animations et un design soigné pour une navigation fluide.",
    ],
    link: "https://github.com/TeeBo8/portfoliothibaultleture",
  },
  {
    title: "FlickrImages",
    description: [
      "Application web simple permettant de rechercher et d'afficher des images via l'API publique de Flickr.",
      "Développée en JavaScript vanilla, HTML et CSS.",
      "Démontre la manipulation d'API externes et l'affichage dynamique de contenu.",
    ],
    link: "https://github.com/TeeBo8/FlickrImages",
  },
];

const ProjectsCV = () => {
  return (
    <section aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="text-2xl font-semibold text-primary dark:text-primary mb-6">
        Projets principaux
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400 ml-2">
          (Plus sur <Link href="https://github.com/TeeBo8" target="_blank" rel="noopener noreferrer" className="underline text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">GitHub</Link>)
        </span>
      </h2>

      {/* Grille pour les cartes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <Card key={project.title} className="flex flex-col justify-between border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-lg hover:border-primary/50 dark:hover:border-primary/70 transition-all duration-300 ease-in-out transform hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="text-xl">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                {project.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link href={project.link} target="_blank" rel="noopener noreferrer">
                  Voir sur GitHub
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      {/* Note sur les projets privés */}
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-6 italic">
        Note : Je développe également des projets plus complexes pour des clients potentiels, dont les dépôts sont privés.
      </p>
    </section>
  );
};

export default ProjectsCV; 