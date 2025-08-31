"use client";

import { FC, useState } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Bounded } from "@/components/Bounded";

/**
 * Props for `ReachingOut`.
 */
export type ReachingOutProps = SliceComponentProps<Content.ReachingOutSlice>;

/**
 * Component for "ReachingOut" Slices.
 */
const ReachingOut: FC<ReachingOutProps> = ({ slice }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companyname, setCompanyname] = useState("");
  const [contactingback, setContactingback] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsLoading(true);

    const res = await fetch("/api/contact-me", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        phone,
        companyname,
        contactingback,
      }),
    });
    
    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);

    if (success) {
      setFirstname("");
      setLastname("");
      setEmail("");
      setPhone("");
      setContactingback(false);
    }

    setIsLoading(false);
  };

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className = "my-6 rounded-lg border-2 border-dashed bg-gray-100 p-2 dark:border-gray-200 dark:bg-muted space-y-8 text-left md:py-16 border-color: rgb(2, 80, 150); font-size: 16px" data-cyally-org-font-size="16">
        <div className="mx-auto max-w-7xl px-4 py-6 lg:px-6">
          <form
            className="py-4 mt-4 border-t flex flex-col gap-5">
            <div className="grid gap-x-6 gap-y-4">
              <div data-slice-type="form_field" data-slice-variation="default" className="col-span-full is-required">
                <div>
                  <label htmlFor="slice.primary.firstname" className="required-span mb-2 block text-lg font-bold leading-6 text-black">
                    First Name {" "}
                    <span className="required-span inline mb-2 block text-lg font-bold leading-6 text-red-700">
                      *
                    </span>
                  </label>

                  <div className="relative rounded-md shadow-sm">
                    <input
                      onChange={(e) => setFirstname(e.target.value)}
                      value={firstname}
                      id="slice.primary.firstname"
                      className="required block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                      placeholder="John"
                      aria-invalid="false"
                      type="text"
                    />
                  </div>
                </div>
              </div>

              <div data-slice-type="form_field" data-slice-variation="default" className="col-span-full is-required">
                <div>
                  <label htmlFor="slice.primary.lastname" className="required-span mb-2 block text-lg font-bold leading-6 text-black">
                    Last Name {" "}
                    <span className="required-span inline mb-2 block text-lg font-bold leading-6 text-red-700">
                      *
                    </span>
                  </label>

                  <div className="relative rounded-md shadow-sm">
                    <input
                      onChange={(e) => setLastname(e.target.value)}
                      value={lastname}
                      id="slice.primary.lastname"
                      className="required block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                      placeholder="Doe"
                      aria-invalid="false"
                      type="text"
                    />
                  </div>
                </div>
              </div>

              <div data-slice-type="form_field" data-slice-variation="default" className="col-span-full is-required">
                <div>
                  <label htmlFor="slice.primary.email" className="required-span block text-lg font-bold leading-6 text-black">
                    Email Address {" "}
                    <span className="required-span inline mb-2 block text-lg font-bold leading-6 text-red-700">
                      *
                    </span>
                  </label>

                  <div className="relative mt-2 rounded-md shadow-sm">
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      id="slice.primary.email"
                      className="required block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                      placeholder="example@gmail.com"
                      aria-invalid="false"
                      type="text"
                    />
                  </div>
                </div>
              </div>

              <div data-slice-type="form_field" data-slice-variation="default" className="col-span-full is-required">
                <div>
                  <label htmlFor="slice.primary.phone" className="required-span block text-lg font-bold leading-6 text-black">
                    Phone Number {" "}
                    <span className="required-span inline mb-2 block text-lg font-bold leading-6 text-red-700">
                      *
                    </span>
                  </label>

                  <div className="relative rounded-md shadow-sm">
                    <input
                      onChange={(e) => setPhone(e.target.value)}
                      value={phone}
                      id="slice.primary.phone"
                      className="required block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                      placeholder="(123) 456-7890"
                      aria-invalid="false"
                      type="text"
                    />
                  </div>
                </div>
              </div>

              <div data-slice-type="form_field" data-slice-variation="default" className="col-span-full">
                <div>
                  <label htmlFor="company_name" className="mb-2 block text-lg font-bold leading-6 text-gray-700">
                    Company Name
                  </label>
                  <div className="relative mt-2 rounded-md shadow-sm">
                    <input
                      onChange={(e) => setCompanyname(e.target.value)}
                      value={companyname}
                      id="slice.primary.companyname"
                      className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                      placeholder="Your Company"
                      aria-invalid="false"
                      type="text"
                      name="companyname"
                    />
                  </div>
                </div>
              </div>

              <div data-slice-type="form_field" data-slice-variation="default" className="col-span-full is-required">
                <div>
                  <label htmlFor="contactingback" className="required-span mb-2 block text-lg font-bold leading-6 text-gray-700">
                    May I contact you back? {" "}
                    <span className="required-span inline mb-2 block text-lg font-bold leading-6 text-red-700">
                      * {" "}
                    </span>

                    <input
                      onChange={(e) => setContactingback(e.target.checked)}
                      checked={contactingback}
                      id="slice.primary.contactingback"
                      className="required inline block relative mt-2 rounded-md shadow-sm border-0 py-1.5 pl-3 sm:text-sm sm:leading-6"
                      placeholder="false"
                      aria-invalid="false"
                      type="checkbox"
                      name="contactingback"
                      required
                    />
                  </label>
                </div>
              </div>

              <div data-slice-type="form_field" data-slice-variation="default" className="col-span-full is-required">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="py-4 mt-4 border-t flex flex-col gap-5 bg-green-700 p-3 text-white font-bold es-call-to-action__link relative z-50 items-center justify-center rounded-md h-10 px-4 py-2 border
                    border-primary text-blue-500 w-fit px-6 py-2 font-medium text-black shadow-[3px_3px_0px_black] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none bg-[#194f99]"
                  aria-label="Go to the next step"
                  data-cya11y-org-font-size="16"
                  >
                    {isLoading ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true">

                        </span>
                        Sending...
                      </>
                    ) : "Send"}
                </button>
              </div>

              <div className="bg-slate-100 flex flex-col">
                {error &&
                  error.map((e) => (
                    <div className={`${ success ? "text-green-800" : "text-red-600" } px-5 py-2`} key={e}>
                      {e}
                    </div>
                  ))}
              </div>
            </div>
          </form>
        </div>
    </Bounded>
  );
};

export default ReachingOut;
