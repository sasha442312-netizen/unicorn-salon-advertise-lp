import Image from "next/image";
import { IconCalendarCheck, IconTrendUp, IconUserPlus } from "./icons";

const features = [
  {
    icon: IconUserPlus,
    title: "自社予約の\n入口を増やす",
  },
  {
    icon: IconCalendarCheck,
    title: "予約導線を\n整える",
  },
  {
    icon: IconTrendUp,
    title: "再来に\nつなげる",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-(--color-bg) to-(--color-bg-soft)">
      {/* スマホ幅：デザイン案の画像をそのまま表示 */}
      <div className="block md:hidden">
        <Image
          src="/mockups/hero-sp.jpg"
          alt="自社から予約が入る、もう1本の集客経路を。Meta広告・Google・LP・LINEをつなぎ、新規予約から再来までまとめて運用。"
          width={1024}
          height={1536}
          priority
          className="h-auto w-full"
        />
        <div className="flex justify-center bg-(--color-bg) px-6 pb-10 pt-6">
          <a
            href="#contact"
            className="rounded-full bg-(--color-gold) px-8 py-4 text-sm font-bold text-white shadow-md shadow-(--color-gold-soft) transition hover:bg-(--color-gold-deep)"
          >
            無料で集客導線診断を受ける
          </a>
        </div>
      </div>

      {/* PC・タブレット幅：コード実装 */}
      <div className="pointer-events-none absolute -right-32 top-10 hidden h-96 w-96 rounded-full bg-(--color-gold-soft) opacity-30 blur-3xl md:block" />
      <div className="mx-auto hidden max-w-6xl items-center gap-12 px-6 pb-20 pt-14 md:grid md:grid-cols-2 md:pb-28 md:pt-20">
        <div>
          <p className="mb-5 text-sm font-bold tracking-widest text-(--color-gold-deep)">
            美容室・サロン向け 集客運用サービス
          </p>
          <h1 className="font-serif-jp text-[2.6rem] font-bold leading-[1.25] tracking-tight text-(--color-ink) sm:text-[3.2rem]">
            自社から
            <br />
            <span className="gold-underline text-(--color-gold-deep)">予約</span>
            が入る、
            <br />
            もう1本の
            <br />
            集客経路を。
          </h1>
          <p className="mt-6 max-w-md text-[15px] leading-8 text-(--color-ink-soft)">
            Meta広告・Google・LP・LINEをつなぎ、
            <br className="hidden sm:block" />
            新規予約から再来までまとめて運用。
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-(--color-gold) px-8 py-4 text-sm font-bold text-white shadow-md shadow-(--color-gold-soft) transition hover:bg-(--color-gold-deep)"
            >
              無料で集客導線診断を受ける
            </a>
            <a
              href="#plans"
              className="text-sm font-bold text-(--color-ink) underline decoration-(--color-gold) decoration-2 underline-offset-4"
            >
              料金プランを見る
            </a>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {features.map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="flex flex-col items-center gap-3 rounded-2xl border border-(--color-line) bg-(--color-card) px-3 py-8 text-center shadow-sm"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-(--color-bg-soft) text-(--color-gold-deep)">
                <Icon className="h-6 w-6" />
              </span>
              <p className="whitespace-pre-line text-[13px] font-bold leading-5 text-(--color-ink)">
                {title}
              </p>
              <span className="h-0.5 w-6 bg-(--color-gold)" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
