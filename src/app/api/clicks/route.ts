import { getClickCounts } from "@/lib/links";

export async function GET() {
  try {
    return Response.json(await getClickCounts());
  } catch (error) {
    console.error("클릭 수 조회 실패:", error);
    return new Response(null, { status: 500 });
  }
}
