import React, { useEffect, useState } from "react";
import { useLogout } from "../hooks/useLogout";

const Profile = () => {
  const [surname, setSurname] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("+998");
  const [login, setLogin] = useState("evil_enemy");
  const [birthdate, setBirthdate] = useState("");

  const { logout } = useLogout();

  useEffect(() => {
    document.querySelector("title").innerHTML = "Nishtyaki | Кабинет";
  }, []);

  const handlePhoneChange = (e) => {
    let newValue = e.target.value.replace(/[^-+\d]/g, ""); // Faqat +, -, va raqamlarni qabul qilish
    if (newValue.startsWith("+998")) return setPhoneNumber(newValue);
    setPhoneNumber("+998");
  };

  const formatDate = (str) => {
    const parts = str.split("-");
    const day = parts[2];
    const month = parts[1];
    const year = parts[0];
    return `${day}/${month}/${year}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("OK");
  };

  return (
    <div className="w-[80%] min-[820px]:w-[60%] border py-4 px-6 mt-10 mx-auto rounded-sm">
      <h1 className="text-slate-700 mt-1 font-medium text-xl">Мои данные</h1>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 grid-rows-2 min-[594px]:flex mt-4 flex-wrap">
          <div className="max-[594px]:mx-auto">
            <label htmlFor="surname">Фамилия</label>
            <br />
            <input
              type="text"
              id="surname"
              className="form-control rounded border border-zinc-400 mt-1"
              placeholder="Фамилия"
              value={surname}
              onInput={(e) => setSurname(e.target.value)}
            />
          </div>
          <div className="max-[594px]:mt-2 min-[594px]:ml-3 max-[594px]:mx-auto">
            <label htmlFor="name">Имя</label>
            <br />
            <input
              type="text"
              id="name"
              className="form-control rounded border border-zinc-400 mt-1"
              placeholder="Имя"
              value={name}
              onInput={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <hr className="mt-10 mb-5" />
        <div className="grid grid-cols-1 grid-rows-2 min-[594px]:flex mt-4 flex-wrap">
          <div className="max-[594px]:mx-auto">
            <label htmlFor="phone">Номер телефона</label> <br />
            <input
              type="text"
              id="phone"
              className="form-control rounded border border-zinc-400 mt-1"
              placeholder="+998 __ ___-__-__"
              value={phoneNumber}
              onInput={handlePhoneChange}
            />
          </div>
          <div className="max-[594px]:mt-2 min-[594px]:ml-3 max-[594px]:mx-auto">
            <label htmlFor="phone">Логин</label> <br />
            <input
              type="text"
              id="phone"
              className="form-control rounded border border-zinc-400 mt-1 disabled:bg-gray-300 cursor-not-allowed"
              value={login}
              disabled
            />
          </div>
        </div>
        <hr className="mt-10 mb-5" />
        <div>
          <div className="w-max max-[594px]:mx-auto">
            <label htmlFor="birth">Дата рождения</label> <br />
            <input
              type="date"
              id="birth"
              className="form-control rounded border border-zinc-400 mt-1"
              placeholder="дд/мм/гггг"
              value={birthdate}
              onInput={(e) => setBirthdate(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-between flex-wrap items-center mt-5">
          <button
            type="button"
            onClick={logout}
            className="py-2 px-4 rounded-md duration-150 hover:bg-stone-300 text-base md:text-lg font-normal max-[404px]:mx-auto"
          >
            Выйти из системы
          </button>
          <button
            type="submit"
            className="py-2 px-4 rounded-md duration-150 hover:bg-orange-600 bg-orange-500 text-white text-base md:text-lg max-[404px]:mx-auto max-[404px]:mt-4"
          >
            Сохранить
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
