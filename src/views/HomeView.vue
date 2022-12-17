<template>
  <div class="home">
    <h2 ref="appTitleRef">{{ counterData.title }}</h2>
    <div>
      <button @click="decreaseCounter(2)" class="btn">--</button>
      <button @click="decreaseCounter(1)" class="btn">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="increaseCounter(1)" class="btn">+</button>
      <button @click="increaseCounter(2)" class="btn">++</button>
    </div>
    <div>
      <input type="text" v-model="counterData.title" v-autofocus>
    </div>
    <p>This counter is {{oddOrEven}}</p>
  </div>
</template>
<script setup>
import {
  onMounted,
  onBeforeMount,
  onBeforeUnmount,
  onUnmounted, onActivated, onDeactivated, onBeforeUpdate, onUpdated,
  ref
} from 'vue';

import { useCounter } from "../use/useCounter";

const appTitleRef = ref(null);

onMounted(() => {
  console.log(appTitleRef.value.textContent);
});

const {
  counterData,
  oddOrEven,
  increaseCounter,
  decreaseCounter
} = useCounter();
/*const counterData = reactive({
  count: 0,
  title: 'My Counter'
});
watch(()=> counterData.count, (newCount) => {
  if(newCount >5 ) {
    alert('go up')
  }
});
function increaseCounter(amount)
{
  counterData.count += amount;
  nextTick(() => {
    appTitleRef.value.style.color = 'red'
  })
}
function decreaseCounter(amount)
{
  if(counterData.count > 0) {
    counterData.count -= amount;
  }
}
const oddOrEven = computed(() => {
        if(counterData.count % 2 === 0) {
          return 'even';
        } else {
          return 'odd'
        }
});*/

onBeforeMount(() => {
  console.log('onBeforeMount')
});
onMounted(() => {
  console.log('onMounted')
})
onBeforeUnmount(() => {
  console.log('onBeforeUnmount')
})
onUnmounted(() => {
  console.log('onUnmounted')
})

onActivated(() => {
  console.log('onActivated')
})

onDeactivated(() => {
  console.log('onDeactivated')
})

onBeforeUpdate(() => {
  console.log('onBeforeUpdate')
});

onUpdated(() => {
  console.log('onUpdated')
})

// directives

const vAutofocus = {
  mounted: (el) => {
    el.focus()
  }
}

</script>
<style>
.home {
  text-align: center;
  padding: 20px;
}
.btn, .counter {
  font-size: 40px;
  margin: 10px;
}
</style>
