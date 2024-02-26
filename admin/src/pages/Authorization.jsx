import React, { useState } from "react";

const Authorization = ({ setIsAdmin, api }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (login === "" && password === "") {
      sessionStorage.setItem("authAdmin", true);
      setIsAdmin(true);
      setError(null);
      setLoading(false);
    } else {
      setError("Login or password is incorrect.");
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Akkauntga kirish
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="login"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Login
              </label>
              <div className="mt-2">
                <input
                  id="login"
                  name="login"
                  type="text"
                  required
                  title="Login"
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
              Parol
            </label>
            <div className="mt-2">
              <input
                id="password"
                type="password"
                required
                title="Parol"
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
              disabled={loading}
              className="flex cursor-pointer w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-indigo-400"
            >
              Kirish
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Authorization;
