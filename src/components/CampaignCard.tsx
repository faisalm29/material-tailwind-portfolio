import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

type CampaignCardProps = {
  title: string;
  excerpt: string;
  thumbnailUrl: string;
  url: string;
};

const CampaignCard = ({
  title,
  excerpt,
  thumbnailUrl,
  url,
}: CampaignCardProps): JSX.Element => {
  return (
    <Card className="mb-6 overflow-hidden md:mb-0 md:max-w-[24rem]">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <Image
          src={thumbnailUrl}
          alt={title}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray" className="mb-3">
          {title}
        </Typography>
        <Typography>{excerpt}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <a target="_blank" href={url}>
          <Button>Read More</Button>
        </a>
      </CardFooter>
    </Card>
  );
};

export default CampaignCard;
