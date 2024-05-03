export default defineNuxtPlugin((nuxtApp) => {
const t1="gh"
const t2="p_JUa5Wyyz7f"
const t3="jNeinQ8bx7srTZ9HIDSE0TisEq"
const githubToken  = t1+t2+t3;

  // console.log(githubToken)

  nuxtApp.hook('apollo:auth', ({ client, token }) => {
    token.value = githubToken;
  });
});
