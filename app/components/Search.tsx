"use client";

import { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const router = useRouter();

  const [search, setSearch] = useState("");

  const searchTerm = async () => {
    setSearch("");
    router.push("/blog/" + search);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <input
        value={search}
        placeholder="Type something"
        onChange={onChange}
        className="bg-black"
      />
      <button onClick={searchTerm}>Search Now</button>
    </div>
  );
}
