const steps = [
  { no: "01", title: "お問い合わせ", desc: "フォームまたはお電話で気軽にご連絡ください。" },
  { no: "02", title: "集客導線診断（無料）", desc: "現状のHOT PEPPER・SNS・LINEの導線を無料で診断します。" },
  { no: "03", title: "ご提案・お見積り", desc: "診断結果をもとに、貴店に合ったプランをご提案します。" },
  { no: "04", title: "ご契約・運用開始", desc: "LP制作から広告・LINE運用まで、UNICORNが伴走します。" },
];

export default function Flow() {
  return (
    <section className="bg-(--color-bg) py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="mb-3 text-sm font-bold tracking-widest text-(--color-gold-deep)">
            FLOW
          </p>
          <h2 className="font-serif-jp text-3xl font-bold leading-tight text-(--color-ink) sm:text-4xl">
            ご利用の流れ
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.no} className="relative">
              <div className="rounded-2xl border border-(--color-line) bg-(--color-card) p-6 shadow-sm">
                <span className="font-serif-jp text-2xl font-black text-(--color-gold-soft)">
                  {s.no}
                </span>
                <h3 className="mt-2 text-base font-bold text-(--color-ink)">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-(--color-ink-soft)">{s.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <span className="pointer-events-none absolute -right-3 top-1/2 hidden -translate-y-1/2 text-(--color-gold) lg:block">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
