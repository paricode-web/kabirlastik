/* Quality documents shown in <QualityDocuments />.
   Every value below is copied from what is printed on the document itself.
   When a renewed certificate is confirmed: add it as a new entry with
   status: "valid" and its new image, or change status here. */

export type CertificateDoc = {
  id: string;
  standard: string;       // as printed, e.g. "ISO 9001:2015"
  title: string;          // Persian description of the management system
  issuer: string;         // as printed
  issuerShort: string;
  scope: string;          // as printed
  numberLabel: string;
  number: string;         // as printed
  dates: { label: string; iso: string }[];
  status: "valid" | "archived";
  image: { src: string; width: number; height: number; alt: string };
};

export const certificateDocs: CertificateDoc[] = [
  {
    id: "dqs-iso-9001",
    standard: "ISO 9001:2015",
    title: "سیستم مدیریت کیفیت",
    issuer: "DQS GmbH",
    issuerShort: "DQS",
    scope: "Rubber Manufacturing Company",
    numberLabel: "شماره‌ی ثبت گواهینامه",
    number: "467599 QM15",
    dates: [
      { label: "اعتبار از", iso: "2022-11-22" },
      { label: "اعتبار تا", iso: "2025-11-21" },
    ],
    status: "archived",
    image: {
      src: "/images/certificates/dqs-iso-9001.jpg",
      width: 1654,
      height: 2338,
      alt: "گواهینامه‌ی ISO 9001:2015 صادرشده توسط DQS GmbH برای Kabir Lastic Varna",
    },
  },
  {
    id: "iqnet-iso-9001",
    standard: "ISO 9001:2015",
    title: "سیستم مدیریت کیفیت (نسخه‌ی IQNET)",
    issuer: "DQS Holding · IQNET",
    issuerShort: "IQNET",
    scope: "Rubber Manufacturing Company",
    numberLabel: "شماره‌ی ثبت گواهینامه",
    number: "DE-467599 QM15",
    dates: [
      { label: "تاریخ صدور", iso: "2022-11-21" },
      { label: "پایان اعتبار", iso: "2025-11-20" },
    ],
    status: "archived",
    image: {
      src: "/images/certificates/iqnet-iso-9001.jpg",
      width: 600,
      height: 848,
      alt: "گواهینامه‌ی ISO 9001:2015 با شناسایی IQNET برای Kabir Lastic Varna",
    },
  },
  {
    id: "qal-iso-10002",
    standard: "ISO 10002:2018",
    title: "رسیدگی به شکایات مشتریان",
    issuer: "Quality Assessment Lia",
    issuerShort: "QAL",
    scope: "Production of Rubber Parts",
    numberLabel: "شماره‌ی گواهینامه",
    number: "20783665",
    dates: [
      { label: "تأیید اولیه", iso: "2022-09-05" },
      { label: "نظارت اول", iso: "2023-09-05" },
      { label: "نظارت دوم", iso: "2024-09-05" },
      { label: "پایان اعتبار", iso: "2025-09-05" },
    ],
    status: "archived",
    image: {
      src: "/images/certificates/qal-iso-10002.jpg",
      width: 1718,
      height: 2560,
      alt: "گواهینامه‌ی ISO 10002:2018 صادرشده توسط Quality Assessment Lia برای Kabir Lastik Varna Co.",
    },
  },
];

/** "2025-11-21" -> Persian (Jalali) long date. UTC noon avoids timezone shifts. */
export function formatPersianDate(iso: string) {
  return new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T12:00:00Z`));
}
