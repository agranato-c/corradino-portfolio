import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import { Bounded } from "@/components/Bounded";
import { ButtonLink } from "@/components/ButtonLink";

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
      className = "my-6 rounded-lg border-2 border-dashed bg-gray-100 p-2 dark:border-gray-200 dark:bg-muted  space-y-8 text-left md:py-16 border-color: rgb(2, 80, 150); font-size: 16px" data-cyally-org-font-size="16">
        <div className="mx-auto max-w-7xl px-4 py-6 lg:px-6">
          <form>
            <script src="/Script/testing/AutotestDetect.js"></script>
            {/* <style>
              .cog-asterisk { position: absolute; margin-left: .2em; content:"*"; color:var(--negative);}

            </style> */}
            <div className="grid grid-cols-1 gap-x-6 gap-y-4 lg:col-span-2 lg:grid-cols-6">
              <div data-slice-type="form_field" data-slice-variation="default" className="col-span-full">
                <div>
                  <label htmlFor="first_name" className="mb-2 block text-lg font-bold leading-6 text-red-700"> First Name *
                  </label>
                  <span aria-hidden="true" className="cog-asterisk">*</span>
                    <div className="relative rounded-md shadow-sm">
                      <input id="slice.primary.firstname" className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" placeholder="John" aria-invalid="false" type="text" name="name" />

                  <label htmlFor="last_name" className="mb-2 block text-lg font-bold leading-6 text-red-700"> Last Name *
                  </label>
                    <div className="relative rounded-md shadow-sm">
                      <input id="slice.primary.lastname" className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" placeholder="Doe" aria-invalid="false" type="text" name="name" />
                    </div>
                  </div>
              </div>
            </div>

            <div data-slice-type="form_field" data-slice-variation="emailInput" className="col-span-full">
              <div>
                <label htmlFor="email" className="block text-lg font-bold leading-6 text-red-700"> Email Address *
                </label>
                  <div className="relative mt-2 rounded-md shadow-sm">
                    <input id="slice.primary.email" className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" placeholder="examplegmail.com" aria-invalid="false" type="email" name="email" />

                    <label htmlFor="phone" className="block text-lg font-bold leading-6 text-red-700"> Phone Number *
                    </label>
                      <div className="relative rounded-md shadow-sm">
                        <input id="slice.primary.phone" className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" placeholder="(123) 456-7890" aria-invalid="false" type="tel" name="phone" />
                      </div>
                    </div>
              </div>
            </div>

            <div data-slice-type="form_field" data-slice-variation="companynameInput" className="col-span-full">
              <div>
                <label htmlFor="company_name" className="mb-2 block text-lg font-bold leading-6 text-gray-700"> Company Name
                </label>
                  <div className="relative mt-2 rounded-md shadow-sm">
                    <input id="slice.primary.companyname" className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" placeholder="Your Company" aria-invalid="false" type="text" name="companyname" />
                  </div>

                  <div className="flex h-full items-center justify-center" data-cya11y-org-font-size="16" style={{ fontSize: "16px" }}>
                    <label>
                      I have filled out all the required boxes.
                    </label>
                      <span>
                        <input type="checkbox" id="slice.primary.submission" value="I have filled out all the required boxes." />
                        <label className="flex h-5 items-center justify-center rounded-md border border-gray-300 bg-white text-black shadow-sm focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2" aria-hidden="true">
                          I have filled out all the required boxes.
                          {/* <svg className="hidden h-4 w-4 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12l6 6L20 6" />
                          </svg> */}
                        </label>
                      </span>
                      
                      
                      {/* <ButtonLink href="#" className="w-fit px-6 py-2 font-medium text-black shadow-[3px_3px_0px_black] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none bg-[#194f99]" aria-label="Go to the next step" data-cya11y-org-font-size="16"> Submit
                      </ButtonLink> */}
                    </div>
              </div>
            </div>


              {/* {slice.primary.firstname && <span>{slice.primary.firstname}</span>} */}
              {/* {slice.primary.lastname && <span>{slice.primary.lastname}</span>} */}
              {/* {slice.primary.email && <span>{slice.primary.email}</span>} */}
              {/* {slice.primary.phone && <span>{slice.primary.phone}</span>} */}
              {/* {slice.primary.companyname && <span>{slice.primary.companyname}</span>} */}
              {/* {slice.primary.submission && <span>{slice.primary.submission}</span>} */}
              {slice.primary.errormessage && <span>{slice.primary.errormessage} </span>}
              {slice.primary.completion && <span>{slice.primary.completion}</span>}

            </div>
          </form>
        </div>
      

    </Bounded>
  );
};

export default ReachingOut;
