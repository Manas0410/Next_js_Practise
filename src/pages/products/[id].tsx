import { useRouter } from "next/router";

export default function ProductDetails() {
  const { id } = useRouter().query;
  return <p>Hello Product Details: {id}</p>;
}
