import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";

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
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
    <PrismicNextLink
      field={slice.primary.engineering_resume}
    />
    <PrismicNextLink field={slice.primary.calltoactionlink1} />

    <PrismicNextLink field={slice.primary.calltoactionlink2} />

    </section>
  );
};

export default WorkBackground;
