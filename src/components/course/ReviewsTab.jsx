"use client";

import { useState } from "react";
import Stars from "./Stars";

const ReviewsTab=({ course })=> {
  const [filter, setFilter] = useState("all");

  const visible =
    filter === "all" ? course.reviews : course.reviews.filter((r) => r.rating === filter);

  return (
    <div className="space-y-8">
      <section>
        <h3 className="mb-2 text-lg font-semibold">What Learners Are Saying</h3>
        <p className="text-sm text-gray-600">
          Discover what our learners have to say about their experience with {course.title}. Read
          reviews and ratings from individuals who have embarked on this transformative journey.
        </p>
      </section>

  
      <section className="flex flex-col gap-6 rounded-xl border border-gray-200 p-5 sm:flex-row sm:items-center">
        <div className="flex h-28 w-28 shrink-0 flex-col items-center justify-center rounded-lg bg-[#D9FF3D]">
          <span className="text-xs">Ratings</span>
          <span className="text-4xl font-bold">{course.rating}</span>
        </div>

        <div className="flex-1 space-y-2">
          {course.ratingBreakdown.map((r) => (
            <div key={r.star} className="flex items-center gap-3 text-xs">
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-200">
                <div className="h-full bg-[#D9FF3D]" style={{ width: `${r.percent}%` }} />
              </div>
              <span className="flex w-16 justify-end gap-0.5">
                {[...Array(r.star)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </span>
              <span className="w-8 text-right text-gray-500">{r.count}</span>
            </div>
          ))}
        </div>
      </section>


      <section>
        <h3 className="mb-3 text-lg font-semibold">Individual Reviews:</h3>

        <div className="mb-5 flex flex-wrap gap-2">
          <button
            onClick={() => setFilter("all")}
            className={`rounded-full px-4 py-1.5 text-xs ${
              filter === "all" ? "bg-[#D9FF3D]" : "bg-gray-100"
            }`}
          >
            All rating
          </button>
          {[5, 4, 3, 2, 1].map((n) => (
            <button
              key={n}
              onClick={() => setFilter(n)}
              className={`rounded-full px-4 py-1.5 text-xs ${
                filter === n ? "bg-[#D9FF3D]" : "bg-gray-100"
              }`}
            >
              ★ {n}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {visible.length === 0 && (
            <p className="text-sm text-gray-500">এই rating এ কোনো review নেই।</p>
          )}

          {visible.map((r) => (
            <article key={r.name} className="rounded-xl border border-gray-200 p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
             
                  <img src={r.avatar} alt={r.name} className="h-9 w-9 rounded-full" />
                  <div>
                    <p className="text-sm font-semibold">{r.name}</p>
                    <p className="text-xs text-gray-500">{r.role}</p>
                  </div>
                </div>
                <span className="text-xs text-gray-400">a year ago</span>
              </div>

              <div className="mt-3">
                <Stars value={r.rating} />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{r.text}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
export default ReviewsTab