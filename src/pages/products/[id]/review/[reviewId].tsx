import { useRouter } from "next/router";

export default function ReviewDetails() {
  const { reviewId } = useRouter().query;
  return <p>Hello Review Details {reviewId}</p>;
}
