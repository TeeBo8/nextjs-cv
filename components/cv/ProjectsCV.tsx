import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

// Données des projets
const projectsData = [
  {
    title: "Aura Landing - Spa & Wellness Template",
    description: [
      "Modern Next.js landing page template for spas and wellness centers.",
      "Features a clean design, smooth animations, and a functional contact form.",
      "Built with Next.js, TypeScript, Tailwind CSS, shadcn/ui, tRPC, and Resend."
    ],
    link: "https://lecturet.gumroad.com/l/aura-landing-template",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "tRPC"]
  },
  {
    title: "ElegantSpaces - Interior Design Template",
    description: [
      "Sophisticated Next.js template for interior design agencies.",
      "Showcases projects and services with a premium, modern aesthetic.",
      "Developed using Next.js, TypeScript, Tailwind CSS, and shadcn/ui."
    ],
    link: "https://elegant-spaces-template.vercel.app/",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"]
  },
  {
    title: "Eclat - Jewelry Store Template",
    description: [
      "Premium Next.js template for online jewelry stores or showcases.",
      "Focuses on high-quality visuals and an elegant user experience.",
      "Stack includes Next.js, TypeScript, Tailwind CSS, shadcn/ui, and Framer Motion."
    ],
    link: "https://jewelry-template.vercel.app/",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
  }
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

      {/* Projet FinanceAI */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-primary dark:text-primary mb-4">
          Projet en vedette
        </h3>
        <Card className="border-2 border-primary/30 dark:border-primary/50 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
          <CardHeader>
            <CardTitle className="text-xl">FinanceAI - Application de Gestion de Finances Personnelles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-sm text-gray-700 dark:text-gray-300 mb-2">Description :</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Application web full-stack permettant le suivi des comptes, transactions, budgets et catégories, 
                  avec authentification sécurisée (Google, Discord), filtres de données, transferts et rapports visuels. 
                  Objectif à terme : intégration IA et modèle freemium.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-sm text-gray-700 dark:text-gray-300 mb-2">Stack Technique :</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Next.js (App Router), TypeScript, tRPC, Drizzle ORM, PostgreSQL (Supabase), 
                  Auth.js (NextAuth.js v5), Tailwind CSS, shadcn/ui, Recharts, Vercel.
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col md:flex-row gap-3">
            <Button asChild variant="default" size="sm" className="w-full md:w-auto">
              <Link href="https://financeai-eta.vercel.app/" target="_blank" rel="noopener noreferrer">
                Voir la démo
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm" className="w-full md:w-auto">
              <Link href="https://github.com/TeeBo8/financeai" target="_blank" rel="noopener noreferrer">
                Code Source (privé, disponible sur demande)
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default ProjectsCV; 