import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar/NavBar";
import Cart from "./Components/Cart/Cart";
import Form from "./Components/Form/Form";
// import Footer from "./Components/Footer/Footer";
// import ItemCounter from "./Components/ItemCount/ItemCount";
// import ConsumiendoApis from "./Components/ConsumiendoApis/ConsumiendoApis";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Login from "./Components/Login/Login";
import CartContextProvider from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting={"!"} />}
          ></Route>
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/itemDetail/:id"
            element={<ItemDetailContainer />}
          ></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/formulario" element={<Form />} />
          <Route path="*" element={<h1>404</h1>}></Route>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
