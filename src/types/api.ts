import { HttpMethod } from '../utils/api'

type Schema<
  T extends Record<
    HttpMethod,
    { [url: string]: [object | undefined, object | undefined] }
  >,
> = T

export type Api = Schema<{
  // メソッド名: {
  //   url: [リクエストの型、レスポンスの型]
  // }
  GET: {
    'localhost:5000/redis': [undefined, { massage: string }]
  }
  POST: {
    'localhost:5000/docker': [{ command: string }, any]
  }
  PUT: {}
  DELETE: {}
}>