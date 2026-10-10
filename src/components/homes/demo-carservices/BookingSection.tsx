"use client";

import { useState } from "react";
import Image from "next/image";
import { useScaleUpImage } from "@/hooks/useScaleUpImage";
import { useSplitTextReveal } from "@/hooks/useSplitTextReveal";
import NiceSelect from "@/components/common/NiceSelect";

const TOTAL_STEPS = 3;

const serviceTypeOptions = [
  { value: "", label: "Oil Change" },
  { value: "tireRotation", label: "Tire Rotation" },
  { value: "brakeCheck", label: "Brake Check" },
];

const carModelOptions = [
  { value: "", label: "Select model" },
  { value: "tireRotation", label: " Select model 1" },
  { value: "brakeCheck", label: "Select model 2" },
];

const yearOptions = [
  { value: "", label: "Select Year" },
  { value: "tireRotation", label: "2022" },
  { value: "brakeCheck", label: "2023" },
  { value: "brakeCheck2", label: "2024" },
  { value: "brakeCheck3", label: "2025" },
];

export default function BookingSection() {
  const scaleRef = useScaleUpImage<HTMLDivElement>();
  const headingRef = useSplitTextReveal<HTMLHeadingElement>("blur-fade");
  const [currentStep, setCurrentStep] = useState(0);
  const [serviceType, setServiceType] = useState("");
  const [state, setState] = useState<"colorado" | "southDakota" | null>(null);
  const [carModel, setCarModel] = useState("");
  const [year, setYear] = useState("");

  const percent = Math.round(((currentStep + 1) / TOTAL_STEPS) * 100);

  const nextStep = () => {
    setCurrentStep((step) => Math.min(step + 1, TOTAL_STEPS - 1));
  };

  return (
    <div className="section-booking-2">
      <div className="box-booking booking-step">
        <div className="box-left">
          <div className="img-style scale-up-img overflow-hidden" ref={scaleRef}>
            <Image className="scale-up" loading="lazy" width={1060} height={714} src="/assets/images/demo-carservices/booking-service.jpg" alt="booking" />
          </div>
          <div className="content-inner">
            <div className="content">
              <div className="heading">
                <h3 className="mb_8 text_white split-text effect-blur-fade" ref={headingRef}>
                  Get Started
                </h3>
                <p className="text-body-2 text_white wow fadeInUp" data-wow-delay=".2s">
                  We’re here to help with your car needs, from maintenance to major repairs always with care.
                </p>
              </div>
              <ul className="wow fadeInUp" data-wow-delay=".4s">
                <li>
                  <div className="icon">
                    <i className="icon-MapPinLine" />
                  </div>
                  <div>
                    <div className="text-label text-uppercase text_white mb_4 lh-16 letter-spacing-1">Address:</div>
                    <div className="h6">123 Creative Ave, New York, NY 10001</div>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="icon-PhoneCall" />
                  </div>
                  <div>
                    <div className="text-label text-uppercase text_white mb_4 lh-16 letter-spacing-1">Phone:</div>
                    <div className="h6"> 1-555-678-8888</div>
                  </div>
                </li>
              </ul>
              <span className="dot dot-top-left" />
              <span className="dot dot-top-right" />
              <span className="dot dot-bot-left" />
              <span className="dot dot-bot-right" />
            </div>
          </div>
        </div>

        <div className="box-right">
          <div className="heading">
            <h6 id="stepTitle" className="font-main mb_12">
              {`Step ${currentStep + 1} of ${TOTAL_STEPS}`}
            </h6>
            <div className="progress-container">
              <div className="progress" id="progress" style={{ width: `${percent}%` }} />
              <div className="progress-text" id="progressText">
                {`${percent}%`}
              </div>
            </div>
          </div>

          {/* Step 1 */}
          <div className={`step${currentStep === 0 ? " active" : ""}`}>
            <form className="form-service-booking">
              <div>
                <h6 className="mb_12">Select Service Type:</h6>
                <NiceSelect options={serviceTypeOptions} value={serviceType} onChange={setServiceType} />
              </div>
              <div>
                <h6 className="mb_12">Preferred Date & Time:</h6>
                <div className="tf-grid-layout md-col-2 gap_20">
                  <fieldset>
                    <input type="date" className="form-control" />
                  </fieldset>
                  <fieldset>
                    <input type="time" className="form-control" />
                  </fieldset>
                </div>
              </div>
              <div>
                <div className="wrap-radio d-flex align-items-center flex-wrap mb_12">
                  <h6>Select State:</h6>
                  <div className="radio-group">
                    <fieldset className="radio-item">
                      <label className="radio d-flex align-items-center gap_8">
                        <input
                          type="radio"
                          name="radio"
                          id="radio1"
                          checked={state === "colorado"}
                          onChange={() => setState("colorado")}
                        />
                        <span className="radio-custom" />
                        <span className="text-body-2 text_white">Colorado</span>
                      </label>
                    </fieldset>
                    <fieldset className="radio-item style-1">
                      <label className="radio d-flex align-items-center gap_8">
                        <input
                          type="radio"
                          name="radio"
                          id="radio2"
                          checked={state === "southDakota"}
                          onChange={() => setState("southDakota")}
                        />
                        <span className="radio-custom" />
                        <span className="text-body-2 text_white">South Dakota</span>
                      </label>
                    </fieldset>
                  </div>
                </div>
                <fieldset>
                  <input type="text" placeholder="Enter your location" />
                </fieldset>
              </div>
              <div className="tf-btn btn-bg-primary-2 w-full btn-nextStep" onClick={nextStep}>
                <span>Next Step</span>
                <span />
              </div>
            </form>
          </div>

          {/* Step 2 */}
          <div className={`step${currentStep === 1 ? " active" : ""}`}>
            <form className="form-service-booking">
              <div>
                <h6 className="mb_12">Car Make & Model:</h6>
                <NiceSelect options={carModelOptions} value={carModel} onChange={setCarModel} />
              </div>
              <div>
                <h6 className="mb_12">Year:</h6>
                <NiceSelect options={yearOptions} value={year} onChange={setYear} />
              </div>
              <div>
                <h6 className="mb_12">
                  License Plate <span className="text_muted">(optional)</span>:
                </h6>
                <fieldset>
                  <input type="text" placeholder="Enter license plate number" />
                </fieldset>
              </div>
              <div className="tf-btn btn-bg-primary-2 w-full btn-nextStep" onClick={nextStep}>
                <span>Next Step</span>
                <span />
              </div>
            </form>
          </div>

          {/* Step 3 */}
          <div className={`step${currentStep === 2 ? " active" : ""}`}>
            <form className="form-service-booking" onSubmit={(e) => e.preventDefault()}>
              <div>
                <h6 className="mb_12">Full Name:</h6>
                <fieldset>
                  <input type="text" placeholder="Enter your full name" />
                </fieldset>
              </div>
              <div>
                <h6 className="mb_12">Phone Number:</h6>
                <fieldset>
                  <input type="number" placeholder="Enter your phone number" />
                </fieldset>
              </div>
              <div>
                <h6 className="mb_12">Email Address:</h6>
                <fieldset>
                  <input type="email" placeholder="Enter your email address" />
                </fieldset>
              </div>
              <button type="submit" className="tf-btn btn-bg-primary-2 btn-hover-animate-2 w-full">
                <span>Submit</span>
                <span />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
