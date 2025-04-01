import React from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";

export default function ContactCV() {
  return (
    <section id="contact" className="mb-8">
      <h2 className="text-2xl font-bold mb-6">Me Contacter</h2>
      <Card className="max-w-2xl">
        <CardHeader>
          <p className="text-muted-foreground text-center">
            Une question, une proposition, ou simplement envie de discuter ? Remplissez le formulaire ci-dessous.
          </p>
        </CardHeader>
        <CardContent>
          <ContactForm />
        </CardContent>
      </Card>
    </section>
  );
} 