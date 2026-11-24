"use client";

import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import SectionEyebrow from "./SectionEyebrow";
import { certificateDocs, formatPersianDate, type CertificateDoc } from "@/lib/documents";

type Props = {
  eyebrow?: string;
  heading?: string;
  description?: string;
  documents?: CertificateDoc[];
};

const archivedNote =
  "اعتبار این سند در تاریخ پایان‌یافته‌ی ثبت‌شده به پایان رسیده است. تا زمان تأیید تمدید، به‌عنوان سند بایگانی نمایش داده می‌شود.";

export default function QualityDocuments({
  eyebrow = "استانداردها و مستندات کیفیت",
  heading = "کیفیت، فراتر از یک ادعا",
  description = "نگاهی به مستندات و گواهینامه‌های مرتبط با سیستم مدیریت کیفیت شرکت.",
  documents = certificateDocs,
}: Props) {
  const [index, setIndex] = useState(0);
  const uid = useId();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const doc = documents[index];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const restore = () => {
      document.body.style.overflow = "";
    };
    dialog.addEventListener("close", restore);
    return () => {
      dialog.removeEventListener("close", restore);
      restore();
    };
  }, []);

  function openDialog() {
    dialogRef.current?.showModal();
    document.body.style.overflow = "hidden";
  }

  function closeDialog() {
    dialogRef.current?.close();
  }

  function onTabKeyDown(e: KeyboardEvent<HTMLButtonElement>) {
    const last = documents.length - 1;
    let next = index;
    if (e.key === "ArrowDown" || e.key === "ArrowLeft") next = index === last ? 0 : index + 1;
    else if (e.key === "ArrowUp" || e.key === "ArrowRight") next = index === 0 ? last : index - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    else return;
    e.preventDefault();
    setIndex(next);
    tabRefs.current[next]?.focus();
  }

  const archived = doc.status === "archived";

  return (
    <section id="quality" aria-labelledby={`${uid}-heading`} className="bg-ivory py-20 md:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-16">
        {/* text side */}
        <div className="lg:col-span-5">
          <SectionEyebrow>{eyebrow}</SectionEyebrow>
          <h2 id={`${uid}-heading`} className="mt-6 text-4xl leading-tight md:text-5xl">
            {heading}
          </h2>
          <p className="mt-6 max-w-md text-lg text-navy-700">{description}</p>

          <div
            role="tablist"
            aria-label="مستندات کیفیت"
            aria-orientation="vertical"
            className="mt-10 border-t border-navy-900/15"
          >
            {documents.map((d, i) => {
              const selected = i === index;
              return (
                <button
                  key={d.id}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`${uid}-tab-${i}`}
                  aria-selected={selected}
                  aria-controls={`${uid}-panel`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setIndex(i)}
                  onKeyDown={onTabKeyDown}
                  className={`flex w-full items-center justify-between gap-4 border-b border-navy-900/15 py-4 text-start transition-colors ${
                    selected ? "text-navy-900" : "text-navy-700 hover:text-navy-900"
                  }`}
                >
                  <span className="flex items-center gap-4">
                    <span aria-hidden="true" className={`h-6 w-0.5 ${selected ? "bg-bronze-500" : "bg-transparent"}`} />
                    <bdi className="text-lg font-extrabold">{d.standard}</bdi>
                  </span>
                  <bdi className="text-sm">{d.issuerShort}</bdi>
                </button>
              );
            })}
          </div>

          <div role="tabpanel" id={`${uid}-panel`} aria-labelledby={`${uid}-tab-${index}`} className="mt-8">
            <h3 className="text-xl">{doc.title}</h3>
            {archived && (
              <>
                <p className="mt-4 inline-block border border-bronze-500/60 px-3 py-1 text-sm font-bold text-bronze-600">
                  نسخه‌ی بایگانی‌شده
                </p>
                <p className="mt-3 max-w-md text-sm text-navy-700">{archivedNote}</p>
              </>
            )}

            <dl className="mt-6 grid grid-cols-[auto_1fr] gap-x-8 gap-y-3 border-t border-navy-900/15 pt-6 text-sm">
              <dt className="text-navy-700">صادرکننده</dt>
              <dd className="font-bold text-navy-900">
                <bdi>{doc.issuer}</bdi>
              </dd>

              <dt className="text-navy-700">دامنه‌ی گواهی</dt>
              <dd className="font-bold text-navy-900">
                <bdi>{doc.scope}</bdi>
              </dd>

              <dt className="text-navy-700">{doc.numberLabel}</dt>
              <dd className="font-bold text-navy-900">
                <bdi>{doc.number}</bdi>
              </dd>

              {doc.dates.map((d) => (
                <div key={d.label} className="contents">
                  <dt className="text-navy-700">{d.label}</dt>
                  <dd className="text-navy-900">
                    <time dateTime={d.iso} className="font-bold">
                      {formatPersianDate(d.iso)}
                    </time>{" "}
                    <bdi className="text-navy-500">({d.iso})</bdi>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* document side */}
        <div className="lg:col-span-7">
          <div className="relative border border-stone bg-white p-4 shadow-[0_24px_48px_-28px_rgb(15_36_56/0.28)] md:p-8">
            <span aria-hidden="true" className="absolute -top-px start-8 h-0.5 w-16 bg-bronze-500" />

            <button
              type="button"
              onClick={openDialog}
              aria-haspopup="dialog"
              aria-label={`بزرگ‌نمایی گواهینامه ${doc.standard} (${doc.issuerShort})`}
              className="mx-auto block w-full max-w-[34rem] cursor-zoom-in"
            >
              <Image
                key={doc.id}
                src={doc.image.src}
                width={doc.image.width}
                height={doc.image.height}
                alt={doc.image.alt}
                sizes="(min-width: 1024px) 34rem, 90vw"
                className="h-auto w-full border border-stone"
              />
            </button>

            <div className="mx-auto mt-5 flex max-w-[34rem] items-center justify-between gap-4 border-t border-stone pt-4 text-sm">
              <button type="button" onClick={openDialog} className="flex items-center gap-2 font-bold text-navy-900 hover:text-bronze-600">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                  <circle cx="7.5" cy="7.5" r="5" />
                  <path d="M11.5 11.5L16 16M7.5 5.5v4M5.5 7.5h4" />
                </svg>
                بزرگ‌نمایی سند
              </button>
              <a href={doc.image.src} download className="text-navy-700 underline-offset-4 hover:text-bronze-600 hover:underline">
                دانلود تصویر
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* lightbox: native <dialog>, closes with Esc, backdrop click, or the button */}
      <dialog
        ref={dialogRef}
        aria-label={`${doc.standard} ${doc.title}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeDialog();
        }}
        className="m-auto max-h-[94vh] w-[min(96vw,60rem)] overflow-hidden bg-navy-900 p-0 text-ivory backdrop:bg-graphite/85"
      >
        <div className="flex items-center justify-between gap-4 border-b border-ivory/15 px-5 py-3 text-sm">
          <p>
            <bdi>{doc.standard}</bdi> · {doc.title}
          </p>
          <div className="flex items-center gap-5">
            <a href={doc.image.src} target="_blank" rel="noopener" className="hover:text-bronze-300">
              باز کردن در تب جدید
            </a>
            <button type="button" onClick={closeDialog} className="font-bold hover:text-bronze-300">
              بستن
            </button>
          </div>
        </div>
        <div className="max-h-[calc(94vh-3.5rem)] overflow-auto bg-stone p-3 md:p-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={doc.image.src}
            alt={doc.image.alt}
            width={doc.image.width}
            height={doc.image.height}
            loading="lazy"
            className="mx-auto h-auto w-full max-w-[52rem] bg-white"
          />
        </div>
      </dialog>
    </section>
  );
}
