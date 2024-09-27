import { HandlerResponse } from "@netlify/functions"
import { Method, Options } from "../types"

export function buildResponse(
  statusCode: HandlerResponse["statusCode"],
  message: string,
  data: object | any[] | null = null,
  options: Options = { method: ["GET", "POST"] },
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
