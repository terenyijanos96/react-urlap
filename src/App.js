import { useEffect } from "react";
import "./App.css";
import Urlap from "./component/Urlap";
import DataServices from "./model/DataService";

const DS = new DataService();
function App() {
  function kuld(urlapAdat) {
    console.log(urlapAdat);
    useEffect(() => {
      DS.postData(vegpont, urlapAdat);
    }, []);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Űrlap</h1>
      </header>
      <article>
        <Urlap kuld={kuld} />
      </article>
    </div>
  );
}

export default App;
