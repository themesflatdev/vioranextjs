import type { Metadata } from "next";
import PageHeaderSpa from "@/components/othersPages/demo-spasalon/PageHeaderSpa";
import CalendarSection from "@/components/othersPages/demo-spasalon/CalendarSection";
import PackagesSection from "@/components/homes/demo-spasalon/PackagesSection";
import BookingSection from "@/components/homes/demo-spasalon/BookingSection";

export const metadata: Metadata = {
  title: "Calendar",
  description: "Check availability and schedule your visit.",
};

// Route/menu label keeps the original's "Calender" misspelling (the real
// slug and nav item), but the page's own breadcrumb/h2 content spells it
// correctly as "Calendar" — confirmed directly in calender.html, not an
// assumption.
export default function SpasalonCalenderPage() {
  return (
    <>
      <PageHeaderSpa crumb="Calendar" title="Calendar" />
      <div className="main-content">
        <CalendarSection />
        <PackagesSection />
        <BookingSection py0 />
      </div>
    </>
  );
}
