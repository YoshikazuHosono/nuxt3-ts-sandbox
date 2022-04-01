<template>
  <div>
    <h1>Index page</h1>
    <button @click="onclick">CLICK TEST</button>
    <button @click="callApi">CALL API TEST</button>
    <div>{{ data }}</div>
    <div>{{ user }}</div>
  </div>
</template>

<script setup lang="ts">
import { User } from '@/server/api/hello';

const data = useState<User>('data', () => {
  return {};
});

const user = ref<User>({});

const onclick = () => {
  alert('click');
};

const callApi = async () => {
  const { data: result } = await useFetch('/api/hello');
  data.value = result.value;
  user.value = result.value;
};
</script>
