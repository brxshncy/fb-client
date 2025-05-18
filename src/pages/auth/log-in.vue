<script setup lang="ts">
import { ref } from "vue";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import AuthLayout from "@/layout/AuthLayout.vue";

const email = ref("");
const password = ref("");

const handleSubmit = () => {
  // Handle login logic here
  console.log({ email: email.value, password: password.value });
};
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Login</CardTitle>
      <CardDescription
        >Enter your credentials to access your account</CardDescription
      >
    </CardHeader>
    <CardContent>
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
    <CardFooter class="flex justify-center">
      <p class="text-sm text-gray-500">
        Don't have an account?
        <RouterLink to="/auth/sign-up" class="text-primary hover:underline">
          Sign up
        </RouterLink>
      </p>
    </CardFooter>
  </Card>
</template>
