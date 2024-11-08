<script setup lang='ts'>
const router = useRouter();
const handleGotoNextPage = () => {
  window.location.href = '/pre-talk'
}

const handleKeydown = (e) => {
  if (e.key === 'ArrowRight') {
    router.push('/pre-talk');
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
  <div class="index-title">
    <img src="~/assets/img/index.jpg" alt="">
  </div>
</template>

<style lang='scss' scoped>
.index-title {
  background-color: rgba(255, 255, 255, 0.493);
  height: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
</style>