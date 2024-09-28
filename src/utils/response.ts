import { HandlerResponse } from "@netlify/functions"
import { IOptions } from "../types"

export enum Status {
  OK = 200,
  Created = 202,
  NotFound = 404,
  BadRequest = 400,
  TooManyRequest = 429,
  InternalError = 500,
}

export enum Method {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  OPTIONS = "OPTIONS",
  HEAD = "HEAD",
}

export function buildResponse(
  statusCode: Status,
  message: string,
  data: object | any[] | null = null,
  options: IOptions = { method: [Method.GET, Method.POST] },
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
