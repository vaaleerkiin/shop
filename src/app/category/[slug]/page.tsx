import { CATEGORY } from "@/constants/CATEGORY";
import { redirect } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export default function Assortement({ params: { slug } }: Props) {
  if (!CATEGORY.some((el) => el === slug)) redirect("/");

  return <h1>{slug}</h1>;
}
