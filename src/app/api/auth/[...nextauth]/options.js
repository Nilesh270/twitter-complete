
// import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

export const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET_ID,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  logger: { level: "debug" },
  pages: {
    signIn: "auth/signin",
  },

  callbacks: {
    session: async ({ session, token }) => {
      session.user.username = session.user.name
        .split(" ")
        .join("")
        .toLocaleLowerCase();
      session.user.uid = token.sub;
      if (!session.error) {
        session.user.redirectURL = "/";
      }
      return session;
    },
  },
}; 