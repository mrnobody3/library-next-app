'use client';

import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

import { axiosAuth } from '@/lib/axios';

const useAxiosAuth = () => {
  const { data: session } = useSession();

  useEffect(() => {
    const requestIntercept = axiosAuth;
  });
};
