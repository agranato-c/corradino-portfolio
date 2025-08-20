import { Metadata } from "next";
import { notFound } from "next/navigation";
import { asImageSrc } from "@prismicio/client";
import { PrismicRichText, SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { Bounded } from "@/app/components/Bounded";
import { OtherProjTypes } from "@/app/components/OtherProjTypes";

type Params = { uid: string };

export default async function Page({ params }: { params: Promise<Params> }) {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("projectdetails", uid).catch(() => notFound());

  return (
    <Bounded className="py-10">
      <div className="grid grid-cols-1 items-center gap-10 pb-10 lg:grid-cols-2">

        <div className="text-white">
          <h1 className="font-display mb-4 border-b border-neutral-700 pb-2 text-4xl md:text-5xl">
            {/* <PrismicRichText field={page.data.projectdetails} fallback="Projects" /> */}
          </h1>

          <div className="space-y-6">
            <p className="text-md font-semibold">
              Project Title
            </p>

            {/* <PrismicRichText field={page.data.description} /> */}

            <div className="flex items-center gap-4 border-t border-neutral-700 pt-6">


            </div>
          </div>
        </div>
      </div>

      <OtherProjTypes currentProjectsUid={uid} />
    </Bounded>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { uid } = await params;
  const client = createClient();
  const page = await client
    .getByUID("projectdetails", uid)
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      images: [{ url: asImageSrc(page.data.meta_image) ?? "" }],
    },
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("projectdetails");

  return pages.map((page) => ({ uid: page.uid }));
}
