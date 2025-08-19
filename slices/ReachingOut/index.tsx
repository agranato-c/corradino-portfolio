import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import { Bounded } from "@/app/components/Bounded";

/**
 * Props for `ReachingOut`.
 */
export type ReachingOutProps = SliceComponentProps<Content.ReachingOutSlice>;

/**
 * Component for "ReachingOut" Slices.
 */
const ReachingOut: FC<ReachingOutProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className = "space-y-8 bg-white py-26 text-left text-black md:py-16"
    >

      {slice.primary.firstname && <span>{slice.primary.firstname}</span>}
      {slice.primary.lastname && <span>{slice.primary.lastname}</span>}
      {slice.primary.email && <span>{slice.primary.email}</span>}
      {slice.primary.phone && <span>{slice.primary.phone}</span>}
      {slice.primary.companyname && <span>{slice.primary.companyname}</span>}
      {slice.primary.submission && <span>{slice.primary.submission}</span>}
      {slice.primary.errormessage && <span>{slice.primary.errormessage} </span>}
      {slice.primary.completion && <span>{slice.primary.completion}</span>}

    </Bounded>
  );
};

export default ReachingOut;
