import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ReachingOut`.
 */
export type ReachingOutProps = SliceComponentProps<Content.ReachingOutSlice>;

/**
 * Component for "ReachingOut" Slices.
 */
const ReachingOut: FC<ReachingOutProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for reaching_out (variation: {slice.variation})
      slices.
      <br />
      <strong>You can edit this slice directly in your code editor.</strong>

      {slice.primary.firstname}
      {slice.primary.lastname}
      {slice.primary.email}
      {slice.primary.phone}
      {slice.primary.companyname}
      {slice.primary.submission}
      {slice.primary.errormessage}
      {slice.primary.completion}

    </section>
  );
};

export default ReachingOut;
