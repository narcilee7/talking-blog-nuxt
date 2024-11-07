<script setup lang='ts'>
const router = useRouter();

const handleKeydown = (e) => {
  if (e.key === 'ArrowLeft') {
    router.back();
  }
  if (e.key === 'ArrowRight') {
    router.push('/part1');
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
})

onBeforeMount(() => {
  window.removeEventListener('keydown', handleKeydown);
})
</script>

<template>
  <div class="pre-talk">
    <h1>大家好😍</h1>
  </div>
</template>

<style lang='scss' scoped>
.pre-talk {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #97e9fdad;

  
  h1 {
    font-size: 45px;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 700;
    background-color: transparent;
    color: rgb(224, 164, 86);
  }
}
</style>