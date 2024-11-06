import redis from './redis';

export default defineEventHandler(async (event) => {
  // 解析请求体中的数据
  const { key, value } = await readBody(event);

  // 将数据设置到 Redis 中
  await redis.set(key, value);

  // 返回成功响应
  return { status: 'success', key, value };
});
