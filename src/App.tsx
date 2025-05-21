import "./App.css";
import AddNewProduct from "./components/AddNewProduct";
import AllProducts from "./components/AllProducts";
import Counter from "./components/Counter";
import DeleteProduct from "./components/DeleteProduct";
import SpecificProduct from "./components/SpecificProduct";
import UpdateProduct from "./components/UpdateProduct";

function App() {
  return (
    <>
      {/* <Counter /> */}
      {/* <AllProducts /> */}
      {/* <SpecificProduct /> */}
      {/* <AddNewProduct /> */}
      {/* <UpdateProduct productId={4} /> */}
      <DeleteProduct productId={2} />
    </>
  );
}

export default App;
