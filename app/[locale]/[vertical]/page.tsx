import { notFound } from "next/navigation";
import { HomePage } from "../../components/HomePage";
import { Vertical, verticals, verticalIds } from "../../config/verticals";

// Generate static params for all verticals
export function generateStaticParams() {
  return verticalIds.map((vertical) => ({
    vertical,
  }));
}

// Generate metadata for each vertical
export async function generateMetadata({
  params,
}: {
  params: Promise<{ vertical: string }>;
}) {
  const { vertical } = await params;
  const config = verticals[vertical as Vertical];

  if (!config) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: `${config.label} | Procedure`,
    description: config.description,
  };
}

export default async function VerticalPage({
  params,
}: {
  params: Promise<{ vertical: string }>;
}) {
  const { vertical } = await params;

  // Validate that the vertical exists
  if (!(vertical in verticals)) {
    notFound();
  }

  return <HomePage />;
}
