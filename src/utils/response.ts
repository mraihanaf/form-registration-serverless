import { HandlerResponse } from "@netlify/functions"
import { Method, Options, Status } from "../types"

export function buildResponse(
  statusCode: Status,
  message: string,
  data: object | any[] | null = null,
  options: Options = { method: [Method.GET, Method.POST] },
): HandlerResponse {
  return {
    statusCode: statusCode,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Methods": options.method.join(","),
    },
    body: JSON.stringify({
      statusCode: statusCode,
      message: message,
      data: data,
    }),
  }
}
