//Componentes
import MiApi from "./components/MiApi";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
      <div className="container mt-5">
        <MiApi/>
      </div>
    </div>
  );
}

export default App;
