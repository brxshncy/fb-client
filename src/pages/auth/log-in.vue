<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import { CardContent } from "@/components/ui/card";
import type { AuthLayoutProps } from "@/types/props/auth-layout";
import Label from "@/components/ui/label/Label.vue";
import Input from "@/components/ui/input/Input.vue";

const email = ref("");
const password = ref("");
const emit = defineEmits<{
  (e: "setPageProps", props: AuthLayoutProps): void;
}>();

const handleSubmit = () => {
  // Handle login logic here
  console.log({ email: email.value, password: password.value });
};

onBeforeMount(() => {
  emit("setPageProps", {
    cardTitle: "Login",
    cardDescription: "Enter your credentials to access your account",
    cardFooterHeaderText: "Don't have an account?",
    cardFooterLink: "/auth/sign-up",
    cardFooterLinkText: "Sign up",
  });
});
</script>

<template>
  <CardContent class="mt-4">
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div class="space-y-2">
        <Label for="email">Email</Label>
        <Input
          id="email"
          v-model="email"
          type="email"
          placeholder="Enter your email"
          required
        />
      </div>
      <div class="space-y-2">
        <Label for="password">Password</Label>
        <Input
          id="password"
          v-model="password"
          type="password"
          placeholder="Enter your password"
          required
        />
      </div>
      <Button type="submit" class="w-full">Sign In</Button>
    </form>
  </CardContent>
</template>
