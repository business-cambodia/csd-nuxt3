<template>
  <div
    class="flex flex-col md:flex-row justify-start md:space-x-6 items-center text-xs sm:text-base p-3"
  >
    <img class="w-52 md:w-80 rounded-xl" :src="addon_img" />
    <div>
      <div
        v-for="addon in addons"
        class="grid grid-cols-12 md:space-x-12 space-y-3 items-end"
      >
        <div class="col-span-6">• {{ addon?.name }}</div>
        <div class="col-span-2">
          <div
            class="relative line-through decoration-red-600"
            v-if="addon?.description?.indexOf('$') != -1"
          >
            {{ addon?.description }}
          </div>
        </div>
        <div class="col-span-2 font-medium font-sans">${{ addon?.price }}</div>
        <div class="col-span-2">
          <select
            :id="'addonQty' + addon.itemID"
            @change="
            (e:any) => {
              const index = cart.addons.findIndex(
                (x:any) => x.itemID == addon.itemID
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
            class="bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-base w-auto rounded-lg p-1"
          >
            <option selected :value="0">0</option>
            <option v-for="amount in 3" class="" :value="amount">
              {{ amount }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const cart = useCart();
defineProps<{
  addon_img: string;
  addons: any;
}>();
</script>

<style scoped></style>
