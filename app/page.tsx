import Link from "next/link"
import CustomButton from "./_components/CustomButton"

export default function Home() {
  return (
    <div className=" h-screen flex flex-col">
      <CustomButton title={"Add to cart"} />
      <CustomButton title={"About Us"} />
      <CustomButton title={"Navigate"} />

      {/* Avoid Anchor tags, use <Link> */}
      <a href=""></a>
      <Link href={"/product"}>Product Page</Link>
    </div>
  )
}
