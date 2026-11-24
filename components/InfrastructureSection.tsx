import Image from "next/image";
import SectionEyebrow from "./SectionEyebrow";

export type InfrastructurePhoto = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
};

/* Photos are 400x550: the layout never shows them wider than ~400px so they stay sharp.
   Swap in real, larger photos of the plant and raise the max widths below. */
const defaultPhotos: [InfrastructurePhoto, InfrastructurePhoto] = [
  {
    src: "/images/infrastructure/infrastructure-1.jpg",
    width: 400,
    height: 550,
    alt: "نمای سیاه‌وسفید از تجهیزات صنعتی در یک سالن",
    caption: "تصویر ۱",
  },
  {
    src: "/images/infrastructure/infrastructure-2.jpg",
    width: 400,
    height: 550,
    alt: "لوله‌ها و مخزن فولادی در یک فضای صنعتی",
    caption: "تصویر ۲",
  },
];

type Props = {
  eyebrow?: string;
  heading?: string;
  description?: string;
  photos?: [InfrastructurePhoto, InfrastructurePhoto];
};

export default function InfrastructureSection({
  eyebrow = "زیرساخت و توانمندی صنعتی",
  heading = "زیرساختی برای تولید صنعتی",
  description = "نگاهی به محیط و تجهیزات صنعتی مجموعه کبیر لاستیک وارنا.",
  photos = defaultPhotos,
}: Props) {
  const [main, second] = photos;

  return (
    <section aria-labelledby="infrastructure-heading" className="bg-navy-900 py-16 md:py-24 lg:py-32">
      <div className="container-x grid items-center gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionEyebrow tone="dark">{eyebrow}</SectionEyebrow>
          <h2 id="infrastructure-heading" className="mt-5 text-3xl leading-tight text-ivory sm:text-4xl lg:text-5xl">
            {heading}
          </h2>
          <p className="mt-5 max-w-md text-base text-navy-100 md:text-lg">{description}</p>
          <div aria-hidden="true" className="mt-10 h-px w-24 bg-bronze-500" />
        </div>

        <div className="lg:col-span-7">
          <div className="relative mx-auto max-w-[34rem] pb-24 lg:ms-auto lg:me-0">
            {/* dominant image, pushed to the far side */}
            <figure className="relative ms-auto w-[72%]">
              <span aria-hidden="true" className="absolute -start-3 -top-3 h-6 w-6 border-s border-t border-bronze-500" />
              <span aria-hidden="true" className="absolute -bottom-3 -end-3 h-6 w-6 border-b border-e border-bronze-500" />
              <Image
                src={main.src}
                width={main.width}
                height={main.height}
                alt={main.alt}
                sizes="(min-width: 1024px) 25rem, 72vw"
                className="block h-auto w-full border border-ivory/15 grayscale"
              />
              {main.caption && <figcaption className="mt-3 text-end text-sm text-navy-100">{main.caption}</figcaption>}
            </figure>

            {/* secondary image overlaps the lower corner, separated by a navy keyline */}
            <figure className="absolute bottom-0 start-0 w-[46%]">
              <Image
                src={second.src}
                width={second.width}
                height={second.height}
                alt={second.alt}
                sizes="(min-width: 1024px) 16rem, 46vw"
                className="block h-auto w-full border-[6px] border-navy-900 grayscale outline outline-1 outline-ivory/15"
              />
              {second.caption && <figcaption className="mt-3 text-sm text-navy-100">{second.caption}</figcaption>}
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
