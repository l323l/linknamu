import { MongoClient } from "mongodb";

// 개발 서버의 HMR로 모듈이 다시 로드돼도 연결이 늘어나지 않도록 globalThis에 보관한다.
const globalForMongo = globalThis as unknown as {
  mongoClientPromise?: Promise<MongoClient>;
};

export function getMongoClient(): Promise<MongoClient> {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI 환경 변수가 설정되지 않았습니다 (.env.local 확인).");
  }

  if (!globalForMongo.mongoClientPromise) {
    globalForMongo.mongoClientPromise = new MongoClient(uri).connect();
    // 연결에 실패하면 다음 요청에서 다시 시도할 수 있도록 캐시를 비운다.
    globalForMongo.mongoClientPromise.catch(() => {
      globalForMongo.mongoClientPromise = undefined;
    });
  }
  return globalForMongo.mongoClientPromise;
}
