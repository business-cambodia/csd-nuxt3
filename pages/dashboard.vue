<template>
  <div class="bg-white w-screen p-0 m-0" v-if="isAuth">
    <div class="mx-4 my-4 lg:mx-12">
      <div class="text-4xl text-center text-primary mb-6">Users Dashboard</div>
      <!-- <div class="pb-4 bg-white flex justify-end">
        <label for="table-search" class="sr-only">Search</label>
        <div class="relative mt-1">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
          >
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            @change="searchByCode(searchValue)"
            v-model="searchValue"
            type="text"
            id="table-search"
            class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search by voucher code"
          />
        </div>
      </div> -->
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left">
          <thead
            class="text-xs select-none md:text-sm text-white uppercase bg-secondary"
          >
            <tr>
              <th scope="col" class="px-2 py-3">№</th>
              <th scope="col" class="px-2 py-3">First Name</th>
              <th scope="col" class="px-2 py-3">Last Name</th>
              <th scope="col" class="px-2 py-3">Phone Number</th>
              <th>Email</th>

              <th
                scope="col"
                class="px-2 py-3 cursor-pointer flex items-center"
                @click="sortDate"
              >
                Registered On
                <svg
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path
                    v-if="dateSort"
                    d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
                  />
                  <path
                    v-else
                    d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                  />
                </svg>
              </th>
              <th
                scope="col"
                class="px-2 py-3 cursor-pointer"
                @click="sortBooking"
              >
                <div class="flex items-center">
                  <div>Booking</div>
                  <svg
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path
                      v-if="smsSort"
                      d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
                    />
                    <path
                      v-else
                      d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                    />
                  </svg>
                </div>
              </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(user, index) in users.data"
              :key="index"
              :class="
                ((currentPage - 1) * 20 < index + 1 &&
                index + 1 < currentPage * 20 + 1
                  ? ''
                  : 'hidden') + ' border-b hover:bg-gray-200 md:text-base'
              "
            >
              <td class="px-2 py-4">{{ index + 1 }}</td>
              <td class="px-2 py-4">{{ user?.firstName }}</td>
              <td class="px-2 py-4">{{ user?.lastName }}</td>
              <td class="px-2 py-4">
                <span class="text-sm">(0)</span>
                {{
                  user?.phone_number?.substr(0, 3) +
                  ' ' +
                  user?.phone_number?.substr(3, 3) +
                  ' ' +
                  user?.phone_number?.substr(6, 4)
                }}
              </td>
              <td class="px-2 py-4">{{ user?.email }}</td>
              <td class="px-2 py-4">
                {{ user?.created_at.split('T')[0] }}
              </td>
              <td class="px-2 py-4">
                {{ user.bookings.length }}
              </td>
              <td>
                <button
                  @click="handleOpenUserInfo(user)"
                  class="text-sm text-secondary"
                >
                  More
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="md:flex justify-between p-3 flex-wrap hidden">
        <p>Total Users: {{ users?.data?.length }}</p>
        <vue-awesome-paginate
          :total-items="users?.data?.length"
          :items-per-page="20"
          :max-pages-shown="10"
          v-model="currentPage"
        />
      </div>
      <div class="flex justify-between p-3 flex-col flex-wrap md:hidden">
        <p>Total Users: {{ users?.data?.length }}</p>
        <vue-awesome-paginate
          :total-items="users?.data?.length"
          :items-per-page="20"
          :max-pages-shown="2"
          v-model="currentPage"
        />
      </div>
    </div>
  </div>
  <button
    id="btn-user-info"
    data-modal-target="user-info-modal"
    data-modal-toggle="user-info-modal"
    class="hidden text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    type="button"
  ></button>
  <ModalsUserInfo :userProp="userProp" />
</template>

<script setup lang="ts">
definePageMeta({
  //disable a default layout
  layout: false,
});
import { initFlowbite } from 'flowbite';
import { checkAuth } from '../auth';
const isAuth = ref(false);
const router = useRouter();
const userProp = ref({});
onMounted(async () => {
  initFlowbite();
  await checkAuth((isAuthenticated: any) => {
    if (!isAuthenticated) router.push({ path: '/login' });
    isAuth.value = isAuthenticated;
  });
});
const users: any = ref(
  await useFetch('https://api.bayoflights-entertainment.com/users')
);
const allUsers: any = ref(
  await useFetch('https://api.bayoflights-entertainment.com/users')
);
const currentPage = ref(1);
const dateSort = ref(false);
const voucherSort = ref(false);
const statusSort = ref(false);
const smsSort = ref(false);
const searchValue = ref('');
const sortDate = () => {
  dateSort.value = !dateSort.value;
  users.value.data.sort((a: any, b: any) => {
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);
    if (dateSort.value) {
      return dateA.getTime() - dateB.getTime();
    } else {
      return dateB.getTime() - dateA.getTime();
    }
  });
  currentPage.value = 1;
};

const sortBooking = () => {
  smsSort.value = !smsSort.value;
  users.value.data.sort((a: any, b: any) => {
    if (smsSort.value) {
      return b.bookings.length - a.bookings.length;
    } else {
      return a.bookings.length - b.bookings.length;
    }
  });
  currentPage.value = 1;
};

const searchByCode = (searchVal: string) => {
  users.value.data = ref(
    allUsers.value.data.filter((obj: any) =>
      obj.voucher?.code.includes(searchVal.toUpperCase())
    )
  );
};

const handleOpenUserInfo = async (id: string) => {
  userProp.value = id;
  document.getElementById('btn-user-info')?.click();
  // changeStatus(id, !status);
};
</script>

<style>
.pagination-container {
  display: grid;
  column-gap: 10px;
}
.paginate-buttons {
  font-size: 9px;
  height: 30px;
  width: 30px;
  border-radius: 20px;
  cursor: pointer;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(217, 217, 217);
  color: black;
}
.paginate-buttons:hover {
  background-color: #d8d8d8;
}
.active-page {
  background-color: #3498db;
  border: 1px solid #3498db;
  color: white;
}
.active-page:hover {
  background-color: #2988c8;
}
</style>
