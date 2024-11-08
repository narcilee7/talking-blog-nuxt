<script setup lang='ts'>
const router = useRouter();

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'ArrowLeft') {
    router.push('/part2');
  }
  if (e.key === 'ArrowRight') {
    router.push('/part4');
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

const title = '如何学习计算机科学?';
const titleReactive = ref('');
const bodyIfshow = ref(false);
</script>

<template>
  <div class="show">
    <div class="header" :class="{ 'body-show': bodyIfshow }">{{ titleReactive }}</div>
    <div class="body" v-if="bodyIfshow">
      <div class="show-card">
        <span style="color: black">答案: </span>
        <p style="margin: 20px 0"> 1.计算机是一门实践的学科，是一门很现实的学科, 实践出真知，实践是最好的老师。 </p>
        <p style="margin: 20px 0">  2.不要只会看视频！学会看文档, 学会搜索, 学会从别人的只言片语中get到自己想要的重点内容。</p>
        <p style="margin: 20px 0">  3.不要问别人学什么，不要预设自己要学什么，不要等老师教你什么。最好的实现是: 项目驱动学习 + 工作驱动学习</p>
        <p style="margin: 20px 0">  4.做真正提高自己技术的事，做有难度的事情。</p>
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
    font-size: 60px;
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