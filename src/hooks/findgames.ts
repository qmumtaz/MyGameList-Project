import { CanceledError } from 'axios';
import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';

export interface Platform {
  id : number,
  name : string,
  slug : string
}

export interface Game {
  id: number;
  name: string;
  image_background : string;
  parent_platforms : {platform : Platform}[],
  metacritic : number
  // Add other properties relevant to a Game object
}

const FindGames = (genreId: number) => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    apiClient
      .get<Game[]>(`/genres/${genreId}/games`, { signal: controller.signal })
      .then((res) => {
        setGames(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, [genreId]);

  return { games, error, isLoading };
};

export default FindGames;
