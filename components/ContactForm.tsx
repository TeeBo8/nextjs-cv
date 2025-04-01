"use client"; // Indique que c'est un Composant Client

import { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react"; // Pour l'icône de chargement

// Schéma de validation Zod (identique ou similaire à celui du backend)
const formSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères." }),
  email: z.string().email({ message: "Adresse email invalide." }),
  message: z.string().min(10, { message: "Le message doit contenir au moins 10 caractères." }),
});

// Inférence du type TypeScript à partir du schéma Zod
type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 1. Définition du formulaire avec react-hook-form et Zod
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // 2. Fonction de soumission
  async function onSubmit(values: FormData) {
    setIsSubmitting(true); // Active l'état de chargement

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        // Succès
        toast({
          title: "Message envoyé !",
          description: "Merci de m'avoir contacté. Je vous répondrai bientôt.",
        });
        form.reset(); // Réinitialise le formulaire
      } else {
        // Erreur gérée par l'API (validation ou erreur Resend)
         let errorMessage = "Une erreur s'est produite lors de l'envoi.";
         if (result.error) {
            // Si l'API renvoie des erreurs spécifiques aux champs (Zod backend)
            if (typeof result.error === 'object' && !Array.isArray(result.error)) {
                const fieldErrors = Object.entries(result.error)
                    .map(([field, messages]) => `${field}: ${(messages as string[]).join(', ')}`)
                    .join('; ');
                errorMessage = `Erreur de validation: ${fieldErrors}`;
            } else if (typeof result.error === 'string') {
                errorMessage = result.error; // Message d'erreur général de l'API
            }
         }
        toast({
          variant: "destructive",
          title: "Erreur d'envoi",
          description: errorMessage,
        });
      }
    } catch (error) {
      // Erreur réseau ou autre erreur inattendue
      console.error("Fetch error:", error);
      toast({
        variant: "destructive",
        title: "Erreur réseau",
        description: "Impossible de contacter le serveur. Veuillez réessayer plus tard.",
      });
    } finally {
        setIsSubmitting(false); // Désactive l'état de chargement
    }
  }

  // 3. Rendu JSX du formulaire
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Champ Nom */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom</FormLabel>
              <FormControl>
                <Input placeholder="Votre nom" {...field} disabled={isSubmitting} />
              </FormControl>
              <FormMessage /> {/* Affiche les erreurs de validation pour ce champ */}
            </FormItem>
          )}
        />

        {/* Champ Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Votre adresse email" {...field} disabled={isSubmitting} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Champ Message */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Écrivez votre message ici..."
                  className="min-h-[120px]" // Hauteur minimale
                  {...field}
                  disabled={isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Bouton d'envoi */}
        <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Envoi en cours...
            </>
          ) : (
            "Envoyer le message"
          )}
        </Button>
      </form>
    </Form>
  );
} 