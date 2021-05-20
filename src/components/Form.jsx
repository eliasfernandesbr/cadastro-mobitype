import React from "react";

export default function Form({
  user,
  setUser,
  createUser,
  message,
  messageClass,
}) {
  const { name, email, birthdate } = user;

  return (
    <form className="users-form">
      <div className="input-box">
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
      </div>
      <div className="input-box">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </div>
      <div className="input-box">
        <label htmlFor="birth">Aniversário</label>
        <input
          type="date"
          value={birthdate}
          onChange={(e) => setUser({ ...user, birthdate: e.target.value })}
        />
      </div>
      <button type="button" onClick={createUser}>
        Cadastrar
      </button>
      <p className={`${messageClass}`}>{message}</p>
    </form>
  );
}
