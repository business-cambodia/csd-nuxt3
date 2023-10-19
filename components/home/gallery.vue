<template>
  <div class="my-6 mx-4">
    <div
      class="text-center text-gradient-green-blue font-bold text-xl md:text-2xl"
    >
      Galleries
    </div>
    <div
      class="flex justify-center space-x-3 text-sm md:text-lg my-3 cursor-pointer"
    >
      <div
        @click="galleries = title"
        :class="galleries.length > 1 && 'text-gradient-green-blue font-bold'"
      >
        All
      </div>
      <div
        @click="handleClick(item.name)"
        :class="
          item.name == galleries[0].name &&
          galleries.length == 1 &&
          'text-gradient-green-blue font-bold'
        "
        v-for="(item, index) in title"
        :key="index"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div
        v-if="galleries.length > 1"
        v-for="(gallery, index) in galleries"
        :key="index"
      >
        <CardsGallery :image="gallery.images[0]" />
      </div>
      <div v-else v-for="(gallery, index) in galleries[0]?.images">
        <CardsGallery :image="gallery" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IGallery } from 'types/gallery';
import { IResponse } from 'types/api';

const galleries = ref(
  (
    await (<Promise<IResponse<IGallery[]>>>(
      useApi(
        'items/galleries?filter[status]=published&fields=*,images.directus_files_id',
        { method: 'GET' }
      )
    ))
  ).data
);

const title = galleries.value;

const handleClick = async (name: string) => {
  const gallery: IGallery[] = (
    await (<Promise<IResponse<IGallery[]>>>(
      useApi(
        `items/galleries?filter[name]=${name}&fields=*,images.directus_files_id`,
        { method: 'GET' }
      )
    ))
  ).data;

  galleries.value = gallery;
};
</script>

<style scoped></style>
