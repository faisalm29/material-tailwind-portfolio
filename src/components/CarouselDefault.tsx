import Image from "next/image";
import { Carousel, IconButton } from "@material-tailwind/react";

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
    <Carousel
      className="rounded-xl"
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="gray"
          size="lg"
          onClick={handlePrev}
          className="!absolute left-4 top-2/4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="gray"
          size="lg"
          onClick={handleNext}
          className="!absolute !right-4 top-2/4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
    >
      {images.map((image, id) => (
        <Image
          key={id}
          src={image.url}
          alt={image.alt}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      ))}
    </Carousel>
  );
};

export default CarouselDefault;
