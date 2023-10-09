import { Avatar, Button, Typography } from "@material-tailwind/react";

const ProfileSection = (): JSX.Element => {
  return (
    <section className="max-w-[960px] px-4 mx-auto mb-16">
      {/* Avatar */}
      <div className="flex justify-center items-center mb-2">
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
      <div className="flex justify-center items-center">
        <Button variant="filled" size="md">
          Contact me
        </Button>
      </div>
    </section>
  );
};

export default ProfileSection;
