"use client";

import { useState } from "react";
import AboutTab from "./AboutTab";
import LessonTab from "./LessonTab";
import ReviewsTab from "./ReviewsTab";

const tabs = [
  { key: "about", label: "About" },
  { key: "lesson", label: "Lesson" },
  { key: "reviews", label: "Reviews" },
];

export default function CourseTabs({ course }) {
  const [active, setActive] = useState("about");

  return (
    <div>
      <div className="mb-6 flex gap-2">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${
              active === t.key ? "bg-[#D9FF3D] text-black" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {active === "about" && <AboutTab course={course} />}
      {active === "lesson" && <LessonTab course={course} />}
      {active === "reviews" && <ReviewsTab course={course} />}
    </div>
  );
}