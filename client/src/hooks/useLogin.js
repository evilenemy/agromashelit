import { useAuthContext } from "./useAuthContext";
import { useState } from "react";
import axios from "axios";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (login, password, api) => {
    setIsLoading(true);
    setError(null);

    const response = await axios.post(`${api}/api/users/login`, {
      login,
      password,
    });

    if (!response.data) {
      setIsLoading(false);
      setError(response.response.data.error);
    }
    if (response.data) {
      // save user to local storage
      localStorage.setItem("user", JSON.stringify(response.data));

      // update the auth context
      dispatch({ type: "LOGIN", payload: response.data });

      setIsLoading(false);
    }
  };
  return { login, isLoading, error };
};
