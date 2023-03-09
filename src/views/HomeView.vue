<script setup lang="ts">
import { ref } from 'vue'

import type { Book } from '@/types/book'

const bookList = ref<Book[]>([])

const fetchBookList = async () => {
  const res = await fetch('/api/books')
  const body = await res.json()
  bookList.value = body.bookList
}
</script>

<template>
  <div class="container">
    <button type="button" @click="fetchBookList" data-testid="fetch-book-list-button">書籍一覧を取得する</button>
    <ul>
      <li v-for="book in bookList" :key="book.isbn">isbn: {{ book.isbn }}, name: {{ book.name }}</li>
    </ul>
  </div>
</template>
