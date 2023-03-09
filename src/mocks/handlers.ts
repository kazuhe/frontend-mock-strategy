import { rest } from 'msw'

import { getBookList, postBook } from '@/mocks/api/books'

export const handlers = [rest.get('api/books', getBookList), rest.post('api/books', postBook)]
