import "./App.css";
import Item from "./components/Item/Item";
import NavbarLayout from "./components/Layout/NavbarLayout";

function App() {
  return (
    <div style={{ backgroundColor: "grey", minHeight: "100vh" }}>
      <NavbarLayout />
      <Item />
    </div>
  );
}

export default App;
