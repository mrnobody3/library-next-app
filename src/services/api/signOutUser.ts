// import { getServerSession } from 'next-auth/next';
import { cookies } from 'next/headers';

import { ref } from '@/constants/href';
import { BASE_URL } from '@/lib/axios';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

async function refreshToken(refreshToken: string) {
  const res = await fetch(BASE_URL + '/auth/refresh', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      refresh: refreshToken,
    }),
  });
  const data = await res.json();
  console.log({ data });

  return data.accessToken;
}
export const signOutUser = async () => {
  const cookieStore = cookies();
  console.log(cookieStore.getAll());
  // try {
  //   const session = await getServerSession(authOptions);
  //   console.log('before: ', session?.user.accessToken);
  //   let res = await fetch(BASE_URL + ref.logout, {
  //     method: 'GET',
  //     headers: {
  //       Authorization: `bearer ${session?.user.accessToken}`,
  //     },
  //   });
  //
  //   if (res.status == 401) {
  //     if (session)
  //       session.user.accessToken = await refreshToken(
  //         session?.user.refreshToken ?? ''
  //       );
  //     console.log('after: ', session?.user.accessToken);
  //
  //     res = await fetch(BASE_URL + ref.logout, {
  //       method: 'GET',
  //       headers: {
  //         Authorization: `bearer ${session?.user.accessToken}`,
  //       },
  //     });
  //     return await res.json();
  //   }
  //
  //   return await res.json();
  // } catch (e) {
  //   console.log('errr', e);
  // }
};