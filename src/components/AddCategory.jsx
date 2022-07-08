import { useState } from "react";

export const AddCategory = ({ addNewCategory }) => {
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const category = search.trim();

    if (category.length === 0) return;

    addNewCategory(category);
    setSearch("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="row justify-content-center containerInputSearch "
    >
      <input
        type="text"
        id="inputSearch"
        placeholder="Busca tus Gifs Favoritos"
        value={search}
        onChange={handleChange}
      />
    </form>
  );
};
