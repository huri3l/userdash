import useSWR from 'swr';

import { api } from '../services/fakeapi';

export function useApi(url: string | null) {
  const { data, error, mutate } = useSWR(url, async (url) => {
    const { data } = await api.get(url);

    return data;
  });

  return { data, error, mutate };
}
