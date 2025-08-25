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
  const projects = isFilled.contentRelationship(slice.primary.project_type)
    ? await client.getByID<Content.ProjectsDocument>(
      slice.primary.project_type.id)
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
      className="overflow-hidden bg-green-500 py-16 text-black md:py-24"
    >

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:grid-rows-[auto, auto]">

        {/* <Bounded className="translate-y-16 space-y-6 self-start bg-white/10 p-10 opacity-0 lg:col-start-2 lg:row-start-1"> */}
          <h2 className="text-3xl leading-tight font-semibold md:text-4xl">

            <ButtonLink document={whichprotypeDoc} className="mt-6 rounded-md h-10 px-4 py-2 border border-primary">
              Project Types
            </ButtonLink>

            <ButtonLink
              className="es-call-to-action__link relative z-50 w-fit px-6 py-2 font-medium text-black shadow-[3px_3px_0px_black] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none bg-[#194f99]  rounded-md h-10 border border-primary"
              aria-label="Go to the next step"
              data-cya11y-org-font-size="16"
              field={slice.primary.calltoactionlink1}
            >
              Planning
            </ButtonLink>

            <ButtonLink
              className="es-call-to-action__link relative z-50  rounded-md h-10 px-4 py-2 border border-primary"
              field={slice.primary.calltoactionlink2}
            >
              D&I
            </ButtonLink>  

            <ButtonLink
              className="es-call-to-action__link relative z-50  rounded-md h-10 px-4 py-2 border border-primary"
              field={slice.primary.calltoactionlink3}
            >
              Other
            </ButtonLink>  
          </h2>
        {/* </Bounded> */}

      </div>

    </Bounded>
  );
};

export default ProjectTypes;
