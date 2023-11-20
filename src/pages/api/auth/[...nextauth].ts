import NextAuth from 'next-auth';
import type { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

// import useAxiosAuth from '@/hooks/useAxiosAuth';
import instance from '@/lib/axios';
import { signOutUser } from '@/services/api/signOutUser';

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
        const res = await instance.post('/auth/login', {
          email: credentials?.email,
          password: credentials?.password,
        });

        const user = res.data;

        if (!user) {
          return null;
        }

        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token as any;

      return session;
    },
  },
  // events: {
  //   async signOut({ token, session }) {
  //     // const res = await signOutUser();
  //     // console.log('res-->', res);
  //     // console.log('session-->', session);
  //   },
  // },
  pages: {
    signIn: '/auth/login',
  },
};
export default NextAuth(authOptions);
