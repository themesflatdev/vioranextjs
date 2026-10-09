"use client";

import { useState } from "react";
import NiceSelect, { type NiceSelectOption } from "@/components/common/NiceSelect";
import { useRangeThumb } from "@/hooks/useRangeThumb";

const advices = [
  {
    icon: "icon-Calculator",
    title: "Make A Calculator",
    text: "Estimate your treatment cost in seconds by choosing the procedures you need.",
  },
  {
    icon: "icon-Alarm",
    title: "Check Free Time",
    text: "Review our working hours and find a convenient time slot for your visit.",
  },
  {
    icon: "icon-Calendar",
    title: "Arrange Checkup",
    text: "Book your consultation online and let our team prepare everything in advance.",
  },
  {
    icon: "icon-Car",
    title: "Arrive In Time",
    text: "Plan your trip, arrive a few minutes early and complete your check-in with ease.",
  },
  {
    icon: "icon-Smiley",
    title: "Finish The Checkup",
    text: "Receive your results and a personalized care plan before you leave.",
  },
];

const chooseServicesOption: NiceSelectOption = { value: "", label: "Choose Services" };

type CalculatorRow = {
  label: string;
  options: NiceSelectOption[];
  rangeDefault: number;
};

type CalculatorBox = {
  heading: string;
  rows: CalculatorRow[];
};

// Lưới option giữ nguyên lỗi demo gốc (box 2, "Teeth Service" lặp lại
// "Wisdom tooth extractions" 3 lần) — không tự sửa.
const boxes: CalculatorBox[] = [
  {
    heading: "Cosmetic Dentistry procedures",
    rows: [
      {
        label: "Dental Service",
        options: [
          chooseServicesOption,
          { value: "lumineers-veneers", label: "Lumineers veneers" },
          { value: "porcelain-veneers", label: "Porcelain veneers" },
          { value: "composite-veneers", label: "Composite veneers" },
        ],
        rangeDefault: 8,
      },
      {
        label: "Teeth Service",
        options: [
          chooseServicesOption,
          { value: "professional", label: "Professional" },
          { value: "dentist-dispensed-at-home-systems", label: "Dentist-dispensed at-home systems" },
        ],
        rangeDefault: 8,
      },
    ],
  },
  {
    heading: "Basic Dentistry Procedures",
    rows: [
      {
        label: "Dental Filling",
        options: [
          chooseServicesOption,
          { value: "front-teeth-dental-bonding", label: "Front teeth dental bonding" },
          { value: "back-teeth-dental-bonding", label: "Back teeth dental bonding" },
          { value: "dental-amalgam", label: "Dental amalgam" },
        ],
        rangeDefault: 5,
      },
      {
        label: "Teeth Service",
        options: [
          chooseServicesOption,
          { value: "pulling-teeth", label: "Pulling Teeth" },
          { value: "wisdom-tooth-extractions-1", label: "Wisdom tooth extractions" },
          { value: "wisdom-tooth-extractions-2", label: "Wisdom tooth extractions" },
          { value: "wisdom-tooth-extractions-3", label: "Wisdom tooth extractions" },
        ],
        rangeDefault: 8,
      },
    ],
  },
  {
    heading: "Reconstructive Dental Procedures",
    rows: [
      {
        label: "Dentures",
        options: [
          chooseServicesOption,
          { value: "dental-crowns", label: "Dental crowns" },
          { value: "conventional-dental-bridges", label: "Conventional dental bridges" },
          { value: "maryland-bridges", label: "Maryland Bridges" },
        ],
        rangeDefault: 8,
      },
      {
        label: "Teeth Service",
        options: [
          chooseServicesOption,
          { value: "complete-dentures", label: "Complete dentures" },
          { value: "partial-dentures", label: "Partial dentures" },
        ],
        rangeDefault: 8,
      },
    ],
  },
];

function RangeRow({ initial }: { initial: number }) {
  const { value, setValue, offset, sliderRef } = useRangeThumb(0, 10, initial);
  return (
    <div className="d-flex align-items-center gap_12">
      <div className="title text-button text_primary">Number</div>
      <div className="tf-range-slider">
        <input
          ref={sliderRef}
          type="range"
          className="slider"
          min={0}
          max={10}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />
        <div className="thumb thumb-circle h4" style={{ left: `${offset}px` }}>
          {value}
        </div>
      </div>
    </div>
  );
}

function CalculatorRows({ rows }: { rows: CalculatorRow[] }) {
  const [values, setValues] = useState<string[]>(() => rows.map(() => ""));

  return (
    <div className="d-grid gap_20">
      {rows.map((row, i) => (
        <div key={row.label + i} style={{ display: "contents" }}>
          <div className="d-flex align-items-center gap_12">
            <div className="title text-button text_primary">{row.label}</div>
            <NiceSelect
              options={row.options}
              value={values[i]}
              onChange={(v) =>
                setValues((prev) => {
                  const next = [...prev];
                  next[i] = v;
                  return next;
                })
              }
            />
          </div>
          <RangeRow initial={row.rangeDefault} />
        </div>
      ))}
    </div>
  );
}

// JS gốc (initSwitchPriceValue/rangeSlide) KHÔNG tính tổng — "$120" là chữ
// TĨNH trong HTML gốc, giữ nguyên, không tự thêm logic tính tiền (giới hạn
// của theme gốc).
export default function CostCalculatorSection() {
  return (
    <div className="section-cost-calculator tf-spacing-1">
      <div className="tf-container medium">
        <div className="box-calculator">
          <div className="box-left">
            <h4 className="title mb_48">General Advices</h4>
            <div className="wrap-box-icon">
              {advices.map((advice) => (
                <div className="box-icon" key={advice.title}>
                  <div className="icon">
                    <i className={advice.icon} />
                  </div>
                  <div className="content">
                    <h6 className="mb_4 text_primary-color">{advice.title}</h6>
                    <p className="text_secondary text-body-default">{advice.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="box-right">
            <form className="form-calculator" onSubmit={(e) => e.preventDefault()}>
              {boxes.map((box) => (
                <div className="box" key={box.heading}>
                  <div>
                    <h3 className="heading mb_40">{box.heading}</h3>
                    <CalculatorRows rows={box.rows} />
                  </div>
                </div>
              ))}
              <div className="wrap-total">
                <span className="text-button text_primary">Total:</span>
                <h6 className="total font-main text-white">$120</h6>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
