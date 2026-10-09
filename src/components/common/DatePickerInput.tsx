"use client";

import { useEffect, useRef, useState } from "react";

type DatePickerInputProps = {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

const WEEKDAYS = [
  { short: "Su", title: "Sunday" },
  { short: "Mo", title: "Monday" },
  { short: "Tu", title: "Tuesday" },
  { short: "We", title: "Wednesday" },
  { short: "Th", title: "Thursday" },
  { short: "Fr", title: "Friday" },
  { short: "Sa", title: "Saturday" },
];

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function pad2(n: number) {
  return n < 10 ? `0${n}` : String(n);
}

// Mirrors jQuery UI's default dateFormat "mm/dd/yy" ("yy" = 4-digit year,
// a jQuery UI naming quirk, not a typo).
function formatDate(date: Date) {
  return `${pad2(date.getMonth() + 1)}/${pad2(date.getDate())}/${date.getFullYear()}`;
}

/**
 * Re-implements `$("#datepicker").datepicker()` called with NO options
 * (confirmed in appointment.html — jQuery UI defaults apply) as React,
 * without jQuery. DOM/class names mirror jQuery UI's own output exactly
 * (captured via Playwright on the original HTML: ui-datepicker,
 * ui-datepicker-header, ui-datepicker-prev/next, ui-datepicker-title,
 * ui-datepicker-calendar, ui-state-default/highlight/active,
 * ui-datepicker-other-month...) so assets/css/jquery-ui.css + the theme's
 * `.ui-datepicker{width:320px!important}` override apply unmodified.
 * showOtherMonths defaults to false, so leading/trailing out-of-month
 * cells render blank (`&nbsp;`), same as the original.
 */
export default function DatePickerInput({ id, value, onChange, placeholder }: DatePickerInputProps) {
  const [open, setOpen] = useState(false);
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const wrapperRef = useRef<HTMLFieldSetElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [open]);

  const firstWeekday = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  const cells: (number | null)[] = [
    ...Array.from({ length: firstWeekday }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
  while (cells.length % 7 !== 0) cells.push(null);
  const weeks: (number | null)[][] = [];
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));

  const goPrev = () => {
    setViewMonth((m) => {
      if (m === 0) {
        setViewYear((y) => y - 1);
        return 11;
      }
      return m - 1;
    });
  };
  const goNext = () => {
    setViewMonth((m) => {
      if (m === 11) {
        setViewYear((y) => y + 1);
        return 0;
      }
      return m + 1;
    });
  };

  const selectDay = (day: number) => {
    onChange(formatDate(new Date(viewYear, viewMonth, day)));
    setOpen(false);
  };

  const isToday = (day: number) =>
    viewYear === today.getFullYear() && viewMonth === today.getMonth() && day === today.getDate();

  return (
    <fieldset className="calendar-input" ref={wrapperRef} style={{ position: "relative" }}>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        name="text"
        autoComplete="off"
        aria-required="true"
        required
        readOnly
        value={value}
        onClick={() => setOpen((v) => !v)}
      />
      <i className="icon-CalendarBlank" />
      {open && (
        <div
          id="ui-datepicker-div"
          className="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"
          style={{ position: "absolute", top: "100%", left: 0, zIndex: 31, display: "block" }}
        >
          <div className="ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-all">
            <a className="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="Prev" onClick={goPrev}>
              <span className="ui-icon ui-icon-circle-triangle-w">Prev</span>
            </a>
            <a className="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="Next" onClick={goNext}>
              <span className="ui-icon ui-icon-circle-triangle-e">Next</span>
            </a>
            <div className="ui-datepicker-title">
              <span className="ui-datepicker-month">{MONTH_NAMES[viewMonth]}</span>&nbsp;
              <span className="ui-datepicker-year">{viewYear}</span>
            </div>
          </div>
          <table className="ui-datepicker-calendar">
            <thead>
              <tr>
                {WEEKDAYS.map((w, i) => (
                  <th scope="col" className={i === 0 || i === 6 ? "ui-datepicker-week-end" : undefined} key={w.short}>
                    <span title={w.title}>{w.short}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {weeks.map((week, weekIndex) => (
                <tr key={weekIndex}>
                  {week.map((day, dayIndex) => {
                    const isWeekend = dayIndex === 0 || dayIndex === 6;
                    if (day === null) {
                      return (
                        <td
                          className={`${isWeekend ? " ui-datepicker-week-end" : ""} ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled`}
                          key={dayIndex}
                        >
                          &nbsp;
                        </td>
                      );
                    }
                    const todayCell = isToday(day);
                    return (
                      <td
                        className={`${isWeekend ? " ui-datepicker-week-end " : " "}${todayCell ? "ui-datepicker-today" : ""}`}
                        data-handler="selectDay"
                        data-event="click"
                        data-month={viewMonth}
                        data-year={viewYear}
                        key={dayIndex}
                      >
                        <a
                          className={`ui-state-default${todayCell ? " ui-state-highlight" : ""}`}
                          href="#"
                          aria-current="false"
                          data-date={day}
                          onClick={(e) => {
                            e.preventDefault();
                            selectDay(day);
                          }}
                        >
                          {day}
                        </a>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </fieldset>
  );
}
