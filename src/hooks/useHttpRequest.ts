import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setFruits } from '../redux/fruitsSlice';

const useHttpRequest = () => {
  const dispatch = useAppDispatch();
  const fruits = useAppSelector((state) => state.fruits.filtered);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const url = './fruits.json';
        const responsePromise = await fetch(url);
        const response = await responsePromise.json();
        dispatch(setFruits({ value: response }));
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
