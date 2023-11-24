import "./App.css";
import Input from "./components/Input";
import { useEffect, useState } from "react";
import breakify from ".//utilities/periodicTable";
import Logo from "./components/Logo";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [first, setFirst] = useState(["", "", ""]);
  const [last, setLast] = useState(["", "", ""]);

  useEffect(() => {
    setFirst(breakify(firstName));
  }, [firstName]);

  useEffect(() => {
    setLast(breakify(lastName));
  }, [lastName]);

  return (
    <>
      <div className="content">
        <Logo result={first} />
        <Logo result={last} />
      </div>
      <div className="main-container">
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
    </>
  );
}

export default App;
