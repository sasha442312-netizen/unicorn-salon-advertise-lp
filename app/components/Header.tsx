export default function Header() {
  return (
    <header className="sticky top-0 z-50 hidden border-b border-(--color-line) bg-(--color-bg)/90 backdrop-blur md:block">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-baseline gap-2">
          <span className="font-serif-jp text-xl font-bold tracking-[0.15em] text-(--color-ink)">
            UNICORN
          </span>
          <span className="hidden text-[11px] tracking-widest text-(--color-ink-soft) sm:inline">
            美容室・サロン向け集客運用サービス
          </span>
        </div>
        <a
          href="#contact"
          className="rounded-full bg-(--color-gold) px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-(--color-gold-deep)"
        >
          無料で集客導線診断
        </a>
      </div>
    </header>
  );
}
