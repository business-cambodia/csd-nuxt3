<template>
  <div
    class="h-[400px] md:h-[550px] max-w-[400px] border border-gray-600 flex flex-col"
  >
    <div class="h-2/3 md:h-3/4 w-full">
      <img
        class="aspect-square h-full w-full object-cover bg-center bg-no-repeat bg-cover"
        :src="useImg(blog.thumbnail)"
        alt=""
      />
    </div>
    <div class="h-1/3 md:h-1/4 m-3 flex flex-col text-start">
      <div class="text-[10px] md:text-xs text-gray-500 uppercase">
        {{
          new Date(blog.date_created).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })
        }}
      </div>
      <div class="text-sm md:text-lg w-full line-clamp-2">
        {{
          (language === 'KH' && blog.title_kh) ||
          (language === 'CN' && blog.title_cn) ||
          blog.title
        }}
      </div>
      <div class="mt-auto">
        <hr />
        <div class="flex justify-end">
          <NuxtLink
            :to="`/blogs/${blog.slug}`"
            class="bg-primary mt-2 px-2 py-1 md:px-4 md:py-2 text-xs md:text-sm text-white"
          >
            {{
              (language === 'KH' && 'អានបន្ត') ||
              (language === 'CN' && '') ||
              'Read More'
            }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IBlog } from 'types/blog';
const language = useLanguague();
defineProps<{
  blog: IBlog;
}>();
</script>
<style scoped></style>
