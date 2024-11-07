<script setup lang='ts'>
const router = useRouter();

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'ArrowLeft') {
    router.push('/part1');
  }
  if (e.key === 'ArrowRight') {
    router.push('/part3');
  }
  if (e.key === 'Enter') {
    bodyIfshow.value = true;
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);

  let index = 0;
  const typingInterval = setInterval(() => {
    if (index < title.length) {
      titleReactive.value += title[index];
      index++;
    } else {
      clearInterval(typingInterval);
    }
  }, 200);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
});

const title = '前后端学哪个好?';
const titleReactive = ref('');
const bodyIfshow = ref(false);

</script>

<template>
  <div class="show">
    <div class="header" :class="{ 'body-show': bodyIfshow }">{{ titleReactive }}</div>
    <div class="body" v-if="bodyIfshow">
      <div class="show-card">
        <span style="color: black">答案: </span>
        <p>  1.前后端只是技术栈的区别，技术思维不同，侧重点不同，都属于软件开发，其实都需要去掌握，我们本质上是做软件开发，而不是前后端开发。</p>
        <p style="margin-top: 10px">  2.2.技术只是实现需求的工具，仅此而已。我们属于工程师, 我们要考虑的更多是满足用户需求, 满足市场需求。</p>
      </div>
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