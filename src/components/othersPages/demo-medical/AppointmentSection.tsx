"use client";

import { useState } from "react";
import NiceSelect from "@/components/common/NiceSelect";
import DatePickerInput from "@/components/common/DatePickerInput";
import { serviceOptions } from "@/data/demo-medical/serviceOptions";
import { doctors } from "@/data/demo-medical/doctors";

// Gốc để value rác "buying/selling/financing/Other" cho dropdown bác sĩ —
// thay bằng slug thật (4 bác sĩ trang chủ, đúng như HTML gốc liệt kê).
const doctorOptions = [
  { value: "", label: "Choose Doctor" },
  ...doctors.map((doctor) => ({ value: doctor.slug, label: doctor.name })),
];

export default function AppointmentSection() {
  const [service, setService] = useState("");
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");

  return (
    <div className="section-book-appointment-3 tf-spacing-1">
      <div className="tf-container medium">
        <div className="wrap">
          <form className="form-book-appointment d-grid gap_20" onSubmit={(e) => e.preventDefault()}>
            <div className="text-center mb_10">
              <h4 className="mb_4">Book Appointment</h4>
              <p className="text-body-default text_secondary">
                Schedule a consultation to start your journey to better health.
              </p>
            </div>
            <div className="d-grid gap_20">
              <fieldset>
                <input id="fullName" type="text" placeholder="Your Name" name="text" aria-required="true" required />
              </fieldset>
              <fieldset>
                <input id="phone" type="number" placeholder="Phone Number" name="text" aria-required="true" required />
              </fieldset>
              <NiceSelect options={serviceOptions} value={service} onChange={setService} />
              <NiceSelect options={doctorOptions} value={doctor} onChange={setDoctor} />
              <DatePickerInput id="datepicker" placeholder="mm/dd/yyyy" value={date} onChange={setDate} />
              <fieldset>
                <textarea id="comment" rows={4} placeholder="Your message" aria-required="true" required />
              </fieldset>
              <button type="submit" className="tf-btn btn-hover-animate btn-bg-1 btn-px-28 w-full">
                <span>Book Appointment</span>
                <span className="bg-effect" />
              </button>
            </div>
          </form>
          <div className="box-info">
            <div className="heading mb_48">
              <h4 className="mb_8">Reach Out to Us</h4>
              <p className="text-body-default text_secondary">
                We&apos;re here to assist with any questions, concerns, or inquiries—contact us today!
              </p>
            </div>
            <ul className="info-list d-grid gap_20">
              <li>
                <div className="icon">
                  <i className="icon-PhoneCall" />
                </div>
                <div className="content">
                  <div className="text-caption-1 text_secondary mb_4">Emergency Contact:</div>
                  <h6 className="text_primary-color">1-555-678-8888</h6>
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="icon-MapPin" />
                </div>
                <div className="content">
                  <div className="text-caption-1 text_secondary mb_4">Home Visit:</div>
                  <h6 className="text_primary-color">101 E 129th St, East Chicago, 2nd Floor, NY</h6>
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="icon-Alarm" />
                </div>
                <div className="content">
                  <div className="text-caption-1 text_secondary mb_4">Working Hours:</div>
                  <h6 className="text_primary-color">24/7 from Mon to Sat</h6>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
