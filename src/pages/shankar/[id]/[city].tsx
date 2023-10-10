import { useRouter } from "next/router";

export default function ShankarDetails() {
  const router = useRouter();
  console.log("Router: ", router);
  return (
    <p>
      manas
      Hello Shankar: Details {router.query.id} {router.query.city}
    </p>
  );
}
