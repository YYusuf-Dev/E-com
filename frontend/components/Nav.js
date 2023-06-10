import Link from "next/dist/client/link";

export default function Nav() {
  return (
    <nav>
      <Link href="/products">products</Link>
      <Link href="/sell">sell</Link>
      <Link href="/orders">order</Link>
      <Link href="/account">account</Link>
    </nav>
  );
}
