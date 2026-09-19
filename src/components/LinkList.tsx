"use client";

import { useEffect, useState } from "react";
import LinkCard from "./LinkCard";
import type { LinkItem } from "@/lib/links";

export default function LinkList({ links }: { links: LinkItem[] }) {
  // 데이터를 받기 전에는 모든 링크를 0회로 보여준다.
  const [counts, setCounts] = useState<Record<string, number>>({});

  // 페이지가 열릴 때 모든 링크의 클릭 수를 한 번에 가져온다.
  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/clicks", { cache: "no-store", signal: controller.signal })
      .then((res) => (res.ok ? res.json() : null))
      .then((data: Record<string, number> | null) => {
        if (data) setCounts(data);
      })
      .catch(() => {
        // 실패하면 0회 표시를 그대로 둔다.
      });

    return () => controller.abort();
  }, []);

  // 화면의 숫자를 먼저 올리고, 저장은 이동을 막지 않도록 sendBeacon으로 보낸다.
  function trackClick(id: string) {
    navigator.sendBeacon(`/api/clicks/${id}`);
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
  }

  return (
    <div className="flex w-full flex-col gap-4">
      {links.map((link) => (
        <LinkCard
          key={link.id}
          label={link.label}
          href={link.href}
          clicks={counts[link.id] ?? 0}
          onClick={() => trackClick(link.id)}
        />
      ))}
    </div>
  );
}
