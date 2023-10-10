// import { useRouter } from "next/router";

// export default function ShankarDetails() {
//   const router = useRouter();
//   console.log("Router: ", router);
//   return <p>Hello Shankar: Details {router.query.id}</p>;
// }
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ShankarDetails() {
  const router = useRouter();
  const [productDetails, setProductDetails] = useState<any>({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${router.query.id}`)
      .then((data) => data.json())
      .then((data) => setProductDetails(data))
      .catch((err) => console.log(err));
  }, [router.query.id]);

  return (
    <p>
      Hello Shankar: Details {productDetails.id}:{productDetails.title}
    </p>
  );
}