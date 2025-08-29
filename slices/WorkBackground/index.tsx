import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { Bounded } from "@/components/Bounded";
import { ButtonLink } from "@/components/ButtonLink";

/**
 * Props for `WorkBackground`.
 */
export type WorkBackgroundProps =
  SliceComponentProps<Content.WorkBackgroundSlice>;

/**
 * Component for "WorkBackground" Slices.
 */
const WorkBackground: FC<WorkBackgroundProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >

    <div className="absolute h-full w-full -z-50">
      {isFilled.image(slice.primary.image) && (
        <PrismicNextImage
          field={slice.primary.image}
          className="object-cover"
          alt="" priority fill
        />
      )}
    </div>

    <div className="relative flex h-screen flex-col justify-center ml-3">

      <div className="max-w-xl text-6xl leading-tight text-neutral-500 md:text-2xl lg:text-4xl">
        <PrismicRichText field={slice.primary.label} />
      </div>

      <div className="mt-6 max-w-md text-lg text-black">  
        <PrismicRichText field={slice.primary.education} />
      </div>

        <ButtonLink
          className = "rounded-md h-14 px-4 py-2 border border-primary inline-flex text-black hover:text-purple-400 text-sm font-extrabold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          field={slice.primary.engineering_resume}  />
        
        <br />

        <ButtonLink
          className = "rounded-md h-10 px-4 py-2 border border-primary inline-flex text-black hover:text-purple-700"
          field={slice.primary.calltoactionlink1}
        />
        <ButtonLink
          className = "rounded-md h-10 px-4 py-2 border border-primary inline-flex text-black hover:text-purple-700"
          field={slice.primary.calltoactionlink2}
        />

    </div>

    </Bounded>
  );
};

export default WorkBackground;
