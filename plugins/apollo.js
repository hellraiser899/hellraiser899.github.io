export default defineNuxtPlugin((nuxtApp) => {
  const { githubToken } = useRuntimeConfig();
  // console.log(githubToken)

  nuxtApp.hook('apollo:auth', ({ client, token }) => {
    token.value = githubToken;
  });
});
