<script setup lang="ts">
import CardDescription from "@/components/ui/card/CardDescription.vue";
import CardHeader from "@/components/ui/card/CardHeader.vue";
import CardTitle from "@/components/ui/card/CardTitle.vue";
import CardFooter from "@/components/ui/card/CardFooter.vue";
import { ref } from "vue";
import type { AuthLayoutProps } from "@/types/props/auth-layout";

const pageProps = ref<AuthLayoutProps>({
  cardTitle: "Login",
  cardDescription: "",
  cardFooterHeaderText: "Don't have an account?",
  cardFooterLink: "/auth/sign-up",
  cardFooterLinkText: "Sign up",
});

const setPageProps = (props: AuthLayoutProps) => {
  pageProps.value.cardTitle = props.cardTitle;
  pageProps.value.cardDescription = props.cardDescription;
  pageProps.value.cardFooterHeaderText = props.cardFooterHeaderText;
  pageProps.value.cardFooterLink = props.cardFooterLink;
  pageProps.value.cardFooterLinkText = props.cardFooterLinkText;
};
</script>

<template>
  <div
    class="min-h-screen flex items-center justify-center bg-background/95 p-4"
  >
    <div class="w-full max-w-[400px] rounded-lg border bg-card p-8 shadow-lg">
      <CardHeader>
        <CardTitle>
          {{ pageProps.cardTitle }}
        </CardTitle>
        <CardDescription>
          {{ pageProps.cardDescription }}
        </CardDescription>
      </CardHeader>
      <RouterView @setPageProps="setPageProps" />
      <CardFooter class="flex justify-center mt-2">
        <p class="text-sm text-gray-500">
          {{ pageProps.cardFooterHeaderText }}
          <RouterLink
            :to="pageProps.cardFooterLink"
            class="text-primary hover:underline"
          >
            {{ pageProps.cardFooterLinkText }}
          </RouterLink>
        </p>
      </CardFooter>
    </div>
  </div>
</template>
