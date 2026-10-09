import { notFound } from "next/navigation";
import { teamMembers } from "@/data/demo-agency/teamMembers";
import PageTitleBreadcrumb from "@/components/othersPages/demo-agency/PageTitleBreadcrumb";
import TeamDetailAgencyBody from "@/components/othersPages/demo-agency/TeamDetailAgencyBody";
import ContactTeaser3 from "@/components/othersPages/demo-agency/ContactTeaser3";

export function generateStaticParams() {
  return teamMembers.map((member) => ({ slug: member.slug }));
}

export default async function AgencyTeamDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = teamMembers.find((m) => m.slug === slug);
  if (!member) notFound();

  return (
    <>
      <PageTitleBreadcrumb breadcrumbLabel="Team Details" title="Our Team" />
      <div className="main-content">
        <TeamDetailAgencyBody member={member} />
        <ContactTeaser3 />
      </div>
    </>
  );
}
