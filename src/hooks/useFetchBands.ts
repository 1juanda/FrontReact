import { useState, useEffect } from 'react';
import { Band } from '../types/Band';
import { fetchBands } from '../services/bands';

interface UseFetchBandsResult {
  bands: Band[] | null;
  loading: boolean;
  error: string | null;
}

function useFetchBands(): UseFetchBandsResult {
  const [bands, setBands] = useState<Band[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getBands = async () => {
      try {
        const data = await fetchBands();
        setBands(data);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    getBands();
  }, []);

  return { bands, loading, error };
}

export default useFetchBands;