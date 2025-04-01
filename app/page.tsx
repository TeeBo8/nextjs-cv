import React from 'react';
// --- Composants de Section ---
import SidebarCV from '@/components/cv/SidebarCV'; // Nouveau composant
import AboutCV from '@/components/cv/AboutCV';
import ProjectsCV from '@/components/cv/ProjectsCV';
import ExperienceCV from '@/components/cv/ExperienceCV';
import EducationCV from '@/components/cv/EducationCV';
import InterestsCV from '@/components/cv/InterestsCV';
// --- UI ---
import { Separator } from "@/components/ui/separator";

// Fini d'importer HeaderCV ici pour l'instant

export default function Home() {
  return (
    // Utilisation de CSS Grid pour le layout principal
    // Sur mobile (par défaut): 1 colonne
    // Sur écrans 'lg' et plus: 2 colonnes (sidebar fixe ~300px, contenu prend le reste)
    <main className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 md:gap-12 p-4 md:p-8 lg:p-12 max-w-7xl mx-auto">
       {/* Colonne 1: Sidebar */}
       <div className="lg:sticky lg:top-8 h-fit"> {/* Sticky sidebar sur grands écrans */}
          <SidebarCV />
       </div>

       {/* Colonne 2: Contenu Principal */}
       <div className="space-y-8 md:space-y-10"> {/* Espace entre les sections */}
          {/* On ne met plus de HeaderCV ici */}
          {/* <Separator className="my-6 md:my-8" /> Supprimer les séparateurs entre sections ? A voir*/}
          <AboutCV />
          {/* <Separator className="my-6 md:my-8" /> */}
          <ProjectsCV />
          {/* <Separator className="my-6 md:my-8" /> */}
          <ExperienceCV />
          {/* <Separator className="my-6 md:my-8" /> */}
          <EducationCV />
          {/* <Separator className="my-6 md:my-8" /> */}
          <InterestsCV />
          {/* Note: Les séparateurs sont peut-être moins nécessaires avec le space-y sur le conteneur */}
       </div>
    </main>
  );
}