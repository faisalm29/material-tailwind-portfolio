import Image from "next/image";
import { Carousel } from "@material-tailwind/react";

type ImagesProps = {
  url: string;
  alt: string;
};

const CarouselDefault = (): JSX.Element => {
  return (
    <Carousel className="rounded-xl">
      {/* {images.map((image, id) => (
        <Image
          key={id}
          src={image.url}
          alt={image.alt}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      ))} */}
    </Carousel>
  );
};

export default CarouselDefault;
