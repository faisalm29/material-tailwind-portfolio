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
import Image from "next/image";

type WorkCardProps = {
  title: string;
  excerpt: string;
  thumbnailUrl: string;
  slug: string;
};

const EntryCard = ({
  title,
  excerpt,
  thumbnailUrl,
  slug,
}: WorkCardProps): JSX.Element => {
  const router = useRouter();
  const currentRoute = router.pathname;
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
        <Link href={`${currentRoute}/${slug}`}>
          <Button>Read More</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default EntryCard;
