import "./App.css";
import Cart from "./components/Cart/Cart";
import NavbarLayout from "./components/Layout/NavbarLayout";

function App() {
  return (
    <div style={{ backgroundColor: "grey", minHeight: "100vh" }}>
      <NavbarLayout />
      <Cart />
    </div>
  );
}

export default App;
