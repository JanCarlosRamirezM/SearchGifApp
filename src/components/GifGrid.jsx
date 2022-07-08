import { GifItem } from "./GifItem";


import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

  const [images] = useFetchGifs(category);

  return (
    <>
      <div className="containerGifGrid" key={category}>
        <h2 className="mb-3">{category}</h2>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-4">
          {images.map((image) => (
            <GifItem key={image.id} {...image} />
          ))}
        </div>
      </div>
    </>
  );
};
