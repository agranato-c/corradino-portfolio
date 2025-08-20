import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { Bounded } from "../../app/components/Bounded";
import { ButtonLink } from "../../app/components/ButtonLink";

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

    <div className="absolute">
      <PrismicNextImage
        field={slice.primary.image}
        alt = ""
        priority
        fill
        className = "object-cover"
      />
    </div>

    <div className="relative flex h-screen flex-col justify-center">

      <div className="max-w-xl text-6xl leading-tight text-neutral-50 md:text-2xl lg:text-4xl">
        <PrismicRichText field={slice.primary.label} />
      </div>

      <div className="mt-6 max-w-md text-lg text-neutral-100">  
        <PrismicRichText field={slice.primary.education} />
      </div>

        <ButtonLink className="rounded-md inline-flex items-center justify-center whitespace-nowrap text-sm font-extrabold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 uppercase text-primary bg-background hover:bg-primary hover:text-primary-foreground dark:bg-white dark:text-primary dark:hover:bg-primary dark:hover:text-black h-10 px-4 py-2 border border-primary" field={slice.primary.engineering_resume}  />

        <ButtonLink className = "rounded-md h-10 px-4 py-2 border border-primary" field={slice.primary.calltoactionlink1} />

        <ButtonLink field={slice.primary.calltoactionlink2} />

    </div>

    </Bounded>
  );
};

export default WorkBackground;
