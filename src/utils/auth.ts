import type { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
        // clientId:process.env.GITHUB_ID as string,
        // clientSecret:process.env.GITHUB_SECRET as string
        clientId:process.env.GITHUB_ID!,
        clientSecret:process.env.GITHUB_SECRET!,
    })
  ],
  pages: {},
  session: {
    strategy: "jwt",
  },
  callbacks: {},
}
