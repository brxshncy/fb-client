<script setup lang="ts">
import { onBeforeMount } from "vue";
import type { AuthLayoutProps } from "@/types/props/auth-layout";
import CardContent from "@/components/ui/card/CardContent.vue";
import { z } from "zod";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import Button from "@/components/ui/button/Button.vue";
import FormItem from "@/components/ui/form/FormItem.vue";
import Input from "@/components/ui/input/Input.vue";

const formSchema = toTypedSchema(
  z
    .object({
      email: z
        .string()
        .email({ message: "Please enter a valid email address" }),
      password: z.string(),
      confirmPassword: z.string(),
      name: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords don't match",
      path: ["confirmPassword"],
    })
);

const { handleSubmit, errors, resetForm } = useForm({
  validationSchema: formSchema,
});

const onSubmit = handleSubmit((values: z.infer<typeof formSchema>) => {
  console.log("form submitted", values);
});

const emit = defineEmits<{
  (e: "setPageProps", props: AuthLayoutProps): void;
}>();

onBeforeMount(() => {
  emit("setPageProps", {
    cardTitle: "Sign Up",
    cardDescription: "Enter your details to create an account",
    cardFooterHeaderText: "Alreadyhave an account?",
    cardFooterLink: "/auth/log-in",
    cardFooterLinkText: "Log in",
  });
});
</script>

<template>
  <AuthLayout>
    <CardContent class="mt-4">
      <form @submit.prevent="onSubmit" class="space-y-4">
        <FormItem>
          <FormLabel>Name</FormLabel>
          <FormControl>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your email"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
        <FormItem>
          <FormLabel>Password</FormLabel>
          <FormControl>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your password"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
        <FormItem>
          <FormLabel>Confirm Password</FormLabel>
          <FormControl>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Confirm your password"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
        <Button type="submit" class="w-full">Sign Up</Button>
      </form>
    </CardContent>
  </AuthLayout>
</template>
