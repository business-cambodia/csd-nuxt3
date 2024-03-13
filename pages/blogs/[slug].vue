<template>
  <LayoutsNavbarTransparent />
  <div class="mt-16 lg:mt-24">
    <div class="lg:grid lg:grid-cols-12">
      <div class="lg:col-span-1"></div>
      <div class="lg:col-span-6 mx-3 lg:mx-0">
        <div class="mb-3">
          <p class="text-2xl lg:text-4xl">
            {{
              (language === 'KH' && blog.title_kh) ||
              (language === 'CN' && blog.title_cn) ||
              blog.title
            }}
          </p>
          <div class="flex text-xs lg:text-sm mt-3 text-gray-600 space-x-3">
            <p class="uppercase">
              {{
                new Date(blog.date_created).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })
              }}
            </p>
            <p>•</p>
            <p class="bg-grey px-3 rounded-sm">1 mins read</p>
          </div>
        </div>
        <img
          class="aspect-square object-cover bg-center bg-no-repeat bg-cover"
          :src="useImg(blog.thumbnail)"
          alt=""
        />
        <div
          v-html="
            (language === 'KH' && blog.description_kh) ||
            (language === 'CN' && blog.description_cn) ||
            blog.description
          "
          class="text-sm lg:text-base my-6"
        ></div>
      </div>
      <div class="lg:col-span-4 mx-6 lg:mt-12">
        <div class="text-2xl text-center mb-6">
          {{
            (language === 'KH' && 'Blog ថ្មីៗ') ||
            (language === 'CN' && '') ||
            'Recent Blogs'
          }}
        </div>
        <hr class="text-black h-0.5 bg-gray-800 my-3" />
        <NuxtLink
          class="grid grid-cols-6 items-center my-6 space-x-3 hover:bordesr rounded-xl"
          v-for="(b, index) in blogs"
          :index="index"
          :to="'/blogs/' + b.slug"
        >
          <div class="col-span-4 lg:col-span-4">
            <p
              class="text-sm lg:text-base font-semibold font-sans line-clamp-3"
            >
              {{
                (language === 'KH' && b.title_kh) ||
                (language === 'CN' && b.title_cn) ||
                b.title
              }}
            </p>
            <p class="text-xs mt-1 uppercase text-gray-500">
              {{
                new Date(blog.date_created).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })
              }}
            </p>
          </div>
          <img
            class="col-span-2 lg:col-span-2 aspect-square object-cover bg-center bg-no-repeat bg-cover"
            :src="useImg(b.thumbnail)"
            alt=""
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IResponse } from 'types/api';
import { IBlog } from 'types/blog';
const language = useLanguague();
const route = useRoute();
const blog = (
  await (<Promise<IResponse<IBlog[]>>>(
    useApi('items/blogs?filter[slug]=' + route.params.slug, {
      method: 'GET',
    })
  ))
).data[0];
const blogs = (
  await (<Promise<IResponse<IBlog[]>>>(
    useApi('items/blogs?filter[status]=published&sort=-date_created&limit=5', {
      method: 'GET',
    })
  ))
).data;
</script>

<style scoped></style>
