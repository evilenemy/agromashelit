import React, { useEffect, useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { Link } from "react-router-dom";

const Login = ({ api }) => {
  const [login_, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, error } = useLogin();

  useEffect(() => {
    document.querySelector("title").innerHTML = "Nishtyaki | Login";
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(login_, password, api);
  };

  return (
    <div>
      <div className="w-full flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="w-full min-[500px]:w-[85%] lg:w-[45%] mx-auto py-2 px-2 pb-8 rounded border">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Войдите в свой аккаунт
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
                    value={login_}
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
                Войти
              </button>
              <p className="text-center mt-2">
                У вас нет аккаунта? <Link to="/signup" className="text-blue-700 font-medium">Зарегистрироваться</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
