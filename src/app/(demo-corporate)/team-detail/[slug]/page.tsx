import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { teamMembers } from "@/data/demo-corporate/teamMembers";
import TeamDetailBody from "@/components/othersPages/demo-corporate/TeamDetailBody";
import PartnerMarquee from "@/components/othersPages/demo-corporate/PartnerMarquee";

export function generateStaticParams() {
  return teamMembers.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = teamMembers.find((m) => m.slug === slug);
  return { title: member ? member.name : "Not Found" };
}

export default async function TeamDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = teamMembers.find((m) => m.slug === slug);
  if (!member) notFound();

  return (
    <div className="main-content">
      <TeamDetailBody member={member} />
      <PartnerMarquee noTopPadding />
    </div>
  );
}
