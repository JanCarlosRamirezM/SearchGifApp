import { getGits } from "../helpers/getGifs";
import { useEffect, useState } from "react";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGits(category);

    setImages(newImages);
  };

  useEffect(() => {
    getImages();
  }, []);

  return [images];
};
