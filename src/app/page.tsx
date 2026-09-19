import ProfileHeader from "@/components/ProfileHeader";
import LinkList from "@/components/LinkList";
import { links } from "@/lib/links";

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center px-6 py-16 sm:py-20">
      <main className="flex w-full max-w-sm flex-col items-center gap-12">
        <ProfileHeader
          name="이재원"
          bio="풀스택 개발자 | AI 개발 & 디지털 설계에 관심 많아요"
          avatarSrc="/profile.jpeg"
        />
        <LinkList links={links} />
      </main>
    </div>
  );
}
