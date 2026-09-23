import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CraftCollectionPage } from "@/components/craft/CraftCollectionPage/CraftCollectionPage";
import {
  craftCollections,
  getCraftCollection,
} from "@/data";

type CraftCollectionRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return craftCollections.map((collection) => ({
    slug: collection.slug,
  }));
}

export async function generateMetadata({
  params,
}: CraftCollectionRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCraftCollection(slug);

  if (!collection) {
    return {
      title: "Collection introuvable | Sareine Craft",
    };
  }

  return {
    title: `${collection.name} | Sareine Craft`,
    description: collection.shortDescription,
  };
}

export default async function CraftCollectionRoute({
  params,
}: CraftCollectionRouteProps) {
  const { slug } = await params;
  const collection = getCraftCollection(slug);

  if (!collection) {
    notFound();
  }

  return <CraftCollectionPage collection={collection} />;
}