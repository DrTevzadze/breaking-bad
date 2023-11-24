import "./App.css";
import Input from "./components/Input";
import symbols from ".//utilities/periodicTable";

function App() {
  return (
    <div className="main-container">
      <div className="content">
        <div className="firstname">David</div>
        <div className="lastname">Tevzadze</div>
      </div>
      <div className="inputs">
        <Input label={"Firstname"} />
        <Input label={"Lastname"} />
      </div>
    </div>
  );
}

export default App;
