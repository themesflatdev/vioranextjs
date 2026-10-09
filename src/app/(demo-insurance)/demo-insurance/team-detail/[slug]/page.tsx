import { notFound } from "next/navigation";
import PageTitleBreadcrumb from "@/components/othersPages/demo-insurance/PageTitleBreadcrumb";
import TeamDetailBody from "@/components/othersPages/demo-insurance/TeamDetailBody";
import FAQSection from "@/components/homes/demo-insurance/FAQSection";
import { teamMembers } from "@/data/demo-insurance/teamMembers";

export function generateStaticParams() {
  return teamMembers.map((member) => ({ slug: member.slug }));
}

// Breadcrumb/title literally say "Our Team" in the source HTML (a
// copy-paste leftover from our-team.html) — kept as-is per CLAUDE.md rule
// 4, not renamed to "Team Detail".
export default async function TeamDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = teamMembers.find((m) => m.slug === slug);
  if (!member) notFound();

  return (
    <>
      <PageTitleBreadcrumb breadcrumbLabel="Our Team" title="Our Team" />
      <div className="main-content">
        <TeamDetailBody member={member} />
        <FAQSection />
      </div>
    </>
  );
}
