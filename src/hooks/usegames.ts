import { background } from '@chakra-ui/react';
import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Genres } from './usegenre';

export interface Platform {
  id : number,
  name : string,
  slug : string
}

export interface Game {
  id: number;
  name: string;
  background_image : string;
  parent_platforms : {platform : Platform}[],
  metacritic : number
}

interface FetchGames {
  count: number;
  results: Game[];
}

const UseGames = (selectedGenre : Genres | null, requestConfig? : AxiosRequestConfig , deps? : any[]) => 
 {
  // params : {genres : selectedGenre?.id}} , [selectedGenre?.id]
  const params = selectedGenre ? { genres: selectedGenre.id } : null;
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchGames>("/games", 
      { signal: controller.signal , ...requestConfig , params} )
      .then((res) => {setGames(res.data.results), setLoading(false)})
      .catch((err) => {if (err instanceof CanceledError) return; {setError(err.message)}});

    return () => controller.abort;
  }, deps ?  [...deps , selectedGenre?.name] : [selectedGenre?.imageBackground]);

  return { games, error , isLoading};
};

export default UseGames;
