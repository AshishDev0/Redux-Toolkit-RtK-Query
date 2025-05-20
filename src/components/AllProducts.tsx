import { useGetAllProductsQuery } from "../redux/services/products";

const AllProducts = () => {
  const { data, isError, isLoading } = useGetAllProductsQuery();

  // console.log(res);

  if (isError) {
    return <h1>OOOhNooo we got an error</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {data?.products.map((product: any) => (
        <h3 key={product.id}>{product.title}</h3>
      ))}
    </div>
  );
};

export default AllProducts;
