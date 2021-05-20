import axios from "axios";
import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import UsersList from "./components/UsersList";

function App() {
  const [user, setUser] = useState({ name: "", email: "", birthdate: "" });
  const [users, setUsers] = useState([]);

  const createUser = async () => {
    const { data } = await axios.post(
      "https://60a5a36fc0c1fd00175f419a.mockapi.io/users",
      user
    );
    console.log(data);
  };

  return (
    <div className="App">
      <Form user={user} setUser={setUser} createUser={createUser} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
