'use server';

/**
 * @fileOverview A personalized bio generator AI agent.
 *
 * - generatePersonalizedBio - A function that generates a personalized bio.
 * - GeneratePersonalizedBioInput - The input type for the generatePersonalizedBio function.
 * - GeneratePersonalizedBioOutput - The return type for the generatePersonalizedBio function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePersonalizedBioInputSchema = z.object({
  industry: z.string().describe("The viewer's industry."),
  company: z.string().describe("The viewer's company."),
  role: z.string().describe("The viewer's role."),
  skills: z.array(z.string()).describe('The skills of the developer.'),
  projects: z
    .array(z.string())
    .describe('The projects the developer has worked on.'),
  experiences: z
    .array(z.string())
    .describe('The experiences of the developer.'),
});
export type GeneratePersonalizedBioInput = z.infer<
  typeof GeneratePersonalizedBioInputSchema
>;

const GeneratePersonalizedBioOutputSchema = z.object({
  bio: z.string().describe('The generated personalized bio.'),
});
export type GeneratePersonalizedBioOutput = z.infer<
  typeof GeneratePersonalizedBioOutputSchema
>;

export async function generatePersonalizedBio(
  input: GeneratePersonalizedBioInput
): Promise<GeneratePersonalizedBioOutput> {
  return generatePersonalizedBioFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePersonalizedBioPrompt',
  input: {schema: GeneratePersonalizedBioInputSchema},
  output: {schema: GeneratePersonalizedBioOutputSchema},
  prompt: `You are an expert at creating personalized bios for developers.

You will generate a bio that highlights the developer's skills and aspirations, tailored to the viewer's industry, company, and role.

Skills: {{skills}}
Projects: {{projects}}
Experiences: {{experiences}}

Industry: {{industry}}
Company: {{company}}
Role: {{role}}

Generate a bio that is engaging and makes a strong first impression.
`,
});

const generatePersonalizedBioFlow = ai.defineFlow(
  {
    name: 'generatePersonalizedBioFlow',
    inputSchema: GeneratePersonalizedBioInputSchema,
    outputSchema: GeneratePersonalizedBioOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
