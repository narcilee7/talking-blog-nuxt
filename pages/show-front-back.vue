<!-- 介绍前后端 -->
<script setup lang='ts'>
const router = useRouter();

const handleKeydown = (e) => {
  if (e.key === 'ArrowLeft') {
    router.back();
  }
  if (e.key === 'ArrowRight') {
    router.push('/show-front-back');
  }
  if (e.key === 'Enter') {
    bodyIfshow.value = true;
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
})

onBeforeMount(() => {
  window.removeEventListener('keydown', handleKeydown);
})
// Header msg
const fullText = '前后端学哪个好？';
const typingSpeed = 200;
const typedText = ref('');


onMounted(() => {
  let index = 0;

  const interval = setInterval(() => {
    typedText.value += fullText[index];
    index += 1;

    if (index === fullText.length) {
      clearInterval(interval);
    }
  }, typingSpeed);
});

// body msg
const bodyIfshow = ref(false);

</script>

<template>
 <div class="show">
    <div class="header" :class="{ 'body-show': bodyIfshow }">{{ typedText }}</div>
    <div class="body" v-if="bodyIfshow">这是body</div>
    
 </div>
</template>

<style lang='scss' scoped>
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

  .body-show {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }
  
  .body {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>