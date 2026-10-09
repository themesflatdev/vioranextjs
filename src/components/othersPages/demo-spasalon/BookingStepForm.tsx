"use client";

import { useState } from "react";
import Image from "next/image";
import NiceSelect from "@/components/common/NiceSelect";
import { categoryOptions, serviceOptions, staffOptions, paymentOptions } from "@/data/demo-spasalon/booking";

const STEPS = ["1. Service", "2. TIME", "3. Details", "4. Payment", "5. Done"];

// 5-step booking form converted from the original jQuery multiStepForm
// (booking.html) to plain React state — no validation beyond `required`
// markers on inputs (kept as visual parity only, same as source, since the
// original's Next/Submit buttons never actually block on invalid fields).
export default function BookingStepForm() {
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState(categoryOptions[0].value);
  const [service, setService] = useState(serviceOptions[0].value);
  const [staff, setStaff] = useState(staffOptions[0].value);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");

  const next = () => setStep((s) => Math.min(s + 1, STEPS.length));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  const startOver = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(1);
    setCategory(categoryOptions[0].value);
    setService(serviceOptions[0].value);
    setStaff(staffOptions[0].value);
    setDate("");
    setTime("");
    setName("");
    setPhone("");
    setEmail("");
    setComment("");
    setPayment("");
  };

  return (
    <div className="wg-booking-step">
      <ul className="steps">
        {STEPS.map((label, i) => (
          <li className={step === i + 1 ? "active" : undefined} key={label}>
            <span className="title-step d-block text_primary-color text-uppercase letter-spacing-1 text-label lh-16">
              {label}
            </span>
            <span className="stepbar" />
          </li>
        ))}
      </ul>

      <form id="multiStepForm" className="form-service-booking style-2" onSubmit={startOver}>
        {step === 1 && (
          <div className="form-step active">
            <div className="error-message" />
            <div className="text-body-default text_secondary-color mb_24">Please Select Service:</div>
            <div className="tf-grid-layout md-col-3">
              <div>
                <span className="d-block mb_12 text-button text_secondary-color">Category</span>
                <NiceSelect options={categoryOptions} value={category} onChange={setCategory} />
              </div>
              <div>
                <span className="d-block mb_12 text-button text_secondary-color">Service</span>
                <NiceSelect options={serviceOptions} value={service} onChange={setService} />
              </div>
              <div>
                <span className="d-block mb_12 text-button text_secondary-color">Staff:</span>
                <NiceSelect options={staffOptions} value={staff} onChange={setStaff} />
              </div>
              <div>
                <label className="d-block mb_12 text-button text_secondary-color">Date:</label>
                <fieldset>
                  <input type="date" required value={date} onChange={(e) => setDate(e.target.value)} />
                </fieldset>
              </div>
              <div>
                <label className="d-block mb_12 text-button text_secondary-color">Time:</label>
                <fieldset>
                  <input type="time" required value={time} onChange={(e) => setTime(e.target.value)} />
                </fieldset>
              </div>
            </div>
            <div className="btn-wrap">
              <button type="button" className="tf-btn btn-switch-text btn-step-next ms-auto" onClick={next}>
                <span>
                  <span className="btn-double-text" data-text="Next">
                    Next
                  </span>
                </span>
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="form-step active">
            <div className="error-message mb_24" />
            <div className="text-body-default text_secondary-color mb_24">
              Below you can find a list of available time slots. Click on a time slot to proceed with booking:
            </div>
            <div className="wrap-calendar">
              <Image loading="lazy" width={1290} height={865} src="/assets/images/demo-spasalon/calendar.jpg" alt="calendar" />
            </div>
            <div className="btn-wrap d-flex justify-content-between">
              <button type="button" className="tf-btn btn-switch-text btn-step-prev" onClick={back}>
                <span>
                  <span className="btn-double-text" data-text="Previous">
                    Previous
                  </span>
                </span>
              </button>
              <button type="button" className="tf-btn btn-switch-text btn-step-next" onClick={next}>
                <span>
                  <span className="btn-double-text" data-text="Next">
                    Next
                  </span>
                </span>
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="form-step active">
            <div className="error-message text-body-default mb_24" />
            <p className="text-body-default text_secondary-color mb_16">Please provide your details below:</p>
            <div className="tf-grid-layout md-col-3 mb_24">
              <fieldset>
                <label htmlFor="name" className="text-button text_secondary-color mb_12">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your Name*"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </fieldset>
              <fieldset>
                <label htmlFor="phone" className="text-button text_secondary-color mb_12">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  placeholder="Phone*"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </fieldset>
              <fieldset>
                <label htmlFor="email" className="text-button text_secondary-color mb_12">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your Email*"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </fieldset>
            </div>
            <fieldset>
              <label htmlFor="comment" className="text-button text_secondary-color mb_12">
                Note:
              </label>
              <textarea
                id="comment"
                rows={4}
                placeholder="Write comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </fieldset>
            <div className="error-message" />
            <div className="btn-wrap d-flex justify-content-between">
              <button type="button" className="tf-btn btn-switch-text btn-step-prev" onClick={back}>
                <span>
                  <span className="btn-double-text" data-text="Previous">
                    Previous
                  </span>
                </span>
              </button>
              <button type="button" className="tf-btn btn-switch-text btn-step-next" onClick={next}>
                <span>
                  <span className="btn-double-text" data-text="Next">
                    Next
                  </span>
                </span>
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="form-step active">
            <p className="text-body-default text_secondary-color mb_16">Please tell us how would you like to pay</p>
            <div className="radio-group d-grid gap_16">
              {paymentOptions.map((option) => (
                <fieldset className="radio-item style-2" key={option.value}>
                  <label className="radio d-flex align-items-center gap_8">
                    <input
                      type="radio"
                      name="payment"
                      required
                      checked={payment === option.value}
                      onChange={() => setPayment(option.value)}
                    />
                    <span className="radio-custom" />
                    <span className="text-body-default radio-title">{option.label}</span>
                  </label>
                </fieldset>
              ))}
            </div>
            <div className="error-message" />
            <div className="btn-wrap d-flex justify-content-between">
              <button type="button" className="tf-btn btn-switch-text btn-step-prev" onClick={back}>
                <span>
                  <span className="btn-double-text" data-text="Previous">
                    Previous
                  </span>
                </span>
              </button>
              <button type="button" className="tf-btn btn-switch-text btn-step-next" onClick={next}>
                <span>
                  <span className="btn-double-text" data-text="Next">
                    Next
                  </span>
                </span>
              </button>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="form-step active">
            <p className="text-body-default text_secondary-color">
              Thank you! Your booking is complete. An email with details of your booking has been sent to you.
            </p>
            <div className="btn-wrap">
              <button type="submit" className="tf-btn btn-switch-text">
                <span>
                  <span className="btn-double-text" data-text="Start Over">
                    Start Over
                  </span>
                </span>
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
