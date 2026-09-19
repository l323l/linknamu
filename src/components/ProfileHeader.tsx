import Image from "next/image";

type ProfileHeaderProps = {
  name: string;
  bio: string;
  avatarSrc: string;
};

export default function ProfileHeader({
  name,
  bio,
  avatarSrc,
}: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-6 text-center">
      <div className="rounded-full bg-gradient-to-b from-white/35 to-white/5 p-[3px] shadow-[0_24px_48px_-12px_rgb(0_0_0/0.9),0_0_0_1px_rgb(255_255_255/0.06)]">
        <Image
          src={avatarSrc}
          alt={`${name} 프로필 사진`}
          width={150}
          height={150}
          priority
          className="h-28 w-28 rounded-full border-[3px] border-[#08080a] object-cover"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold tracking-tight text-white">{name}</h1>
        <p className="mx-auto max-w-xs text-[15px] leading-relaxed text-zinc-400 text-balance">
          {bio}
        </p>
      </div>
    </div>
  );
}
