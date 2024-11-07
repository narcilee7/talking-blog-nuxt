<script setup lang='ts'>
const router = useRouter();

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'ArrowLeft') {
    router.push('/part3');
  }
  if (e.key === 'ArrowRight') {
    router.push('/part5');
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

const title = '如何规划大学的技术学习?';
const titleReactive = ref('');
const bodyIfshow = ref(false);
</script>

<template>
  <div class="show">
    <div class="header" :class="{ 'body-show': bodyIfshow }">{{ titleReactive }}</div>
    <div class="body" v-if="bodyIfshow">
      <div class="show-card">
        <span style="color: black">答案: </span>
        <p style="margin: 20px 0"> 1.基础最重要 -> 数据结构与算法，计算机网络，操作系统，编译原理，设计模式。 </p>
        <p style="margin: 20px 0">  2.有一门语言傍身。</p>
        <p style="margin: 20px 0">  3.需要技术，但不仅仅是技术。</p>
        <p style="margin: 20px 0">  4.保持自己的竞争力。</p>
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
      font-size: 40px;
      line-height: 40px;
      margin-bottom: 20px;
    }
  }
}
</style>