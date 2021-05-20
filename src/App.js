import axios from "axios";
import { useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [user, setUser] = useState({ name: "", email: "", birthdate: "" });

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
    </div>
  );
}

export default App;
