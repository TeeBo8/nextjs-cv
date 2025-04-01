import React from 'react';
import { Badge } from "@/components/ui/badge";

// Données des centres d'intérêt
const interestsData = {
  technology: ["Veille IA (Générative, Dev)", "Blockchain", "Métavers", "Développement personnel"],
  hardware: ["Montage & Optimisation PC Gaming"],
  hobbies: ["Football", "VTT", "Jeux vidéo (Stratégie/RPG)", "Lecture scientifique & tech"],
};

// Catégories pour l'affichage
const interestCategories = [
   { title: "Technologie & Apprentissage", interests: interestsData.technology },
   { title: "Hardware", interests: interestsData.hardware },
   { title: "Loisirs", interests: interestsData.hobbies }
];


const InterestsCV = () => {
  return (
    <section aria-labelledby="interests-heading">
      <h2 id="interests-heading" className="text-2xl font-semibold text-primary dark:text-primary mb-6">
        Centres d'intérêt
      </h2>
       <div className="space-y-5"> {/* Espace entre les catégories */}
        {interestCategories.map((category) => (
          <div key={category.title}>
             {/* Optionnel: Afficher le titre de la catégorie si tu le souhaites */}
             {/* <h3 className="text-md font-medium text-gray-600 dark:text-gray-400 mb-2">{category.title}</h3> */}

             <div className="flex flex-wrap gap-2">
              {category.interests.map((interest) => (
                <Badge key={interest} variant="outline"> {/* Variant 'outline' pour un look plus léger */}
                  {interest}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InterestsCV;