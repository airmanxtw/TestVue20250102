<template>
  <table>
    <thead>
      <tr>
        <th>id</th>
        <th>title</th>
        <th>body</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="post in modelValue" :key="post.id">
        <td>{{ post.id }}</td>
        <td>{{ post.title }}</td>
        <td>{{ post.body }}</td>
      </tr>
      <tr>
        <td colspan="4">
          <!-- <my-pager :page-index="pageIndex" :page-size="pageSize" :total="total"
            @update:page-index="(i: number) => emit('update:pageIndex', i)"></my-pager> -->
          <slot></slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script setup lang="ts">
//import MyPager from '@/components/Home21/MyPager.vue';
defineProps<{
  modelValue: Post[],
  // pageIndex: number;
  // pageSize: number;
  // total: number;
}>();
// const emit = defineEmits<{
//   (e: 'update:pageIndex', value: number): void
// }>();
</script>
