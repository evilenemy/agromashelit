import axios from "axios";
import { useAuthContext } from "./useAuthContext";
import { useState } from "react";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (login, password, password2, api) => {
    setIsLoading(true);
    setError(null);

    if (password !== password2) {
      setError("Passwords do not match!");
      return;
    }

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
  return { signup, isLoading, error };
};
