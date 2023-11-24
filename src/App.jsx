import "./App.css";
import Input from "./components/Input";
import { useState } from "react";
import symbols from ".//utilities/periodicTable";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div className="main-container">
      <div className="content">
        <div className="firstname">David</div>
        <div className="lastname">Tevzadze</div>
      </div>
      <div className="inputs">
        <Input
          label={"First Name"}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Input
          label={"Last Name"}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
