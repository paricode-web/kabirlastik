/* Put the exhibition photo at public/images/iran-plast.jpg */
export default function NewsBanner() {
  return (
    <div className="grid overflow-hidden rounded-lg border border-navy-900/15 md:grid-cols-5">
      <div className="min-h-48 bg-navy-700 bg-[url('/images/iran-plast.jpg')] bg-cover bg-center md:col-span-2" />
      <div className="p-6 md:col-span-3 md:p-12">
        <h3 className="text-xl text-navy-900 md:text-2xl">
          حضور شرکت کبیر لاستیک وارنا در هشتمین نمایشگاه بین‌المللی ایران‌پلاست
        </h3>
        <p className="mt-4 max-w-xl text-navy-700">
          تیم ما در این نمایشگاه، محصولات و توان تولید قطعات لاستیکی شرکت را به بازدیدکنندگان معرفی کرد.
        </p>
      </div>
    </div>
  );
}
