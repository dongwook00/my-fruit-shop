import { useState, useEffect } from 'react';
import { createSelector } from 'reselect';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setFruits } from '../redux/fruitsSlice';
import { FILTER_TYPES } from '../components/FruitList';

const useHttpRequest = () => {
  const dispatch = useAppDispatch();
  const fruits = useAppSelector(
    createSelector(
      (state) => state.fruits.list,
      (state) => state.fruits.filter,
      (list, filter) => {
        let result;

        if (filter === FILTER_TYPES.all) result = list;
        else if (filter === FILTER_TYPES.normal) result = list.filter((fruit) => !fruit.isPrime);
        else if (filter === FILTER_TYPES.prime) result = list.filter((fruit) => fruit.isPrime);
        else result = list;

        return result;
      },
    ),
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (fruits.length > 0) return;
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
