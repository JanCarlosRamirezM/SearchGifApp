export const getGits = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=MOYTvqWjGLmOqlZvQ47nywd7lTTIeAUV&q=${category}&limit=10`;

  const response = await fetch(url);

  const { data } = await response.json();

  const gits = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gits;
};
