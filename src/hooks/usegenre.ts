import { CanceledError } from 'axios';
import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client';

//:Todo - Fix this class to get the reponse of api with the correct mapping look at the request body of the api

export interface Genres {
  id: number;
  name: string;
  imageBackground:string;
  }

  const UseGenre = () => {
    const [genres, setGenre] = useState<Genres[]>([]);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
      const controller = new AbortController();
    
      setLoading(true);

      apiClient
        .get<Genres[]>("/genres", { signal: controller.signal })
        .then((res) => {
          setGenre(res.data); 
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return; 
          setError(err.message);
        });
    
      return () => controller.abort();
    }, []);
    return { genres, error , isLoading};
  };
  

export default UseGenre
