import React from 'react';
import HeaderCV from '@/components/cv/HeaderCV';
import AboutCV from '@/components/cv/AboutCV';
import SkillsCV from '@/components/cv/SkillsCV';
import ProjectsCV from '@/components/cv/ProjectsCV';
import ExperienceCV from '@/components/cv/ExperienceCV';
import EducationCV from '@/components/cv/EducationCV';
import InterestsCV from '@/components/cv/InterestsCV';
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="container mx-auto p-4 md:p-8 lg:p-12 max-w-4xl">
      <HeaderCV />
      <Separator className="my-6 md:my-8" />
      <AboutCV />
      <Separator className="my-6 md:my-8" />
      <SkillsCV />
      <Separator className="my-6 md:my-8" />
      <ProjectsCV />
      <Separator className="my-6 md:my-8" />
      <ExperienceCV />
      <Separator className="my-6 md:my-8" />
      <EducationCV />
      <Separator className="my-6 md:my-8" />
      <InterestsCV />
    </main>
  );
}