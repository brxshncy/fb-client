<script setup lang="ts">
import Tabs from "@/components/ui/tabs/Tabs.vue";
import TabsContent from "@/components/ui/tabs/TabsContent.vue";
import TabsList from "@/components/ui/tabs/TabsList.vue";
import TabsTrigger from "@/components/ui/tabs/TabsTrigger.vue";
import LogIn from "@/pages/auth/log-in.vue";
</script>

<template>
  <div
    class="min-h-screen flex items-center justify-center bg-background/95 p-4"
  >
    <Tabs default-value="login" class="w-[400px]">
      <TabsList class="grid w-full grid-cols-2">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="sign-up">Sign Up</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <RouterView />
      </TabsContent>
      <TabsContent value="sign-up">
        <RouterView />
      </TabsContent>
    </Tabs>
  </div>
</template>
