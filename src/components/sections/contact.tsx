import { ContactForm } from '../contact-form';

export function Contact() {
  return (
    <section id="contact" className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary font-headline">
              Get in Touch
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Have a question, a project idea, or just want to say hello? I'd love to hear from you. Fill out the form, and I'll get back to you as soon as possible.
            </p>
          </div>
          <div className="w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
