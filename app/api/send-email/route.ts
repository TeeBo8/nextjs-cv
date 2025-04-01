import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

// Récupère la clé API depuis les variables d'environnement
const resend = new Resend(process.env.RESEND_API_KEY);
const contactEmail = process.env.CONTACT_EMAIL || 't.leture@gmail.com'; // Ton email où recevoir les messages

// Schéma de validation avec Zod
const emailSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères." }),
  email: z.string().email({ message: "Adresse email invalide." }),
  message: z.string().min(10, { message: "Le message doit contenir au moins 10 caractères." }),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Valider les données reçues
    const validation = emailSchema.safeParse(body);

    if (!validation.success) {
      // Si la validation échoue, renvoyer les erreurs
      return NextResponse.json(
        { success: false, error: validation.error.flatten().fieldErrors },
        { status: 400 } // Bad Request
      );
    }

    const { name, email, message } = validation.data;

    // Envoi de l'email avec Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Important : Doit être 'onboarding@resend.dev' pour le plan gratuit sans domaine vérifié
      to: [contactEmail], // L'adresse où tu veux recevoir les emails
      subject: `Nouveau message de ${name} via le formulaire de contact CV`,
      replyTo: email, // Permet de répondre directement à l'expéditeur depuis ta boîte mail
      text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      // Optionnel : tu peux aussi utiliser `html:` pour un formatage plus riche
      // html: `<strong>Nom:</strong> ${name}<br><strong>Email:</strong> ${email}<br><br><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}`
    });

    // Gérer la réponse de Resend
    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { success: false, error: 'Erreur lors de l\'envoi de l\'email.' },
        { status: 500 } // Internal Server Error
      );
    }

    // Succès !
    console.log("Email sent successfully:", data);
    return NextResponse.json({ success: true, data });

  } catch (error) {
    console.error("API route error:", error);
    let errorMessage = 'Une erreur interne est survenue.';
    if (error instanceof Error) {
        errorMessage = error.message;
    }
     // Gérer les erreurs inattendues (ex: JSON mal formé)
    return NextResponse.json(
        { success: false, error: errorMessage },
        { status: 500 } // Internal Server Error
    );
  }
} 