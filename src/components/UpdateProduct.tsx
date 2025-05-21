import { useUpdateProductMutation } from "../redux/services/products";

const UpdateProduct = ({ productId }: { productId: string }) => {
  const [updateProduct, { data, isError, isLoading }] =
    useUpdateProductMutation();

  if (isError) {
    return <h1>Oops something went wrong!</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const handleUpdateProduct = async () => {
    try {
      const updatedProductData = {
        title: "Title updated",
        description:
          "This is one of the best and amazing t-shirt in the market.",
      };

      await updateProduct({
        id: productId,
        updatedProduct: updatedProductData,
      });
    } catch (err) {
      console.log("Error adding new product: ", err);
    }
  };

  return (
    <div>
      <button onClick={handleUpdateProduct} disabled={isLoading}>
        Update Product
      </button>

      <div>
        <h3>{data?.id}</h3>
        <h3>{data?.title}</h3>
        <h3>{data?.description}</h3>
      </div>
    </div>
  );
};

export default UpdateProduct;
