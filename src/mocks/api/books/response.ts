import type { Book } from '@/types/book'

type Response = { bookList: Book[]; totalCount: number }

export const response: Response = {
  bookList: [
    {
      isbn: '111-1-11-1111-1',
      name: 'Book01'
    },
    {
      isbn: '222-2-22-2222-2',
      name: 'Book02'
    }
  ],
  totalCount: 2
}
