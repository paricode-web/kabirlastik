import type { Metadata } from "next";
import Button from "@/components/Button";
import { categories } from "@/lib/site";

export const metadata: Metadata = { title: "محصولات" };

export default function ProductsPage() {
  return (
    <div className="container-x py-16 md:py-24">
      <h1>محصولات</h1>
      <div className="mt-12 divide-y divide-navy-900/15 border-y border-navy-900/15">
        {categories.map((c) => (
          <section key={c.slug} id={c.slug} className="grid gap-4 py-10 md:grid-cols-3">
            <h2>{c.title}</h2>
            <div className="md:col-span-2">
              {/* Replace with the product grid once the client supplies products and photos */}
              <p className="text-navy-700">
                فهرست محصولات این دسته به‌زودی در سایت قرار می‌گیرد. برای استعلام و سفارش با ما تماس بگیرید.
              </p>
              <Button href="/contact" variant="secondary" className="mt-5">
                درخواست مشاوره
              </Button>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
