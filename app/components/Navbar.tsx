import Link from "next/link";
import Search from "./Search";

export default function Navbar() {
  return (
    <nav className="flex gap-8 p-4">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Search />
    </nav>
  );
}
