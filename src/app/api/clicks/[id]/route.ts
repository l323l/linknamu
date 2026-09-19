import { incrementClick, isLinkId } from "@/lib/links";

export async function POST(_req: Request, ctx: RouteContext<"/api/clicks/[id]">) {
  const { id } = await ctx.params;

  // 등록된 링크만 집계해서 임의의 문서가 만들어지지 않게 한다.
  if (!isLinkId(id)) {
    return new Response(null, { status: 404 });
  }

  try {
    await incrementClick(id);
  } catch (error) {
    console.error("클릭 수 저장 실패:", error);
    return new Response(null, { status: 500 });
  }

  return new Response(null, { status: 204 });
}
