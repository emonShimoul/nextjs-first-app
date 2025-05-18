"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function MealSearchInput() {
  //   const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    const searchQuery = { search };
    const urlQueryParam = new URLSearchParams(searchQuery);
    const url = `${pathName}?${urlQueryParam}`;
    router.push(url);
  }, [search]);

  return (
    <div>
      <input
        value={search}
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        className="border-2 border-black"
      />
    </div>
  );
}
