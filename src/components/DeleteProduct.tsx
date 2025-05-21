import { useDeleteProductMutation } from "../redux/services/products";

const DeleteProduct = ({ productId }: { productId: string }) => {
  const [deleteProduct, { data, isError, isLoading }] =
    useDeleteProductMutation();

  const handleDeleteProduct = async () => {
    try {
      await deleteProduct(productId);
    } catch (error) {
      console.log("Error while deleting Product ", error);
    }
  };

  if (isError) {
    return <h1>Ooops Something went wrong!</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <button onClick={handleDeleteProduct} disabled={isLoading}>
        Delete Product
      </button>

      {data && (
        <div>
          <h3>Product Id: {data?.id} got deleted</h3>
          <h3>{data?.title} got deleted</h3>
        </div>
      )}
    </div>
  );
};

export default DeleteProduct;
