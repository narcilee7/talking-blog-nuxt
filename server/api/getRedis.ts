import redis from './redis';

export default defineEventHandler(async (event) => {
  // 获取 URL 查询参数中的 key
  const key = event.context.query?.key as string; // 使用 query 获取传递的 key

  // 从 Redis 获取对应的值
  const value = await redis.get(key);

  // 返回 Redis 的值，如果 key 不存在则返回 null
  return { value: 'nihao ' };
});
