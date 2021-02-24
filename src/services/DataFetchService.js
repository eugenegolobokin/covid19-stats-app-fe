import axiosInstance from './axios-base';
import { useState, useEffect } from 'react';
import { MESSAGES_ERROR } from '../components/messages';
import { RESPONSE_STATUS } from '../components/constants';

function useFetchData(urlPath) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    axiosInstance
      .get(urlPath)
      .then((res) => {
        setData(res.data);
        setIsloading(false);
      })
      .catch((error) => {
        console.log(error.response);
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
        setIsloading(false);
      });
  }, [urlPath]);

  return { data, error, isLoading };
}

export default useFetchData;
