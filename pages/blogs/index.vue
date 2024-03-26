<template>
  <LayoutsNavbarTransparent />
  <h1 class="hidden">Blog about Summerbay and Bay of Lights Cambodia</h1>
  <div>
    <div class="mt-16 md:mt-20">
      <div class="text-3xl md:text-4xl text-center mb-9">
        {{
          (language === 'KH' && 'Blog ទាំងអស់របស់ពួកយើង') ||
          (language === 'CN' && '') ||
          'Check out our blog'
        }}
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-12 gap-12">
        <CardsBlog v-for="(b, index) in blogs" :index="index" :blog="b" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IResponse } from 'types/api';
import { IBlog } from 'types/blog';
const language = useLanguague();
const blogs = (
  await (<Promise<IResponse<IBlog[]>>>(
    useApi('items/blogs?filter[status]=published&sort=-date_created&limit=4', {
      method: 'GET',
    })
  ))
).data;
</script>

<style scoped></style>
