import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import { TransitionLink } from "./TransitionLink";
import { components } from "@/slices";

type OtherProjectsProps = {
  currentProjectsUid: string;
}

export const OtherProjectTypes = async (
  { currentProjectsUid }: OtherProjectsProps
  ) => {
    const client = createClient();
    const allProjectTypes = await client.getAllByType("projects")

  const otherProjectTypes = allProjectTypes.filter(
    (projectType) => projectType.uid !== currentProjectsUid,
  );


  return (
    <div className="container mx-auto px-4"> 
      <h2 className="font-display mb-8 text-3xl text-white md:text-4xl">
        My projects also include
      </h2>

      


    </div>
  );
};
