import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, PrismicText, SliceComponentProps, SliceZone } from "@prismicio/react";
import { TransitionLink } from "./TransitionLink";
import { components } from "@/slices";

type OtherProjectsProps = {
  currentProjectsUid: string;
}

export const OtherProjTypes = async ({
  currentProjectsUid,
}: OtherProjectsProps) => {
  const client = createClient();
  const allProjectTypes = await client.getAllByType("projectdetails")

  const otherProjectTypes = allProjectTypes.filter(
    (projectType) => projectType.uid !== currentProjectsUid,
  );


  return (
    <div className="container mx-auto px-4"> 
      <h2 className="font-display mb-8 text-3xl text-white md:text-4xl">
        My projects also include
      </h2>

      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {otherProjectTypes.map((projects) => (
          <li key={projects.uid}>
            <TransitionLink document={projects} className="group">
              {/* <div className="relative aspect-square w-full transition-transform duration-500 group-hover:scale-105">
                <PrismicNextImage
                  field={fragrance.data.bottle_image}
                  width={600}
                  height={600}
                  className="h-auto w-full"
                />
              </div> */}

              <div className="mt-8 space-y-1 text-white">
                <h3 className="font-display text-2xl">
                  {/* <PrismicRichText field={slice.primary.project_type} /> */}
                </h3>
                <p className="text-sm text-neutral-400">
                  Project Topic
                </p>

              </div>

            </TransitionLink>
          </li>
        ))}
      </ul>


    </div>
  );
};
