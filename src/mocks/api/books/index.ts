import type { ResponseResolver } from '@/mocks/api/types'

import { response } from './response'

/**
 * 書籍一覧を取得する
 */
export const getBookList: ResponseResolver = (_, res, ctx) => {
  return res(ctx.status(200), ctx.json(response))
}

/**
 * 書籍一覧を登録する
 */
export const postBook: ResponseResolver = (_, res, ctx) => {
  return res(ctx.status(201))
}
