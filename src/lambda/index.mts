import { builder, BuilderHandler, HandlerResponse } from "@netlify/functions"
import { buildResponse, Method, Status } from "../utils/response"

const myHandler: BuilderHandler = async (
  event,
  context,
): Promise<HandlerResponse> => {
  console.log(context.getRemainingTimeInMillis())
  const response = buildResponse(Status.OK, "test", null, {
    method: [Method.GET, Method.POST],
  })
  return response
}

const handler = builder(myHandler)

export { handler }
