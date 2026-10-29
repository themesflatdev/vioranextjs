import type { Metadata } from "next";
import PageHeaderSpa from "@/components/othersPages/demo-spasalon/PageHeaderSpa";
import TeamGridSection from "@/components/othersPages/demo-spasalon/TeamGridSection";
import GallerySection from "@/components/homes/demo-spasalon/GallerySection";
import BookingSection from "@/components/homes/demo-spasalon/BookingSection";
import { teamMembers } from "@/data/demo-spasalon/teamMembers";

export const metadata: Metadata = {
  title: "Our Staff",
  description: "Meet our team of expert therapists and staff.",
};

export default function SpasalonStaffsPage() {
  return (
    <>
      <PageHeaderSpa crumb="Our Staffs" title="Our Staffs" />
      <div className="main-content">
        <TeamGridSection members={teamMembers} gridClassName="lg-col-3 sm-col-2" spacing hoverImage />
        <GallerySection />
        <BookingSection py0 />
      </div>
    </>
  );
}
