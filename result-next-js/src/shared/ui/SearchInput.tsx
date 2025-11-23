"use client";

import { useDebounce } from "../hooks";
import { useState, useEffect } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");
  const debouncedValue = useDebounce(searchValue, 500);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (debouncedValue) {
      params.set("search", debouncedValue);
    } else {
      params.delete("search");
    }

    replace(`${pathname}?${params.toString()}`);
  }, [debouncedValue, pathname, replace]);

  return (
    <input
      onChange={(e) => setSearchValue(e.target.value)}
      value={searchValue}
      className="px-4 py-2 rounded-md border border-white/30 focus:border-white/80 transition-all"
      type="text"
      placeholder="Поиск..."
    />
  );
};
