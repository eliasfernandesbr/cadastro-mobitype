import React from "react";

export default function UsersList({ users }) {
  return (
    <div>
      {users.length ? (
        <table>
          <thead>
            <th>Nome</th>
            <th>Email</th>
            <th>Aniversário</th>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.birthdate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Nenhum usuário cadastrado.</p>
      )}
    </div>
  );
}
