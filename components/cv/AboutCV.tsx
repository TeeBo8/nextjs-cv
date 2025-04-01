import React from 'react';
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Terminal } from 'lucide-react';

const AboutCV = () => {
  return (
    <section aria-labelledby="about-heading">
      <h2 id="about-heading" className="text-2xl font-semibold text-primary dark:text-primary mb-4">
        À propos
      </h2>
      <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Développeur web enthousiaste en transition professionnelle, je me spécialise dans la création d'applications Full Stack modernes et performantes. Passionné par la résolution de problèmes complexes, je m'appuie sur des outils d'IA pour optimiser mon développement (notamment avec Next.js/TypeScript) et j'aime concevoir des interfaces utilisateur intuitives ainsi que des logiques backend robustes. Autodidacte et curieux, j'ai complété ma formation par 3 mois d'exploration intensive des IA génératives appliquées au code.
      </p>

      <Alert className="border-primary/50 dark:border-primary/70 bg-primary/5 dark:bg-primary/10">
        <Terminal className="h-4 w-4 text-primary dark:text-primary" />
        <AlertDescription className="text-gray-800 dark:text-gray-100 font-medium">
          Je recherche activement des missions stimulantes en freelance, prêt à mettre mes compétences et mon adaptabilité au service de vos projets, en utilisant mon propre environnement de développement optimisé.
        </AlertDescription>
      </Alert>
    </section>
  );
};

export default AboutCV;