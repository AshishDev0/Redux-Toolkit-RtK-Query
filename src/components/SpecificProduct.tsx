import { useGetProductByIdQuery } from "../redux/services/products";

const SpecificProduct = () => {
  const { data, isError, isLoading } = useGetProductByIdQuery("1");

  if (isError) {
    return <h1>Oops something went wrong!</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return <div>{data.title}</div>;
};

export default SpecificProduct;
