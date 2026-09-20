export default function CTA() {
  return (
    <section id="contact" className="bg-(--color-gold-deep) py-20">
      <div className="mx-auto max-w-3xl px-6 text-center text-white">
        <h2 className="font-serif-jp text-3xl font-bold leading-tight sm:text-4xl">
          まずは無料の
          <br className="sm:hidden" />
          集客導線診断から
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-[15px] leading-8 text-white/85">
          今の集客状況をお伺いし、貴店に合った集客経路を無料でご提案します。
          <br />
          お気軽にご相談ください。
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:info@unicorn-kaikei.com"
            className="rounded-full bg-white px-8 py-4 text-sm font-bold text-(--color-gold-deep) shadow-md transition hover:bg-(--color-bg-soft)"
          >
            無料相談を申し込む
          </a>
        </div>
      </div>
    </section>
  );
}
