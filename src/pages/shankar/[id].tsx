import { useRouter } from "next/router";

export default function ShankarDetails() {
  const router = useRouter();
  console.log("Router: ", router);
  return <p>Hello Shankar: Details {router.query.id}</p>;
}
