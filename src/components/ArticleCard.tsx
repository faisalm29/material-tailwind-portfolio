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

type ArticleCardProps = {
  name: string;
  description: string;
  imgUrl: string;
  href: string;
};

const ArticleCard = ({
  name,
  description,
  imgUrl,
  href,
}: ArticleCardProps): JSX.Element => {
  return (
    <Card className="mb-6 overflow-hidden md:mb-0 md:max-w-[24rem]">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <Image
          src={imgUrl}
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
        <Link href={href} target="_blank">
          <Button>Read Articles</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;
