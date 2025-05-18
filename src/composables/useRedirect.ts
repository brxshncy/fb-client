import router from "@/router";

export const useRedirect = async () => {
  const auth = false;
  if (!auth) {
    router.push("/auth/log-in");
  }
};
