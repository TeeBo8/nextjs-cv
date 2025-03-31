import React from 'react';
import { Github, Linkedin, Mail, Phone, Home as HomeIcon } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from 'next/image';

const HeaderCV = () => {
  const email = "t.leture@gmail.com";
  const phone = "+33 7 89 84 23 53";
  const address = "33670 Sadirac";
  const linkedinUrl = "https://www.linkedin.com/in/thibault-leture-5740242a1/";
  const githubUrl = "https://github.com/TeeBo8";

  return (
    <header className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8 md:mb-10">
      <div className="flex items-center gap-4">
        <Avatar className="h-16 w-16 md:h-20 md:w-20">
          <AvatarImage asChild src="/images/thibault-leture.jpg">
            <Image
              src="/images/thibault-leture.jpg"
              alt="Photo de Thibault Leture"
              width={80}
              height={80}
              priority
              className="object-cover"
            />
          </AvatarImage>
          <AvatarFallback className="text-lg">TL</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
            Thibault Leture
          </h1>
          <p className="text-lg md:text-xl text-primary dark:text-primary-foreground font-medium">
            Développeur Web Freelance | Orienté Full Stack & Solutions IA
          </p>
        </div>
      </div>

      <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1 text-left sm:text-right self-center sm:self-end">
        <a href={`mailto:${email}`} className="flex items-center sm:justify-end hover:text-primary dark:hover:text-primary-foreground transition-colors group">
          <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
          {email}
        </a>
        <a href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center sm:justify-end hover:text-primary dark:hover:text-primary-foreground transition-colors group">
          <Phone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
          {phone}
        </a>
        <div className="flex items-center sm:justify-end">
          <HomeIcon className="w-4 h-4 mr-2" />
          {address}
        </div>
        <div className="flex items-center sm:justify-end space-x-3 pt-1">
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="hover:text-primary dark:hover:text-primary-foreground transition-colors hover:scale-110">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="hover:text-primary dark:hover:text-primary-foreground transition-colors hover:scale-110">
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default HeaderCV; 