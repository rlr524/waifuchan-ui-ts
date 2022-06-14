<script setup lang="ts">
// Using script setup is the Vue3 way of using the Composition API
import { ref, reactive } from "vue";
import searchApi from "../ts/search";

interface AppInfo {
  name: string;
  description: string;
}

const searchInput = ref("");
const results = ref(0);
const appInfo: AppInfo = reactive({
  name: "",
  description: "",
});

results.value = searchApi.getResultCount(searchInput.value);
</script>

<template>
  <div class="flex sm:w-1/2">
    <form action="" class="md:w-full">
      <div class="">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search"
          aria-label="Search"
          class="h-8 md:w-full"
        />
      </div>
    </form>
  </div>
  <div>
    <h1>{{ appInfo.name }}</h1>
    <h2>{{ appInfo.description }}</h2>
  </div>
</template>

<style scoped></style>
