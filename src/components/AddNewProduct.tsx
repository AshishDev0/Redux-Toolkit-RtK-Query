import { useAddProductMutation } from "../redux/services/products";

const AddNewProduct = () => {
  const [addNewProduct, { data, isError, isLoading }] = useAddProductMutation();

  if (isError) {
    return <h1>Oops something went wrong!</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const handleAddProduct = async () => {
    try {
      const newProductData = {
        id: 1,
        title: "Amazing-T-Shirt",
        description:
          "This is one of the best and amazing t-shirt in the market.",
      };

      await addNewProduct(newProductData);
    } catch (err) {
      console.log("Error adding new product: ", err);
    }
  };

  return (
    <div>
      <button onClick={handleAddProduct} disabled={isLoading}>
        Add New Product
      </button>

      <div>
        <h3>{data?.id}</h3>
        <h3>{data?.title}</h3>
        <h3>{data?.description}</h3>
      </div>
    </div>
  );
};

export default AddNewProduct;
