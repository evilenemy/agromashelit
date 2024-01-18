import React, { useEffect, useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { Link } from "react-router-dom";

const Signup = ({ api }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const { signup, isLoading, error } = useSignup();

  useEffect(() => {
    document.querySelector("title").innerHTML = "Nishtyaki | Signup";
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(login, password, password2, api);
  };

  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="w-full min-[500px]:w-[85%] lg:w-[45%] mx-auto py-2 px-2 pb-8 rounded border">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Зарегистрировать аккаунт
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="login"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Логин
                </label>
                <div className="mt-2">
                  <input
                    id="login"
                    name="login"
                    type="text"
                    autoComplete="login"
                    required
                    title="Логин"
                    value={login}
                    onInput={(e) => setLogin(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Пароль
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  title="Пароль"
                  value={password}
                  onInput={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <label
                htmlFor="password2"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Подтвердите пароль
              </label>
              <div className="mt-2">
                <input
                  id="password2"
                  type="password"
                  autoComplete="current-password"
                  required
                  title="Пароль"
                  value={password2}
                  onInput={(e) => setPassword2(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              {error && (
                <div className="border-2 rounded py-2 px-4 border-red-400 text-red-500 bg-red-100">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="flex cursor-pointer w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 disabled:bg-orange-400"
              >
                Зарегистрироваться
              </button>
              <p className="mt-2 text-center">
                У вас уже есть аккаунт?{" "}
                <Link to={"/login"} className="font-medium text-blue-700">
                  войдите сюда
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
