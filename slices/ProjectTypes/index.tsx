import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { createClient } from "@/prismicio";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { Bounded } from "@/components/Bounded";
import { ButtonLink } from "@/components/ButtonLink";

/**
 * Props for `ProjectTypes`.
 */
export type ProjectTypesProps = SliceComponentProps<Content.ProjectTypesSlice>;

/**
 * Component for "ProjectTypes" Slices.
 */
const ProjectTypes: FC<ProjectTypesProps> = async ({ slice }) => {
  const client = createClient();
  const projectdetails = isFilled.contentRelationship(slice.primary.projecttype)
    ? await client.getByID<Content.ProjectdetailsDocument>(
      slice.primary.projecttype.id)
  : null;

  const Projects = slice.primary.projects;

  // Fetch the linked document for whichprotype if it exists
  const whichprotypeDoc = isFilled.contentRelationship(slice.primary.whichprotype)
    ? await client.getByID(slice.primary.whichprotype.id)
    : null;

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="overflow-hidden bg-black py-16 text-white md:py-24"
    >

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:grid-rows-[auto, auto]">

        <Bounded className="translate-y-16 space-y-6 self-start bg-white/10 p-10 opacity-0 lg:col-start-2 lg:row-start-1">
          <h2 className="text-3xl leading-tight font-semibold md:text-4xl">

            <ButtonLink document={whichprotypeDoc} className="mt-6">
              Shop Now
            </ButtonLink>
          </h2>
        </Bounded>

      </div>

    </Bounded>
  );
};

export default ProjectTypes;
