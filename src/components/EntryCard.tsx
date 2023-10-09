import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";

import { useRouter } from "next/router";

type WorkCardProps = {
  title: string;
  excerpt: string;
  thumbnailUrl: string;
  slug: string;
};

const WorkCard = ({
  title,
  excerpt,
  thumbnailUrl,
  slug,
}: WorkCardProps): JSX.Element => {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <Card className="md:max-w-[24rem] overflow-hidden mb-6 md:mb-0">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img src={thumbnailUrl} alt={title} />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray" className="mb-3">
          {title}
        </Typography>
        <Typography>{excerpt}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Link href={`${currentRoute}/${slug}`}>
          <Button>Read More</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default WorkCard;
