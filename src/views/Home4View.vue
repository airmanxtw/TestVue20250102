<template>
  <div>
    <div>
      <RouterLink to="/home5">goto home5</RouterLink>
    </div>
    <h1>{{ oldDesc }}</h1>
    <div>
      <video ref="videoplayer" width="350" muted>
        <source src="https://www.sample-videos.com/video321/mp4/720/big_buck_bunny_720p_30mb.mp4" type="video/mp4" />
      </video>
    </div>
    <div>
      <button @click="play = true">play</button>
      <button @click="play = false">pause</button>
    </div>
    <div>
      <button @click="productId--">上一筆</button>
      <button @click="productId++">下一筆</button>
    </div>
    <div>
      <span>編號:</span><span>{{ product?.id }}</span>
    </div>
    <div class="hvr-bounce-to-right">
      <span>標題:</span><span>{{ product?.title }}</span>
    </div>
    <div>
      <span>價格:</span><span>{{ product?.price }}</span>
    </div>
    <div>
      <span>描述:</span><span>{{ product?.description }}</span>
    </div>
    <div>
      <span>分類:</span><span>{{ product?.category }}</span>
    </div>
    <div class="card-actions">
      <span>圖片:
      </span><img style="width:200px" class="timg" :src="product?.image" alt="" />
    </div>
    <div>
      <span>評分:</span><span>{{ product?.rating.rate }} - </span><span>{{ rateDesc }}</span>
    </div>
    <div>
      <span>評分人數:</span><span>{{ product?.rating.count }}</span>
    </div>
    <div>

    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, computed, watch, watchEffect, useTemplateRef, onUnmounted } from 'vue';

import "@/assets/bouncetoRight.css";

import { useFetch } from "@/composables/useFetch";
const { getData, getDataByPromise, getDataByCallBack } = useFetch();

const product = ref<Product | null>(null);
const productId = ref(1);
const play = ref(true);
const tea = ref<Tea>({ name: 'green', age: 100 });
const vedioplayer = useTemplateRef('videoplayer');


const oldDesc = computed(() => {
  if (tea.value.age > 80) {
    return "人瑞";
  } else {
    return "年輕人";
  }
})

// watch(() => tea.value.age, (newVal) => {
//   if (newVal > 80) {
//     oldDesc.value = "人瑞";
//   } else {
//     oldDesc.value = "年輕人";
//   }
// }, { immediate: true })


// const play = () => {
//   document.querySelector('video')?.play();
// }

// const pause = () => {
//   document.querySelector('video')?.pause();
// }


const loadData = async (pid: number) => {
  //product.value = await getData(`https://fakestoreapi.com/products/${pid}`);

  // getDataByPromise(`https://fakestoreapi.com/products/${pid}`)
  //   .then((data) => {
  //     product.value = data;
  //   })

  // getDataByCallBack(`https://fakestoreapi.com/products/${pid}`, (data) => {
  //   product.value = data;
  // })



  // fetch(`https://fakestoreapi.com/products/${pid}`)
  //   .then(res => res.json())
  //   .then(json => {
  //     product.value = json;
  //   });
}


/* watch(() => productId.value, (newVal) => {
  if (newVal > 0)
    loadData(newVal)
}, { immediate: true }) */





// watch(()=>tea.value, (newVal) => {
//   if (newVal) {
//     document.querySelector('video')?.play();
//   } else {
//     document.querySelector('video')?.pause();
//   }
// }, { immediate: true, deep: true })

watch([productId, play], () => {
  if (play.value) {
    vedioplayer.value?.play();
  } else {
    vedioplayer.value?.pause();
  }
  loadData(productId.value);
  console.log('watch');
}, { immediate: true })

const timeid = setInterval(() => {
  console.log('setInterval');
}, 2000);

onUnmounted(() => {
  clearInterval(timeid);
})


// watchEffect(() => {
//   if (play.value) {
//     vedioplayer.value?.play();
//   } else {
//     vedioplayer.value?.pause();
//   }
//   loadData(productId.value);
//   console.log('watchEffect');
// })















const rateDesc = computed(() => {
  if (product.value) {
    return product.value.rating.rate > 4 ? '推薦' : '不推薦';
  }
  return '';
})



</script>

<style scoped>
.card-actions {
  display: block;
  overflow: hidden;
}

img {
  transform: scale3d(1, 1, 1);
  transition: transform 1s ease-in-out;
}

img:hover,
img:focus {
  transform: scale3d(1.2, 1.2, 1);
  transition: transform 5s ease-in-out;
}
</style>
