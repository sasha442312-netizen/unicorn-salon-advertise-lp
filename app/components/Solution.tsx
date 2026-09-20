import { IconChatLine, IconMeta, IconTarget } from "./icons";

const points = [
  {
    icon: IconMeta,
    title: "Meta広告 × LP",
    desc: "ターゲットに合わせた広告とLPで、自社予約ページへ新規のお客様を直接呼び込みます。",
  },
  {
    icon: IconTarget,
    title: "Google・MEO",
    desc: "「近くの美容室」で探すお客様に見つけてもらえるよう、Googleビジネスプロフィールも合わせて整えます。",
  },
  {
    icon: IconChatLine,
    title: "LINE運用",
    desc: "予約後・来店後のLINEを設計し、再来店・リピートにつながる導線をつくります。",
  },
];

export default function Solution() {
  return (
    <section id="solution" className="bg-(--color-bg) py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="mb-3 text-sm font-bold tracking-widest text-(--color-gold-deep)">
            WHAT WE DO
          </p>
          <h2 className="font-serif-jp text-3xl font-bold leading-tight text-(--color-ink) sm:text-4xl">
            <span className="text-(--color-gold-deep)">外部集客担当</span>として、
            <br className="sm:hidden" />
            まるごと運用します
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-8 text-(--color-ink-soft)">
            HOT PEPPER Beautyはそのままに、UNICORNが自社集客の入口・導線・再来のしくみを設計し、
            広告・LP・LINEを一気通貫で運用します。
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {points.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-(--color-line) bg-(--color-card) p-7 shadow-sm"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-(--color-bg-soft) text-(--color-gold-deep)">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-serif-jp text-lg font-bold text-(--color-ink)">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-(--color-ink-soft)">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
