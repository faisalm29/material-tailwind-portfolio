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
        Faisal Muhammad
      </Typography>
      <Typography variant="paragraph" className="mb-8 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
        eaque cupiditate! Fugiat possimus earum eligendi. Tempore a, ratione
        ullam quod sint minus asperiores laborum aut optio quis nisi quae
        dignissimos!
      </Typography>
      <div className="flex items-center justify-center">
        <Button variant="filled" size="md">
          Contact me
        </Button>
      </div>
    </section>
  );
};

export default ProfileSection;
