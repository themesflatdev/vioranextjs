import { notFound } from "next/navigation";
import { jobs } from "@/data/demo-corporate/jobs";
import CarrerDetailBody from "@/components/othersPages/demo-corporate/CarrerDetailBody";
import CtaSection5 from "@/components/othersPages/demo-corporate/CtaSection5";

export function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export default async function CarrerDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);
  if (!job) notFound();

  return (
    <div className="main-content">
      <CarrerDetailBody job={job} />
      <CtaSection5
        containerClassName="tf-container tf-spacing-1 pt-0"
        description="Ready to bring your talent and ambition to a team that values impact? Explore this opportunity and take the next step in your career."
      />
    </div>
  );
}
