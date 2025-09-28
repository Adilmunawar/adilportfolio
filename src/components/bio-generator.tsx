'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { generateBio } from '@/lib/actions';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Loader2, Wand2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTypewriter } from '@/hooks/use-typewriter';

const initialState = {
  bio: "Tell me about yourself, and I'll generate a personalized bio for you!",
  error: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <Loader2 className="animate-spin" />
      ) : (
        <>
          <Wand2 className="mr-2" />
          Generate Bio
        </>
      )}
    </Button>
  );
}

export default function BioGenerator() {
  const [state, formAction] = useFormState(generateBio, initialState);
  const [key, setKey] = useState(0);

  const displayedBio = useTypewriter(state.bio || initialState.bio, 50, key);
  
  useEffect(() => {
    if (state.bio) {
      setKey(prevKey => prevKey + 1);
    }
  }, [state.bio]);

  return (
    <Card className="bg-card/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle>Personalized Bio Generator</CardTitle>
        <CardDescription>
          Enter your details to see how I can fit into your team.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="industry">Your Industry</Label>
            <Input id="industry" name="industry" placeholder="e.g., Tech, Finance, Healthcare" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Your Company</Label>
            <Input id="company" name="company" placeholder="e.g., Google, Stripe" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="role">Your Role</Label>
            <Input id="role" name="role" placeholder="e.g., Engineering Manager, Recruiter" required />
          </div>
          <SubmitButton />
        </form>
        <div className="mt-6 rounded-md border bg-muted p-4 min-h-[100px]">
          <p className="text-sm text-muted-foreground">{displayedBio}</p>
        </div>
        {state.error && <p className="mt-2 text-sm text-destructive">{JSON.stringify(state.error)}</p>}
      </CardContent>
    </Card>
  );
}
