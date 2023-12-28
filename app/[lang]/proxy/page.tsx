'use client';
import { BASE_URL } from '@/constant/request';
import useSWR from 'swr';

const fetcher = (url: string) =>
  fetch(url, {
    method: 'GET',
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());

const Page = () => {
  const { data } = useSWR(`${BASE_URL}/zh/api?id=2`, fetcher);
  return (
    <div>
      <h1>{process?.env?.APP_ENV}</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Page;
