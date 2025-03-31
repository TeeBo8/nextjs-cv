import React from 'react';
import { Github, Linkedin, Mail, Phone, Home as HomeIcon } from 'lucide-react';

const HeaderCV = () => {
  const email = "t.leture@gmail.com";
  const phone = "+33 7 89 84 23 53";
  const address = "33670 Sadirac";
  const linkedinUrl = "https://www.linkedin.com/in/thibault-leture-5740242a1/";
  const githubUrl = "https://github.com/TeeBo8";

  return (
    <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
      {/* Section Nom & Titre */}
      <div className="mb-4 md:mb-0">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">Thibault Leture</h1>
        <p className="text-lg md:text-xl text-primary dark:text-primary-foreground font-medium">
          Développeur Web Freelance | Orienté Full Stack & Solutions IA
        </p>
      </div>

      {/* Section Contact & Liens */}
      <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1 md:text-right">
        <a href={`mailto:${email}`} className="flex items-center md:justify-end hover:text-primary dark:hover:text-primary-foreground transition-colors">
          <Mail className="w-4 h-4 mr-2" />
          {email}
        </a>
        <a href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center md:justify-end hover:text-primary dark:hover:text-primary-foreground transition-colors">
          <Phone className="w-4 h-4 mr-2" />
          {phone}
        </a>
        <div className="flex items-center md:justify-end">
          <HomeIcon className="w-4 h-4 mr-2" />
          {address}
        </div>
        <div className="flex items-center md:justify-end space-x-3 pt-1">
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="hover:text-primary dark:hover:text-primary-foreground transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="hover:text-primary dark:hover:text-primary-foreground transition-colors">
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default HeaderCV; 