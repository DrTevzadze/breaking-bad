import "./App.css";

function App() {
  return (
    <div className="main-container">
      <div className="content">
        <div className="firstname">David</div>
        <div className="lastname">Tevzadze</div>
      </div>
      <div className="inputs">
        <label>
          {"Firstname: "}
          <input type="text" />
        </label>
        <label>
          {" Lastname:"}
          <input type="text" />
        </label>
      </div>
    </div>
  );
}

export default App;
