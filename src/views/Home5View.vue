<template>
  select Category id : {{ selectedIndex }}
  <table>
    <tr>
      <td style="vertical-align: top;">
        <categorie-items :categories v-model:selected-index="selectedIndex"></categorie-items>
      </td>
      <td>
        <product-info :products></product-info>
      </td>
    </tr>
  </table>
</template>
<script setup lang="ts">
import { ref, watchEffect } from "vue";
import CategorieItems from "@/components/CategorieItems.vue";
import ProductInfo from "@/components/ProductInfo.vue";
const categories = ref<Category[]>([]);
const products = ref<ProductItem[]>([]);
const selectedIndex = ref(0);

const loadCategoriesData = () => {
  fetch("https://api.escuelajs.co/api/v1/categories")
    .then(res => res.json())
    .then(json => {
      categories.value = json;
    });
}

const loadProductData = (id: number) => {
  fetch(`https://api.escuelajs.co/api/v1/products/?categoryId=${id}`)
    .then(res => res.json())
    .then(json => {
      products.value = json;
    });
}

watchEffect(() => {
  loadCategoriesData();
});

watchEffect(() => {
  loadProductData(selectedIndex.value);
});

</script>
