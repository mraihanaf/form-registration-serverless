import { builder, Handler, HandlerResponse } from "@netlify/functions"
import { buildResponse } from "../utils/response"

const myHandler: Handler = async (event, context): Promise<HandlerResponse> => {
  return buildResponse(200, "Hello World!")
}

const handler = builder(myHandler)

export { handler }
