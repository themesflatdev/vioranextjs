import PageHeaderSpa from "@/components/othersPages/demo-spasalon/PageHeaderSpa";
import AboutSection from "@/components/homes/demo-spasalon/AboutSection";
import GallerySection from "@/components/homes/demo-spasalon/GallerySection";
import ImageCompareSection from "@/components/othersPages/demo-spasalon/ImageCompareSection";
import TeamGridSection from "@/components/othersPages/demo-spasalon/TeamGridSection";
import LookbookSection from "@/components/othersPages/demo-spasalon/LookbookSection";
import BookingSection from "@/components/homes/demo-spasalon/BookingSection";
import { teamMembers } from "@/data/demo-spasalon/teamMembers";

export default function SpasalonAboutPage() {
  return (
    <>
      <PageHeaderSpa crumb="About Us" title="About Us" />
      <div className="main-content">
        <AboutSection />
        <GallerySection />
        <ImageCompareSection />
        <TeamGridSection members={teamMembers.slice(0, 3)} gridClassName="md-col-3" />
        <LookbookSection />
        <BookingSection py0 />
      </div>
    </>
  );
}
