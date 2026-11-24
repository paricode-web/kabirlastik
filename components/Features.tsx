import { features } from "@/lib/site";

export default function Features() {
  return (
    <ul className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
      {features.map((f) => (
        <li key={f.title} className="border-t-[3px] border-bronze-500 pt-5">
          <h3 className="text-navy-900">{f.title}</h3>
          <p className="mt-3 max-w-md text-navy-700">{f.text}</p>
        </li>
      ))}
    </ul>
  );
}
