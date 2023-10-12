import siteConfig from "@/config/site";
import Link from "next/link";
import { Avatar, Button, Typography } from "@material-tailwind/react";

const ProfileSection = (): JSX.Element => {
  return (
    <section className="mx-auto mb-16 max-w-[960px] px-4">
      {/* Avatar */}
      <div className="mb-2 flex items-center justify-center">
        <Avatar
          src="/images/profile-picture.png"
          alt="faisal muhammad's portrait"
          size="xxl"
        />
      </div>
      <Typography variant="h1" className="mb-2 text-center">
        {siteConfig.details.author}
      </Typography>
      <Typography variant="paragraph" className="mb-8 text-center">
        {siteConfig.details.introduction}
      </Typography>
      <div className="flex items-center justify-center">
        <Link href={`mailto:${siteConfig.contacts.email}`}>
          <Button variant="filled" size="md">
            Contact me
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ProfileSection;
