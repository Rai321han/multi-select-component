import { useEffect, useState } from "react";
function useDebounce(search: string, delay = 1000) {
  const [searchText, setSearchText] = useState(search);
  useEffect(() => {
    const id = setTimeout(() => {
      setSearchText(search);
    }, delay);

    return () => clearTimeout(id);
  }, [search, delay]);

  return searchText;
}

export default useDebounce;
