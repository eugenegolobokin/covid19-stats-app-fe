import axiosInstance from './axios-base';
import { useState, useEffect } from 'react';
import { MESSAGES_ERROR } from '../components/messages';
import { RESPONSE_STATUS } from '../components/constants';

function useFetchData(urlPath) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axiosInstance
      .get(urlPath)
      .then((res) => {
        setData(res.data);
        setError(null);
        setIsLoading(false);
      })
      .catch((error) => {
        if (!error.response) {
          setError(MESSAGES_ERROR.SERVER_NOT_RESPONDING);
        } else if (
          error.response.status === RESPONSE_STATUS.FORBIDDEN ||
          error.response.status === RESPONSE_STATUS.UNAUTHORIZED
        ) {
          setError(MESSAGES_ERROR.UNAUTHORIZED);
        } else if (error.response.status === RESPONSE_STATUS.INTERNAL_SERVER_ERROR) {
          setError(MESSAGES_ERROR.SERVER_ERROR);
        } else {
          setError(MESSAGES_ERROR.BAD_REQUEST);
        }
        setIsLoading(false);
      });
  }, [urlPath]);

  return { data, error, isLoading };
}

export default useFetchData;
