<script setup lang='ts'>
const router = useRouter();

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'ArrowLeft') {
    router.push('/part4');
  }
  if (e.key === 'ArrowRight') {
    router.push('/part6');
  }
  if (e.key === 'Enter') {
    bodyIfshow.value = true;
    codePreShow.value = true;
  }
  if (e.key === 'Backspace') {
    // bodyIfshow.value = false;
    codePreShow.value = false;
    nextHookShow.value = true;
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

const title = '如果要用一个函数去设计自己的人生，你会怎么设计?';
const titleReactive = ref('');
const bodyIfshow = ref(false);
const codePreShow = ref(false);
const nextHookShow = ref(false);

const function_to_design_your_world = (hard_word: () => void) => {
  let max_age = 80;
  for (let i = 0; i < max_age; i++) {
    hard_word();
  }
  return 'success';
}
const codeSnippet = `
#include <stdio.h>
void function_to_design_your_world(void (*hard_word)(void)) {
    int max_age = 80;
    for (int i = 0; i < max_age; i++) {
        hard_word();
    }
    printf("success");
}

void my_hard_word() {
    printf("Doing hard work\\n");
}

int main() {
    design_your_world(my_hard_word);
    return 0;
}
`;

const codeNextSnippet = `
#include <stdio.h>
void function_to_design_your_world(void (*hard_word)(void)) {
    int max_age = 80;
    for (int i = 0; i < max_age; i++) {
        hard_word();
    }
    printf("life");
}

void my_hard_word() {
    printf("Doing hard work\\n");
}

int main() {
    design_your_world(my_hard_word);
    return 0;
}
`;
</script>

<template>
  <div class="show">
    <div class="header" :class="{ 'body-show': bodyIfshow }">{{ titleReactive }}</div>
    <div class="body" v-if="bodyIfshow">
      <div class="show-card">
        <pre v-if="codePreShow">
          {{ codeSnippet }}
        </pre>
        <pre v-if="nextHookShow">{{ codeNextSnippet }}</pre>
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
    overflow: hidden;
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
      color: #041311;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
      border-radius: 10px;
      padding: 20px;
      font-size: 20px;
      line-height: 1.6;
      margin-bottom: 20px;
      font-family: 'Courier New', monospace;
      white-space: pre-wrap;
      overflow-y: auto;
    }
  }
}

</style>