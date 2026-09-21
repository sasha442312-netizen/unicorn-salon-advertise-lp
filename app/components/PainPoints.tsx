import Image from "next/image";

const pains = [
  {
    no: "01",
    text: "HOT PEPPER以外から\n全然予約が入らない",
  },
  {
    no: "02",
    text: "InstagramやGoogleをやっても\n予約につながらない",
  },
  {
    no: "03",
    text: "LINEはあるけど\nほとんど使えていない",
  },
  {
    no: "04",
    text: "集客にお金を使っても\n何が効いたか分からない",
  },
  {
    no: "05",
    text: "新規は来るけど\nリピートにつながらない",
  },
];

export default function PainPoints() {
  return (
    <section className="bg-(--color-bg-soft)">
      {/* スマホ幅：デザイン案の画像をそのまま表示 */}
      <div className="block md:hidden">
        <Image
          src="/mockups/painpoints-sp.jpg"
          alt="こんなお悩みありませんか？ HOT PEPPER以外から全然予約が入らない、InstagramやGoogleをやっても予約につながらない、LINEはあるけどほとんど使えていない、集客にお金を使っても何が効いたか分からない、新規は来るけどリピートにつながらない"
          width={941}
          height={1672}
          className="h-auto w-full"
        />
      </div>

      {/* PC・タブレット幅：コード実装 */}
      <div className="mx-auto hidden max-w-3xl px-6 py-20 text-center md:block">
        <p className="mb-3 text-sm font-bold tracking-widest text-(--color-gold-deep)">
          SALON OWNER&apos;S TROUBLE
        </p>
        <h2 className="font-serif-jp text-3xl font-bold leading-tight text-(--color-ink) sm:text-4xl">
          こんな<span className="text-(--color-gold-deep)">お悩み</span>
          <br className="sm:hidden" />
          ありませんか？
        </h2>

        <div className="mt-12 flex flex-col gap-4 text-left">
          {pains.map((p) => (
            <div
              key={p.no}
              className="flex items-center gap-5 rounded-2xl border border-(--color-line) bg-(--color-card) px-6 py-5 shadow-sm"
            >
              <div className="flex shrink-0 flex-col items-center leading-none">
                <span className="text-[11px] font-bold tracking-widest text-(--color-ink-soft)">
                  お悩み
                </span>
                <span className="font-serif-jp text-3xl font-black text-(--color-gold-deep)">
                  {p.no}
                </span>
              </div>
              <p className="whitespace-pre-line text-[15px] font-bold leading-7 text-(--color-ink) sm:text-base">
                {p.text.split("\n").map((line, i) => (
                  <span key={i}>
                    {i === 1 ? (
                      <span className="bg-(--color-gold-soft) px-0.5">{line}</span>
                    ) : (
                      line
                    )}
                    {i === 0 && <br />}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
