import React from 'react';
import { Github, Linkedin, Mail, Phone, Home as HomeIcon } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import SkillsCV from './SkillsCV';

const SidebarCV = () => {
  // --- Constantes copiées de HeaderCV ---
  const email = "t.leture@gmail.com";
  const phone = "+33 7 89 84 23 53";
  const address = "33670 Sadirac";
  const linkedinUrl = "https://www.linkedin.com/in/thibault-leture-5740242a1/";
  const githubUrl = "https://github.com/TeeBo8";

  return (
    // L'élément <aside> est notre conteneur principal de sidebar
    // Ajout de flex flex-col pour organiser verticalement, et gap pour l'espacement
    <aside className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg shadow-lg h-full flex flex-col gap-6 sticky top-8"> {/* Fond légèrement différent pour la démarquer, ombre plus marquée */}

      {/* Section 1: Avatar + Nom/Titre */}
      {/* Centré et espace vertical */}
      <div className="flex flex-col items-center text-center gap-3">
        <Avatar className="h-24 w-24 md:h-28 md:w-28 border-2 border-primary/50 dark:border-primary/70 shadow-md"> {/* Taille avatar ajustée, ajout bordure couleur primaire */}
          <AvatarImage asChild src="/images/thibault-leture.jpg">
             <Image
                src="/images/thibault-leture.jpg"
                alt="Photo de Thibault Leture"
                width={112} // Ajusté à la taille max de l'avatar
                height={112}
                priority
                className="object-cover"
             />
          </AvatarImage>
          <AvatarFallback className="text-2xl">TL</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
            Thibault Leture
          </h1>
          <p className="text-md md:text-lg text-primary dark:text-primary font-medium mt-1"> {/* Couleur primaire toujours visible */}
            Développeur Web Freelance <br/> {/* Saut de ligne pour lisibilité */}
            Orienté Full Stack & Solutions IA
          </p>
        </div>
      </div>

      {/* Section 2: Contact & Liens */}
      {/* Espace vertical entre les éléments */}
      <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2 flex flex-col items-center"> {/* Centrer les infos contact */}
         <a href={`mailto:${email}`} className="flex items-center hover:text-primary dark:hover:text-primary transition-colors group">
          <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform shrink-0" /> {/* shrink-0 pour icônes */}
          <span>{email}</span> {/* Span pour gérer le passage à la ligne du texte */}
        </a>
        <a href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center hover:text-primary dark:hover:text-primary transition-colors group">
          <Phone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform shrink-0" />
           <span>{phone}</span>
        </a>
        <div className="flex items-center text-center"> {/* Centrer l'adresse */}
          <HomeIcon className="w-4 h-4 mr-2 shrink-0" />
          <span>{address}</span>
        </div>
        {/* Liens Sociaux */}
        <div className="flex items-center space-x-4 pt-3">
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors transform hover:scale-110">
            <Linkedin className="w-6 h-6" /> {/* Icônes un peu plus grandes */}
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors transform hover:scale-110">
            <Github className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Section 3: Compétences */}
      <Separator className="my-2 bg-slate-300 dark:bg-slate-600" />
      <SkillsCV />

      {/* Espace pour futurs éléments dans la sidebar */}
      {/* <div className="mt-auto pt-6"> Footer de sidebar ? </div> */}

    </aside>
  );
};

export default SidebarCV; 