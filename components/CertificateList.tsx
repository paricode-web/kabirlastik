import { certificates } from "@/lib/site";

export default function CertificateList() {
  return (
    <ul className="grid gap-px overflow-hidden rounded border border-navy-900/15 bg-navy-900/15 md:grid-cols-3">
      {certificates.map((c) => (
        <li key={c.code} className="bg-ivory p-6">
          <p className="text-xl font-extrabold text-navy-900" dir="ltr">{c.code}</p>
          <p className="mt-2 text-navy-700">{c.title}</p>
        </li>
      ))}
    </ul>
  );
}
