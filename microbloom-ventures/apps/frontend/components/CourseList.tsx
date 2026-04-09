'use client'

import { useState } from "react"
import { CourseDTO } from "@/lib/types/course"

type Props = {
  courses: CourseDTO[]
}

export default function CoursesList({ courses }: Props) {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggleCourse = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

    return (
      <div className="space-y-6 pb-10">
        {courses.map((course, index) => {
          const isOpen = openId === course.id

          return (
            <div
              key={course.id}
              className={`overflow-hidden rounded-3xl border transition-all duration-300 ${
                isOpen
                  ? "border-emerald-300 bg-white shadow-[0_14px_40px_rgba(16,185,129,0.10)]"
                  : "border-white/20 bg-white/90 hover:shadow-lg hover:border-white/40"
              }`}
            >
              {/* Summary */}
              <button
                onClick={() => toggleCourse(course.id)}
                className="w-full text-left"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 md:p-8">
                  {/* Left */}
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 font-bold text-sm">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-500">
                        Course Program
                      </span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                      {course.title}
                    </h2>

                    <p className="mt-4 text-slate-600 leading-relaxed max-w-2xl line-clamp-3">
                      {course.description}
                    </p>
                  </div>

                  {/* Right */}
                  <div className="lg:col-span-5 flex flex-col justify-between">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                          Duration
                        </p>
                        <p className="mt-2 text-lg font-bold text-slate-900">
                          {course.duration} weeks
                        </p>
                      </div>

                      <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                          Fees
                        </p>
                        <p className="mt-2 text-lg font-bold text-slate-900">
                          ₹{course.fees}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                      <div className="text-sm text-slate-500">
                        {course.curriculum?.length ?? 0} modules included
                      </div>

                      <div
                        className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
                          isOpen
                            ? "bg-emerald-600 text-white"
                            : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {isOpen ? "Hide Details" : "View Details"}
                        <span
                          className={`transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        >
                          ↓
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </button>

              {/* Expanded */}
              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-slate-200 bg-gradient-to-br from-slate-50 to-white px-6 md:px-8 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Curriculum */}
                      <div className="lg:col-span-2">
                        <div className="mb-5">
                          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-emerald-700 mb-2">
                            Curriculum
                          </p>
                          <h3 className="text-2xl font-bold text-slate-900">
                            What you'll learn
                          </h3>
                        </div>

                        {course.curriculum && course.curriculum.length > 0 ? (
                          <div className="grid sm:grid-cols-2 gap-4">
                            {course.curriculum.map((item, idx) => (
                              <div
                                key={idx}
                                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                              >
                                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">
                                  {idx + 1}
                                </div>
                                <p className="text-sm leading-relaxed text-slate-700">
                                  {item}
                                </p>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-slate-500">
                            Curriculum details will be updated soon.
                          </div>
                        )}
                      </div>

                      {/* Side Details */}
                      <div className="space-y-5">
                        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                            Duration
                          </p>
                          <p className="mt-2 text-2xl font-bold text-slate-900">
                            {course.duration} weeks
                          </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                            Fees
                          </p>
                          <p className="mt-2 text-2xl font-bold text-slate-900">
                            ₹{course.fees}
                          </p>
                        </div>

                        {course.eligibility && (
                          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                              Eligibility
                            </p>
                            <p className="mt-2 text-slate-700 leading-relaxed">
                              {course.eligibility}
                            </p>
                          </div>
                        )}

                        <button className="w-full rounded-2xl bg-emerald-600 px-5 py-4 text-white font-semibold shadow hover:bg-emerald-700 transition">
                          Enroll / Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }