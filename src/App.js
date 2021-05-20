import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import UsersList from "./components/UsersList";

function App() {
  const [user, setUser] = useState({ name: "", email: "", birthdate: "" });
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");

  const createUser = async () => {
    const res = await axios.post(
      "https://60a5a36fc0c1fd00175f419a.mockapi.io/users",
      user
    );
    if (res.status === 201) {
      setUser({ name: "", email: "", birthdate: "" });
      setMessage("Usuário cadastrado com sucesso!");
    } else {
      setMessage("Ocorreu um erro. Tente novamente.");
    }
  };

  const getUsers = async () => {
    const { data } = await axios.get(
      "https://60a5a36fc0c1fd00175f419a.mockapi.io/users"
    );

    console.log(data);
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const deleteUser = async (id) => {
    const res = await axios.delete(
      "https://60a5a36fc0c1fd00175f419a.mockapi.io/users/" + id
    );
    console.log(res);
    getUsers();
  };

  return (
    <div className="App">
      <Form
        user={user}
        setUser={setUser}
        createUser={createUser}
        message={message}
      />
      <UsersList users={users} deleteUser={deleteUser} />
    </div>
  );
}

export default App;
