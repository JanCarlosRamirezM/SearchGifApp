import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Test in <GifItem/>", () => {
  const props = {
    title: "Batman",
    name: "Batman",
    url: "https://tenor.com/search/batman-gifs",
  };
  it("debe hacer match con el snapshot ", () => {
    const { container } = render(<GifItem {...props} />);
    expect(container).toMatchSnapshot();
  });

  it("debe mostrar la url y el alt de la imagen", () => {
    render(<GifItem {...props} />);

    const { src, alt } = screen.getByRole("img");

    expect(src).toBe(props.url);
    expect(alt).toBe(props.name);
  });

  it("buscar el titulo del itemn", () => {
    render(<GifItem {...props} />);
    expect(screen.getByText("Batman")).toBeTruthy();
  });
});
