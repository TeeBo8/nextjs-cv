import React from 'react';

const AboutCV = () => {
  return (
    <section aria-labelledby="about-heading"> {/* Pour l'accessibilité */}
      <h2 id="about-heading" className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        À propos
      </h2>
      <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed"> {/* leading-relaxed pour meilleure lisibilité */}
        Développeur web enthousiaste en transition professionnelle, je me spécialise dans la création d'applications Full Stack modernes et performantes. Passionné par la résolution de problèmes complexes, je m'appuie sur des outils d'IA pour optimiser mon développement (notamment avec Next.js/TypeScript) et j'aime concevoir des interfaces utilisateur intuitives ainsi que des logiques backend robustes. Autodidacte et curieux, j'ai complété ma formation par 3 mois d'exploration intensive des IA génératives appliquées au code. Je recherche activement des missions stimulantes en freelance, prêt à mettre mes compétences et mon adaptabilité au service de vos projets, en utilisant mon propre environnement de développement optimisé.
      </p>
    </section>
  );
};

export default AboutCV;