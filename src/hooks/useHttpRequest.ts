import { useState, useEffect } from 'react';
import { FruitType } from '../components/common/Fruit/Fruit';

const useHttpRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [fruits, setFruits] = useState<FruitType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const url = './fruits.json';
        const responsePromise = await fetch(url);
        const response = await responsePromise.json();
        setFruits(response);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setErrorMessage(`Error: ${error}`);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return {
    isLoading,
    isError,
    errorMessage,
    fruits,
  };
};

export default useHttpRequest;
