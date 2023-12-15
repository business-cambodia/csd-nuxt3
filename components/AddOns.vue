<template>
  <div class="relative w-full bg-grey p-3 rounded-2xl mt-6">
    <div class="flex absolute -top-3 left-1/2 -translate-x-1/2 justify-center">
      <div class="bg-gradient-orange rounded-full px-9 text-white">ADD-ONS</div>
    </div>
    <div class="text-xs sm:text-base p-3 xl:px-56">
      <div
        v-for="addon in addons"
        class="grid grid-cols-12 space-y-3 items-end"
      >
        <div class="col-span-6">• {{ addon?.name }}</div>
        <div class="col-span-2">${{ addon?.price }}</div>
        <div class="col-span-4">
          <select
          :id="'addonQty' + addon.id"
            @change="
            (e:any) => {
              const index = cart.addons.findIndex(
                (x:any) => x.id == addon.id
                );
                if (e?.target?.value == 0) 
                  return cart.addons.splice(index, 1);
                if (index > -1) {
                  cart.addons[index].quantity = e.target.value;
                } else {
                  addon.quantity = e.target.value;
                  cart.addons.push(addon);
                }

            }
          "
            class="bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-base w-28 sm:w-full rounded-lg p-0.5 px-3"
          >
            <option selected>- SELECT -</option>
            <option v-for="amount in addon?.amount" class="" :value="amount">
              {{ amount }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <!-- {{ addons }}ss -->
  </div>
</template>

<script setup lang="ts">
import { IResponse } from 'types/api';
const cart = useCart();
const addons = (
  await (<Promise<IResponse<any>>>(
    useApi('items/add_ons?filter[status]=published', { method: 'GET' })
  ))
)?.data;
</script>

<style scoped></style>
