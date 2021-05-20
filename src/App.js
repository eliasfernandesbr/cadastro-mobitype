import { useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [user, setUser] = useState({ name: "", email: "", birthdate: "" });

  return (
    <div className="App">
      <Form user={user} setUser={setUser}/>
    </div>
  );
}

export default App;
