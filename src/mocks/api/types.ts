import type {
  DefaultBodyType,
  PathParams,
  ResponseResolver as mswResponseResolver,
  RestContext,
  RestRequest
} from 'msw'

/**
 * MSW のハンドラーに登録する関数
 */
export type ResponseResolver = mswResponseResolver<RestRequest<never, PathParams<string>>, RestContext, DefaultBodyType>
