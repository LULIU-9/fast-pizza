import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchOrder = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    navigate(`/order/${search}`);
    setSearch("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={search} onChange={(e) => setSearch(e.target.value)}></input>
    </form>
  );
};

export default SearchOrder;
