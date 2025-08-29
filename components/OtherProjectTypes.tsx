import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { TransitionLink } from "./TransitionLink";

type OtherProjectsProps = {
  currentProjectsUid: string;
}

export const OtherProjectTypes = async (
  { currentProjectsUid }: OtherProjectsProps
  ) => {
    const client = createClient();
    const allProjectTypes = await client.getAllByType("projects")
    const slice = allProjectTypes[0].data.slices[0];

    const otherProjectTypes = allProjectTypes.filter(
      (projectType) => projectType.uid !== currentProjectsUid,
    );

    console.log(otherProjectTypes);
  return (
    <div className="container mx-auto px-4"> 
      <h2 className="font-display mb-8 text-3xl text-white md:text-4xl">
        <PrismicRichText field={slice?.primary.projectintro} />
      </h2>

      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {otherProjectTypes.map((projectType) => (
          <li key={projectType.id}>
            <TransitionLink document={projectType} className="group">
              <div className="relative aspect-square w-full transition-transform duration-500 group-hover:scale-105">
                <PrismicNextImage
                  field={projectType.data.slices[0]?.primary.projectimage}
                  width={450}
                  height={450}
                  priority
                  alt=""
                  className="relative"
                />
              </div>

              <div className="mt-8 space-y-1 text-white">
                <h3 className="font-display text-2xl">
                  <PrismicRichText field={projectType.data.slices[0]?.primary.project_type} />
                </h3>
              </div>
            </TransitionLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
