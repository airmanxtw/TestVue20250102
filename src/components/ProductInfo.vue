<template>
  <div v-for="product in products" :key="product.id">
    <div>
      <span>
        編號:{{ product.id }}
      </span>
    </div>
    <div>
      <span>
        標題:{{ product.title }}
      </span>
    </div>
    <div>
      <span>
        價格:{{ product.price }}
      </span>
    </div>
    <div>
      <span>
        描述:{{ product.description }}
      </span>
    </div>
    <div>
      <img style="width:80px;margin-right: 3px;" v-for="(image, i) in product.images" :key="i" :src="image" alt="" />
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{ products: ProductItem[] }>();
</script>
