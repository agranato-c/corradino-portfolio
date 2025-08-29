import { Metadata } from "next";
import { notFound } from "next/navigation";
import { asImageSrc, asText, isFilled } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { Bounded } from "@/components/Bounded";
import { PrismicNextImage } from "@prismicio/next";
import { OtherProjectTypes } from "@/components/OtherProjectTypes";
import { ButtonLink } from "@/components/ButtonLink";

type Params = { uid: string };

export default async function Page({ params }: { params: Promise<Params> }) {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("projects", uid).catch(() => notFound());
  const slice = page.data.slices[0];
console.log(slice?.primary);
  return (
    <>
      <Bounded className="py-10">
        <div className="grid grid-cols-1 items-center gap-10 pb-10 lg:grid-cols-2">
          <div className="relative mb-14 flex justify-center pb-10">
            <PrismicNextImage
              field={slice?.primary.projectimage}
              width={450}
              height={450}
              priority
            alt=""
            style={{ padding: "absolute 10px 10px align-items: flex-start" }}
            />
          </div>


          <div className="text-white grid-cols-2 grid-rows-2">

            <h1 className="font-display mb-4 border-b border-neutral-700 pb-2 text-4xl md:text-5xl">
              <PrismicRichText field={slice?.primary.project_type} />
            </h1>

            <div className="space-y-6">

              <div className="flex grid grid-cols-subgrid items-center gap-4 border-t border-neutral-700 pt-6">
                <PrismicRichText field={slice?.primary.projects} />
              </div>
              {/* {isFilled.richText(slice?.primary.projectintro) && (
                <PrismicRichText field={slice?.primary.projectintro} />
              )} */}
            </div>
          </div>
        </div>

        <OtherProjectTypes currentProjectsUid={uid} />
      </Bounded>
    
      <ButtonLink
        className="es-call-to-action__link relative z-50"
        field={slice!.primary.calltoactionlink1} />

      <ButtonLink
        className="es-call-to-action__link relative z-50"
        field={slice!.primary.calltoactionlink2} />

      <ButtonLink
        className="es-call-to-action__link relative z-50"
        field={slice!.primary.calltoactionlink3} />

    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("projects", uid).catch(() => notFound());
  const slice = page.data.slices[0];
  
  return {
    title: asText(slice?.primary.project_type),
     description: `Discover ${asText(slice?.primary.project_type)}, the newest project from our portfolio.`,
     openGraph: {
       images: [{ url: asImageSrc(page.data.meta_image) ?? "" }],
      },
    };
  }

  export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("projects");

  return pages.map((page) => ({ uid: page.uid }));
}
