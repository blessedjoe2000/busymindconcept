import {
  BentoCell,
  BentoGrid,
  ContainerScale,
  ContainerScroll,
} from "@/components/blocks/hero-gallery-scroll-animation";
import { Button } from "@/components/ui/button";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

const safepiccImages = [
  "https://uiv5vypd8g.ufs.sh/f/6sgNUfw75oY0tQialXoZrNUznxueLQG8qkDhHBYdA9bCmy07",
  "https://uiv5vypd8g.ufs.sh/f/6sgNUfw75oY09RDmNh5pWBA8Hd72aLjfvEMJQwFyxnkmSZ5X",
  "https://uiv5vypd8g.ufs.sh/f/6sgNUfw75oY04ilHBfERbUn2FgZkY9o1cMPGNeLw7aAKCuy6",
  "https://uiv5vypd8g.ufs.sh/f/6sgNUfw75oY0RcF0WCrjYI7Nqg6twUTMHx8fkcb0emWZsJo1",
  "https://uiv5vypd8g.ufs.sh/f/6sgNUfw75oY0CLwIgl30K21wP9UgROQjbLzcoDIZulXy3Jsp",
];
const eagleCollectionsImages = [
  "https://uiv5vypd8g.ufs.sh/f/6sgNUfw75oY0L0MzhDSOJCuRG4cBdTsbij6YHg7lPVp1K3FN",
  "https://uiv5vypd8g.ufs.sh/f/6sgNUfw75oY0G9fAGZndCTMNJ426KPRzEojYVD5euiLmy8kA",
  "https://uiv5vypd8g.ufs.sh/f/6sgNUfw75oY0C8pgcms30K21wP9UgROQjbLzcoDIZulXy3Js",
  "https://uiv5vypd8g.ufs.sh/f/6sgNUfw75oY0yCMGG5IRukHgqo0m7NrFMBWYLT64pfivQVPz",
  "https://uiv5vypd8g.ufs.sh/f/6sgNUfw75oY0zrBlOXebyGvYHI4OU3LnD1jkCo8STdchVzRJ",
  "https://uiv5vypd8g.ufs.sh/f/6sgNUfw75oY05c9mUys40ZjChpKGrUt3aEHvJkSxNQ7AlVwe",
  "https://uiv5vypd8g.ufs.sh/f/6sgNUfw75oY0sro1UiQpEvV7IPnAB1rZoJgs8iNFhDY0MbXG",
];
const healthcareImpactImages = [
  "https://uiv5vypd8g.ufs.sh/f/6sgNUfw75oY02qdCP0a16MUxFai4AfdCIjsZ2w7KEPT1ecBz",
  "https://uiv5vypd8g.ufs.sh/f/6sgNUfw75oY05mRHePys40ZjChpKGrUt3aEHvJkSxNQ7AlVw",
  "https://uiv5vypd8g.ufs.sh/f/6sgNUfw75oY01udZhzPHEdbyoGjfarDNxlgWCm79ZJFPz3H0",
];
const ekpMeetingImages = [
  "https://uiv5vypd8g.ufs.sh/f/6sgNUfw75oY03QCRZTluKPg5m3rJpE4OdzBC6IXl8hw1VSMb",
  "https://uiv5vypd8g.ufs.sh/f/6sgNUfw75oY0nlxIATDUG0ezDourLaVYixHA2d6BbXqstQZS",
  "https://uiv5vypd8g.ufs.sh/f/6sgNUfw75oY0IYvr6nR4HdkJySnl2AV03EgKNXGcCBor61b9",
  "https://uiv5vypd8g.ufs.sh/f/6sgNUfw75oY0IdpOtrR4HdkJySnl2AV03EgKNXGcCBor61b9",
];

const HeroDemo1 = () => {
  return (
    <ContainerScroll className="h-[350vh]">
      <BentoGrid className="sticky top-0  h-screen w-full p-4">
        {safepiccImages.map((imageUrl, index) => (
          <BentoCell
            key={index}
            className="overflow-hidden rounded-xl shadow-xl"
          >
            <img
              className="size-full object-cover object-center"
              src={imageUrl}
              alt=""
            />
          </BentoCell>
        ))}
      </BentoGrid>

      <ContainerScale className="z-50 sm:w-[600px] w-full px-10 text-center flex flex-col justify-center items-center bg-white/60 backdrop-blur-md rounded-xl p-6">
        <h1 className="max-w-xl sm:text-5xl text-3xl font-bold tracking-tighter text-[#27391C] ">
          Safe Picc Inc.
        </h1>
        <p className="my-6 max-w-2xl text-sm text-slate-700 md:text-base">
          A healthcare website that provides educational resources and
          professional training courses aimed at enhancing knowledge and skills
          in the healthcare field.
        </p>
        <Link href="https://www.safepicc.com" target="_blank">
          <Button className="bg-[#27391C] px-4 py-2 font-medium cursor-pointer flex gap-2 items-center hover:text-[#FFCF50] ">
            View Project <SquareArrowOutUpRight size={16} />
          </Button>
        </Link>
      </ContainerScale>
    </ContainerScroll>
  );
};

const HeroDemo2 = () => {
  return (
    <ContainerScroll className="h-[350vh] bg-[#27391C] text-slate-100">
      <BentoGrid
        variant={"sevenCells"}
        className="sticky left-0 top-0 h-svh w-full p-4"
      >
        {eagleCollectionsImages
          .filter((_, index) => index <= 6)
          .map((imageUrl, index) => (
            <BentoCell
              key={index}
              className="overflow-hidden rounded-xl shadow-xl"
            >
              <img
                className="size-full object-cover object-center"
                width="100%"
                height="100%"
                src={imageUrl}
              />
            </BentoCell>
          ))}
      </BentoGrid>
      <ContainerScale className="z-40 sm:w-[600px] w-full px-10 text-center flex flex-col justify-center items-center bg-[#27391C]/60 backdrop-blur-md rounded-xl p-6">
        <h1 className="max-w-xl sm:text-5xl text-3xl font-bold tracking-tighter text-[#FFCF50] ">
          Eagle Collection Store
        </h1>
        <p className="my-6 max-w-2xl text-sm opacity-80 md:text-base">
          A fashion e-commerce website that offers a wide variety of clothing,
          accessories, and lifestyle products for diverse customer preferences.
        </p>
        <Link
          href="https://www.eaglecollectionstore.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-[#FFCF50] text-[#000] px-4 py-2 font-medium hover:bg-[#FFCF50]/90 cursor-pointer flex gap-2 items-center">
            View Project <SquareArrowOutUpRight size={16} />
          </Button>
        </Link>
      </ContainerScale>
    </ContainerScroll>
  );
};

const HeroDemo3 = () => {
  return (
    <ContainerScroll className="h-[350vh]">
      <BentoGrid
        variant={"fourCells"}
        className="sticky left-0 top-0 h-svh w-full p-4"
      >
        {ekpMeetingImages
          .filter((_, index) => index <= 3)
          .map((imageUrl, index) => (
            <BentoCell
              key={index}
              className="overflow-hidden rounded-xl shadow-xl"
            >
              <img
                className="size-full object-cover object-center"
                width="100%"
                height="100%"
                src={imageUrl}
              />
            </BentoCell>
          ))}
      </BentoGrid>
      <ContainerScale className="z-30  sm:w-[600px] w-full px-10 text-center flex flex-col justify-center items-center bg-white/60 backdrop-blur-md rounded-xl p-6">
        <h1 className="max-w-xl sm:text-5xl text-3xl font-bold tracking-tighter text-[#27391C]">
          Ekpoma Association Houston
        </h1>
        <p className="my-6 max-w-2xl text-sm text-slate-700 md:text-base">
          A non-profit organization dedicated to promoting community development
          initiatives and providing a platform for individuals and organizations
          to contribute through donations.
        </p>
        <Link href="https://www.ekpomaassociation.org" target="_blank">
          <Button className="bg-[#27391C] px-4 py-2 font-medium cursor-pointer flex gap-2 items-center hover:text-[#FFCF50] ">
            View Project <SquareArrowOutUpRight size={16} />
          </Button>
        </Link>
      </ContainerScale>
    </ContainerScroll>
  );
};

const HeroDemo4 = () => {
  return (
    <ContainerScroll className="h-[350vh] bg-[#27391C] text-slate-100">
      <BentoGrid
        variant={"threeCells"}
        className="sticky left-0 top-0 h-svh w-full p-4"
      >
        {healthcareImpactImages
          .filter((_, index) => index <= 2)
          .map((imageUrl, index) => (
            <BentoCell
              key={index}
              className="overflow-hidden rounded-xl shadow-xl"
            >
              <img
                className="size-full object-cover object-center"
                width="100%"
                height="100%"
                src={imageUrl}
              />
            </BentoCell>
          ))}
      </BentoGrid>
      <ContainerScale className="z-10  sm:w-[600px] w-full px-10 text-center flex flex-col justify-center items-center bg-[#27391C]/60 backdrop-blur-md rounded-xl p-6">
        <h1 className="max-w-xl sm:text-5xl text-3xl font-bold tracking-tighter text-[#FFCF50]">
          Healthcare Impact
        </h1>
        <p className="my-6 max-w-2xl text-sm opacity-80 md:text-base">
          A healthcare blog website that delivers reliable and accessible health
          information to the public, promoting wellness.
        </p>

        <Link href="https://www.hcimpactmag.com" target="_blank">
          <Button className="bg-[#FFCF50] text-[#000] px-4 py-2 font-medium hover:bg-[#FFCF50]/90 cursor-pointer flex gap-2 items-center">
            View Project <SquareArrowOutUpRight size={16} />
          </Button>
        </Link>
      </ContainerScale>
    </ContainerScroll>
  );
};

export { HeroDemo1, HeroDemo2, HeroDemo3, HeroDemo4 };
