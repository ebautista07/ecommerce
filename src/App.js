import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

let greeting = prompt("Ingresa tu nombre");

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={greeting} />
      <Footer />
    </div>
  );
}

export default App;
