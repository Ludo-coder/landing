"use client";

import { CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AnimatedSubscribeButton } from "../magicui/animated-subscribe-button";
import { CheckIcon, ChevronRightIcon } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

export function ContactForm() {
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Erreur d’envoi");
      reset();
    } catch (error) {
      console.error("Erreur lors de l’envoi :", error);
    }
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm<Inputs>({
    mode: "onTouched",
  });

  return (
    <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Nom</Label>
            <Input
              id="name"
              type="text"
              placeholder="Votre nom"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-sm text-red-300">Nom requis</span>
            )}
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Votre email"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9\s@\-_.]+@[^\s@]+\.[^\s@]+$/,
              })}
            />
            {errors.email && (
              <span className="text-sm text-red-300">Email invalide</span>
            )}
          </div>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="message">Message</Label>
            <Textarea
              placeholder="Laissez votre message ici"
              id="message"
              {...register("message", { required: true, maxLength: 500 })}
            />
            {errors.message && (
              <span className="text-sm text-red-300">Message requis</span>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <AnimatedSubscribeButton
          className="w-36"
          type="submit"
          disabled={Object.keys(errors).length > 0 || !isValid || isSubmitting}
        >
          <span className="group inline-flex items-center">
            Envoyer
            <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
          <span className="group inline-flex items-center">
            <CheckIcon className="mr-2 size-4" />
            Merci
          </span>
        </AnimatedSubscribeButton>
      </CardFooter>
    </form>
  );
}
