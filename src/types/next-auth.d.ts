import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      _id: string;
      email: string;
      name: string;
      avatarUrl: string;
      accessToken: string;
      refreshToken: string;
    };
  }
}
