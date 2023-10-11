import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";

type WorkCardProps = {
  name: string;
  description: string;
  imageUrl: string;
  href: string;
};

const WorkCard = ({
  name,
  description,
  imageUrl,
  href,
}: WorkCardProps): JSX.Element => {
  return (
    <Card className="mb-6 overflow-hidden md:mb-0 md:max-w-[24rem]">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <Image
          src={imageUrl}
          alt={name}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray" className="mb-3">
          {name}
        </Typography>
        <Typography>{description}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Link href={href}>
          <Button>Read More</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default WorkCard;
