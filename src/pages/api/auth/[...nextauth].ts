import NextAuth from 'next-auth';
import type { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import axios from '@/lib/axios';

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const res = await axios.post('/api/auth/login', {
          email: credentials?.email,
          password: credentials?.password,
        });
        const user = res.data;
        console.log(user);

        if (!user) return null;

        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      console.log({ account });

      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token as any;

      return session;
    },
  },
};
export default NextAuth(authOptions);
