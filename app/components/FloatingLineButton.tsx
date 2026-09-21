import { IconChatLine } from "./icons";

export default function FloatingLineButton() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 pb-[calc(env(safe-area-inset-bottom)+16px)] pt-3"
      style={{
        background:
          "linear-gradient(to top, var(--color-bg) 55%, transparent)",
      }}
    >
      <a
        href="#contact"
        className="flex w-full max-w-md items-center justify-center gap-2 rounded-full bg-[#06C755] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-black/10 transition hover:bg-[#05a648]"
      >
        <IconChatLine className="h-5 w-5" />
        公式LINEで無料相談する
      </a>
    </div>
  );
}
