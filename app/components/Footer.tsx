export default function Footer() {
  return (
    <footer className="bg-(--color-ink) py-10 text-white/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-serif-jp text-lg font-bold tracking-[0.15em] text-white">
            UNICORN
          </p>
          <p className="mt-1 text-xs">美容室・サロン向け 集客運用サービス</p>
        </div>
        <p className="text-xs">&copy; {new Date().getFullYear()} UNICORN. All rights reserved.</p>
      </div>
    </footer>
  );
}
