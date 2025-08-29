import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { createClient } from "@/prismicio";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
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

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="overflow-hidden bg-green-500 py-16 text-black md:py-24"
    >

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:grid-rows-[auto, auto]">
          <h2 className="text-3xl leading-tight font-semibold md:text-4xl">
              Project Types
          </h2>
      </div>

        <ButtonLink
          className="es-call-to-action__link relative z-50 font-bold w-fit px-6 py-2 font-medium text-black shadow-[3px_3px_0px_black] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none bg-[#194f99] rounded-md h-10 border border-primary"
          field={slice?.primary.calltoactionlink1}
        >
          Modeling
            
        </ButtonLink>

        <ButtonLink
          className="es-call-to-action__link relative z-50 font-bold w-fit px-6 py-2 font-medium text-black shadow-[3px_3px_0px_black] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none bg-[#194f99] rounded-md h-10 border border-primary"
          field={slice?.primary.calltoactionlink2}
        >
          Planning
        </ButtonLink>  

        <ButtonLink
          className="es-call-to-action__link relative z-50 font-bold w-fit px-6 py-2 font-medium text-black shadow-[3px_3px_0px_black] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none bg-[#194f99] rounded-md h-10 border border-primary"
          field={slice?.primary.calltoactionlink3}
        >
          D&I
        </ButtonLink>  

        <ButtonLink
          className="es-call-to-action__link relative z-50 font-bold w-fit px-6 py-2 font-medium text-black shadow-[3px_3px_0px_black] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none bg-[#194f99] rounded-md h-10 border border-primary"
          field={slice?.primary.calltoactionlink4}
        >
          Other
        </ButtonLink>  
    </Bounded>
  );
};

export default ProjectTypes;
