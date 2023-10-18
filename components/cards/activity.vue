<template>
  <div
    id="act"
    :style="{
      backgroundImage: `linear-gradient(182.04deg, rgba(14, 76, 104, 0) 22.45%, rgba(14, 76, 104, 0.79) 80.59%, rgba(14, 76, 104, 0.79) 105.17%),url(${useImg(
        activity.thumbnail
      )})`,
    }"
    :class="`carousel__item object-cover bg-center bg-no-repeat bg-cover`"
  ></div>
</template>

<script setup lang="ts">
import { IActivity } from 'types/activity';
defineProps<{
  activity: IActivity;
}>();
</script>

<style scoped>
.carousel__item {
  min-height: 322px;
  width: 100%;
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 25px;
}
</style>
