<script setup lang="ts">

const router = useRouter();

// 监听键盘事件
const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'ArrowLeft') {
    router.push('/pre-talk');
  }
  if (e.key === 'ArrowRight') {
    router.push('/part2');
  }
  if (e.key === 'Enter') {
    bodyIfshow.value = true;
  }
  if (bodyIfshow.value && e.key === 'Enter') {
    nextShow.value = true;
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);

  let index = 0;
  const typingInterval = setInterval(() => {
    if (index < showTitile.length) {
      showTitileByInterval.value += showTitile[index];
      index++;
    } else {
      clearInterval(typingInterval);
    }
  }, 50);
});

onBeforeMount(() => {
  window.removeEventListener('keydown', handleKeydown);
});

const fullText = '前后端学哪个好？';
const bodyIfshow = ref(false);
const showTitile = '前端和后端是描述进程开始和结束的通用词汇。前端作用于采集输入信息，后端进行处理。计算机程序的界面样式，视觉呈现属于前端。';
const showTitileByInterval = ref('');
const nextShow = ref(false);


</script>

<template>
  <div class="show">
    <div class="header" :class="{ 'body-show': bodyIfshow }">{{ fullText }}</div>
    <div class="body" v-if="bodyIfshow">
      <div class="show-card"><span style="font-weight: bold">维基百科: </span>{{ showTitile }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.show {
  height: 100%;
  width: 100%;
  background-color: #fff;

  .header {
    padding: 20px;
    font-family: 'Courier New', monospace;
    font-size: 40px;
    color: black;
    font-weight: 600;
    height: 60px;
  }
  
  .body {
    height: 85%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .show-card {
      width: 80%;
      height: 80%;
      background-color: #f5f5f5;
      color: #442b2b;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
      border-radius: 10px;
      padding: 20px;
      font-size: 50px;
      line-height: 60px;
      margin-bottom: 20px;
    }
  }
}
</style>
