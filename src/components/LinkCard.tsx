type LinkCardProps = {
  label: string;
  href: string;
  clicks: number;
  onClick: () => void;
};

export default function LinkCard({
  label,
  href,
  clicks,
  onClick,
}: LinkCardProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      onAuxClick={onClick}
      className="relative flex h-14 w-full items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-[15px] font-medium tracking-tight text-zinc-100 shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_8px_24px_-12px_rgb(0_0_0/0.6)] backdrop-blur-xl transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
    >
      {label}
      <span className="absolute right-5 text-xs font-normal tabular-nums text-zinc-500">
        {clicks.toLocaleString("ko-KR")}회
      </span>
    </a>
  );
}
