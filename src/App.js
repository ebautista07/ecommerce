import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar/NavBar";
import Cart from "./Components/Cart/Cart";
// import Footer from "./Components/Footer/Footer";
// import ItemCounter from "./Components/ItemCount/ItemCount";
// import ConsumiendoApis from "./Components/ConsumiendoApis/ConsumiendoApis";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";

function App() {
  const onAdd = (cantidad) => {
    // if (cantidad == 0) {
    //   ("no hay productos en el carro");
    // } else {
    //   console.log("se añadió " + cantidad + " elementos al carrito");
    // }
    alert(`se añadió ${cantidad} elementos al carrito`);
  };

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={"!"} />}></Route>
        <Route path="/category/:categoryName" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/itemDetail/:id" element={<ItemDetailContainer />}></Route>
        <Route path="*" element={<h1>404</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
