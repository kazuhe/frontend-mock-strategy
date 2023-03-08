<script setup lang="ts">
import { ref } from 'vue'

type User = {
  id: number
  name: string
}

const users = ref<User[]>([])

const fetchUser = async () => {
  const res = await fetch('/users')
  users.value = await res.json()
}

fetchUser()
</script>

<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/vue.svg" />

    <ul>
      <li v-for="user in users" :key="user.id">id: {{ user.id }}, name: {{ user.name }}</li>
    </ul>
  </div>
</template>
