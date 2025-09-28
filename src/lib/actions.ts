'use server';

import { z } from 'zod';
import { generatePersonalizedBio } from '@/ai/flows/generate-personalized-bio';
import { EXPERIENCES, PROJECTS, SKILLS } from './data';

const bioSchema = z.object({
  industry: z.string().min(2, { message: 'Industry is required.' }),
  company: z.string().min(2, { message: 'Company is required.' }),
  role: z.string().min(2, { message: 'Role is required.' }),
});

export async function generateBio(prevState: any, formData: FormData) {
  try {
    const validatedFields = bioSchema.safeParse({
      industry: formData.get('industry'),
      company: formData.get('company'),
      role: formData.get('role'),
    });

    if (!validatedFields.success) {
      return {
        error: validatedFields.error.flatten().fieldErrors,
      };
    }

    const { industry, company, role } = validatedFields.data;

    const result = await generatePersonalizedBio({
      industry,
      company,
      role,
      skills: SKILLS.map((s) => s.name),
      projects: PROJECTS.map((p) => p.title),
      experiences: EXPERIENCES.map((e) => `${e.role} at ${e.company}`),
    });

    return { bio: result.bio };
  } catch (e) {
    return { error: 'An unexpected error occurred. Please try again.' };
  }
}

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters.' }),
});

export async function sendMessage(prevState: any, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Validation failed.',
    };
  }

  try {
    // Here you would typically send an email, e.g., using a service like Resend or Nodemailer.
    // For this example, we'll just log the data to the console.
    console.log('New message received:');
    console.log(validatedFields.data);

    return {
      message: 'success',
    };
  } catch (e) {
    console.error(e);
    return {
      message: 'An error occurred while sending the message.',
    };
  }
}
