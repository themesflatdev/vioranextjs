import { notFound } from "next/navigation";
import PageHeaderSpa from "@/components/othersPages/demo-spasalon/PageHeaderSpa";
import MemberDetailBody from "@/components/othersPages/demo-spasalon/MemberDetailBody";
import PackagesSection from "@/components/homes/demo-spasalon/PackagesSection";
import BookingSection from "@/components/homes/demo-spasalon/BookingSection";
import { teamMembers } from "@/data/demo-spasalon/teamMembers";

export function generateStaticParams() {
  return teamMembers.map((member) => ({ slug: member.slug }));
}

export default async function SpasalonMemberDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = teamMembers.find((m) => m.slug === slug);
  if (!member) notFound();

  return (
    <>
      <PageHeaderSpa crumb="Member Details" title="Member Details" />
      <div className="main-content">
        <MemberDetailBody member={member} />
        <PackagesSection />
        <BookingSection py0 />
      </div>
    </>
  );
}
