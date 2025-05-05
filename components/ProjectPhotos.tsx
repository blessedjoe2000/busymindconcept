import {
  BentoCell,
  BentoGrid,
  ContainerScale,
  ContainerScroll,
} from "@/components/blocks/hero-gallery-scroll-animation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const IMAGES = [
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
  "https://uiv5vypd8g.ufs.sh/f/6sgNUfw75oY0wWL32HTyb1ujDW94mv36tqiI28cSsXZAklpU",
  "https://uiv5vypd8g.ufs.sh/f/6sgNUfw75oY0xKx4me6qPV6dLi0lspvXe4FbQHARoOWf7TBY",
  "https://uiv5vypd8g.ufs.sh/f/6sgNUfw75oY0mC9GaTh2f1ZlxRKdi8k47GLEbNItWAn6o0zC",
];
const healthcareImpactImages = [
  "https://uiv5vypd8g.ufs.sh/f/6sgNUfw75oY02qdCP0a16MUxFai4AfdCIjsZ2w7KEPT1ecBz",
  "https://uiv5vypd8g.ufs.sh/f/6sgNUfw75oY05mRHePys40ZjChpKGrUt3aEHvJkSxNQ7AlVw",
  "https://uiv5vypd8g.ufs.sh/f/6sgNUfw75oY01udZhzPHEdbyoGjfarDNxlgWCm79ZJFPz3H0",
];
const ekpMeetingImages = [
  "https://uiv5vypd8g.ufs.sh/f/6sgNUfw75oY0tQialXoZrNUznxueLQG8qkDhHBYdA9bCmy07",
  "https://uiv5vypd8g.ufs.sh/f/6sgNUfw75oY09RDmNh5pWBA8Hd72aLjfvEMJQwFyxnkmSZ5X",
  "https://uiv5vypd8g.ufs.sh/f/6sgNUfw75oY04ilHBfERbUn2FgZkY9o1cMPGNeLw7aAKCuy6",
  "https://uiv5vypd8g.ufs.sh/f/6sgNUfw75oY0RcF0WCrjYI7Nqg6twUTMHx8fkcb0emWZsJo1",
  "https://uiv5vypd8g.ufs.sh/f/6sgNUfw75oY0CLwIgl30K21wP9UgROQjbLzcoDIZulXy3Jsp",
];

const HeroDemo1 = () => {
  return (
    <ContainerScroll className="h-[350vh]">
      <BentoGrid className="sticky top-0  h-screen w-full p-4">
        {IMAGES.map((imageUrl, index) => (
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

      <ContainerScale className=" z-10 text-center flex flex-col justify-center items-center">
        <h1 className="max-w-xl text-5xl font-bold tracking-tighter text-slate-800 ">
          Safe Picc Inc.
        </h1>
        <p className="my-6 max-w-2xl text-sm text-slate-700 md:text-base">
          A healthcare website that provides educational resources and
          professional training courses aimed at enhancing knowledge and skills
          in the healthcare field.
        </p>
        <Link href="https://www.safepicc.com">
          <Button className="bg-black px-4 py-2 font-medium hover:bg-black/70">
            View Project
          </Button>
        </Link>
      </ContainerScale>
    </ContainerScroll>
  );
};

const HeroDemo2 = () => {
  return (
    <ContainerScroll className="h-[350vh]">
      <BentoGrid
        variant={"fourCells"}
        className="sticky left-0 top-0 h-svh w-full p-4"
      >
        {eagleCollectionsImages
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
      <ContainerScale className="text-center flex flex-col justify-center items-center">
        <h1 className="max-w-xl text-5xl font-bold tracking-tighter">
          Eagle Collection Store
        </h1>
        <p className="my-6 max-w-2xl text-sm text-stone-500 md:text-base">
          A fashion e-commerce website that offers a wide variety of clothing,
          accessories, and lifestyle products for diverse customer preferences.
        </p>
        <Link href="https://www.eaglecollectionstore.com">
          <Button className="bg-black px-4 py-2 font-medium   hover:bg-black/70">
            View Project
          </Button>
        </Link>
      </ContainerScale>
    </ContainerScroll>
  );
};

const HeroDemo3 = () => {
  return (
    <ContainerScroll className="h-[350vh] bg-slate-900 text-slate-100">
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
      <ContainerScale className="text-center flex flex-col justify-center items-center">
        <h1 className="max-w-xl text-5xl font-bold tracking-tighter ">
          Healthcare Impact
        </h1>
        <p className="my-6 max-w-2xl text-sm opacity-80 md:text-base">
          A healthcare blog website that delivers reliable and accessible health
          information to the public, promoting wellness.
        </p>

        <Link href="https://www.hcimpactmag.com">
          <Button className="bg-white text-black px-4 py-2 font-medium   hover:bg-white/80">
            View Project
          </Button>
        </Link>
      </ContainerScale>
    </ContainerScroll>
  );
};
export { HeroDemo1, HeroDemo2, HeroDemo3 };
