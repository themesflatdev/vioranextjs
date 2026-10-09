import AboutTeamHero from "@/components/othersPages/demo-corporate/AboutTeamHero";
import TeamGridSection from "@/components/othersPages/demo-corporate/TeamGridSection";
import ShowcaseGallery from "@/components/common/ShowcaseGallery";
import PartnerMarquee from "@/components/othersPages/demo-corporate/PartnerMarquee";
import { teamMembers } from "@/data/demo-corporate/teamMembers";

export default function OurTeamPage() {
  return (
    <div className="main-content">
      <AboutTeamHero />
      <TeamGridSection members={teamMembers} />
      <ShowcaseGallery
        sub={undefined}
        title="Take A Closer Look At The People, Passion, And Purpose Behind Everything We Build"
        spacingModifier={null}
        capitalize={false}
        animateTitle
      />
      <PartnerMarquee noTopPadding />
    </div>
  );
}
