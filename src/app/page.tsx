import ProfileHeader from "@/components/ProfileHeader";
import LinkCard from "@/components/LinkCard";

const links = [
  { label: "🐙 깃허브", href: "https://github.com/l323l" },
  { label: "📝 블로그", href: "https://blog.naver.com/lnkj323" },
  { label: "✉️ 이메일", href: "mailto:jawon2517@gmail.com" },
];

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center px-6 py-16 sm:py-20">
      <main className="flex w-full max-w-sm flex-col items-center gap-12">
        <ProfileHeader
          name="이재원"
          bio="풀스택 개발자 | AI 개발 & 디지털 설계에 관심 많아요"
          avatarSrc="/profile.jpeg"
        />
        <div className="flex w-full flex-col gap-4">
          {links.map((link) => (
            <LinkCard key={link.label} label={link.label} href={link.href} />
          ))}
        </div>
      </main>
    </div>
  );
}
