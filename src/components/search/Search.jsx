import React from "react";
import { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  console.log(search)
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search here..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
