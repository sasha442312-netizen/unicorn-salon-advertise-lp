import { IconCheck } from "./icons";

const plans = [
  {
    name: "集客スタート",
    initial: "初期 110,000円",
    price: "44,000",
    recommended: false,
    features: ["自社予約LPの設置", "Meta広告の運用代行", "月次レポート"],
  },
  {
    name: "自社集客まるごと運用",
    initial: "初期 165,000円",
    price: "66,000",
    recommended: true,
    features: [
      "集客スタートの内容すべて",
      "Google・MEO対策",
      "LINE公式アカウント運用",
      "予約導線の継続改善",
    ],
  },
  {
    name: "集客・再来まるごと運用",
    initial: "初期 275,000円〜",
    price: "110,000〜",
    recommended: false,
    features: [
      "自社集客まるごと運用の内容すべて",
      "再来・リピート施策の設計",
      "LINEステップ配信の構築",
      "専任担当による伴走サポート",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="plans" className="bg-(--color-bg-soft) py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="mb-3 text-sm font-bold tracking-widest text-(--color-gold-deep)">
            PLAN
          </p>
          <h2 className="font-serif-jp text-3xl font-bold leading-tight text-(--color-ink) sm:text-4xl">
            料金プラン
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-8 text-(--color-ink-soft)">
            1契約につき1店舗。まずは無料の集客導線診断で、貴店に合ったプランをご提案します。
            <br />
            ※広告費はプラン料金と別途ご負担いただきます。
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl border bg-(--color-card) p-8 shadow-sm ${
                plan.recommended
                  ? "border-(--color-gold) shadow-lg shadow-(--color-gold-soft) lg:-translate-y-3"
                  : "border-(--color-line)"
              }`}
            >
              {plan.recommended && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-(--color-gold) px-4 py-1 text-xs font-bold tracking-wider text-white">
                  おすすめ
                </span>
              )}
              <h3 className="font-serif-jp text-lg font-bold text-(--color-ink)">
                {plan.name}
              </h3>
              <p className="mt-1 text-xs text-(--color-ink-soft)">{plan.initial}</p>
              <p className="mt-5 flex items-baseline gap-1">
                <span className="font-serif-jp text-4xl font-black text-(--color-gold-deep)">
                  ¥{plan.price}
                </span>
                <span className="text-sm text-(--color-ink-soft)">/月〜</span>
              </p>

              <ul className="mt-7 flex flex-1 flex-col gap-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-(--color-ink)">
                    <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-(--color-gold-deep)" />
                    <span className="leading-6">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 rounded-full px-6 py-3 text-center text-sm font-bold transition ${
                  plan.recommended
                    ? "bg-(--color-gold) text-white hover:bg-(--color-gold-deep)"
                    : "border border-(--color-gold) text-(--color-gold-deep) hover:bg-(--color-gold) hover:text-white"
                }`}
              >
                このプランで相談する
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
