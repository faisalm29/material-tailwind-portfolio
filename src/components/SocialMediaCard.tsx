import Image from "next/image";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { format, parseISO } from "date-fns";

type SocialMediaCardProps = {
  title: string;
  company: string;
  companyLogo: string;
  publishedOn: string;
  publishedAt: string;
  description: string;
  url: string;
};

const SocialMediaCard = ({
  title,
  company,
  companyLogo,
  publishedOn,
  publishedAt,
  description,
  url,
}: SocialMediaCardProps): JSX.Element => {
  return (
    <Card className="mb-6 overflow-hidden md:mb-0 md:max-w-[24rem]">
      {/* Card header */}
      <div className="flex items-center p-6">
        <Image
          src={companyLogo}
          width={35}
          height={35}
          alt={`${company} Logo`}
          className="mr-4 rounded-full"
        />
        <div className="flex flex-col">
          <p className="font-bold">{company}</p>
          <p>{publishedOn}</p>
        </div>
      </div>

      {/* Card body */}
      <CardBody className="pt-0">
        <Typography variant="h4" color="blue-gray">
          {title}
        </Typography>
      </CardBody>

      {/* Card footer */}
      <CardFooter className="pt-0">
        <time className="mb-6 block">
          {format(parseISO(publishedAt), "LLL dd, yyyy")}
        </time>
        <a href={url} target="_blank">
          <Button>See Content</Button>
        </a>
      </CardFooter>
    </Card>
  );
};

export default SocialMediaCard;
