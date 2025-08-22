import { Metadata } from "next";
import { notFound } from "next/navigation";
import { asImageSrc, asText } from "@prismicio/client";
import { PrismicRichText, PrismicText } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { Bounded } from "@/components/Bounded";
import { PrismicNextImage } from "@prismicio/next";
import { components } from "@/slices";
import { OtherProjectTypes } from "@/components/OtherProjectTypes";
import { ButtonLink } from "@/components/ButtonLink";

type Params = { uid: string };

export default async function Page({ params }: { params: Promise<Params> }) {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("projectdetails", uid).catch(() => notFound());
  const slice = page.data.slices[0];
  return (
    <>
      <Bounded className="py-10">
        <div className="grid grid-cols-1 items-center gap-10 pb-10 lg:grid-cols-2">
          <div className="relative mb-14 flex justify-center pb-10">
            {/* <PrismicNextImage
              field={slice?.primary.projectimage}
              width={600}
              height={600}
              priority
              alt=""
              className="absolute top-90% -scale-y-100 [mask-image:linear-gradient(to_bottom, rgba(0, 0, 0, 0)_70%, rgba(0, 0, 0, .15)_100%)]"
            /> */}
          <PrismicNextImage
            field={slice?.primary.projectimage}
            width={450}
            height={450}
            priority
            alt=""
            className="relative" />
        </div>

        {/* Product info section */}
        <div className="text-white grid-cols-2">

          <h1 className="font-display mb-4 border-b border-neutral-700 pb-2 text-4xl md:text-5xl">
            <PrismicRichText field={slice?.primary.project_type} fallback="Projects" />
          </h1>

          <div className="space-y-6">
            {/* <p className="text-md font-semibold">
              Project Title
            </p> */}


            <div className="flex items-center gap-4 border-t border-neutral-700 pt-6">
              <PrismicRichText field={slice?.primary.projects} />
            </div>

            <h2 className="font-display mb-8 text-3xl text-white md:text-4xl">
              <PrismicText field={slice?.primary.projectintro} />
            </h2>
          </div>
        </div>
      </div>

      <OtherProjectTypes currentProjectsUid={uid} />
    </Bounded>
    
      <ButtonLink
        className="es-call-to-action__link relative z-50"
        field={slice.primary.calltoactionlink1} />
      <ButtonLink
        className="es-call-to-action__link relative z-50"
        field={slice.primary.calltoactionlink2} />
      <ButtonLink
        className="es-call-to-action__link relative z-50"
        field={slice.primary.calltoactionlink3} />
    </>
  );
}

// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<Params>;
// }): Promise<Metadata> {
//   const { uid } = await params;
//   const client = createClient();
//   const page = await client.getByUID("projectdetails", uid).catch(() => notFound());

//   return {
//     title: asText(page.data.title),
//     description: `Discover ${asText(page.data.title)}, the newest project from our portfolio.`,
//     openGraph: {
//       images: [{ url: asImageSrc(page.data.meta_image) ?? "" }],
//     },
//   };
// }

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("projects");

  return pages.map((page) => ({ uid: page.uid }));
}
