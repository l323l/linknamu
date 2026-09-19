import { getMongoClient } from "./mongodb";

export type LinkItem = {
  id: string;
  label: string;
  href: string;
};

export const links: LinkItem[] = [
  { id: "github", label: "🐙 깃허브", href: "https://github.com/l323l" },
  { id: "blog", label: "📝 블로그", href: "https://blog.naver.com/lnkj323" },
  { id: "email", label: "✉️ 이메일", href: "mailto:jawon2517@gmail.com" },
];

type ClickDoc = { _id: string; count: number };

async function clicksCollection() {
  const client = await getMongoClient();
  return client.db("linknamu").collection<ClickDoc>("clicks");
}

export function isLinkId(id: string): boolean {
  return links.some((link) => link.id === id);
}

export async function incrementClick(id: string): Promise<void> {
  const clicks = await clicksCollection();
  await clicks.updateOne({ _id: id }, { $inc: { count: 1 } }, { upsert: true });
}

export async function getClickCounts(): Promise<Record<string, number>> {
  const clicks = await clicksCollection();
  const docs = await clicks.find().toArray();
  const saved = new Map(docs.map((doc) => [doc._id, doc.count]));
  // 아직 클릭이 없는 링크도 0으로 채워서 항상 모든 링크의 값을 돌려준다.
  return Object.fromEntries(links.map((link) => [link.id, saved.get(link.id) ?? 0]));
}
