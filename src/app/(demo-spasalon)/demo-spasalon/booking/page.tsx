import PageHeaderSpa from "@/components/othersPages/demo-spasalon/PageHeaderSpa";
import BookingStepForm from "@/components/othersPages/demo-spasalon/BookingStepForm";

export default function SpasalonBookingPage() {
  return (
    <>
      <PageHeaderSpa crumb="Booking" title="Booking" />
      <div className="main-content">
        <div className="section-booking-2 tf-spacing-1">
          <div className="tf-container medium">
            <BookingStepForm />
          </div>
        </div>
      </div>
    </>
  );
}
