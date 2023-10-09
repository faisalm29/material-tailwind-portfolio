import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";

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
    <Card className="md:max-w-[24rem] overflow-hidden mb-6 md:mb-0">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img src={imageUrl} alt={name} />
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
