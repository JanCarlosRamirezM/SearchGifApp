import { useState } from "react";
import { AddCategory, GifGrid } from "./components/index";

const SearchGifApp = () => {
  const [categories, setCategories] = useState(["rick and morty"]);

  const addNewCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([...categories, newCategory]);
  };

  return (
    <div className="container">
      <AddCategory addNewCategory={addNewCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </div>
  );
};

export default SearchGifApp;
