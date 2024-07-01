import { CanceledError } from 'axios';
import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client';

//:Todo - Fix this class to get the reponse of api with the correct mapping look at the request body of the api

export interface Platform {
  id : number,
  name : string,
  slug : string
}

export interface Games {
  id: number;
  slug:string;
  name: string;
  added:number;
  background_image:string;
  parent_platforms : {platform : Platform}[],
  metacritic:number
  }

  interface UseGenreGamesProps {
    genreId: number;
  }

  const usegenregames = ({genreId} : UseGenreGamesProps) => {
    const [games, setGames] = useState<Games[]>([]);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(false);


    useEffect(() => {
      const controller = new AbortController();
    
      setLoading(true);

      apiClient
        .get<Games[]>(`/genres/${genreId}/games`, { signal: controller.signal })
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
    return { games, error , isLoading};
  };
  

export default usegenregames
