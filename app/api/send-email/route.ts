import { NextResponse } from 'next/server';
// import { Resend } from 'resend';
import { z } from 'zod';

// Désactivation temporaire de Resend
// const resend = new Resend(process.env.RESEND_API_KEY);

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
      return NextResponse.json(
        { success: false, error: validation.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    // Simulation d'un envoi réussi
    return NextResponse.json({ 
      success: true, 
      message: "Fonctionnalité d'envoi d'email temporairement désactivée. Le message a été validé avec succès."
    });

  } catch (error) {
    console.error("API route error:", error);
    let errorMessage = 'Une erreur interne est survenue.';
    if (error instanceof Error) {
        errorMessage = error.message;
    }
    return NextResponse.json(
        { success: false, error: errorMessage },
        { status: 500 }
    );
  }
} 