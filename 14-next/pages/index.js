import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Link href="/chanchitos">Ir a chanchitos</Link>
      <p>Hello world</p>
      <Image src='/coffee.jpg' width={400} height={200} alt="Coffee"></Image>
    </div>
  )
}
