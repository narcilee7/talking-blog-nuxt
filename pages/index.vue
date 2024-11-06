<script setup lang='ts'>
import { ref } from 'vue';

const redisData = ref<{ key: string; value: string | null } | null>(null);
const postData = ref<{ key: string; value: string } | null>(null);

const handleSet = async () => {
  // 向 Redis 设置数据
  const { data } = await useFetch<{ key: string; value: string }>('/api/setRedis', {
    method: 'POST',
    body: {
      key: 'key_name',
      value: 'hello world'
    }
  });
  postData.value = data.value; // 保存返回的结果
  console.log(postData.value?.value); // 打印返回的值
}

const handleGet = async () => {
  // 向 API 发送 GET 请求并传递查询参数
  const { data } = await useFetch<{ key: string; value: string | null }>('/api/getRedis', {
    method: 'GET',
    params: { key: 'key_name' } // 传递查询参数 key
  });
  
  redisData.value = data.value; // 保存返回的结果
}
</script>

<template>
  <div>
    <h1>Redis Test</h1>
    <button @click="handleSet">发送 set 到 Redis</button>
    
    <!-- 显示从 Redis 获取的数据 -->
    <div v-if="redisData">
      <p>Key: {{ redisData.key }}</p>
      <p>Value: {{ redisData.value }}</p>
    </div>
    
    <!-- 如果没有数据，显示加载提示 -->
    <div v-else>
      <p>Loading...</p>
      <button @click="handleGet">get redis</button>
    </div>
  </div>
</template>

<style lang='scss' scoped>
/* Scoped styles here */
</style>
