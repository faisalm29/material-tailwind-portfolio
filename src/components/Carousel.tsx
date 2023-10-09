import { Carousel } from "@material-tailwind/react";

type ImagesProps = {
  url: string;
  alt: string;
};

const CarouselDefault = ({
  images,
}: {
  images: Array<ImagesProps>;
}): JSX.Element => {
  return (
    <Carousel className="rounded-xl">
      {images.map((image, id) => (
        <img
          key={id}
          src={image.url}
          alt={image.alt}
          className="h-full w-full object-cover"
        />
      ))}
    </Carousel>
  );
};

export default CarouselDefault;
