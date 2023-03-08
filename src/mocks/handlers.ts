import { rest } from 'msw'

import { getBookList } from '@/mocks/api/books'

export const handlers = [rest.get('api/books', getBookList)]
